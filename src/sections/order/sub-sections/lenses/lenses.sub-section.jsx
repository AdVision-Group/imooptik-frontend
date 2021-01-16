import React from 'react'

import OrderLensesOverview from '../../../../components/order-lenses-overview/order-lenses-overview.component'
import CustomBackButton from '../../../../components/custom-back-button/custom-back-button.component'

import {
    ProductContainer,
    Title,
    NextButton
} from '../../order.styles'

const LensesSubSection = ({ handleChangeStep, lenses, handleSelectLenses }) => {
    return (
        <React.Fragment>
            <CustomBackButton onClick={() => handleChangeStep(0)} />
            <Title>LENSES PRODUCTS</Title>

            <ProductContainer>
                {lenses.map((product, idx) => (
                    <OrderLensesOverview key={idx} product={product} handleClick={e => handleSelectLenses(e, product)} />
                ))}
            </ProductContainer>
            <NextButton onClick={() => handleChangeStep(2)}>Next</NextButton>
        </React.Fragment>
    )
}

export default LensesSubSection
