import React from 'react'

function Item(props) {

    const{ saludo } = props;
    return (
        <div className="item-list-container">
             <h2> {saludo} </h2>
        </div>
    )
}

export default Item