import React, { useState, useContext, useEffect } from 'react'
import { OrdersContext } from '../../context/orders/orders.context'
import { useHistory } from 'react-router-dom'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import OrderOverview from '../../components/order-overview/order-overview.component'

const OrdersSection = () => {
    const { push } = useHistory()
    const [searchQuery, setSearchQuery] = useState('')
    const items = [
        {
            id: 1,
            name: "Všetko"
        },
        {
            id: 2,
            name: "Deň"
        },
        {
            id: 3,
            name: "Týžden"
        },
        {
            id: 4,
            name: "Mesiac"
        },
        {
            id: 5,
            name: "Rok"
        },
    ]
    const [activeIndex, setActiveIndex] = useState(2)

    const {
        getOrders,
        orders
    } = useContext(OrdersContext)

    useEffect(() => {
        getOrders()
    }, [])

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
                {orders && orders.length ?
                    orders.map((order, idx) => (
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
