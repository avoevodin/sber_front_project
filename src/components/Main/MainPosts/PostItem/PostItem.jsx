import { useContext } from "react"
import { MainContext } from "../../../../contexts/MainContext"
import { BsFillTrashFill } from "react-icons/bs"

const PostItem = ({ id, title, hashtag, image, text, date }) => {
    const { deletePost } = useContext(MainContext)
    console.log(deletePost)
    const deleteHandler = () => deletePost(id)

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="Empty link" />
                </div>
                <div className="d-flex flex-column col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">{hashtag}</small></p>
                    </div>
                    <div className="d-flex justify-content-end align-items-center mx-1">
                        <div className="d-flex flex-column align-items-end mx-2 my-2">
                            <p className="card-text"><small className="fw-bolder text-muted">{date}</small></p>
                            <button onClick={deleteHandler} type="button" className="btn btn-danger btn-sm">
                                <BsFillTrashFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem
