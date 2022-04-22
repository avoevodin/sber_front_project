const SignUp = () => (
  <div className="d-flex justify-content-center">
    <form className="d-flex flex-column">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
        <div id="emailHelp" className="form-text">
          We will never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Link to avatar"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create an account
      </button>
    </form>
  </div>
)

export default SignUp
