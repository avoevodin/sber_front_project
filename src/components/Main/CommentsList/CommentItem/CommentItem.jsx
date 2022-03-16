const CommentItem = ({ postId, text, date, index }) => {
    return (
        <li className="list-group-item">
            <div className="my-2">
                <div className="card-header">
                    {date}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{text}</p>
                    </blockquote>
                </div>
            </div>
        </li>
    )
}

export default CommentItem
