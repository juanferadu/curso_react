import React,{useState, useContext} from 'react'
import { Card, Button } from 'react-bootstrap'
import {BASE_PATH} from '../../Utils/constants';
import {Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.scss";
import CartContext from '../../Cart/CartContext';

function ItemDetail(props) {

    const context = useContext(CartContext);
   
    const {cart, addItem } = context;

    const { id, title, description, price, pictureUrl, stock } = props;
    const prod = {id, title, price}

    const [stockActual, setstockActual] = useState(stock);   
      
    //const path = `${BASE_PATH}/images/${pictureUrl}`; 

    const onAdd =(c)=>{

        const q = parseInt(c);

        if(q<= stock && q > 0)
        {
        //metodo del contexto
        addItem(prod, q);
        setstockActual(stock - q);

        }
        else
        {
            alert("No existe stock de este producto!");
        }

    }
   
    return (
      
        <div className="item-detail">
        <Card style={{ width: '25rem'}}>
            <Card.Header>{title}</Card.Header>
            <Card.Img variant="top" src={pictureUrl}></Card.Img>
            <Card.Body>
                {/* <Card.Title>{title}</Card.Title> */}                
                <Card.Text>{description}</Card.Text>
                    <Card.Text>{price} clp/unidades</Card.Text>      
                    <ItemCount stock={stockActual} initial={1} onAdd={onAdd}/>              
                    { cart.length == 0 ? '':               
                        <Link to="/cart">
                        <Button type="button">
                            Terminar Compra
                        </Button>
                    </Link>
                    }                   
                    <Link to="/">
                        <Button type="button">
                            Seguir Comprando
                        </Button>
                    </Link>
            </Card.Body>
            </Card>
            </div>         
       
    )
}

export default ItemDetail
