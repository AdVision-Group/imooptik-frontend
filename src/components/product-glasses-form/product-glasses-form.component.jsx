import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'
import ProductInputRow from '../product-input-row/product-input-row.component'

import {
    FormCheckbox,
    TextareaRow,
    CustomSelect
} from './product-glasses-form.styles.jsx'

const ProductGlassesForm = ({ product, handleChange, setProduct }) => {
    return (
        <div>
            <h3>Základné informacie</h3>
            <ProductInputRow
                label={" "}
            >
                <FormCheckbox
                    label="Top produkt"
                    isActive={product.topProduct}
                    handleClick={() => setProduct({ ...product, topProduct: !product.topProduct })}
                />
            </ProductInputRow>
            <ProductInputRow
                label="Unikátny kód produktu"
                example="napr: 123abx"
            >
                <CustomInput
                    label="Ean kód"
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
                    label="Názov"
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
                        required

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
                    required
                />
            </ProductInputRow>
            <ProductInputRow
                label="Pohlavie pre ktoré je produkt určený"
                example=""
            >
                <CustomSelect name='sex' value={product.sex} onChange={e => handleChange(e)}>
                    <option value='men'>Muži</option>
                    <option value='women'>Ženy</option>
                    <option value='unisex'>Nezáleží</option>
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
                    required
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
                    required
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
                    required
                />
            </ProductInputRow>
        </div>
    )
}

export default ProductGlassesForm
