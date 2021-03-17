import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {CardContent,CardMedia} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Carrito from "../../Assets/carrito.png";
import "./Item.scss";

function Item(props) {

  const { id, title, description, price, pictureUrl } = props;

  const path = `images/${pictureUrl}`;

  return (
    <Card className="item" variant="outlined">
      <CardContent>
        <Typography className="item_title" color="textSecondary" gutterBottom>
         <b>{id}  {title}</b> 
        </Typography>
        <Typography variant="h5" component="h2">
         Descripción: <br/>
         {description}<br/>
        </Typography>
        <Typography className="item_pos" color="textSecondary">
          Precio: {price}
        </Typography>
        <Typography variant="body2" component="p">
          <br />         
            <img src={path} alt={title}></img>                     
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
}

export default Item
