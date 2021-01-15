import React from 'react'

import OrderProductOverview from '../../../../components/order-product-overview/order-product-overview.component'

import { FaLessThan } from 'react-icons/fa'

import {
    ProductContainer,
    BackButton,
    Title,
    NextButton
} from '../../order.styles'

const LensesSubSection = ({ handleChangeStep, lenses, handleSelectLenses }) => {
    return (
        <React.Fragment>
            <BackButton onClick={() => handleChangeStep(0)}><FaLessThan /></BackButton>
            <Title>LENSES PRODUCTS</Title>

            <ProductContainer>
                {
                    lenses.map((product, idx) => (
                        <OrderProductOverview key={idx} product={product} handleClick={e => handleSelectLenses(e, product)} />
                    ))
                }
            </ProductContainer>
            <NextButton onClick={() => handleChangeStep(2)}>Next</NextButton>
        </React.Fragment>
    )
}

export default LensesSubSection
