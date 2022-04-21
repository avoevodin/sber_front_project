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
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  </div>
)

export default SignIn
