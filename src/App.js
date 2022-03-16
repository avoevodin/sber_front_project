import "./App.css";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="container py-5">
      <Header />
      <hr />
      <Main />
      <hr />
      <Footer />
    </div >
  );
}

export default App;
