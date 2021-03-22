import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.scss";

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const [stockActual, setstockActual] = useState(10);
    
    // const{ saludo, productos } = props;

    useEffect(() => {
        new Promise((resolve, reject) => {
    
        const datos = props.productos;
    
        //console.log(datos);
    
          setTimeout(() => {
            resolve(datos);        
          }, 2000);      
        }).then(resultado=>{setItems(resultado)}) 
        
      }, [])

    const restarStock = (e, nuevoStock)=> {
        e.preventDefault();
        if(stockActual >= nuevoStock)
        {
            setstockActual((stockActual)=> stockActual - nuevoStock)
        }
        else
        {
            alert("No existe stock de este producto!");
        }
        
    };
    return (
        <div className="item-list-container">
            <h1>Contenedor</h1>
             <h2> {props.saludo} </h2>
             {/* <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>   
             <br/> */}
             <hr/> 
             <ItemList items={items}/>        
        </div>
    )
}

export default ItemListContainer

