import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../..//context/auth/auth.context'


import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ProductOverview from '../../components/product-overview/product-overview.component'

const EshopSection = () => {
    const { currentUser } = useContext(AuthContext)

    const [searchQuery, setSearchQuery] = useState('')
    const items = [
        {
            id: 1,
            name: "Všetko",
            permission: 4,
        },
        {
            id: 2,
            name: "Prevádzka 1",
            permission: 1,
        },
        {
            id: 3,
            name: "Prevádzka 2",
            permission: 2,
        },
        {
            id: 4,
            name: "Prevádzka 3",
            permission: 3,
        },
        {
            id: 5,
            name: "Prevádzka 4",
            permission: 4,
        },
    ]




    const filteredItems = items.filter(item => item.permission === currentUser.admin || currentUser.admin === 4)

    const [activeIndex, setActiveIndex] = useState(2)

    useEffect(() => {
        setActiveIndex(filteredItems[0].id)
    }, [])

    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                title="E-shop"
            />

            <SectionNavbar
                items={filteredItems}
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
