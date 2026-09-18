import React from 'react'

export default function Costumer() {
  
    const[textValue, setTextValue]=useState("");

    function handleChange(event){
        console.log("Tööt")

    }
  
    return (
    <div>
        <div>
        <input type="tect" />
        <button onClick={nameChecker}>
            Tarkista</button>
        </div>
        <div>
        Minun nimeni
        </div>
    </div>
  )
}
