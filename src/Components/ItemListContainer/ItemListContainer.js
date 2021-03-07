import React from 'react'
import "./ItemListContainer.scss";

function ItemListContainer(props) {

    const{ saludo } = props;
    return (
        <div className="item-list-container">
             <h2> {saludo} </h2>
        </div>
    )
}

export default ItemListContainer

