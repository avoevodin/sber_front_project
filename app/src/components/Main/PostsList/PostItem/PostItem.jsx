import { useContext } from "react";
import { MainContext } from "../../../../contexts/MainContext";
import { BsFillTrashFill } from "react-icons/bs";
import CommentsList from "../../CommentsList/CommentsList";
import { CommentsContext } from "../../../../contexts/CommentsContext";

const PostItem = ({ id, title, hashtag, image, text, date, commentsExpanded, index }) => {
    const { deletePost, collapseComments } = useContext(MainContext);
    const { deleteCommentsByPost } = useContext(CommentsContext)

    const deleteHandler = () => {
        deleteCommentsByPost(id)
        deletePost(id)
    }

    const collapseCommentsHandler = () => collapseComments(id)
    return (
        <li className="list-group-item">
            <div className="my-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={image}
                            className="img-fluid rounded-start"
                            alt="Empty link"
                        />
                    </div>
                    <div className="d-flex flex-column col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <hr />
                            <div className="card-text multiline-text">{text}</div>
                            <p className="card-text">
                                <small className="text-muted">{hashtag}</small>
                            </p>
                            <hr />
                        </div>
                        <div className="d-flex justify-content-end align-items-center mx-1">
                            <div className="d-flex flex-column align-items-end mx-2">
                                <p className="card-text">
                                    <small className="fw-bolder text-muted">{date}</small>
                                </p>
                                <button
                                    onClick={deleteHandler}
                                    type="button"
                                    className="btn btn-link link-danger btn-lg"
                                >
                                    <BsFillTrashFill />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center container my-2">
                    <p>
                        <a
                            className="btn btn-link text-muted"
                            data-bs-toggle="collapse"
                            href={`#multiCollapseComments${index}`}
                            role="button"
                            aria-expanded={commentsExpanded}
                            aria-controls="multiCollapseComments"
                            onClick={collapseCommentsHandler}
                        >
                            {commentsExpanded ? "Hide comments" : "Show comments"}
                        </a>
                    </p>
                    <div className="row">
                        <div className="col">
                            <div className="collapse multi-collapse" id={`multiCollapseComments${index}`}>
                                <div>
                                    <CommentsList key={id} postId={id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </li >
    );
};

export default PostItem;
