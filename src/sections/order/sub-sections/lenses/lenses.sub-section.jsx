import React from 'react'

import OrderProductOverview from '../../../../components/order-product-overview/order-product-overview.component'

import {
    ProductContainer
} from '../../order.styles'

const LensesSubSection = ({ handleChangeStep, lenses, handleSelectLenses }) => {
    return (
        <React.Fragment>
            <button onClick={() => handleChangeStep(0)}>Back</button>
            <h1>LENSES PRODUCTS</h1>

            <ProductContainer>
                {
                    lenses.map((product, idx) => (
                        <OrderProductOverview key={idx} product={product} handleClick={e => handleSelectLenses(e, product)} />
                    ))
                }
            </ProductContainer>
            <button onClick={() => handleChangeStep(2)}>Next</button>
        </React.Fragment>
    )
}

export default LensesSubSection
