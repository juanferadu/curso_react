import React, {useContext} from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./CardWidget.scss";
import { Link } from "react-router-dom";
import CartContext from '../../Cart/CartContext';
import Icon from '@material-ui/core/Icon';

function CardWidget() {
    const context = useContext(CartContext);
    const { cart} = context;

    var total = 0;

    if (cart.length > 0) {
        console.log(cart);

        total = cart.reduce((sum, x) => sum + (x.quantity), 0);

    }

    console.log(total);

    return (
        <Link to="/cart">
            { cart.length > 0?   
            <>        
            <ShoppingCartIcon style={{ fontSize: '20px', color: '#08c' }}/>            
            <Icon style={{ fontSize: '16px', color: '#f8f1f1' }}>{total}</Icon></>
            : <ShoppingCartIcon style={{ fontSize: '16px', color: '#08c' }} />
            }
        </Link>
    )
}

export default CardWidget





