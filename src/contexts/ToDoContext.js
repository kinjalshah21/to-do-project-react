import {createContext, useContext} from "react";

export const ToDoContext = createContext({

    toDoArray : [
        {
            todo:"Todo Message",
            id: 1001,
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