import React from 'react'

import CustomInput from '../../../../components/custom-input/custom-input.component'

import {
    FaLessThan
} from 'react-icons/fa'

import {
    BackButton
} from '../../order.styles'

const DioptersSubSection = ({ handleChangeStep, combinedProduct, handleParameterChange }) => {
    return (
        <React.Fragment>
            <BackButton onClick={() => handleChangeStep(1)}><FaLessThan /></BackButton>

            <div>
                <div>
                    <div>
                        <h1>Dioptrie</h1>
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
                        <h1>Vzdialenosť</h1>
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
                        <h1>Cylinder</h1>
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
                        <h1>Os cylindrov</h1>
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
            </div>

            <button onClick={() => handleChangeStep(3)}>Next</button>
        </React.Fragment>
    )
}

export default DioptersSubSection
