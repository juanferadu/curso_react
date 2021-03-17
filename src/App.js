import { useEffect, useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar";

function App() {
  const greeting= "Bienvenidos a la tienda virtual de ropa de verano";
  const [items, setItems] = useState([]);
  useEffect(() => {
    new Promise((resolve, reject) => {

      const datos = [{id:'01', title:'Polera Niño', description:'Polera verano con logo', price: 6800 , pictureUrl : 'polera_nino.png'},
      {id:'02', title:'short Niño T16', description:'short verano con cinturón', price: 8900, pictureUrl : 'short_nino.png'},
      {id:'03', title:'traje de baño Niño T16', description:'traje de baño hawaiano', price: 7500, pictureUrl : 'traje_bano_nino.png'}];

      setTimeout(() => {
        resolve(datos);        
      }, 2000);      
    }).then(resultado=>{setItems(resultado)}) 
    
  }, [])
  return (
    <div>      
        <NavBar/>    
        {/* <h1>resultado {items}</h1> */}
        <ItemListContainer items={items} saludo = {greeting}/>
    </div>
  );
}

export default App;

