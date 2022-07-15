import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useUpdateTitle } from '../hooks/useUpdateTitle';
import { clearState, movieSearch, multiSearch, peopleSearch, tvSearch } from '../redux/reducers/searchSlice';
import Loader from '../components/UI/loader/Loader';
import SearchInfo from '../components/search/SearchInfo';

function SearchPage() {
  const { type } = useParams()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = Object.fromEntries([...searchParams]) || ''
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.search)

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
    if (searchQuery?.query) {
      dispatch(multiSearch(searchQuery))
    } else if (location.state?.searchRequest) {
      setSearchParams({ query: location.state.searchRequest, page: location.state.page })
    }
  }, [location.state])

  useUpdateTitle(`${location.pathname}${location.search}`, [searchQuery.query])

  useEffect(() => {
    return () => dispatch(clearState())
  },[])

  return (
    <>
      {isLoading && <Loader/>}
      <SearchInfo />
    </>
  )
}

export default SearchPage