import React from 'react'

import {
    DeleteButton,
    Options,
    OrderContainer,
    OrderContent,
    UpdateButton,
    OrderId
} from './profile-order-overview.styles'

const ProfileOrderOverview = ({ id }) => {
    return (
        <OrderContainer>
            <OrderContent>
                <h2>ID Objednávky</h2>
                <OrderId>{id}</OrderId>
            </OrderContent>

            <Options>
                <DeleteButton>
                    Vymazať
                </DeleteButton>
                <UpdateButton>
                    Upraviť
                </UpdateButton>

            </Options>

        </OrderContainer>
    )
}

export default ProfileOrderOverview
