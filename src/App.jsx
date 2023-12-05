import { useState } from "react";
import {ToDoContextProvider} from "./contexts"

function App() {

  const [toDoArray,setToDoArray] = useState([])

  const addToDo = (todo) => {
    setToDoArray((prev)=>[{id:Date.now(),...todo},...prev]) 
  }

  const deleteToDo = (id) => {
    setToDoArray((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const updateToDo = (id,todo) => {
    setToDoArray((prev)=> prev.map((eachPrevTodo) => (eachPrevTodo.id === id ? todo :eachPrevTodo)))
  }

  const isComplete = (id) => {
   setToDoArray((prev) => prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} :prevTodo)))
  }

  return (
    <ToDoContextProvider value={{toDoArray,updateToDo,deleteToDo,addToDo,isComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Tasks
        </h1>
        <div className="mb-4">{/* Todo form goes here */}</div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
        </div>
      </div>
    </div>
    </ToDoContextProvider>
  );
}

export default App;
