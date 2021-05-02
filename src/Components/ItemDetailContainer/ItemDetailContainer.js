import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container } from 'react-bootstrap'
import { productos } from "../../db/dbProducts.json";
import {useParams} from "react-router-dom";
import Loading from '../Loading/Loading';
import "./ItemDetailContainer.scss";
import { getFirestore } from "../../configs/firebase";


function ItemDetailContainer() {

    const { id } = useParams();
    const [detail, setDetail] = useState([]);    

    useEffect(() => {

      const db = getFirestore();
      var dataCollection = null;
      if(id)
      {
        dataCollection =  db.collection(`productos`).where("id", "==", `${id}`);    
        //console.log(dataCollection);   
      }
      else
      {
        alert("Hubo un error");
      }
     
      dataCollection
      .get()
      .then((resp) => {
        if (resp.size === 0) {        
          setDetail([]);         
        }else{         
          const datos = resp.docs.map(doc => doc.data());
          setDetail(datos);          
        }        
      })
      .catch((err) => {
          console.log(err);         
      }); 
    }, [id])

    return (     
        <div className="item-detail-container">                  
           <h1>Detalle del Producto</h1>
           <Container>            
             { detail.length === 0 ? <Loading/>:
               detail.map( item =>
                <ItemDetail key={item.id} {...item}/>
            )}         
            
           </Container>               
        </div>         
       
    );
}

export default ItemDetailContainer
