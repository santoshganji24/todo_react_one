import React from "react";
import { useState } from "react";

export default function ToDoForm({addTask}){

    const[userInput,setUserInput] = useState('');

    const handleChange = (e)=>{
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return(  
            <form className="formhere" onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="enter task"></input>
            <button>submit</button>
            </form>       
    )

    // return(
    //     <div>
    //         <input value={userInput} type="text" onChange={(e)=>{setUserInput(e.currentTarget.value)}} placeholder="enter teask"></input>
    //     </div>
    // )
}