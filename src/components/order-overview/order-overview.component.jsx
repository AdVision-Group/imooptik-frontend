import React from 'react'


import { retailNames } from '../../context/warehouse/warehouse.utils'

import {
    OrderContainer,
    OrderContent,
    Options,
    OrderId,
    DateContainer,
    DeleteButton,
    Price,
    PdfButton,
    UpdateButton,
    OrderDetailsContainer,
    StatusContainer
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

            <OrderDetailsContainer>
                <div>
                    <StatusContainer>{status}</StatusContainer>
                    <p>Vybavuje:</p>
                    <p>{order.premises === 0 ? "Neuvedené" : retailNames[order.premises]}</p>
                </div>
                <div>

                </div>
            </OrderDetailsContainer>
            <Options>
                <PdfButton href={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/pdf/${order.pdfPath}`} target="_blank" rel="noreferrer noopener">
                    Zobraz PDF
                </PdfButton>
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

export default OrderOverview
