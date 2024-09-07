import React from 'react'
import { Todoitem } from './Todoitem'


export const Todos = (props) => {
  return (
    <div className='container '>
    {    props.todos.length===0?"   No todo list":
      props.todos.map((todo) => {
      return<Todoitem todo={todo}   onDelete={props.onDelete}/>  
      
       })
    }
  
    </div>
  )
}
