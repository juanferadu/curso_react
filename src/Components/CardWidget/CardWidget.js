import React, { Component } from 'react'
import carrito from "../../Assets/carrito.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import "./CardWidget.scss";
import PropTypes from 'prop-types'

export class CardWidget extends Component {
    static propTypes = {

    }

    render() {
        return (            
                // <img src={carrito} className="card-widget-car" alt="Carrito de compras" />               
                <ShoppingCartIcon/>
             
            
        )
    }
}

export default CardWidget
