import React from 'react'

import {
    ProductContainer,
    ImageContainer,
    AddButton,
    RemoveButton
} from './order-product-overview.styles'

const OrderProductOverview = ({ product, handleClick, handleRemoveProduct }) => {
    const { image, name, price, eanCode } = product

    return (
        <ProductContainer>
            <ImageContainer>
                {image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${image.imagePath}`} alt={image.alt} />}
            </ImageContainer>

            <h3>{name}</h3>
            <span>{eanCode}</span>

            <p>{(price / 100).toFixed(2)}€</p>

            {handleClick && <AddButton onClick={handleClick}>Vybrať</AddButton>}
            {handleRemoveProduct && <RemoveButton onClick={handleRemoveProduct}>Odstrániť</RemoveButton>}
        </ProductContainer>
    )
}

export default OrderProductOverview
