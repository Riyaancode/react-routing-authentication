import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase';
export const Signup = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const authLocal = useAuth()


const auth = getAuth(app);

  


  const redirectPath = location.state?.path || '/login'

  const handleSignup = () => {

    createUserWithEmailAndPassword(auth, user, pass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      authLocal.login(user)
      localStorage.setItem('User',JSON.stringify(user));
      localStorage.setItem('Password',pass);
      navigate(redirectPath, { replace: true })
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      alert(errorCode)
    });


   
    
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
<div>
  <div className="mb-3" />
    <label htmlFor='usrname' className="form-label">Username</label>
    <input type='email' className='form-control' id='usrname' onChange={e => setUser(e.target.value)} />
  <div />

  <div className="mb-3" >
    <label htmlFor='password' className="form-label">Password</label>
    <input type='password' className='form-control' id='password'onChange={e => setPass(e.target.value)} />
    </div>
    <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
</div>
</div>
</>
  )
}
