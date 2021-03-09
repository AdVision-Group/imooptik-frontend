import React, { useState, useRef, useContext } from 'react'
import { OrdersContext } from '../../context/orders/orders.context'
import { Link } from 'react-router-dom'
import OrderDeligateModal from '../order-deligate-modal/order-deligate-modal.component'
// import OrderPayModal from '../order-pay-modal/order-pay-modal.component'
import FinishDepositedOrderModal from '../modal-finish-deposited-order/modal-finish-deposited-order.component'

import { retailNames } from '../../context/warehouse/warehouse.utils'
import { translateStatus } from '../../utils/orders.utils'
import { useOutsideHandler } from '../../hooks/useOutsideAlerter'

import {
    AiFillCaretDown,
    AiOutlineFilePdf,
    AiOutlineFolderOpen,
    AiOutlineCheck
} from 'react-icons/ai'

import { GiMoneyStack } from 'react-icons/gi'

import { BsTrash } from 'react-icons/bs'

import {
    DeligateButton,
    DeligateCol,
    DropdownMenu,
    IconContainer,
    Line,
    OrderOverviewRow,
    TableCol
} from './order-overview.styles'

const OrderOverview = ({ order, refetch, ...otherProps }) => {
    const { finishOrder, cancelOrder, getPDF } = useContext(OrdersContext)
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    const date = new Date(order.date)
    const dropdownRef = useRef(null)
    useOutsideHandler(dropdownRef, () => setShowDropdownMenu(false))
    const [showOrderDeligateModal, setShowOrderDeligateModal] = useState(false)
    const [showFinishDepositedOrderModal, setShowFinishDepositedOrderModal] = useState(false)


    const handleFinishOrder = (id) => {
        finishOrder(id, refetch)
        setShowDropdownMenu(false)
    }

    const handleCancelOrder = (id) => {
        cancelOrder(id, refetch)
        setShowDropdownMenu(false)
    }

    const orderedByID = order?.orderedBy?._id ? order?.orderedBy?._id : order?.orderedBy

    return (
        <OrderOverviewRow {...otherProps}>
            {showFinishDepositedOrderModal && <FinishDepositedOrderModal close={() => setShowFinishDepositedOrderModal(false)} refetch={refetch} id={order._id} order={order} />}
            <TableCol>{order.customId}</TableCol>
            <TableCol>{date.toLocaleDateString("sk-SK", { weekday: 'long', month: 'long', day: 'numeric' })}</TableCol>
            <DeligateCol>
                <DeligateButton onClick={() => setShowOrderDeligateModal(true)} >
                    {order.premises === 0 ? "Neuvedené" : retailNames[order.premises]}
                </DeligateButton>
                {showOrderDeligateModal && <OrderDeligateModal refetch={refetch} close={() => setShowOrderDeligateModal(false)} premise={order.premises} id={order._id} />}
            </DeligateCol>
            <TableCol>{translateStatus(order.status)}</TableCol>
            <TableCol>
                <IconContainer onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
                    <AiFillCaretDown />
                </IconContainer>
                {showDropdownMenu && (
                    <DropdownMenu ref={dropdownRef} >
                        <ul>
                            {(order.status === "half-paid") && <li onClick={() => setShowFinishDepositedOrderModal(true)}>
                                <div>
                                    <GiMoneyStack />
                                </div>
                                    Zaplatiť
                            </li>}
                            {(order.status !== "half-paid" && order.status !== "fulfilled" && order.status !== "cancelled") && <li onClick={() => handleFinishOrder(order._id)}>
                                <div>
                                    <AiOutlineCheck />
                                </div>
                                    Vybavené
                            </li>}
                            {order.status !== "cancelled" && <li onClick={() => handleCancelOrder(order._id)}>
                                <div>
                                    <BsTrash />
                                </div>
                                    Odstrániť
                            </li>}
                            {/* {order.status === "fulfilled" && <li onClick={() => handleCancelOrder(order._id)}>
                                <div>
                                    <BsTrash />
                                </div>
                                    Odstrániť
                            </li>} */}
                        </ul>
                        <Line />
                        <ul>
                            <button onClick={() => getPDF(order._id)}>
                                <li>
                                    <div>
                                        <AiOutlineFilePdf />
                                    </div>
                                    Zobraz PDF
                                </li>
                            </button>
                            <Link to={`/dashboard/objednavky/${orderedByID}/${order._id}`}>
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
