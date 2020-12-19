import React, { useState } from 'react'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'

import {
    ProductContainer,
    ProductImage,
    ProductContent,
    ProductId,
    StockInfo,
    Price,
    Options,
    UpdateButton,
    DeleteButton
} from './e-shop.styles'

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
            <div>

                {/* Single product */}
                <ProductContainer>

                    <ProductImage>
                        IMG
                    </ProductImage>

                    <ProductContent>
                        <h2>Product name</h2>
                        <ProductId>[product id]</ProductId>
                        <StockInfo>Na sklade [x] kusov</StockInfo>
                        <Price>99.99€</Price>
                    </ProductContent>

                    <Options>
                        <UpdateButton>
                            Upraviť
                        </UpdateButton>
                        <DeleteButton>
                            Vymazať
                        </DeleteButton>
                    </Options>
                </ProductContainer>

                <ProductContainer>

                    <ProductImage>
                        IMG
                    </ProductImage>

                    <ProductContent>
                        <h2>Product name</h2>
                        <ProductId>[product id]</ProductId>
                        <StockInfo>Na sklade [x] kusov</StockInfo>
                        <Price>99.99€</Price>
                    </ProductContent>

                    <Options>
                        <UpdateButton>
                            Upraviť
                        </UpdateButton>
                        <DeleteButton>
                            Vymazať
                        </DeleteButton>
                    </Options>
                </ProductContainer>

                <ProductContainer>

                    <ProductImage>
                        IMG
                    </ProductImage>

                    <ProductContent>
                        <h2>Product name</h2>
                        <ProductId>[product id]</ProductId>
                        <StockInfo>Na sklade [x] kusov</StockInfo>
                        <Price>99.99€</Price>
                    </ProductContent>

                    <Options>
                        <UpdateButton>
                            Upraviť
                        </UpdateButton>
                        <DeleteButton>
                            Vymazať
                        </DeleteButton>
                    </Options>
                </ProductContainer>

            </div>
        </section >
    )
}

export default EshopSection
