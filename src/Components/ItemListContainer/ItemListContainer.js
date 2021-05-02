import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemList from '../ItemList/ItemList';
import { productos } from "../../db/dbProducts.json";
import "./ItemListContainer.scss";
import Loading from '../Loading/Loading';
import { getFirestore } from "../../configs/firebase";

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const {id} = useParams();
 
    useEffect(() => {     
     
      const db = getFirestore();
      var dataCollection = null;
      if(id)
      {
        dataCollection =  db.collection("productos").where("category", "==", `${id}`);       
      }
      else
      {
        dataCollection =  db.collection("productos");
      }
     
      dataCollection
      .get()
      .then((resp) => {
        if (resp.size === 0) {         
          setItems([]);         
        }else{         
          const datos = resp.docs.map(doc => doc.data());
          setItems(datos);          
        }        
      })
      .catch((err) => {
          console.log(err);         
      });        
      }, [id])     

    return (
        <div className="item-list-container">           
             <h2> {props.saludo} </h2>            
             <hr/>                   
             { items.length === 0 ? <Loading/>:
              <ItemList items={items}/>    
             }
                
        </div>
    )
}

export default ItemListContainer

