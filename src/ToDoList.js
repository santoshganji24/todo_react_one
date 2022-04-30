import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({toDoList,handleToggle,handleFilter}){
    console.log()
    return (
        <div>
            {toDoList.map(todo=>{
                return(
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            })}
            <button onClick={handleFilter} className="clear">Clear completed</button>
        </div>
    )
}
