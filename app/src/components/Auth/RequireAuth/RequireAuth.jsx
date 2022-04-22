import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const token = useSelector((store) => store.auth?.user?.tokensData?.token)
  const location = useLocation()
  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
