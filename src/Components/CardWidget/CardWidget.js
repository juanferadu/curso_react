import React, { Component } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./CardWidget.scss";
import {Link} from "react-router-dom";

export class CardWidget extends Component {
    static propTypes = {

    }

    render() {
        return (               
                <Link to="/cart">
                         <ShoppingCartIcon/>    
                </Link>                       
               
            
        )
    }
}

export default CardWidget
