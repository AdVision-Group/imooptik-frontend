import React from 'react'

import {
    formatAvailable
} from '../../context/warehouse/warehouse.utils'

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
    PriceContainer
} from './product-overview.styles'

const ProductOverview = ({ product, handleDeleteButton, handleUpdateButton, activePremisesTab }) => {
    const { name, available, id, price, image } = product


    return (
        <ProductContainer>
            <ProductImage>
                {image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${image.imagePath}`} alt={image.alt} />}
            </ProductImage>

            <ProductContent>
                <h2>{name}</h2>
                <ProductId>{id}</ProductId>

            </ProductContent>

            <PriceContainer>
                <Price>{(price / 100).toFixed(2)}€</Price>
                <StockInfo>{formatAvailable(available, activePremisesTab)}</StockInfo>
            </PriceContainer>

            <Options>
                <UpdateButton onClick={handleUpdateButton}>
                    Upraviť
                </UpdateButton>
                <DeleteButton onClick={handleDeleteButton}>
                    Vymazať
                </DeleteButton>
            </Options>
        </ProductContainer>
    )
}

export default ProductOverview
