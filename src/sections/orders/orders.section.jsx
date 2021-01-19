import React, { useState, useContext, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { OrdersContext } from '../../context/orders/orders.context'
import { useHistory } from 'react-router-dom'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import OrderOverview from '../../components/order-overview/order-overview.component'

import Popup from '../../components/popup/pop-up.component'

const OrdersSection = () => {
    const { push } = useHistory()
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)
    const [searchQuery, setSearchQuery] = useState('')
    const items = [
        {
            id: 1,
            name: "Zaplatené",
            value: "paid"
        },
        {
            id: 2,
            name: "Zálohované",
            value: "half-paid"

        },
        {
            id: 3,
            name: "Spracované",
            value: "processed"
        },
        {
            id: 4,
            name: "Splnené",
            value: "fulfilled"

        }
    ]
    const [activeIndex, setActiveIndex] = useState(2)

    const {
        getOrders,
        orders
    } = useContext(OrdersContext)

    useEffect(() => {
        getOrders()
    }, [])

    if (!orders) return <Popup loading={isLoading} title={message} close={closeModal} />

    const filteredOrders = orders.filter(order => order.status === items[activeIndex - 1].value)

    console.log(orders[0].status)
    console.log(items[activeIndex - 1].value)
    console.log(filteredOrders)

    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push("/dashboard/objednavky/nova-objednavka")}
                title="Objednávky"
            />

            <SectionNavbar
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            <ScrollContainer>
                {orders && filteredOrders.length ?
                    filteredOrders.map((order, idx) => (
                        <OrderOverview
                            key={idx}
                            order={order}
                            handleUpdateClick={() => push(`/dashboard/objednavky/${order.orderedBy._id}/${order._id}`)}
                        />
                    )) : (
                        <div>
                            Žiadne objednávky
                        </div>
                    )
                }

            </ScrollContainer>
        </section>
    )
}

export default OrdersSection
