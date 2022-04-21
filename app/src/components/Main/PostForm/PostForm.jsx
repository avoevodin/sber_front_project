import { useRef, useEffect, useState } from 'react'

const PostForm = ({
  onSubmit, inputs = {
    title: '',
    image: '',
    hashtag: '',
    text: '',
  },
}) => {
  const formRef = useRef(null)
  const [buttonText, setButtonText] = useState('Add post')

  useEffect(() => {
    if (inputs.title) {
      setButtonText('Change post')
      formRef.current.elements.title.value = inputs.title
      formRef.current.elements.image.value = inputs.image
      formRef.current.elements.hashtag.value = inputs.hashtag
      formRef.current.elements.text.value = inputs.text
    }
  }, [])

  return (
    <form ref={formRef} onSubmit={onSubmit} className="d-flex flex-column justify-content-center">
      <div className="d-flex mb-2">
        <div className="d-flex flex-column justify-content-between me-2 mb-2">
          <div className="mb-2">
            <input
              name="title"
              type="text"
              placeholder="title"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              name="image"
              type="text"
              placeholder="image link"
              className="form-control"
            />
          </div>
          <div>
            <input
              name="hashtag"
              type="text"
              placeholder="hashtag"
              className="form-control"
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
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary col-6">
          {buttonText}
        </button>
      </div>
    </form>
  )
}

export default PostForm
