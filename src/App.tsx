import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import React from 'react';
function App() {
   type Todo = {
    id: number,
    text: string;
    completed: boolean;
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  const storedTodos = localStorage.getItem("todos");

 //Setting the todo in LocalStorage
    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log(`From use effect ${todos}`);
    },[todos]);

  // Getting the parsed form in setTodos
    useEffect(()=>{
    if(storedTodos){
     setTodos(JSON.parse(storedTodos)) 
    }
    else{
     setTodos([]);
    }
    console.log(setTodos);  
    },[])
  
  //Adding a new task
  function newTodo (task: Todo){
    const updatedTodos = [...todos, task];
    setTodos(updatedTodos);
  }

//toggle feature of completed Incomplete
  function toggleTodo(id: number){
    setTodos(prevTodos => 
      prevTodos.map(todo =>
        todo.id === id
        ?{ ...todo, completed: !todo.completed}
        : todo
      )
     );
  }
  
  //remove a todo from the list
  function removeTodo(id: number){
    setTodos(prevTodos =>
      prevTodos.filter(todo=>todo.id !== id))
  }
 
  return (
    <div>
      <h1>TODO APP</h1>
      <TodoInput onAddTodo = {newTodo}/>
      <TodoList todos={todos} onToggleTodo={toggleTodo} onRemoveTodo={removeTodo}/>
    </div>
  )
}


export default App;
