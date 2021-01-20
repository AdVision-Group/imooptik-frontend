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
    StatusContainer,
    OptionsContainer,
    DeligateContainer
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
                <OrderId>{order.customId}</OrderId>
                <DateContainer>{d.toLocaleDateString("sk-SK", options)}</DateContainer>
            </OrderContent>

            <OrderDetailsContainer>
                <OptionsContainer>
                    {status === "paid" && <FulfilledButton onClick={() => handleFulfill(_id)}>Spracovať</FulfilledButton>}
                    {status === "fulfilled" && <FulfilledButton onClick={() => handleFinish(_id)}>Dokončiť</FulfilledButton>}
                </OptionsContainer>
                {showModal && <OrderDeligateModal close={close} premise={order.premises} id={order._id} />}
                <DeligateContainer onClick={() => setshowModal(true)}>
                    <div>
                        <p>Vybavuje</p>
                        <p style={order.premises === 0 ? { color: "#DD4C4C" } : null}>{order.premises === 0 ? "Neuvedené" : retailNames[order.premises - 1]}</p>
                    </div>
                    <div>
                        <p>Stav</p>
                        {status && <StatusContainer style={status === "finished" || status === "paid" ? { color: "#1e824c" } : null}>{svkStatus.name}</StatusContainer>}
                    </div>
                </DeligateContainer>



            </OrderDetailsContainer>
            <Options>
                <PdfButton href={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/pdf/${order.pdfPath}`} target="_blank" rel="noreferrer noopener">
                    Zobraz PDF
                </PdfButton>
                <UpdateButton onClick={handleUpdateClick}>
                    Zobraziť
                </UpdateButton>
                {/* <DeleteButton>
                    Vymazať
                </DeleteButton> */}
            </Options>

        </OrderContainer>
    )
}

export default OrderOverview
