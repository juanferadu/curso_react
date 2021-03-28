import React from 'react'
import Item from '../Item/Item'
import { Container, Row } from 'react-bootstrap'


function ItemList(props) {
   
    //console.log('itemList',props.items)
    return (
        <Container>
                <Row>                    
                {props.items.map( item =>
                        <Item key={item.id} {...item}/>
                    )}
                </Row>               
            </Container>
    )
}

export default ItemList