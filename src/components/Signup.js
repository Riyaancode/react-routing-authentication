import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export const Signup = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const redirectPath = location.state?.path || '/login'

  const handleSignup = () => {
    if (!user == '' ) {
        if (!pass == '') {
            localStorage.setItem('User',user);
            localStorage.setItem('Password',pass);
            auth.login(user)
            navigate(redirectPath, { replace: true })
        } else {
            alert('Password is requires')
        }

    } else {
        alert('Username is requires')
    }
    
  }
  return (
    <>
    {/* <div>
      <label>
        Username: <input type='text' onChange={e => setUser(e.target.value)} />
        Password: <input type='password' onChange={e => setPass(e.target.value)} />
      </label>
      <button onClick={handleSignup}>Login</button>
    </div> */}

<div className='container w-50'>
<h1>Signup</h1>
<form>
  <div className="mb-3" />
    <label htmlFor='usrname' className="form-label">Username</label>
    <input type='text' className='form-control' id='usrname' onChange={e => setUser(e.target.value)} />
  <div />

  <div className="mb-3" >
    <label htmlFor='password' className="form-label">Password</label>
    <input type='password' className='form-control' id='password'onChange={e => setPass(e.target.value)} />
    </div>
    <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
</form>
</div>
</>
  )
}
