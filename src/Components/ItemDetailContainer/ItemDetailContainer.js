import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Collapse, Container, Row } from 'react-bootstrap'
import { productos } from "../../db/dbProducts.json";
import {
  useParams, Link
} from "react-router-dom";


function ItemDetailContainer() {

    let { id } = useParams();
    const [detail, setDetail] = useState([]);    
    const [open, setOpen] = useState(false);

    //const {propiedad} = props;    
    console.log('id producto: '+id);

    useEffect(() => {
      new Promise((resolve, reject) => {  
       
      //const datos = props.productos;
      const datos = productos.filter( (prod) =>  prod.id === id);
      console.log(datos);
  
        setTimeout(() => {          
          resolve({id:1, title:'Polera Niño', description:'Polera verano con logo', price: 6800 , pictureUrl : 'polera_nino.png'});        
        }, 2000);      
      }).then(resultado=>{
        setDetail(resultado)})       
    }, [])


    // const handleOnClick = (e)=>{

    //   if(!open)
    //   {
    //     new Promise((resolve, reject) => {
    
    //       var datos = [{id:1, title:'Polera Niño', description:'Polera verano con logo', price: 6800 , pictureUrl : 'polera_nino.png'},
    //       {id:2, title:'short Niño T16', description:'short verano con cinturón', price: 8900, pictureUrl : 'short_nino.png'},
    //       {id:3, title:'traje de baño Niño T16', description:'traje de baño hawaiano', price: 7500, pictureUrl : 'traje_bano_nino.png'}];
      
    //       setTimeout(() => {      
            
    //         const detalle_producto = datos.filter((task) =>{
    //         //  task.id = id 
    //          return task.id = id;});
    //         console.log('detalle: '+detalle_producto);
    //         resolve({id:1, title:'Polera Niño', description:'Polera verano con logo', price: 6800 , pictureUrl : 'polera_nino.png'});        
    //       }, 2000);      
    //     }).then(resultado=>{
    //       setDetail(resultado); 
    //       setOpen(!open);
    //     }); 
    //   }
    //   else
    //   {
    //     setOpen(!open);
    //   }

    // }   

    return (
        <div className="item-detail-container">                  
           <h1>Detalle del Producto</h1>
           <Container >
             <Row>
              <ItemDetail detail={detail} /> 
             </Row>
           </Container>
         { /* <Button
            variant="outline-info"
            onClick={(e)=>handleOnClick(e)}
            aria-controls={id}
            aria-expanded={open}
          >
          Ver Detalle
          </Button>
          <Collapse in={open}>
          <div id={id}>
            <br></br>
          <ItemDetail detail={detail} />
          </div>
         </Collapse>            */}
          
         
         {/* */}
        </div>           
    );
}

export default ItemDetailContainer
