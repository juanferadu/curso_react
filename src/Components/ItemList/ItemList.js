import React from 'react'
import Item from '../Item/Item'


function ItemList(props) {
   
    //console.log(props.items)
    return (
        <div>
        <h3>LISTA DE PRODUCTOS</h3>
        {/* <ul>        */}
        {props.items.map( item =>
                <Item key={item.id} {...item}/>
            )}
            {/* {props.items.map((x, index)=>{
                <Item key={index} item={x}/>
            })}             */}
        {/* </ul>             */}
        </div>
    )
}

export default ItemList

