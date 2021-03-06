import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <title>Mi Tienda Virtual</title>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         <h1>Summer Accessories</h1>
        </p>
        <NavBar/>
      </header>
      <body className="App-body">
      
      </body>
    </div>
  );
}

export default App;

