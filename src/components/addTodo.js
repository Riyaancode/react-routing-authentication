import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

function AddTodo(props) {

  const [todos, setTodos] = useState('');
  const navigate = useNavigate()

  const addItem = async () => {


    const db = getDatabase();
    set(ref(db), {
      todos: todos,

    });


    props.getTodos(todos) ? setTodos('') : setTodos('');
    navigate('/')
  }

  return (
    <>
      <h1 className="text-center mb-5">Add Data</h1>
      <div className="container d-flex">

        <input type="text" value={todos} className='form-control' onChange={(e) => setTodos(e.target.value)} />

        <button type="submit" className="btn btn-primary mx-3" onClick={addItem}>Add Data</button>


      </div>
    </>
  );
}

export default AddTodo;
