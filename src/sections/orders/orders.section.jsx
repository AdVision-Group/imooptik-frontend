import React, { useState } from 'react'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'

import {
    OrderContainer,
    OrderContent,
    Options,
    OrderId,
    Date,
    DeleteButton,
    Price,
    UpdateButton
} from './orders.styles'

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

                <OrderContainer>

                    <OrderContent>
                        <h2>Product name</h2>
                        <OrderId>[product id]</OrderId>
                        <Date>28. November 2020</Date>
                        <Price>99.99€</Price>
                    </OrderContent>

                    <Options>
                        <UpdateButton>
                            Upraviť
                        </UpdateButton>
                        <DeleteButton>
                            Vymazať
                        </DeleteButton>
                    </Options>

                </OrderContainer>

                <OrderContainer>

                    <OrderContent>
                        <h2>Product name</h2>
                        <OrderId>[product id]</OrderId>
                        <Date>28. November 2020</Date>
                        <Price>99.99€</Price>
                    </OrderContent>

                    <Options>
                        <UpdateButton>
                            Upraviť
                        </UpdateButton>
                        <DeleteButton>
                            Vymazať
                        </DeleteButton>
                    </Options>

                </OrderContainer>

                <OrderContainer>

                    <OrderContent>
                        <h2>Product name</h2>
                        <OrderId>[product id]</OrderId>
                        <Date>28. November 2020</Date>
                        <Price>99.99€</Price>
                    </OrderContent>

                    <Options>
                        <UpdateButton>
                            Upraviť
                        </UpdateButton>
                        <DeleteButton>
                            Vymazať
                        </DeleteButton>
                    </Options>

                </OrderContainer>
                <OrderContainer>

                    <OrderContent>
                        <h2>Product name</h2>
                        <OrderId>[product id]</OrderId>
                        <Date>28. November 2020</Date>
                        <Price>99.99€</Price>
                    </OrderContent>

                    <Options>
                        <UpdateButton>
                            Upraviť
                        </UpdateButton>
                        <DeleteButton>
                            Vymazať
                        </DeleteButton>
                    </Options>

                </OrderContainer>
            </ScrollContainer>
        </section>
    )
}

export default OrdersSection
