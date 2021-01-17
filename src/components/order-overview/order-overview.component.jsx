import React from 'react'

import {
    OrderContainer,
    OrderContent,
    Options,
    OrderId,
    DateContainer,
    DeleteButton,
    Price,
    UpdateButton
} from './order-overview.styles'

const OrderOverview = ({ order, handleUpdateClick }) => {
    const { _id, date, status } = order

    const d = new Date(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <OrderContainer>

            <OrderContent>
                <h2>ID objednávky</h2>
                <OrderId>{_id}</OrderId>
                <DateContainer>{d.toLocaleDateString("sk-SK", options)}</DateContainer>
            </OrderContent>

            <Options>
                <p>{status}</p>
                <UpdateButton onClick={handleUpdateClick}>
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
