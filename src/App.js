import './App.css';
import RouterApp from './Routes/RouterApp';
import CartProvider from './Cart/CartProvider';

function App() {

  return (
    <div>      
       <CartProvider>
        <RouterApp/>    
       </CartProvider>  
    </div>
  );
}

export default App;

