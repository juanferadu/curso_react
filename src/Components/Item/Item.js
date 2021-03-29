import React from 'react';
import { Button, Card, Col } from 'react-bootstrap'
import "./Item.scss";
import {Link} from "react-router-dom";
import { BASE_PATH } from "../../Utils/constants";

function Item(props) {

  const { id, title, description, price, pictureUrl } = props;

  const path = `${BASE_PATH}/images/${pictureUrl}`;

  //console.log(path);

  return (
    <Col xs={3} className="item">
      <Card>
        <Card.Img variant="top" src={path}></Card.Img>
        <Card.Body>
          <Card.Title>{id} {title}</Card.Title>
          {/* <Card.Text>{description}</Card.Text> */}
          <Card.Text>{price} clp/unidades</Card.Text>              
        </Card.Body>             
          <Link to={`/item/${id}`}>
                        <Button type="primary">Ver Detalle</Button>
          </Link>
      </Card>         
    </Col>
    
  );
}

export default Item
