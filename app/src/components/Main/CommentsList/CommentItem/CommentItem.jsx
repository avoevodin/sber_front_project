import { useContext } from "react"
import { CommentsContext } from "../../../../contexts/CommentsContext"
import { TiTrash } from "react-icons/ti";

const CommentItem = ({ text, date, id }) => {
    const { deleteComment } = useContext(CommentsContext)

    const deleteCommentHandler = () => {
        deleteComment(id)
    }
    return (
        <li className="list-group-item">
            <div>
                <div className="d-flex justify-content-between align-items-center card-header">
                    <div>
                        {date}
                    </div>
                    <button
                        onClick={deleteCommentHandler}
                        type="button"
                        className="btn btn-link link-danger"
                    >
                        <TiTrash />
                    </button>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <div className="multiline-text">{text}</div>
                    </blockquote>
                </div>
            </div>
        </li>
    )
}

export default CommentItem
