import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import app from './firebase'

export const Login = () => {

  
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const authLocal = useAuth()
  const auth = getAuth(app);
  const redirectPath = location.state?.path || '/';
  









  

  const handleLogin = async (e) => {

   
      
      try {
        await signInWithEmailAndPassword(auth, user, pass);
        authLocal.login(user)
        navigate(redirectPath, { replace: true })
      } catch (err) {
        alert(err.message);
      }
   
    // if (!user == '') {
    //   if (!pass === '') {
    //     const userNameData = localStorage.getItem('User');
    //     const userPassData = localStorage.getItem('Password');


    //     if (user === userNameData) {
    //       if (pass === userPassData) {
    //         authLocal.login(user)
    //         navigate(redirectPath, { replace: true })
    //       } else {
    //         alert('Enter a correct password')
    //       }

    //     } else {
    //       alert('Enter a correct username')
    //     }

    //   } else {
    //     alert('Password is requires')
    //   }

    // } else {
    //   alert('Username is requires')
    // }
    
  }
  return (
    <div className='container w-50'>
      <h1>Login</h1>
      <div>
        <div className="mb-3" />
          <label htmlFor='usrname' className="form-label">Username</label>
          <input type='email' className='form-control' id='usrname' onChange={e => setUser(e.target.value)} />
        <div />

        <div className="mb-3" >
          <label htmlFor='password' className="form-label">Password</label>
          <input type='password' className='form-control' id='password'onChange={e => setPass(e.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
