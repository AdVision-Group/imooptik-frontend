import React from 'react'

import CustomInput from '../../../../components/custom-input/custom-input.component'
import CustomBackButton from '../../../../components/custom-back-button/custom-back-button.component'

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

            <ParametersContainer>
                <div>
                    <div>
                        <h3>Dioptrie</h3>
                    </div>
                    <div>
                        <CustomInput
                            label="Ľavé oko"
                            type='number'
                            name='diopters'
                            value={combinedProduct.lenses.diopters[0].toString()}
                            handleChange={(e) => handleParameterChange(e, 0)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Pravé oko"
                            type='number'
                            name='diopters'
                            value={combinedProduct.lenses.diopters[1].toString()}
                            handleChange={(e) => handleParameterChange(e, 1)}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Vzdialenosť</h3>
                    </div>
                    <div>
                        <CustomInput
                            label="Ľavé oko"
                            type='number'
                            name='distance'
                            value={combinedProduct.lenses.distance[0].toString()}
                            handleChange={(e) => handleParameterChange(e, 0)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Pravé oko"
                            type='number'
                            name='distance'
                            value={combinedProduct.lenses.distance[1].toString()}
                            handleChange={(e) => handleParameterChange(e, 1)}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Cylinder</h3>
                    </div>
                    <div>
                        <CustomInput
                            label="Ľavé oko"
                            type='number'
                            name='cylinder'
                            value={combinedProduct.lenses.cylinder[0].toString()}
                            handleChange={(e) => handleParameterChange(e, 0)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Pravé oko"
                            type='number'
                            name='cylinder'
                            value={combinedProduct.lenses.cylinder[1].toString()}
                            handleChange={(e) => handleParameterChange(e, 1)}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Os cylindrov</h3>
                    </div>
                    <div>
                        <CustomInput
                            label="Ľavé oko"
                            type='number'
                            name='cylinderAxes'
                            value={combinedProduct.lenses.cylinderAxes[0].toString()}
                            handleChange={(e) => handleParameterChange(e, 0)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Pravé oko"
                            type='number'
                            name='cylinderAxes'
                            value={combinedProduct.lenses.cylinderAxes[1].toString()}
                            handleChange={(e) => handleParameterChange(e, 1)}
                        />
                    </div>
                </div>
            </ParametersContainer>

            <NextButton onClick={() => handleChangeStep(3)}>Next</NextButton>
        </React.Fragment>
    )
}

export default DioptersSubSection
