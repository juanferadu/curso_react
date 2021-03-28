import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { productos } from "../../db/dbProducts.json";
import "./ItemListContainer.scss";
import Loading from '../Loading/Loading';

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const {id} = useParams();
       
    // const{ saludo, productos } = props;

    useEffect(() => {
        new Promise((resolve, reject) => {
          setItems([]);     
          setTimeout(() => {
            if(id)
            {
              resolve(productos.filter( prod =>  prod.category=== id));              
            }
            else{
              resolve(productos); 
            }
                   
          }, 2000);      
        }).then(resultado=>{setItems(resultado);
          //console.log('resultado',resultado);
        }); 
        
      }, [id])

    
    return (
        <div className="item-list-container">
            {/* <h1>Contenedor</h1> */}
             <h2> {props.saludo} </h2>
             {/* <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>   
             <br/> */}
             <hr/> 
                  
             { items.length == 0 ? <Loading/>:
              <ItemList items={items}/>    
             }
                
        </div>
    )
}

export default ItemListContainer

