import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import MoviePreview from '../UI/PreviewReusable/MoviePreview';
import PersonPreview from '../UI/PreviewReusable/PersonPreview';
import TvShowPreview from '../UI/PreviewReusable/TvShowPreview';
import SearchResultPanel from './SearchResultPanel';

function SearchInfo() {
  const { type } = useParams()
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = Object.fromEntries([...searchParams]) || ''
  const { searchResult } = useSelector(state => state.search)

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

  return (
    <section className='searchMainCOnteiner conteiner'>
      <div className='searchResult'>
        <SearchResultPanel />
        <div className='resultContent'>
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
        {pages.totalPages > 1 &&
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