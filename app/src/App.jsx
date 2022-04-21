import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import PostDetailWrapper from './components/Main/PostDetailWrapper/PostDetailWrapper'
import Home from './components/Home/Home'
import SignIn from './components/Auth/SignIn/SignIn'

const App = () => (
  <BrowserRouter>
    <Header />
    <div className="container py-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/">
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="/posts" element={<Main />} />
        <Route path="/posts/:postId" element={<PostDetailWrapper />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
)

export default App
