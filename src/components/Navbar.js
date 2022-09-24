import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
  const auth = useAuth()
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link" to='/' >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to='/profile' >
                  Profile
                </NavLink>
              </li>
              <li class="nav-item">
                {!auth.user && (
                  <NavLink className="nav-link" to='/login' >
                    Login
                  </NavLink>
                )
                }
              </li>
              <li>
                {!auth.user && (
                  <NavLink className="nav-link" to='/signup' >
                    Signup
                  </NavLink>
                )
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>



{/* 
      <nav className='primary-nav'>
        <NavLink to='/' style={navLinkStyles}>
          Home
        </NavLink>

        <NavLink to='/profile' style={navLinkStyles}>
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink to='/login' style={navLinkStyles}>
            Login
          </NavLink>
        )
        }
        {!auth.user && (
          <NavLink to='/signup' style={navLinkStyles}>
            Signup
          </NavLink>
        )
        }
      </nav> */}

    </>
  )
}
