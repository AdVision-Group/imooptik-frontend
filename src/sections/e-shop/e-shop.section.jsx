import React, { useState } from 'react'

import SectionHeader from '../../components/section-header/section-header.component'

import {
    NavbarContainer,
    NavButton,
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

    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                title="E-shop"
            />

            <NavbarContainer>
                <ul>
                    <li>
                        <NavButton >Všetko</NavButton>
                    </li>
                    <li>
                        <NavButton>Prevadzka 1</NavButton>
                    </li>
                    <li>
                        <NavButton active>Prevadzka 2</NavButton>
                    </li>
                    <li>
                        <NavButton>Prevadzka 3</NavButton>
                    </li>
                    <li>
                        <NavButton>Prevadzka 4</NavButton>
                    </li>
                </ul>
            </NavbarContainer>

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
        </section>
    )
}

export default EshopSection
