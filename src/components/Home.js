import { Link } from 'react-router-dom'


export const Home = (props) => {
 
  

  return (
    <>
      <div className='container my-5 d-flex flex-column justify-content-center align-items-center'>
        <h1>List</h1>
      <Link className='btn btn-primary' to={'addtodo'}>AddTodo</Link>
         
        
        <ul class="list-group">
          {

            props.items.map((item) => {
              return (
                <li class="list-group-item d-flex" key={item.id}>
                  <h3 className='mx-2'>{item.name}</h3>
                  <button onClick={() => props.deletItem(item.id)} type="button" class="mx-3 btn btn-danger btn-sm">Delete</button>
                  </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}
