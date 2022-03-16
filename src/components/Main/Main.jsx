import MainContextProvider from "../../contexts/MainContext"
import MainForm from "./MainForm/MainForm"
import MainPosts from "./MainPosts/MainPosts"

const Main = () => {

    return (
        <MainContextProvider>
            <div className="container d-flex">
                <div className="container col-4">
                    <MainForm />
                </div>
                <div className="d-flex">
                    <div className="vr"></div>
                </div>
                <div className="container col-8">
                    <MainPosts />
                </div>
            </div >
        </MainContextProvider >
    )
}

export default Main
