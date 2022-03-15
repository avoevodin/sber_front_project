const MainForm = () => {
    return (
        <form className="d-flex flex-column justify-content-center">
            <div className="d-flex mb-2">
                <div className="d-flex flex-column justify-content-between me-2 mb-2">
                    <div className="mb-2">
                        <input type="text" placeholder="title" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="image link" className="form-control" />
                    </div>
                    <div>
                        <input type="text" placeholder="hashtag" className="form-control" />
                    </div>
                </div>
                <div className="mb-2">
                    <div>
                        <textarea type="text" placeholder="text" className="form-control" rows={5}></textarea>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary col-6">Post</button>
            </div>
        </form >
    )
}

export default MainForm
