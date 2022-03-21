import "./App.css";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div >
      <Footer />
    </BrowserRouter>
  );
}

export default App;
