import React from 'react';
import { Button, Card, Col } from 'react-bootstrap'
import "./Item.scss";
import {
  Link
} from "react-router-dom";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Item(props) {

  const { id, title, description, price, pictureUrl } = props;

  const path = `images/${pictureUrl}`;

  return (
    <Col xs={3} className="item">
      <Card>
        <Card.Img variant="top" src={path}></Card.Img>
        <Card.Body>
          <Card.Title>{id} {title}</Card.Title>
          {/* <Card.Text>{description}</Card.Text>
          <Card.Text>{price} clp/unidades</Card.Text> */}
               {/* {`/item/:${id}`} */}
           <Link to={`/item/:${id}`}>
              <Button type="button">
                    Ver Detalle
              </Button>
          </Link>         
          {/* <ItemDetailContainer propiedad={props}/> */}
        </Card.Body>
      </Card>
    </Col>
    
  );
}

export default Item
