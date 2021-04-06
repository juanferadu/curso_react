import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';
import { productos } from "../../db/dbProducts.json";
import "./ItemListContainer.scss";
import Loading from '../Loading/Loading';

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const {id} = useParams();
    

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
             <h2> {props.saludo} </h2>            
             <hr/>                   
             { items.length == 0 ? <Loading/>:
              <ItemList items={items}/>    
             }
                
        </div>
    )
}

export default ItemListContainer

