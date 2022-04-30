import React from 'react';
import Header from './Header';
import data from './data.json'
import {useState} from 'react'
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm'; 
import "./App.css"

function App() {

  const[toDoList,setToDoList] = useState(data)
  // console.log(toDoList)

  const handleToggle = (id)=>{
    let mapped = toDoList.map(task=>{
      return task.id == id ? {...task,complete:!task.complete}:{...task}
    })
    setToDoList(mapped)
  }

  const handleFilter = ()=>{
    let filterednotcompleted = toDoList.filter(task=>{
      return !task.complete
    })
    setToDoList(filterednotcompleted)
  }

  const addTask = (userInput) =>{
    let copy =[...toDoList]
    copy = [...copy,{id:toDoList.length+1,task:userInput,complete:false}]
    //=========or ==============
    // copy.push({id: toDoList.length + 1, task: userInput, complete: false });
    // copy.unshift({id: toDoList.length + 1, task: userInput, complete: false });
    setToDoList(copy)
  }

  return (
   <div className='container'>
      <div className="App">
        <Header/>
        <ToDoForm addTask={addTask}/>
        <ToDoList  toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      </div>
   </div>
  );
}

export default App;
