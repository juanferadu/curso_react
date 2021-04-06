import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container } from 'react-bootstrap'
import { productos } from "../../db/dbProducts.json";
import {useParams} from "react-router-dom";
import Loading from '../Loading/Loading';
import "./ItemDetailContainer.scss";


function ItemDetailContainer() {

    const { id } = useParams();
    const [detail, setDetail] = useState([]);    

    useEffect(() => {
      new Promise((resolve, reject) => {   
  
        setTimeout(() => {
          if(id)
          {
            resolve(productos.filter(prod =>  prod.id == id));   
            //resolve({id:1, title:'Polera Niño', description:'Polera verano con logo', price: 6800 , pictureUrl : 'polera_nino.png'});                    
          }
          else
          {
            alert('Hubo un error')
          }                
         
        }, 2000);      
      }).then(resultado=>{
        setDetail(resultado);       
      })       
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
            {/* <ItemDetail detalle={detail} />  */}  
        </div>         
       
    );
}

export default ItemDetailContainer
