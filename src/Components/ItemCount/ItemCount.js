import React from 'react'
import { Form, Button } from 'react-bootstrap'
// import { TextField, Button } from '@material-ui/core';
import "./ItemCount.scss";

function ItemCount({stock, initial, onAdd}) {

    const label = initial.toString();
    //const [contador, setContador] = useState(0);
    // useEffect(() => {
    //     console.log("componentDidMount 1 - contador cambio");
    //     return () => {
    //         console.log("componentWillUnmount 1 - contador cambio");
    //     }
    // }, [contador]);
    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Stock: {stock} </Form.Label>           
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="number" id="cantidad" name="cantidad" placeholder="1" />
        </Form.Group>       
        <Button variant="primary" onClick={(e)=>{onAdd(e,document.getElementById('cantidad').value)}}>
            Agregar al carrito
        </Button>
        </Form>
    //     <form className="item-count">            
    //         <hr/>
    //         Stock: {stock} 
    //         <br/><br/>
    //         <TextField  type="number"  id="cantidad" label="Cantidad" placeholder={label} />
    //         {/* <input id="cantidad" name="cantidad"  type="number" placeholder={initial}></input> */}
    //         <Button color="primary" onClick={(e)=>{onAdd(e,document.getElementById('cantidad').value)}}>Agregar al carrito</Button>
    //         <button
    //     onClick={() => 
    //         setContador((contador)=> contador + 1)}
    //   >    Contar
    //   </button>
    //     </form>
    )
}

ItemCount.propTypes = {

}

export default ItemCount

