const CommentItem = ({ text, date }) => {
    return (
        <li className="list-group-item">
            <div className="my-2">
                <div className="card-header">
                    {date}
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
