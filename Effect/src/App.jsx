import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

function App() {
  return (
    <div>
      <Todo id={1}/>      
    </div>
  )
}
function Todo({id}){
  const [todos,setTodos] = useState({})

  // useEffect

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos" + id)
    .then(function(response){
      setTodos(response.data.json);
    })
  },[])
  return <div>
    <h1>
      {todos.title}
    </h1>
    <h5>
      {todos.description}
    </h5>
  </div>
}


export default App
