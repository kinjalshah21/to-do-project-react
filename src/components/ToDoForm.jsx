import React, { useState } from "react";
import { useToDo } from "../contexts";

function TodoForm() {

    const[toDo,setToDo] = useState("")
    const {addToDo} = useToDo()

    const addValue = (e)=>{
      e.preventDefault()

      if(!toDo) return
      addToDo({toDo,completed:false})
      setToDo("")
    }


    return (
        <form onSubmit={addValue} className="flex">
            <input
                type="text"
                placeholder="Add Task..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={toDo}
                onChange={(e)=>setToDo(e.target.value)}
                
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

