import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export const Profile = () => {
  const navigate = useNavigate()
  const authLocal = useAuth()
  const handleLogout = () => {
    authLocal.logout()
    navigate('/login')
  }
  return (
    <div>
      Welcome {authLocal.user}.<button onClick={handleLogout}>Logout</button>
    </div>
    
  )
}
