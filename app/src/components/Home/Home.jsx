const { Link } = require('react-router-dom')

const Home = () => (
  <div className="d-flex flex-column align-items-center">
    <h1>Welcome to the Society app!</h1>
    <h4 className="text-muted">
      If you have an account press
      {' '}
      <Link to="/auth/signin">Sign in</Link>
      <br />
      or press
      {' '}
      <Link to="/auth/signup">Sign up</Link>
      {' '}
      to create an account.
    </h4>
  </div>
)

export default Home
