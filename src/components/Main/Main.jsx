import MainForm from "./MainForm/MainForm"
import MainPosts from "./MainPosts/MainPosts"

const Main = () => {

    return (
        <div className="container d-flex">
            <div className="container col-4">
                <MainForm />
            </div>
            <div class="d-flex">
                <div class="vr"></div>
            </div>
            <div className="container col-8">
                <MainPosts />
            </div>
        </div >
    )
}

export default Main
