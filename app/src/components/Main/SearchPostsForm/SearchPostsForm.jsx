import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../../redux/actionCreators/filterActionCreators'

function SearchPostsForm() {
  const [searchInput, setSearchInput] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const isMount = useRef(false)

  useEffect(() => {
    const parsedQuery = JSON.parse(searchParams.get('filter'))
    if (parsedQuery && parsedQuery.title) {
      setSearchInput(parsedQuery.title)
    }
  }, [])

  useEffect(() => {
    if (isMount.current) {
      const filter = {
        title: searchInput,
      }
      const prepareFilterForURL = encodeURIComponent(JSON.stringify(filter))
      const query = `?filter=${prepareFilterForURL}`
      setSearchParams(query)
      dispatch(setFilter(query))
    } else {
      isMount.current = true
    }
  }, [searchInput])

  const changeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitHandler} className="my-5">
      <input
        value={searchInput}
        onChange={changeHandler}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  )
}

export default SearchPostsForm
