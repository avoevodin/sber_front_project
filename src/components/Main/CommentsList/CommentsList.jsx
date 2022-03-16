import { useContext } from "react";
import { CommentsContext } from "../../../contexts/CommentsContext";
import CommentItem from "./CommentItem/CommentItem";

const CommentsList = (postId) => {
    const { comments } = useContext(CommentsContext);
    return (
        <ul className="list-group list-group-flush">
            {comments.filter((comment) => comment.postId === postId).map((comment, index) => (
                <CommentItem
                    key={comment.id}
                    postId={postId}
                    text={comment.text}
                    date={comment.date}
                    index={index}
                />
            ))}
        </ul>
    );
}

export default CommentsList
