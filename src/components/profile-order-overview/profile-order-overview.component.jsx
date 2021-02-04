import React from 'react'

import { useFetchById } from '../../hooks/useFetch'

import {
    DeleteButton,
    Options,
    OrderContainer,
    OrderContent,
    UpdateButton,
    OrderId
} from './profile-order-overview.styles'

const ProfileOrderOverview = ({ id, handleUpdateClick }) => {
    const orderData = useFetchById('api/admin/orders', id, !id)

    console.log(orderData)

    if (orderData.isLoading) return <OrderContainer>
        <h3>Načítavam</h3>
    </OrderContainer>

    const { customId, date } = orderData.response.order

    const dateData = new Date(date)

    return (
        <OrderContainer>
            <OrderContent>
                <div>
                    <h2>ID Objednávky</h2>
                    <OrderId>{customId}</OrderId>
                </div>
                <div>
                    <p>{dateData.toLocaleDateString("sk-SK", { weekday: 'long', month: 'long', day: 'numeric', year: "numeric" })}</p>
                </div>
            </OrderContent>

            <Options>
                <UpdateButton onClick={handleUpdateClick}>
                    Zobraziť
                </UpdateButton>
                <DeleteButton>
                    Vymazať
                </DeleteButton>

            </Options>

        </OrderContainer>
    )
}

export default ProfileOrderOverview
