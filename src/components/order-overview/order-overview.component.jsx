import React from 'react'

import {
    OrderContainer,
    OrderContent,
    Options,
    OrderId,
    Date,
    DeleteButton,
    Price,
    UpdateButton
} from './order-overview.styles'

const OrderOverview = (props) => {
    const { name, id, date, totalPrice } = props

    return (
        <OrderContainer>

            <OrderContent>
                <h2>{name}</h2>
                <OrderId>{id}</OrderId>
                <Date>{date}</Date>
                <Price>{totalPrice}€</Price>
            </OrderContent>

            <Options>
                <UpdateButton>
                    Upraviť
                </UpdateButton>
                <DeleteButton>
                    Vymazať
                </DeleteButton>
            </Options>

        </OrderContainer>
    )
}

export default OrderOverview
