import React from 'react'

import {
    ProductContainer,
    ImageContainer
} from './order-product-overview.styles'

const OrderProductOverview = ({ product }) => {
    const { image, name, price } = product
    console.log(product)

    return (
        <ProductContainer>
            <ImageContainer>
                {image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${image.imagePath}`} alt={image.alt} />}
            </ImageContainer>

            <h3>{name}</h3>

            <p>{(price / 100).toFixed(2)}€</p>

            <button>Pridať</button>
        </ProductContainer>
    )
}

export default OrderProductOverview
