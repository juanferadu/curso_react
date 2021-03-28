import React from 'react'
// import PropTypes from 'prop-types'
// import { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core';

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
        <form>            
            <hr/>
            Stock: {stock}
            <br/><br/>
            <TextField  type="number"  id="cantidad" label="Cantidad" placeholder={label} />
            {/* <input id="cantidad" name="cantidad"  type="number" placeholder={initial}></input> */}
            <Button variant="outlined" color="primary" onClick={(e)=>{onAdd(e,document.getElementById('cantidad').value)}}>Agregar al carrito</Button>
            {/* <button
        onClick={() => 
            setContador((contador)=> contador + 1)}
      >
        Contar
      </button> */}
        </form>
    )
}

ItemCount.propTypes = {

}

export default ItemCount

