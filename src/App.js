import logo from './logo.svg';
import './App.css';
import Headerr from './Mycomponents/Headerr';
import { Todos } from './Mycomponents/Todos';
import { Footer } from './Mycomponents/Footer';
import {AddTodo} from './Mycomponents/AddTodo';
import React, { useState } from 'react';




function App() {
  const onDelete =(todo)=>
  {
    console.log("i am on delete of todo ",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  // settodos upgrad karga
  const addTodo =(title,desc)=>
  {
 console.log("i am adding this todo",title,desc)
 let sno;
 if(todos.length==0){
  sno=0;
 }
  else
  {
     sno = todos[todos.length-1].sno + 1;

  }
 
   const myTodo ={
  sno:sno,
  title :title,
  desc:desc,
 }
 setTodos([...todos,myTodo]);
 console.log(myTodo);
  }
  

  const [todos, setTodos] = useState([
  // {
  //   sono: 1,
  //   title: "dedddddd",
  //   desc: 'dasdasdasda'
  // }, {
  //   sono: 2,
  //   title: "ccccccccccc",
  //   desc: 'hbkkokok'
  // }, {
  //   sono: 3 ,
  //   title: "Go to the mall",
  //   desc: " oiuytghjhgd"
  // }

  ]);
  
  return (
    <>
      <Headerr title="My todo list" searchbar={true} />
      <AddTodo addTodo ={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
     
    </ >
  );
  }

export default App;
