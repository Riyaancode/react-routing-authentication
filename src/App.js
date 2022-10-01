import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
// import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { NoMatch } from './components/NoMatch'
import { AuthProvider } from './components/auth'
import { Login } from './components/Login'
import {Signup} from './components/Signup'
import { Profile } from './components/Profile'
import { RequireAuth } from './components/RequireAuth'
import AddTodo from './components/addTodo'
import { getDatabase, ref, onValue} from "firebase/database";

function App() {
  const[items,setItems] = useState([])
  const [todos] = useState('');
  const[toggle,setToggle] = useState(true)

  
 useEffect(()=>{
  const db = getDatabase();
  const starCountRef = ref(db);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    // updateStarCount(postElement, data);

    console.log(data)
  });


 })




  



  const getTodos = (item)=>{
    if(!item){

    }else{
    setToggle(true)

    if (toggle === true) {
      
    
    const allitems = {id: new Date().getTime().toString(), name: item}
    const temppArr = [...items, allitems];
    setItems(temppArr)
  } else{
    console.log('todos '+items)
    console.log(item.id)
  }
    }
  }


  const deletItem = (id)=>{
    const update = items.filter((todos)=>{
      return id !== todos.id;
      
    })
    setItems(update);
    
  }
  
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={
        <RequireAuth>
        <Home items={items} deletItem={deletItem}/>
        </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path='/addtodo'
          element={
            <RequireAuth>
              <AddTodo getTodos={getTodos} todos={todos}/>
            </RequireAuth>
          }
        />
    

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
