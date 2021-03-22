import { useEffect, useState } from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { productos } from "./db/dbProducts.json";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const greeting= "Bienvenidos a la tienda virtual de ropa de verano"; 
 
  return (
    <div className="App">      
           
      <Router>
      <div>           
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer productos={productos} saludo = {greeting}/>      
          </Route>   
          <Route path="/category/:id">            
                <ItemDetailContainer />
          </Route>
          <Route path="/item/:id">
                <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </Router>       
    </div>
  );
}

export default App;

