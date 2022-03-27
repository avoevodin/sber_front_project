import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMainContext } from '../../../contexts/MainContext'

const SearchPostsForm = () => {
  const [searchInput, setSearchInput] = useState('')
  const { updatePosts, getSearchParams } = useMainContext()
  const [, setSearchParams] = useSearchParams()

  const isMount = useRef(false)

  useEffect(() => {
    const currentSearchParams = getSearchParams()
    if (currentSearchParams) {
      setSearchInput(currentSearchParams)
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

      fetch(`http://localhost:3000/api/v1/posts/${query}`)
        .then((response) => response.json())
        .then((dataFromServer) => updatePosts(dataFromServer))
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
