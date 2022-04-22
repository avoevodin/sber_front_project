const SignIn = () => (
  <div className="d-flex justify-content-center">
    <form className="d-flex flex-column">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Email or username"
        />
        <div id="emailHelp" className="form-text">
          We will never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="password"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary col-8">
          Log in
        </button>
      </div>
    </form>
  </div>
)

export default SignIn
