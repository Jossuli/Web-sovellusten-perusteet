import DateNow from './w4L1/DateNow';
import Tervehdys from './w4L1/Tervehdys'
import ProductCard from './w4L2/productCard';
import Counter from './w4L3/Counter';
import Costumer from './w4L3/Costumer';
import TodoList from './w5Todo/TodoList';

//React komponentti sisältää funktion, joka palauttaa jsx
function App() {
  //4 tehtava
  //const nimi = "Jaakko";

  // const products = [
  //   {
  //     name:"Porkkkana",
  //     price:2.50,
  //     InStock:true    
  //   },
  //   { 
  //     name:"Peruna",
  //     price:0.80,
  //     InStock:false
  //   },
  //   {     
  //     name:"Omena",
  //     price:3.50,
  //     InStock:true    
  //   },
  // ];
  
  //Taulukko olioita
  // const initialTodos = [ 
  // { id: 1, title: 'Lue Reactin state-osio', done: true }, 
  // { id: 2, title: 'Tee Todo-harjoitus', done: false }, 
  // { id: 3, title: 'Palauta tehtävä', done: false }, 
  // ]; 

  
  return (
    <div>
      {/* Viikko 4 teht1 
      <div>Hello word</div>
      <Tervehdys /> 
      <DateNow />  */}
      {/* w4L2 materiaalit
      <ProductCard name = "Porkkana" price={2.50} inStock={true} />
      <ProductCard name = "Peruna" price={0.80} inStock={false} />
      <ProductCard name = "Omena" price={3.50} inStock={true} />

      <h1>Map esimerkki alla</h1>
      {
        products.map(product => 
          <ProductCard
            name={product.name} 
            price={product.price} 
            InStock={product.InStock}
          />)
      } */}
      {/* Viikon 4, 3 tehtävä     
      <Counter/> */}
      <TodoList/>


    </div>
  )
    
}

export default App
