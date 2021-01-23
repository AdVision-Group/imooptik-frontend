import React, { useState, useContext, useEffect, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Fuse from 'fuse.js'

import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { OrdersContext } from '../../context/orders/orders.context'


import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
// import OrderOverview from '../../components/order-overview/order-overview.component'
import OrderDeligateModal from '../../components/order-deligate-modal/order-deligate-modal.component'

import Popup from '../../components/popup/pop-up.component'

import {
    tabItems
} from '../../context/orders/orders.utils'

import {
    retailNames
} from '../../context/warehouse/warehouse.utils'

import {
    AiFillCaretDown,
    AiOutlineFilePdf,
    AiOutlineFolderOpen,
    AiOutlineCheck
} from 'react-icons/ai'

import { useOutsideHandler } from '../../hooks/useOutsideAlerter'

import {
    TableHead,
    OrderOverviewRow,
    IconContainer,
    OrdersTable,
    TableCol,
    DropdownMenu,
    Line,
    DeligateCol,
    DeligateButton
} from './orders.styles'

const OrdersSection = () => {
    const { push } = useHistory()
    const [searchQuery, setSearchQuery] = useState('')
    const [activeIndex, setActiveIndex] = useState(1)
    const [orderItems, setOrderItems] = useState([])


    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)

    const {
        getOrders,
        orders
    } = useContext(OrdersContext)



    useEffect(() => {
        if (!orders) {
            getOrders()
        }
        if (orders) {
            if (activeIndex === 2) {
                setOrderItems(orders.filter(order => order.status === 'finished'))
            } else {
                setOrderItems(orders.filter(order => order.status !== 'finished'))
            }
        }
    }, [orders])

    useEffect(() => {
        if (orders) {
            if (activeIndex === 2) {
                setOrderItems(orders.filter(order => order.status === 'finished'))
            } else {
                setOrderItems(orders.filter(order => order.status !== 'finished'))
            }
        }
    }, [activeIndex])

    useEffect(() => {
        if (orders) {
            const fuse = new Fuse(orders, {
                keys: [
                    'customId',
                    'status',
                    'date'
                ]
            })
            if (searchQuery !== '') {
                const results = fuse.search(searchQuery)
                setOrderItems(results.map(result => result.item))
            }
            if (!searchQuery) {
                if (activeIndex === 2) {
                    setOrderItems(orders.filter(order => order.status === 'finished'))
                } else {
                    setOrderItems(orders.filter(order => order.status !== 'finished'))
                }
            }
        }

    }, [searchQuery])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push("/dashboard/objednavky/nova-objednavka")}
                title="Objednávky"
            />

            <SectionNavbar
                items={tabItems}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            <ScrollContainer>
                <OrdersTable>
                    <TableHead>
                        <TableCol>ID</TableCol>
                        <TableCol>Dátum</TableCol>
                        <TableCol>Prevádzka</TableCol>
                        <TableCol>Status</TableCol>
                        <TableCol>Možnosti</TableCol>
                    </TableHead>
                    {orders && orderItems.map((order, idx) => (
                        <OrderOverview key={idx} order={order} />
                    ))}
                </OrdersTable>
            </ScrollContainer>
        </section>
    )
}

const OrderOverview = ({ order }) => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    const date = new Date(order.date)
    const dropdownRef = useRef(null)
    useOutsideHandler(dropdownRef, () => setShowDropdownMenu(false))
    const [showOrderDeligateModal, setShowOrderDeligateModal] = useState(false)

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
                            <Link to={`/dashboard/objednavky/${order.orderedBy._id}/${order._id}`}>
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

export default OrdersSection
