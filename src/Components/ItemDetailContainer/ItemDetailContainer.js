import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container, Row } from 'react-bootstrap'
import { productos } from "../../db/dbProducts.json";
import {useParams} from "react-router-dom";
import useFetch from '../../Hooks/useFetch';
import Loading from '../Loading/Loading';


function ItemDetailContainer() {

    let { id } = useParams();
    const [detail, setDetail] = useState([]);    

    console.log('item id', id);
    // console.log('productos:',productos);

    // const products = useFetch("");
    //console.log('item detail:',productos);

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
           <Container >
             <Row>
             { detail.length === 0 ? <Loading/>:
               detail.map( item =>
                <ItemDetail key={item.id} {...item}/>
            )}
              {/* <ItemDetail detalle={detail} />  */}
                           
             </Row>
           </Container>       
        </div>           
    );
}

export default ItemDetailContainer
