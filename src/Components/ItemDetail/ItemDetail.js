import React,{useState, useEffect} from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import {BASE_PATH} from '../../Utils/constants';
import {Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.scss";

function ItemDetail(props) {

    //const { detalle} = props;

    const { id, title, description, price, pictureUrl } = props;

    const [stockActual, setstockActual] = useState(10);   
    const [cantidad, setCantidad] = useState(0);
    
    const path = `${BASE_PATH}/images/${pictureUrl}`;

    useEffect(() => {
        document.title = `Cantidad ${cantidad}`;
    }, [cantidad])
   
  
    const restarStock = (e, nuevoStock)=> {
        e.preventDefault();
        if(stockActual >= nuevoStock)
        {
            setstockActual((stockActual)=> stockActual - nuevoStock);
            setCantidad(nuevoStock);
        }
        else
        {
            alert("No existe stock de este producto!");
        }        
    };
    return (
        // <ListGroup>
        //     <ListGroup.Item>${title}</ListGroup.Item>
        //     <ListGroup.Item>{description}</ListGroup.Item>
        // </ListGroup>     
        <div className="item-detail">
        <Card style={{ width: '25rem'}}>
            <Card.Header>{title}</Card.Header>
            <Card.Img variant="top" src={path}></Card.Img>
            <Card.Body>
                {/* <Card.Title>{title}</Card.Title> */}                
                <Card.Text>{description}</Card.Text>
                    <Card.Text>{price} clp/unidades</Card.Text>                    
                    { cantidad == 0 ? <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>:               
                        <Link to="/cart">
                        <Button type="button">
                            Terminar Compra
                        </Button>
                    </Link>
                    }                   
                    <Link to="/">
                        <Button type="button">
                            Regresar
                        </Button>
                    </Link>
            </Card.Body>
            </Card>
            </div>         
       
    )
}

export default ItemDetail
