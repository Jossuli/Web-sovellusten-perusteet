export default function TodoItem({ todo, doneButtonClicked, deleteButtonClicked}) { 
  
  const styles = {};
  if(todo.done == true) {
        styles.textDecoration = "line-through";
  }
  return ( 
    //painikkeet näkymässä
    <li>
    <span style={ styles }>{todo.title}</span>
    <button onClick={() => doneButtonClicked(todo.id)}>Done</button>
    <button>Muokkaa</button>
    <button onClick={()=> deleteButtonClicked(todo.id)}>Poista</button>
    </li>
  ); 
}
