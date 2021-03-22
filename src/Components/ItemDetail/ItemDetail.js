import React from 'react'
import { ListGroup, Card, Col, Button } from 'react-bootstrap'
import {Link} from "react-router-dom";
function ItemDetail(props) {

    const { detail } = props;
    
    const path = `images/${detail.pictureUrl}`;
    console.log("detalle del item: ",props);
    return (
        // <ListGroup>
        //     <ListGroup.Item>${detail.price}</ListGroup.Item>
        //     <ListGroup.Item>{detail.description}</ListGroup.Item>
        // </ListGroup>
        <Col xs={3} className="item-detail">
          <Card>
        <Card.Img variant="top" src={path}></Card.Img>
        <Card.Body>
          <Card.Title>{detail.title}</Card.Title>
          <Card.Text>{detail.description}</Card.Text>
          <Card.Text>{detail.price} clp/unidades</Card.Text>        
           <Link to="/">
              <Button type="button">
                    Regresar
              </Button>
          </Link>         
          {/* <ItemDetailContainer propiedad={props}/> */}
        </Card.Body>
      </Card>

          </Col>
    )
}

export default ItemDetail
