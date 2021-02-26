import React, { useState } from 'react'

import ModelInfoContainer from '../modal-info-container/modal-info-container.component'

import {
    CombinedProductContainer,
    ProductsContainer,
    PriceContainer,
    ParametersContainer,
    RemoveButton,
} from './combined-product-overview.styles'

const CombinedProductOverview = ({ product, handleRemoveProduct }) => {
    const [showModal, setShowModal] = useState(false)
    const [productType, setProductType] = useState('')

    const handleMouseHover = (boolean, type) => {
        setShowModal(boolean)
        setProductType(type)
    }

    const closeModal = () => {
        setShowModal(false)
        setProductType('')
    }

    return (
        <CombinedProductContainer>
            {showModal && <ModelInfoContainer product={product} productType={productType} closeModal={closeModal} />}
            <ProductsContainer>
                <div>
                    <h3>ID produktu</h3>
                    <p onClick={() => handleMouseHover(true, 'product')}>{product.product}</p>
                </div>
                {product.lens && <div>
                    <h3>ID šošoviek</h3>
                    <p onClick={() => handleMouseHover(true, 'lens')}>{product.lens}</p>
                </div>}
            </ProductsContainer>
            <PriceContainer>
                <div>
                    <RemoveButton onClick={handleRemoveProduct}>
                        Vymazat
                    </RemoveButton>
                </div>

                <div>
                    <h3>Cena</h3>
                    <p>{(product.price / 100).toFixed(2)}€</p>
                </div>

            </PriceContainer>
            {product.lenses.diopters.length ? <ParametersContainer>

                <div>
                    <h3>Parametre</h3>
                    <div>
                        <p>Ľave oko</p>
                    </div>
                    <div>
                        <p>Pravé oko</p>
                    </div>
                </div>
                <div>
                    <h3>Dioptrie</h3>
                    <div>
                        <p>{product.lenses.diopters[0]}</p>
                    </div>
                    <div>
                        <p>{product.lenses.diopters[1]}</p>
                    </div>
                </div>
                <div>
                    <h3>Vzdialenosť</h3>
                    <div>
                        <p>{product.lenses.distance[0]}</p>
                    </div>
                    <div>
                        <p>{product.lenses.distance[1]}</p>
                    </div>
                </div>

                <div>
                    <h3>Cylinder</h3>
                    <div>
                        <p>{product.lenses.cylinder[0]}</p>
                    </div>
                    <div>
                        <p>{product.lenses.cylinder[1]}</p>
                    </div>
                </div>

                <div>
                    <h3>Os cylindrov</h3>
                    <div>
                        <p>{product.lenses.cylinderAxes[0]}</p>
                    </div>
                    <div>
                        <p>{product.lenses.cylinderAxes[1]}</p>
                    </div>
                </div>
            </ParametersContainer> : null}
        </CombinedProductContainer>
    )
}

export default CombinedProductOverview
