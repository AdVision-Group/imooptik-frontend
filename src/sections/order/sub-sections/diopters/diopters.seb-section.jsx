import React from 'react'

import CustomBackButton from '../../../../components/custom-back-button/custom-back-button.component'
import ParametersTable from '../../../../components/parameters-table/parameters-table.component'

import {
    Title,
    ParametersContainer,
    NextButton
} from '../../order.styles'

const DioptersSubSection = ({ handleChangeStep, combinedProduct, handleParameterChange }) => {
    return (
        <React.Fragment>
            <CustomBackButton onClick={() => handleChangeStep(1)} />
            <Title>Parametre</Title>

            <ParametersTable
                parameters={combinedProduct.lenses}
                handleChange={handleParameterChange}
            />

            <NextButton onClick={() => handleChangeStep(3)}>Next</NextButton>
        </React.Fragment>
    )
}

export default DioptersSubSection
