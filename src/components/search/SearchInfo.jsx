import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { multiSearch } from '../../redux/reducers/searchSlice';
import MoviePreview from '../UI/PreviewReusable/MoviePreview';
import PersonPreview from '../UI/PreviewReusable/PersonPreview';
import TvShowPreview from '../UI/PreviewReusable/TvShowPreview';
import SearchResultPanel from './SearchResultPanel'

function SearchInfo() {
  const location = useLocation()
  const [searchRequest, setSearchRequest] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || ''
  const dispatch = useDispatch()
  const searchResult = useSelector(state => state.search.searchResult)
  const arrToRender = {
    type: '',
    arrElements: []
  }
  //console.log(location)

  if (location.pathname === '/search' && searchResult.multi) {
    arrToRender.type = 'multi'
    arrToRender.arrElements = searchResult.multi.results
  } else if (location.pathname === '/search/movie' && searchResult.movies) {
    arrToRender.type = 'movies'
    arrToRender.arrElements = searchResult.movies.results
  } else if (location.pathname === '/search/tv' && searchResult.tvShow) {
    arrToRender.type = 'tv'
    arrToRender.arrElements = searchResult.tvShow.results
  } else if (location.pathname === '/search/people' && searchResult.people) {
    arrToRender.type = 'people'
    arrToRender.arrElements = searchResult.people.results
  }

  useEffect(() => {
    // Проверяем, если ссылка была открыта сразу с параметрами, то делаем запрос по этим параментрам
    // Если ссылка пустая, проверяе прешл ли запрос с поисковой строки, устанавливаем запрос в параметры и отправляется запрос

    if (searchQuery) {
      dispatch(multiSearch(searchQuery))
    } else if (location.state && 'searchRequest' in location.state) {
      setSearchParams({ query: location.state.searchRequest })
    }

  }, [location.search])

  return (
    <div className='searchMainCOnteiner conteiner'>

      <div className='searchResult'>
        <SearchResultPanel />
        <div className='resultContent'>
          {(arrToRender.type === 'multi' && arrToRender.arrElements) &&
            arrToRender.arrElements.map(element => {
              if (element.media_type === 'movie') {
                return <MoviePreview key={element.id} movie={element} size94and141 discriptions />
              } else if (element.media_type === 'tv') {
                return <TvShowPreview key={element.id} tvObj={element} size94and141 discriptions />
              } else return <PersonPreview key={element.id} personInfo={element} size90and90 />
            })
          }
          {(arrToRender.type === 'movies' && arrToRender.arrElements) &&
            arrToRender.arrElements.map(element => <MoviePreview key={element.id} movie={element} size94and141 discriptions />)
          }
          {(arrToRender.type === 'tv' && arrToRender.arrElements) &&
            arrToRender.arrElements.map(element => <TvShowPreview key={element.id} tvObj={element} size94and141 discriptions />)
          }
          {(arrToRender.type === 'people' && arrToRender.arrElements) &&
            arrToRender.arrElements.map(element => <PersonPreview key={element.id} personInfo={element} size90and90 />)
          }
          {!arrToRender.arrElements.length && <p>There are no movies that matched your query.</p>}
        </div>
      </div>
    </div>
  )
}

export default SearchInfo