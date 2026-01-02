import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import React from 'react';
function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const storedTodos = localStorage.getItem("todos");

  useEffect(()=>{
if( storedTodos){
    setTodos(JSON.parse(storedTodos)) 
  }
  else{
    setTodos([]);
  }
  console.log(setTodos);  
  },[])
  
  
  function newTodo (task: string){
    const updatedTodos = [...todos, task];
    setTodos(updatedTodos);
  }
  
  useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
          console.log(`From use effect ${todos}`);
    },[todos]);
  return (
    <div>
      <h1>TODO APP</h1>
      <TodoInput onAddTodo = {newTodo}/>
      <TodoItem/>
      <TodoList/>
    </div>
  )
}


export default App;
