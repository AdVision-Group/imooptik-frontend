import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'
import ProductInputRow from '../product-input-row/product-input-row.component'

import {
    FormCheckbox,
    TextareaRow,
    CustomSelect,
    Title
} from './product-glasses-form.styles.jsx'

const ProductGlassesForm = ({ product, handleChange, setProduct }) => {
    return (
        <div>
            <h3>Základné informacie</h3>
            <ProductInputRow
                label="Unikátny kód produktu"
                example="napr: 123abx"
            >
                <CustomInput
                    label="Ean kód*"
                    type='text'
                    name='eanCode'
                    value={product.eanCode}
                    handleChange={(e) => handleChange(e)}
                    required
                />
            </ProductInputRow>
            <ProductInputRow
                label="Názov produktu"
                example="napr: Super brejle"
            >
                <CustomInput
                    label="Názov*"
                    type='text'
                    name='name'
                    value={product.name}
                    handleChange={(e) => handleChange(e)}
                    required

                />
            </ProductInputRow>
            <ProductInputRow
                label="Značka"
                example="napr: Abrejlas"
            >
                <CustomInput
                    label="Značka"
                    type='text'
                    name='brandName'
                    value={product.brandName}
                    handleChange={(e) => handleChange(e)}
                />
            </ProductInputRow>
            <ProductInputRow
                label="Cena v centoch"
                example="napr: 1055 = 10,55€"
            >
                <CustomInput
                    label="Cena*"
                    type='number'
                    name='price'
                    value={product.price}
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
                        value={product.description}
                        handleChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <p>Popis produktu</p>
                </div>
            </TextareaRow>



            <h3>Špecifikacie</h3>
            <ProductInputRow
                label="Farebný kód produktu"
                example="napr: 02AR"
            >
                <CustomInput
                    label="Color code"
                    type='text'
                    name='colorCode'
                    value={product.colorCode}
                    handleChange={(e) => handleChange(e)}
                />
            </ProductInputRow>
            <ProductInputRow
                label="Pohlavie pre ktoré je produkt určený"
                example=""
            >
                <CustomSelect name='sex' value={product.sex} onChange={e => handleChange(e)}>
                    <option value='M'>Muži</option>
                    <option value='W'>Ženy</option>
                    <option value='U'>Nezáleží</option>
                </CustomSelect>
            </ProductInputRow>

            <ProductInputRow
                label="Farba"
                example="napr: čierna"
            >
                <CustomInput
                    label="Farba rámu"
                    type='text'
                    name='rimColor'
                    value={product.rimColor}
                    handleChange={(e) => handleChange(e)}
                />
            </ProductInputRow>
            <ProductInputRow
                label="Materiál"
                example="napr: titán"
            >
                <CustomInput
                    label="Materiál rámu"
                    type='text'
                    name='rimMaterial'
                    value={product.rimMaterial}
                    handleChange={(e) => handleChange(e)}
                />
            </ProductInputRow>
            <ProductInputRow
                label="Tvar"
                example="napr: okruhlý"
            >
                <CustomInput
                    label="Tvar rámu"
                    type='text'
                    name='rimShape'
                    value={product.rimShape}
                    handleChange={(e) => handleChange(e)}
                />
            </ProductInputRow>
            <ProductInputRow
                label="Farba skla"
                example="napr: prehliadna"
            >
                <CustomInput
                    label="Farba"
                    type='text'
                    name='lensColor'
                    value={product.lensColor}
                    handleChange={(e) => handleChange(e)}
                />
            </ProductInputRow>

            <Title>Velikosť</Title>

            {product.size.map((value, idx) => {
                const newArr = product.size
                const handleArrChange = (e) => {
                    newArr[idx] = e.target.value
                    setProduct({
                        ...product,
                        size: newArr
                    })
                }

                return (
                    <ProductInputRow
                        key={idx}
                        label={`Velkosť`}
                        example="napr: 0"
                    >
                        <CustomInput
                            label={`${idx}`}
                            type='number'
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

export default ProductGlassesForm
