import React, { useState } from 'react'

import OrderDeligateModal from '../order-deligate-modal/order-deligate-modal.component'

import { retailNames } from '../../context/warehouse/warehouse.utils'

import {
    OrderContainer,
    OrderContent,
    Options,
    OrderId,
    DateContainer,
    DeleteButton,
    FulfilledButton,
    PdfButton,
    UpdateButton,
    OrderDetailsContainer,
    StatusContainer
} from './order-overview.styles'

const OrderOverview = ({ order, handleUpdateClick, items, handleFulfill, handleFinish }) => {
    const { _id, date, status } = order
    const [showModal, setshowModal] = useState(false)

    const d = new Date(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const svkStatus = items.find(item => item.value === status)

    const close = () => {
        setshowModal(false)
    }

    return (
        <OrderContainer>

            <OrderContent>
                <h2>ID objednávky</h2>
                <OrderId>{_id}</OrderId>
                <DateContainer>{d.toLocaleDateString("sk-SK", options)}</DateContainer>
            </OrderContent>

            <OrderDetailsContainer>
                <div>
                    <FulfilledButton onClick={() => handleFulfill(_id)}>Fulfill</FulfilledButton>
                    <FulfilledButton onClick={() => handleFinish(_id)}>Dokončiť</FulfilledButton>
                </div>
                {showModal && <OrderDeligateModal close={close} premise={order.premises} id={order._id} />}
                <div onClick={() => setshowModal(true)}>
                    <p>Vybavuje</p>
                    <p>{order.premises === 0 ? "Neuvedené" : retailNames[order.premises]}</p>
                    <p>Stav</p>

                    {status && <StatusContainer>{svkStatus.name}</StatusContainer>}
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
