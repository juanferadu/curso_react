import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
 const greeting= "Bienvenidos a la tienda virtual de Accesorios de verano"; 
 
  return (
    <div className="App">      
           
      <Router>
      <div>           
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer saludo = {greeting}/>      
          </Route>   
          <Route path="/category/:id">            
                <ItemListContainer />
          </Route>
          <Route path="/item/:id">
                <ItemDetailContainer />
          </Route>
        </Switch>
        <Redirect to='/'></Redirect>
      </div>
    </Router>       
    </div>
  );
}

export default App;

