import React, {useState} from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import "./ItemCount.scss";

function ItemCount({stock, initial, onAdd}) {

    const [contador, setContador] = useState(0);
   
    const handleAdd = ()=> setContador(contador + 1);
    const handleSubstract = ()=> {
        if(contador > 1)
        {
            setContador(contador - 1)
        }           
    };

    const handleChange = (e)=>{
        e.preventDefault();
        setContador(e.target.value);
        // if(typeof e.target.value === 'number')
        // {
            
        // }
        // else
        // {
        //     alert('Solo puedes ingresar números');
        // }
        
    }
   
    return (

        <div>
            <Form>
                <Table striped bordered hover size="sm">
                    <tbody>
                        <tr>
                            <td colSpan="3">Stock: {stock}</td>
                        </tr>
                        <tr>
                            <td><Button type="button" onClick={handleSubstract}>-</Button></td>
                            <td><Form.Control type="number" id="cantidad" name="cantidad" placeholder="1" value={contador} onChange={handleChange} />  </td>
                            <td><Button  type="button" onClick={handleAdd}>+</Button></td>
                        </tr>
                        <tr>
                            <td colSpan="3"> <Button variant="primary" onClick={(e) => { onAdd(document.getElementById('cantidad').value) }}>
                                Agregar al carrito
                            </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Form>           
            
        </div>        
    )
}

export default ItemCount

