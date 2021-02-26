import React, { useState, useEffect } from 'react'

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

const ProductOverview = ({
    product,
    handleDeleteButton,
    handleUpdateButton,
    activePremisesTab,
    selectProduct,
    deselectProduct,
    selectedProducts,
}) => {
    const { name, available, eanCode, price, image, type } = product
    const [isSelected, setIsSelected] = useState(false)

    const handleSelect = (productId, isSelect) => {
        if (isSelect) {
            deselectProduct(selectedProducts, productId)
            setIsSelected(false)
        } else {
            selectProduct(productId)
            setIsSelected(true)
        }
    }

    useEffect(() => {
        if (selectedProducts.length === 0) setIsSelected(false)
    }, [selectedProducts])

    return (
        <ProductContainer>


            <ProductImage>
                {image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${image.imagePath}`} alt={image.alt} />}
            </ProductImage>

            <ProductContent>
                <h2>{name}</h2>
                <ProductId>{eanCode}</ProductId>

            </ProductContent>

            <PriceContainer>
                <div>
                    <input id="selected" name='selected' type='checkbox' checked={isSelected} onChange={() => handleSelect(product._id, isSelected)} />
                </div>
                <Price>{(price / 100).toFixed(2)}€</Price>
                <StockInfo>{type === 6 ? "Služba" : formatAvailable(available, activePremisesTab)}</StockInfo>
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
