import React from 'react'


function ItemList(props) {

    const{ saludo } = props;
    return (
        <div className="item-list-container">
             <h2> {saludo} </h2>
        </div>
    )
}

export default ItemList

