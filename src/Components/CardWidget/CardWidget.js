import React, { Component } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./CardWidget.scss";
import PropTypes from 'prop-types'

export class CardWidget extends Component {
    static propTypes = {

    }

    render() {
        return (                                      
                <ShoppingCartIcon/>    
            
        )
    }
}

export default CardWidget
