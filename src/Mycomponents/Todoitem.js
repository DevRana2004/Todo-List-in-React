import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
 
  return (
    <div style={{textAlign: 'center'}}>
      <h3 className='text-center'> </h3>
      <h4> {todo.title} </h4>  
      <p>{todo.desc}</p>
      <button style={{backgroundColor :'red',color :'white'}}  onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>

  )
}
