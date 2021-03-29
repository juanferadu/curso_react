import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Compra from './Components/Compra/Compra';

function App() {
 const greeting= "Bienvenidos a la tienda virtual de Accesorios de verano"; 
 
  return (
    <div>      
           
      <Router>
      <div>           
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer saludo = {greeting}/>      
          </Route>   
          <Route path="/category/:id" exact={true}>            
                <ItemListContainer />
          </Route>
          <Route path="/item/:id" exact={true}>
                <ItemDetailContainer />
          </Route>
          <Route path="/cart" exact={true}>
                <Compra/>
          </Route>
        </Switch>
        <Redirect to='/'></Redirect>
      </div>
    </Router>       
    </div>
  );
}

export default App;

