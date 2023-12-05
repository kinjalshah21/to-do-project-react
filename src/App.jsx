import { useEffect, useState } from "react";
import {ToDoContextProvider} from "./contexts"
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

function App() {

  const [toDoArray,setToDoArray] = useState([])

  const addToDo = (toDo) => {
    setToDoArray((prev)=>[{id:Date.now(),...toDo},...prev]) 
  }

  const deleteToDo = (id) => {
    setToDoArray((prev) => prev.filter((prevToDo) => prevToDo.id !== id))
  }

  const updateToDo = (id,toDo) => {
    setToDoArray((prev)=> prev.map((eachPrevToDo) => (eachPrevToDo.id === id ? toDo :eachPrevToDo)))
  }

  const isComplete = (id) => {
   setToDoArray((prev) => prev.map((prevToDo)=>(prevToDo.id === id ? {...prevToDo, completed: !prevToDo.completed} :prevToDo)))
  }

  useEffect(()=>{
    const toDos = JSON.parse(localStorage.getItem("toDos"))

    if(toDos && toDos.length > 0){
      setToDoArray(toDos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("toDos",JSON.stringify(toDoArray))
  },[toDoArray])

  return (
    <ToDoContextProvider value={{toDoArray,updateToDo,deleteToDo,addToDo,isComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Tasks
        </h1>
        <div className="mb-4"><ToDoForm/></div>
        <div className="flex flex-wrap gap-y-3">
          {toDoArray.map((toDo)=>(
            <div key = {toDo.id} className="w-full">
                 <ToDoItem toDo = {toDo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </ToDoContextProvider>
  );
}

export default App;
