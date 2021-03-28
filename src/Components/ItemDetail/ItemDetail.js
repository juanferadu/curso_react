import React,{useState, useEffect} from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import {BASE_PATH} from '../../Utils/constants';
import {Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props) {

    //const { detalle} = props;

    const { id, title, description, price, pictureUrl } = props;

    const [stockActual, setstockActual] = useState(10);    
    
    const path = `${BASE_PATH}/images/${pictureUrl}`;
   
  
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
        // <ListGroup>
        //     <ListGroup.Item>${detail.price}</ListGroup.Item>
        //     <ListGroup.Item>{detail.description}</ListGroup.Item>
        // </ListGroup>
        <Col xs={3} className="item-detail">
            <Card>
                <Card.Img variant="top" src={path}></Card.Img>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price} clp/unidades</Card.Text>
                    <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>
                    <Link to="/">
                        <Button type="button">
                            Regresar
                        </Button>
                    </Link>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default ItemDetail
