import {createContext, useContext} from "react";

export const ToDoContext = createContext({

    toDoArray : [
        {
            id: 1001,
            toDo:"Todo Message",
            completed: false,
        },
    ],
    addToDo : (toDo) => {},
    updateToDo : (id,toDo) => {},
    deleteToDo : (id) => {},
    isComplete : (id)=>{}
})

export const ToDoContextProvider = ToDoContext.Provider

export const useToDo = ()=>{

    return useContext(ToDoContext)
}