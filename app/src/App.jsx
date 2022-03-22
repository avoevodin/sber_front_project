import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import PostDetail from './components/Main/PostDetail/PostDetail'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
