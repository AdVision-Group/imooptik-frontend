import React, { useState } from 'react'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ProductOverview from '../../components/order-overview/order-overview.component'

const EshopSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const items = [
        {
            id: 1,
            name: "Všetko"
        },
        {
            id: 2,
            name: "Prevádzka 1"
        },
        {
            id: 3,
            name: "Prevádzka 2"
        },
        {
            id: 4,
            name: "Prevádzka 3"
        },
        {
            id: 5,
            name: "Prevádzka 4"
        },
    ]

    const [activeIndex, setActiveIndex] = useState(2)

    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                title="E-shop"
            />

            <SectionNavbar
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            {/* Products container */}
            <ScrollContainer>
                <ProductOverview
                    name='Product name'
                    stock='[x]'
                    id='[productId]'
                    price='99.99'
                />
                <ProductOverview
                    name='Product name'
                    stock='[x]'
                    id='[productId]'
                    price='99.99'
                />
                <ProductOverview
                    name='Product name'
                    stock='[x]'
                    id='[productId]'
                    price='99.99'
                />
                <ProductOverview
                    name='Product name'
                    stock='[x]'
                    id='[productId]'
                    price='99.99'
                />
                <ProductOverview
                    name='Product name'
                    stock='[x]'
                    id='[productId]'
                    price='99.99'
                />
            </ScrollContainer>
        </section >
    )
}

export default EshopSection
