import React from 'react'

import {
    ProductContainer,
    ProductImage,
    ProductContent,
    ProductId,
    StockInfo,
    Price,
    Options,
    UpdateButton,
    DeleteButton,
} from './product-overview.styles'

const ProductOverview = (props) => {
    const { name, stock, id, price } = props

    return (
        <ProductContainer>
            <ProductImage>
                IMG
            </ProductImage>

            <ProductContent>
                <h2>{name}</h2>
                <ProductId>{id}</ProductId>
                <StockInfo>Na sklade {stock} kusov</StockInfo>
                <Price>{price}€</Price>
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
    )
}

export default ProductOverview
