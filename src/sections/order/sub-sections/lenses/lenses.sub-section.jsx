import React from 'react'

import OrderProductOverview from '../../../../components/order-product-overview/order-product-overview.component'

import { FaLessThan } from 'react-icons/fa'

import {
    ProductContainer,
    BackButton
} from '../../order.styles'

const LensesSubSection = ({ handleChangeStep, lenses, handleSelectLenses }) => {
    return (
        <React.Fragment>
            <h1>LENSES PRODUCTS</h1>

            <BackButton onClick={() => handleChangeStep(0)}><FaLessThan /></BackButton>
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
