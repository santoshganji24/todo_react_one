import React  from "react";

export default function ToDo({todo,handleToggle}){

    const handleClick = (e)=>{
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return(
        <div id={todo.id} className={todo.complete?"strike":""} onClick={handleClick}>
            {todo.task}
        </div>
    )

    //=========or==========
    
    // return(
    //     <div id={todo.id} className={todo.complete?"strike":""} onClick={(e)=>{ handleToggle(e.currentTarget.id)}}>
    //         {todo.task}
    //     </div>
    // )
}