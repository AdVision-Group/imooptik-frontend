import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import OrderDeligateModal from '../order-deligate-modal/order-deligate-modal.component'
// import OrderPayModal from '../order-pay-modal/order-pay-modal.component'

import { retailNames } from '../../context/warehouse/warehouse.utils'
import { useOutsideHandler } from '../../hooks/useOutsideAlerter'

import {
    AiFillCaretDown,
    AiOutlineFilePdf,
    AiOutlineFolderOpen,
    AiOutlineCheck
} from 'react-icons/ai'

import {
    DeligateButton,
    DeligateCol,
    DropdownMenu,
    IconContainer,
    Line,
    OrderOverviewRow,
    TableCol
} from './order-overview.styles'

const OrderOverview = ({ order }) => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    const date = new Date(order.date)
    const dropdownRef = useRef(null)
    useOutsideHandler(dropdownRef, () => setShowDropdownMenu(false))
    const [showOrderDeligateModal, setShowOrderDeligateModal] = useState(false)

    console.log(order)

    return (
        <OrderOverviewRow>
            <TableCol>{order.customId}</TableCol>
            <TableCol>{date.toLocaleDateString("sk-SK", { weekday: 'long', month: 'long', day: 'numeric' })}</TableCol>
            <DeligateCol>
                <DeligateButton onClick={() => setShowOrderDeligateModal(true)} >
                    {order.premises === 0 ? "Neuvedené" : retailNames[order.premises - 1]}
                </DeligateButton>
                {showOrderDeligateModal && <OrderDeligateModal close={() => setShowOrderDeligateModal(false)} premise={order.premises} id={order._id} />}
            </DeligateCol>
            <TableCol>{order.status}</TableCol>
            <TableCol>
                <IconContainer onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
                    <AiFillCaretDown />
                </IconContainer>
                {showDropdownMenu && (
                    <DropdownMenu ref={dropdownRef} >
                        <ul>
                            <li>
                                <div>
                                    <AiOutlineCheck />
                                </div>
                                    Vybavené
                            </li>
                        </ul>
                        <Line />
                        <ul>
                            <a href={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/pdf/${order.pdfPath}`} target="_blank" rel="noreferrer noopener">
                                <li>
                                    <div>
                                        <AiOutlineFilePdf />
                                    </div>
                                    Zobraz PDF
                                </li>
                            </a>
                            <Link to={`/dashboard/objednavky/${order?.orderedBy?._id}/${order._id}`}>
                                <li>
                                    <div>
                                        <AiOutlineFolderOpen />
                                    </div>
                                    Zobraziť
                                </li>
                            </Link>
                        </ul>
                    </DropdownMenu>
                )}
            </TableCol>
        </OrderOverviewRow>
    )
}

export default OrderOverview
