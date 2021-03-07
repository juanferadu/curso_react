import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar";
function App() {
  const greeting= "Bienvenidos a la tienda virtual de ropa de verano";
  return (
    <div>      
        <NavBar/>    
        <ItemListContainer saludo = {greeting}/>
    </div>
  );
}

export default App;

