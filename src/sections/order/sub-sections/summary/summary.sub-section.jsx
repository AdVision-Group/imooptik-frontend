import React from 'react'

import OrderProductOverview from '../../../../components/order-product-overview/order-product-overview.component'
import OrderLensesOverview from '../../../../components/order-lenses-overview/order-lenses-overview.component'
import CustomBackButton from '../../../../components/custom-back-button/custom-back-button.component'

import {
    AddProductButton,
    Title,
    SummaryParametersContainer,
    SummaryParameterCol,
    SubTitle
} from '../../order.styles'

const SummarySubSection = ({ handleChangeStep, selectedProduct, selectedLenses, combinedProduct, handleRemoveProduct, createCombinedProduct }) => {
    return (
        <React.Fragment>
            <CustomBackButton onClick={() => handleChangeStep(2)} />
            <Title>Prehľad produktu</Title>
            <SubTitle>Produkt</SubTitle>
            {selectedProduct && <OrderProductOverview product={selectedProduct} />}
            <SubTitle>Šošovky</SubTitle>
            {selectedLenses && <OrderLensesOverview product={selectedLenses} />}
            <SummaryParametersContainer>

                <SummaryParameterCol>
                    <h3>Parametre</h3>
                    <div>
                        <p>Ľave oko</p>
                    </div>
                    <div>
                        <p>Pravé oko</p>
                    </div>
                </SummaryParameterCol>
                <SummaryParameterCol>
                    <h3>Dioptrie</h3>
                    <div>
                        <p>{combinedProduct.lenses.diopters[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.diopters[1]}</p>
                    </div>
                </SummaryParameterCol>
                <SummaryParameterCol>
                    <h3>Vzdialenosť</h3>
                    <div>
                        <p>{combinedProduct.lenses.distance[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.distance[1]}</p>
                    </div>
                </SummaryParameterCol>

                <SummaryParameterCol>
                    <h3>Cylinder</h3>
                    <div>
                        <p>{combinedProduct.lenses.cylinder[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.cylinder[1]}</p>
                    </div>
                </SummaryParameterCol>

                <SummaryParameterCol>
                    <h3>Os cylindrov</h3>
                    <div>
                        <p>{combinedProduct.lenses.cylinderAxes[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.cylinderAxes[1]}</p>
                    </div>
                </SummaryParameterCol>
            </SummaryParametersContainer>

            <AddProductButton onClick={() => createCombinedProduct(combinedProduct)}>Pridať do objednávky</AddProductButton>
        </React.Fragment>
    )
}

export default SummarySubSection
