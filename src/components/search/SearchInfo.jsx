import { Pagination } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useUpdateTitle } from '../../hooks/useUpdateTitle';
import { movieSearch, multiSearch, peopleSearch, tvSearch } from '../../redux/reducers/searchSlice';
import Loader from '../UI/loader/Loader';
import MoviePreview from '../UI/PreviewReusable/MoviePreview';
import PersonPreview from '../UI/PreviewReusable/PersonPreview';
import TvShowPreview from '../UI/PreviewReusable/TvShowPreview';
import SearchResultPanel from './SearchResultPanel';

function SearchInfo() {
  const { type } = useParams()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = Object.fromEntries([...searchParams]) || ''
  const dispatch = useDispatch()
  const searchState = useSelector(state => state.search)
  const {searchResult, isLoading} = searchState
  const objToRender = {
    multi: searchResult.multi,
    movies: searchResult.movies,
    tv: searchResult.tvShow,
    people: searchResult.people
  }
  const pages = {
    currentPage: objToRender[type]?.page,
    totalPages: objToRender[type]?.total_pages,
  }

  const getCardToRender = (mediaFile) => {
    // функция выбора карточки для рендера
    if ((!type && mediaFile.media_type === 'movie') || type === 'movies')
      return <MoviePreview key={mediaFile.id} movie={mediaFile} sizeImg='size94and141' discriptions />

    if ((!type && mediaFile.media_type === 'tv') || type === 'tv')
      return <TvShowPreview key={mediaFile.id} tvObj={mediaFile} sizeImg='size94and141' discriptions />

    if ((!type && mediaFile.media_type === 'person') || type === 'people')
      return <PersonPreview key={mediaFile.id} personInfo={mediaFile} sizeImg='size90and90' />
  }

  const updatePage = (page) => {
    setSearchParams({ query: searchQuery.query, page: page })
  }

  useEffect(() => {
    // эффект для запросов при смене страницы или типа запроса
    const params = searchQuery

    if (type === 'movies') {
      dispatch(movieSearch(params))
    }
    if (type === 'tv') {
      dispatch(tvSearch(params))
    }
    if (type === 'people') {
      dispatch(peopleSearch(params))
    }

    window.scrollTo(0, 0)
  }, [searchQuery.page, type])

  useEffect(() => {
    // Проверяем, если ссылка была открыта сразу с параметрами, то делаем запрос по этим параментрам
    // Если ссылка пустая, проверяе прешл ли запрос с поисковой строки, устанавливаем запрос в параметры и отправляется запрос
    if ('query' in searchQuery) {
      dispatch(multiSearch(searchQuery))
    } else if (location.state && 'searchRequest' in location.state) {
      setSearchParams({ query: location.state.searchRequest, page: location.state.page })
    }
  }, [location.state])

  useUpdateTitle(`search/${searchQuery.query}`, [searchQuery.query])

  return (
    <section className='searchMainCOnteiner conteiner'>
      <div className='searchResult'>
        <SearchResultPanel />
        <div className='resultContent'>
          {isLoading && <Loader/>}
          {(!type && !!objToRender.multi?.results.length) &&
            objToRender.multi.results.map(mediaFile => getCardToRender(mediaFile))
          }
          {(type && !!objToRender[type]?.results.length) &&
            objToRender[type].results.map(mediaFile => getCardToRender(mediaFile))
          }
          {((type && !objToRender[type]?.results.length) || (!objToRender.multi?.results.length)) &&
            <p>There are no movies that matched your query.</p>
          }
        </div>
      </div>
      <div className='paginatePages'>
        {location.pathname !== '/search' &&
          <Pagination
            count={pages.totalPages}
            page={pages.currentPage || 1}
            onChange={(_, num) => updatePage(num)}
          />
        }
      </div>
    </section>
  )
}

export default SearchInfo