import React, { useState } from 'react'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import OrderOverview from '../../components/order-overview/order-overview.component'

const OrdersSection = () => {
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

    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                title="Objednávky"
            />

            <SectionNavbar
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            <ScrollContainer>
                <OrderOverview
                    name='Product name'
                    id='[Product ID]'
                    date='28. November 2020'
                    totalPrice='99.99'
                />
                <OrderOverview
                    name='Product name'
                    id='[Product ID]'
                    date='28. November 2020'
                    totalPrice='99.99'
                />
                <OrderOverview
                    name='Product name'
                    id='[Product ID]'
                    date='28. November 2020'
                    totalPrice='99.99'
                />
                <OrderOverview
                    name='Product name'
                    id='[Product ID]'
                    date='28. November 2020'
                    totalPrice='99.99'
                />
            </ScrollContainer>
        </section>
    )
}

export default OrdersSection
