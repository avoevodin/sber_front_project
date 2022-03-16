import { useState } from "react";

const initInputs = {
    title: "",
    image: "",
    hashtag: "",
    text: "",
};

const MainForm = () => {
    const [inputs, setInputs] = useState(initInputs);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    console.log({ inputs })

    return (
        <form className="d-flex flex-column justify-content-center">
            <div className="d-flex mb-2">
                <div className="d-flex flex-column justify-content-between me-2 mb-2">
                    <div className="mb-2">
                        <input
                            name="title"
                            type="text"
                            placeholder="title"
                            className="form-control"
                            value={inputs.title}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            name="image"
                            type="text"
                            placeholder="image link"
                            className="form-control"
                            value={inputs.image}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            name="hashtag"
                            type="text"
                            placeholder="hashtag"
                            className="form-control"
                            value={inputs.hashtag}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <div>
                        <textarea
                            name="text"
                            type="text"
                            placeholder="text"
                            className="form-control"
                            rows={5}
                            value={inputs.text}
                            onChange={changeHandler}
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary col-6">
                    Post
                </button>
            </div>
        </form>
    );
};

export default MainForm;
