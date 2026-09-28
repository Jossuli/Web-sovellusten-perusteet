import React from 'react'

export default function AddTodo({cancelButtonClick}) {
  return (
    <div>
        <h1>Uusi tehtävä</h1>
        <input type="Text"/>
        <div>
        <button onClick={cancelButtonClick}>Poista</button>
        <button>Tallenna</button>   
        </div>     
    </div>
  )
}
