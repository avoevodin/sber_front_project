import MainContextProvider from '../../contexts/MainContext'
import CreatePostForm from './CreatePostForm/CreatePostForm'
import PostsList from './PostsList/PostsList'

function Main() {
  return (
    <MainContextProvider>
      <div className="container d-flex">
        <div className="container col-4">
          <CreatePostForm />
        </div>
        <div className="d-flex">
          <div className="vr" />
        </div>
        <div className="container col-8">
          <PostsList />
        </div>
      </div>
    </MainContextProvider>
  )
}

export default Main
