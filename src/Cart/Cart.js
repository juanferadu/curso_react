import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import "./Cart.scss";
import CartContext from './CartContext';

function Cart() {

    const context = useContext(CartContext);
    const { cart, removeItem, clear } = context;
    //console.log(cart);

    //const { item: { id, title, price }, quantity } = cart //destructuring

    const total = 0;//cart.reduce((cart) => cart.item.price * cart.quantity, 0);

    // const total = cart.map((cart, index) => {

    //    return cart.item.price * cart.quantity

    // });

    return (
        <div className="cart">
            Estamos en carrito de compras!
            <Grid container spacing={3}>

                <Grid item xs={8}>
                    <Paper className="cart__paper">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>                               
                                { cart.length > 0? cart.map((cart, index)=>
                                    <tr key={index}>
                                        <td>{cart.item.id}</td>
                                        <td>{cart.item.title}</td>
                                        <td>{cart.item.price}</td>
                                        <td>{cart.quantity}</td>
                                        <td>{cart.quantity * cart.item.price}</td>
                                        <td> <Button variant="danger" onClick={(e) => { removeItem(cart.item.id) }}>
                                        Eliminar
                                    </Button>
                                    </td>
                                    </tr>
                                     ):
                                    <tr>
                                        <td colSpan="5">
                                            No hay productos agregados
                                        </td>
                                    </tr>
                               }
                            </tbody>
                        </Table>

                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className="cart__paper">
                        <h2>Detalle Pago</h2>
                        <Table striped bordered hover size="sm">                            
                            <tbody>
                                <tr>
                                    <td>Total a Pagar:</td>
                                    <td>{total}</td>
                                    <td></td>                                   
                                </tr>
                                <tr>
                                    <td> <Button type="button" onClick={(e) => { clear() }}>
                                        Vaciar
                                    </Button>
                                    </td>
                                    <td>
                                                <Link to="/">
                                        <Button type="button">
                                            Regresar
                                    </Button>
                                    </Link>
                                    </td>
                                    <td>
                                    <Button type="button">
                                        Pagar
                                    </Button>
                                    </td>                                    
                                </tr>
                            </tbody>
                        </Table>
                    
                        
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cart
