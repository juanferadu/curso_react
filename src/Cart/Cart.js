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

    var total = 0;

    if (cart.length > 0) {
        total = cart.reduce((sum, x) => sum + (x.quantity * x.item.price), 0);

    }

    const NewOrder = {

        
    }


    return (
        <div className="cart">
            <Grid container spacing={3}>

                <Grid item xs={8}>
                    <Paper className="cart__paper">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th hidden="true">Código</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length > 0 ? cart.map((cart, index) =>
                                    <tr key={index}>
                                        <td hidden="true">{cart.item.id}</td>
                                        <td>{cart.item.title}</td>
                                        <td>{cart.item.price}</td>
                                        <td>{cart.quantity}</td>
                                        <td>{cart.quantity * cart.item.price}</td>
                                        <td> <Button variant="danger" onClick={(e) => { removeItem(cart.item.id) }}>
                                            Quitar
                                    </Button>
                                        </td>
                                    </tr>
                                ) :
                                    <tr>
                                        <td colSpan="5">
                                            No hay productos agregados
                                        </td>
                                        <td>
                                            <Link to="/">
                                                <Button variant="danger">
                                                    Regresar
                                    </Button>
                                            </Link>
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
                                <tr style={{ fontSize: 25, fontWeight: "bold" }}>
                                    <td>Total:</td>
                                    <td colSpan="2">{total}</td>
                                </tr>
                                <tr>
                                    <td> 
                                    </td>
                                    <td>
                                    <Button style={{ marginRight: '15px'}} type="button" onClick={(e) => { clear() }}>
                                        Vaciar
                                    </Button>
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
