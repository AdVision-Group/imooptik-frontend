import React from 'react'

import {
    CombinedProductContainer,
    ProductsContainer,
    PriceContainer,
    ParametersContainer,
    RemoveButton,
} from './combined-product-overview.styles'

const CombinedProductOverview = ({ product, handleRemoveProduct }) => {

    return (
        <CombinedProductContainer>
            <ProductsContainer>
                <div>
                    <h3>ID Okuliarov</h3>
                    <p>{product.product}</p>
                </div>
                <div>
                    <h3>ID šošoviek</h3>
                    <p>{product.lens}</p>
                </div>
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
            <ParametersContainer>

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
            </ParametersContainer>
        </CombinedProductContainer>
    )
}

export default CombinedProductOverview
