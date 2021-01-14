import React from 'react'

import CustomInput from '../../../../components/custom-input/custom-input.component'

const DioptersSubSection = ({ handleChangeStep, combinedProduct }) => {
    return (
        <React.Fragment>
            <button onClick={() => handleChangeStep(1)}>Back</button>

            <div>
                <div>
                    <div>
                        <h1>Dioptrie</h1>
                    </div>
                    <div>
                        <CustomInput
                            label="Ľavé oko"
                            type='text'
                            name='city'
                            value={combinedProduct.lenses.diopters[0].toString()}
                        // handleChange={(e) => handleDioptersChange(e, 0)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Pravé oko"
                            type='text'
                            name='state'
                            value={combinedProduct.lenses.diopters[1].toString()}
                        // handleChange={(e) => handleDioptersChange(e, 1)}
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
                            type='text'
                            name='city'
                            value={combinedProduct.lenses.distance[0].toString()}
                        // handleChange={(e) => handleDistanceChange(e, 0)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Pravé oko"
                            type='text'
                            name='state'
                            value={combinedProduct.lenses.distance[1].toString()}
                        // handleChange={(e) => handleDistanceChange(e, 1)}
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
                            type='text'
                            name='city'
                            value={combinedProduct.lenses.cylinder[0].toString()}
                        // handleChange={(e) => handleCylinderChange(e, 0)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Pravé oko"
                            type='text'
                            name='state'
                            value={combinedProduct.lenses.cylinder[1].toString()}
                        // handleChange={(e) => handleCylinderChange(e, 1)}
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
                            type='text'
                            name='city'
                            value={combinedProduct.lenses.cylinderAxes[0].toString()}
                        // handleChange={(e) => handleCylinderAxesChange(e, 0)}
                        />
                    </div>
                    <div>
                        <CustomInput
                            label="Pravé oko"
                            type='text'
                            name='state'
                            value={combinedProduct.lenses.cylinderAxes[1].toString()}
                        // handleChange={(e) => handleCylinderAxesChange(e, 1)}
                        />
                    </div>
                </div>
            </div>

            <button onClick={() => handleChangeStep(3)}>Next</button>
        </React.Fragment>
    )
}

export default DioptersSubSection
