import {createContext, useContext} from "react";

export const ToDoContext = createContext({

    toDoArray : [
        {
            id: 1001,
            todo:"Todo Message",
            completed: false,
        }
    ],
    addToDo : (todo) => {},
    updateToDo : (id,todo) => {},
    deleteToDo : (id) => {},
    isComplete : (id)=>{}
})

export const ToDoContextProvider = ToDoContext.Provider

export const useToDo = ()=>{

    return useContext(ToDoContext)
}