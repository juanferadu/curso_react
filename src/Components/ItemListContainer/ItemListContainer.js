import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemListContainer.scss";

function ItemListContainer(props) {

    const [stockActual, setstockActual] = useState(10)
    
    const{ saludo } = props;

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
             <h2> {saludo} </h2>
             <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>            
        </div>
    )
}

export default ItemListContainer

