import React from 'react'

import {
    LensesContainer,
    ImageContainer,
    SelectButton
} from './order-lenses-overview.styles'

const OrderLensesOverview = ({ product, handleClick }) => {
    const { name, image, description, dioptersRange, cylinderRange, price } = product

    return (
        <LensesContainer>
            <h3>{name}</h3>
            <ImageContainer>
                {image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${image.imagePath}`} alt={image.alt} />}
            </ImageContainer>


            <p>{description}</p>
            <p>Dioptrie od {dioptersRange[0]} do {dioptersRange[1]}</p>
            <p>Cylinder od {cylinderRange[0]} do {cylinderRange[1]}</p>

            <h4>+ {(price / 100).toFixed(2)}€</h4>

            {handleClick && <SelectButton onClick={handleClick}>Vybrať</SelectButton>}
        </LensesContainer>
    )
}

export default OrderLensesOverview
