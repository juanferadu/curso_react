import React, { useContext, useState } from 'react'
import { Button, Table, Form } from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import "./Cart.scss";
import CartContext from './CartContext';
import firebase from "firebase/app";
import { getFirestore } from "../configs/firebase";
import "firebase/firestore";
import ModalForm from '../Components/Modal/ModalForm';

function Cart() {

    const context = useContext(CartContext);
    const { cart, removeItem, clear } = context;
    const [db, setDb] = useState(getFirestore());
    const [lastId, setLastId] = useState();
    const [IsOpen, setIsOpen] = useState(false);       

    var total = 0;
    //var orderProduct = null;

    if (cart.length > 0) {
        total = cart.reduce((sum, x) => sum + (x.quantity * x.item.price), 0);

        // orderProduct = cart.map((cart, index) => { return 
        //     cart.item.id, cart.item.title, cart.item.price, cart.quantity, cart.quantity * cart.item.price
        // }
    }

    function create() {
        const newOrder = {
            user: { id: 1, nombre: "Juan Felipe Ramirez", email: "ramirez@gmail.com", telefono: "" },
            products: { cart },
            createOn: firebase.firestore.Timestamp.fromDate(new Date()),
            total: { total },
        };

        const orders = db.collection("orders");
       
        if (cart.length > 0) {
            orders.add(newOrder).then((resp) => {
                console.log(resp);
                console.log(resp.id);
                setLastId(resp.id);                    
                setIsOpen(true);

            });
        }
        else
        {
            alert("No hay productos agregados");
        }       
    }

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const handleSubmit = (lastId) => {}//some code


    return (
        <div className="cart">
            <Grid container spacing={3} style={{ justifyContent: "center", paddingTop: "20px" }}>

                <Grid item xs={8}>
                    <Paper className="cart__paper">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th hidden={true}>Código</th>
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
                                        <td hidden={true}>{cart.item.id}</td>
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
                    <Paper>
                        <Grid item xs={8} style={{ alignContent: "right" }}>
                            <Paper className="cart__paper">
                                <h2>Detalle Pago</h2>
                                <Table striped bordered hover size="sm">
                                    <tbody>
                                        <tr style={{ fontSize: 25, fontWeight: "bold" }}>
                                            <td>Total:</td>
                                            <td colSpan="2">{total}</td>
                                        </tr>                                       
                                    </tbody>
                                </Table>
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese nombre" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese nombre" />
                                    </Form.Group>
                                    <Button style={{ marginRight: '15px' }} type="button" onClick={(e) => { clear() }}>
                                        Vaciar
                                    </Button>
                                    <Button type="button" onClick={create}>
                                        Pagar
                                    </Button>

                                </Form>


                            </Paper>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
            { IsOpen ? 
            <ModalForm                 
                handleClose={closeModal} 
                handleSubmit={closeModal}
            /> 
            : 
            null 
            }

        </div>
    )
}

export default Cart
