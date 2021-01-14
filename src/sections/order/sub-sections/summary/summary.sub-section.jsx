import React from 'react'

import OrderProductOverview from '../../../../components/order-product-overview/order-product-overview.component'

import {
    AddProductButton
} from '../../order.styles'

const SummarySubSection = ({ handleChangeStep, selectedProduct, selectedLenses, combinedProduct, handleRemoveProduct }) => {
    return (
        <React.Fragment>
            <button onClick={() => handleChangeStep(2)}>Back</button>
            <h1>Summary</h1>
            <h2>Produkt</h2>
            <OrderProductOverview product={selectedProduct} handleRemoveProduct={(e) => handleRemoveProduct(e, selectedProduct)} />
            <h2>Šošovky</h2>
            <OrderProductOverview product={selectedLenses} handleRemoveProduct={(e) => handleRemoveProduct(e, selectedLenses)} />
            <h2>Parametre</h2>
            <div>
                <h3>Dioptrie</h3>
                <div>
                    <p>Ľave oko</p>
                    <p>{combinedProduct.lenses.diopters[0]}</p>
                </div>
                <div>
                    <p>Pravé oko</p>
                    <p>{combinedProduct.lenses.diopters[0]}</p>
                </div>
            </div>
            <div>
                <h3>Vzdialenosť</h3>
                <div>
                    <p>Ľave oko</p>
                    <p>{combinedProduct.lenses.distance[0]}</p>
                </div>
                <div>
                    <p>Pravé oko</p>
                    <p>{combinedProduct.lenses.distance[0]}</p>
                </div>
            </div>

            <div>
                <h3>Cylinder</h3>
                <div>
                    <p>Ľave oko</p>
                    <p>{combinedProduct.lenses.cylinder[0]}</p>
                </div>
                <div>
                    <p>Pravé oko</p>
                    <p>{combinedProduct.lenses.cylinder[0]}</p>
                </div>
            </div>

            <div>
                <h3>Os cylindrov</h3>
                <div>
                    <p>Ľave oko</p>
                    <p>{combinedProduct.lenses.cylinderAxes[0]}</p>
                </div>
                <div>
                    <p>Pravé oko</p>
                    <p>{combinedProduct.lenses.cylinderAxes[0]}</p>
                </div>
            </div>

            <AddProductButton>Pridať</AddProductButton>
        </React.Fragment>
    )
}

export default SummarySubSection
