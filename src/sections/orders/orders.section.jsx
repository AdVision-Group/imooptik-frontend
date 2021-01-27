import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Fuse from 'fuse.js'

import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { OrdersContext } from '../../context/orders/orders.context'


import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import OrderOverview from '../../components/order-overview/order-overview.component'
// import OrderDeligateModal from '../../components/order-deligate-modal/order-deligate-modal.component'
import Pagination from '../../components/pagination/pagination.component'
import Popup from '../../components/popup/pop-up.component'

import {
    tabItems
} from '../../context/orders/orders.utils'

import {
    TableHead,
    OrdersTable,
    TableCol,
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

    const handleSearch = () => {
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

        }
    }

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
            if (!searchQuery) {
                if (activeIndex === 2) {
                    setOrderItems(orders.filter(order => order.status === 'finished'))
                } else {
                    setOrderItems(orders.filter(order => order.status !== 'finished'))
                }
            }
        }
    }, [searchQuery])

    const [currentPage, setCurrentPage] = useState(1)
    const [ordersPerPage] = useState(10)
    const indexOfLastOrder = currentPage * ordersPerPage
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
    const currentOrders = orderItems.slice(indexOfFirstOrder, indexOfLastOrder)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <SectionHeader
                searchQuery={searchQuery}
                handleSearch={handleSearch}

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
                    {currentOrders.map((order, idx) => (
                        <OrderOverview key={idx} order={order} />
                    ))}
                </OrdersTable>

                <Pagination
                    productsPerPage={ordersPerPage}
                    totalProducts={orderItems.length}
                    paginate={paginate}
                    activePage={currentPage}
                />
            </ScrollContainer>
        </section>
    )
}



export default OrdersSection
