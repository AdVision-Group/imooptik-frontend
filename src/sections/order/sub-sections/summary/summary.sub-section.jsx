import React from 'react'

import OrderProductOverview from '../../../../components/order-product-overview/order-product-overview.component'
import OrderLensesOverview from '../../../../components/order-lenses-overview/order-lenses-overview.component'
import CustomBackButton from '../../../../components/custom-back-button/custom-back-button.component'

import {
    AddProductButton,
    Title,
    SummaryParametersContainer,
    SummaryParameterTitleCol,
    SummaryParameterCol,
    SubTitle
} from '../../order.styles'

const SummarySubSection = ({ handleChangeStep, selectedProduct, selectedLenses, combinedProduct, handleRemoveProduct, createCombinedProduct }) => {
    return (
        <React.Fragment>
            <CustomBackButton onClick={() => handleChangeStep(selectedLenses ? 2 : 0)} />
            <Title>Prehľad produktu</Title>
            <SubTitle>Produkt</SubTitle>
            {selectedProduct && <OrderProductOverview product={selectedProduct} />}
            {selectedLenses && <SubTitle>Šošovky</SubTitle>}
            {selectedLenses && <OrderLensesOverview product={selectedLenses} />}
            {selectedProduct.type !== 5 && selectedProduct.type !== 4 && < SummaryParametersContainer >
                <SummaryParameterTitleCol>
                    <h3>Parametre</h3>
                    <div>
                        <p>Ľave oko -</p>
                    </div>
                    <div>
                        <p>Pravé oko -</p>
                    </div>
                    <div>
                        <p>Ľave oko +</p>
                    </div>
                    <div>
                        <p>Pravé oko +</p>
                    </div>
                </SummaryParameterTitleCol>
                <SummaryParameterCol>
                    <h3>Dioptrie</h3>
                    <div>
                        <p>{combinedProduct.lenses.diopters[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.diopters[1]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.diopters[2]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.diopters[3]}</p>
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
                    <div>
                        <p>{combinedProduct.lenses.cylinder[2]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.cylinder[3]}</p>
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
                    <div>
                        <p>{combinedProduct.lenses.cylinderAxes[2]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.cylinderAxes[3]}</p>
                    </div>
                </SummaryParameterCol>
                <SummaryParameterCol>
                    <h3>Prizma</h3>
                    <div>
                        <p>{combinedProduct.lenses.prism[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.prism[1]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.prism[2]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.prism[3]}</p>
                    </div>
                </SummaryParameterCol>
                <SummaryParameterCol>
                    <h3>Basis</h3>
                    <div>
                        <p>{combinedProduct.lenses.basis[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.basis[1]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.basis[2]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.basis[3]}</p>
                    </div>
                </SummaryParameterCol>
                <SummaryParameterCol>
                    <h3>Vrstva</h3>
                    <div>
                        <p>{combinedProduct.lenses.addition[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.addition[1]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.addition[2]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.addition[3]}</p>
                    </div>
                </SummaryParameterCol>
                <SummaryParameterCol>
                    <h3>P.D.</h3>
                    <div>
                        <p>{combinedProduct.lenses.distance[0]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.distance[1]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.distance[2]}</p>
                    </div>
                    <div>
                        <p>{combinedProduct.lenses.distance[3]}</p>
                    </div>
                </SummaryParameterCol>

            </SummaryParametersContainer>}

            <AddProductButton onClick={() => createCombinedProduct(combinedProduct)}>Pridať do objednávky</AddProductButton>
        </React.Fragment >
    )
}

export default SummarySubSection
