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

    if (orderData.isLoading) return <OrderContainer>
        <h3>Načítavam</h3>
    </OrderContainer>

    const { order } = orderData.response

    const dateData = new Date(order?.date)

    return (
        <OrderContainer>
            {orderData.response?.error === 'invalid-branch' ? <OrderContent>
                <h2>Táto objednávka patri inej prevadzke</h2>
            </OrderContent> : <OrderContent>
                    <div>
                        <h2>ID Objednávky</h2>
                        <OrderId>{order?.customId}</OrderId>
                    </div>
                    <div>
                        <p>{dateData.toLocaleDateString("sk-SK", { weekday: 'long', month: 'long', day: 'numeric', year: "numeric" })}</p>
                    </div>
                </OrderContent>}

            {!orderData.response?.error && <Options>
                <UpdateButton onClick={handleUpdateClick}>
                    Zobraziť
                </UpdateButton>
                {/* <DeleteButton>
                    Vymazať
                </DeleteButton> */}
            </Options>}

        </OrderContainer>
    )
}

export default ProfileOrderOverview
