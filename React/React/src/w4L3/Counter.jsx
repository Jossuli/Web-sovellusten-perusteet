import {useState} from 'react'

export default function Counter() {

    const [count,setCount]= useState(0);
    function handleClick(){
        setCount(count+10)
        console.log(count)
    }
  return (
    <div>
        <h1> Counter, joka lisää 10+</h1>
        <button onClick={handleClick}>
            Kasvata+10
        </button>
        <div>
            Laskuri:{count}
        </div>
    </div>
  )
};
