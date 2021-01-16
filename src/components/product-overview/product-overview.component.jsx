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
    PriceContainer
} from './product-overview.styles'

const ProductOverview = (props) => {
    const { name, stock, id, price, image, handleDeleteButton, handleUpdateButton } = props

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
                <Price>{price}€</Price>
                <StockInfo>{stock != null ? `Na sklade ${stock} kusov` : "Šošovka"}</StockInfo>
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
