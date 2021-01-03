import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'
import ProductInputRow from '../product-input-row/product-input-row.component'

import {
    TextareaRow
} from './product-lenses-form.styles'

const ProductLensesForm = ({ lense, setLense, handleChange }) => {
    return (
        <div>
            <h3>Základné informacie</h3>
            <ProductInputRow
                label="Názov šošoviek"
                example="napr: Super čočka"
            >
                <CustomInput
                    label="Názov"
                    type='text'
                    name='name'
                    value={lense.name}
                    handleChange={(e) => handleChange(e)}
                    required

                />
            </ProductInputRow>
            <ProductInputRow
                label="Značka"
                example="napr: Čočodas"
            >
                <CustomInput
                    label="Značka"
                    type='text'
                    name='brand'
                    value={lense.brand}
                    handleChange={(e) => handleChange(e)}
                    required

                />
            </ProductInputRow>
            <ProductInputRow
                label="Cena v centoch"
                example="napr: 1055 = 10,55€"
            >
                <CustomInput
                    label="Cena"
                    type='text'
                    name='price'
                    value={lense.price.toString()}
                    handleChange={(e) => handleChange(e)}
                    required

                />
            </ProductInputRow>
            <TextareaRow>
                <div>
                    <CustomTextarea
                        label="Popis"
                        name='description'
                        rows='5'
                        value={lense.description}
                        handleChange={(e) => handleChange(e)}
                        required

                    />
                </div>
                <div>
                    <p>Popis produktu</p>
                </div>
            </TextareaRow>

            <h3>Špecifikacie</h3>

            {lense && lense.dioptersRange.map((value, idx) => {
                const newArr = lense.dioptersRange
                const handleArrChange = (e) => {
                    newArr[idx] = e.target.value
                    setLense({
                        ...lense,
                        dioptersRange: newArr
                    })
                }

                return (
                    <ProductInputRow
                        key={idx}
                        label={`Dioptrie`}
                        example="napr: 0"
                    >
                        <CustomInput
                            label={idx === 0 ? "minimum" : "maximum"}
                            type='text'
                            // name={store.name}
                            value={value.toString()}
                            handleChange={e => handleArrChange(e)}
                        />
                    </ProductInputRow>
                )
            })}

            {lense && lense.cylinderRange.map((value, idx) => {
                const newArr = lense.cylinderRange
                const handleArrChange = (e) => {
                    newArr[idx] = e.target.value
                    setLense({
                        ...lense,
                        cylinderRange: newArr
                    })
                }

                return (
                    <ProductInputRow
                        key={idx}
                        label={`Cylinder`}
                        example="napr: 0"
                    >
                        <CustomInput
                            label={idx === 0 ? "minimum" : "maximum"}
                            type='text'
                            // name={store.name}
                            value={value.toString()}
                            handleChange={e => handleArrChange(e)}
                        />
                    </ProductInputRow>
                )
            })}
        </div>
    )
}

export default ProductLensesForm
