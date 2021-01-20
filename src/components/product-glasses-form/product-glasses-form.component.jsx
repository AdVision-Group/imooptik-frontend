import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'
import ProductInputRow from '../product-input-row/product-input-row.component'

import {
    TextareaRow,
    CustomSelect,
    Title,
    CategoryContainer,
    CategoryCheckbox,
    CategoryTitle,
} from './product-glasses-form.styles.jsx'

import { brands, retailNames } from '../../context/warehouse/warehouse.utils'


const ProductGlassesForm = ({
    product,
    handleChange,
    handleSizeChange,
    handleSpecsChange,
    handleAvailableChange,
    categories,
    handleCategoryChange,
    activeCategoryIndex,
    lensesParameters,
    handleParameterChange,
    currentUser,
}) => {

    return (
        <React.Fragment>

            <div>
                <CategoryTitle>Kategória</CategoryTitle>
                <CategoryContainer>
                    {
                        categories.map((category, idx) => {
                            return (
                                <CategoryCheckbox
                                    key={idx}
                                    label={category.name}
                                    value={category.value}
                                    name='type'
                                    isActive={category.value === activeCategoryIndex}
                                    handleClick={() => handleCategoryChange(category.value)}
                                />
                            )
                        })
                    }
                </CategoryContainer>
            </div>
            <div>

                <h3>Základné informacie</h3>
                <ProductInputRow
                    label="Unikátny kód produktu"
                    example=""
                >
                    <CustomInput
                        label="Ean kód*"
                        type='text'
                        name='eanCode'
                        value={product.eanCode.toString()}
                        handleChange={(e) => handleChange(e)}
                        required
                    />
                </ProductInputRow>
                <ProductInputRow
                    label="Názov produktu"
                    example="napr: Tommy Hilfiger"
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
                    example="napr: Tommy Hilfiger"
                >
                    <CustomInput
                        label="Značka"
                        type='text'
                        name='brand'
                        value={product.brand}
                        handleChange={(e) => handleChange(e)}
                        list={"brands"}
                        autoComplete='off'
                    />
                    <datalist id="brands">
                        {brands.map(brand => (
                            <option key={brand} value={brand} />
                        ))}
                    </datalist>
                </ProductInputRow>
                <ProductInputRow
                    label="Cena"
                    example="napr: 10,55€"
                >
                    <CustomInput
                        label="Cena*"
                        type='number'
                        name='price'
                        value={product.price.toString()}
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

                {/* {
                    product.type === 4 && (
                        <React.Fragment>
                            <h3>Parametre</h3>
                            <ProductInputRow
                                label={`Dioptrie`}
                                example="napr: 0"
                            >
                                <CustomInput
                                    label={"minimum"}
                                    type='number'
                                    name='diopters'
                                    value={lensesParameters.diopters[0].toString()}
                                    handleChange={e => handleParameterChange(e, 0)}
                                />
                            </ProductInputRow>
                            <ProductInputRow
                                label={`Dioptrie`}
                                example="napr: 0"
                            >
                                <CustomInput
                                    label={"maximum"}
                                    type='number'
                                    value={""}
                                    name='diopters'
                                    value={lensesParameters.diopters[1].toString()}
                                    handleChange={e => handleParameterChange(e, 1)}
                                />
                            </ProductInputRow>
                            <ProductInputRow
                                label={``}
                                example="napr: 8.5"
                            >
                                <CustomInput
                                    label={"Zakrivenie"}
                                    type='number'
                                    value={""}
                                    name='curvature'
                                    value={lensesParameters.curvature.toString()}
                                // handleChange={e => handleLensesDioptersRangeChange(e, idx)}
                                />
                            </ProductInputRow>
                            <ProductInputRow
                                label={``}
                                example="napr: 14"
                            >
                                <CustomInput
                                    label={"Priemer"}
                                    type='number'
                                    value={""}
                                    name="average"
                                    value={lensesParameters.average.toString()}
                                // handleChange={e => handleLensesDioptersRangeChange(e, idx)}
                                />
                            </ProductInputRow>
                        </React.Fragment>
                    )
                } */}

                {
                    !(product.type === 5 || product.type === 4) && (
                        <React.Fragment>
                            <h3>Špecifikacie</h3>
                            <ProductInputRow
                                label="Farebný kód produktu"
                                example="napr: #000000"
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
                                <CustomSelect name='sex' value={product.specs.sex} onChange={e => handleSpecsChange(e)}>
                                    <option value='M'>Pánske</option>
                                    <option value='W'>Dámske</option>
                                    <option value='D'>Detské</option>
                                    <option value='U'>Nezáleží</option>
                                </CustomSelect>
                            </ProductInputRow>

                            <ProductInputRow
                                label="Farba"
                                example="napr: Čierna"
                            >
                                <CustomInput
                                    label="Farba rámu"
                                    type='text'
                                    name='frameColor'
                                    value={product.specs.frameColor}
                                    handleChange={(e) => handleSpecsChange(e)}
                                />
                            </ProductInputRow>
                            <ProductInputRow
                                label="Materiál"
                                example="napr: Titán"
                            >
                                <CustomInput
                                    label="Materiál rámu"
                                    type='text'
                                    name='frameMaterial'
                                    value={product.specs.frameMaterial}
                                    handleChange={(e) => handleSpecsChange(e)}
                                />
                            </ProductInputRow>
                            <ProductInputRow
                                label="Tvar"
                                example="napr: Okruhlý"
                            >
                                <CustomInput
                                    label="Tvar rámu"
                                    type='text'
                                    name='frameStyle'
                                    value={product.specs.frameStyle}
                                    handleChange={(e) => handleSpecsChange(e)}
                                />
                            </ProductInputRow>
                            <ProductInputRow
                                label="Farba skla"
                                example="napr: Priehľadná"
                            >
                                <CustomInput
                                    label="Farba"
                                    type='text'
                                    name='lensColor'
                                    value={product.specs.lensColor}
                                    handleChange={(e) => handleSpecsChange(e)}
                                />
                            </ProductInputRow>

                            <Title>Velikosť</Title>

                            {product.specs.size.map((value, idx) => {
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
                                            handleChange={e => handleSizeChange(e, idx)}
                                        />
                                    </ProductInputRow>
                                )
                            })}
                        </React.Fragment>
                    )
                }

                <Title>Skladové zásoby</Title>
                {product && product.available.map((value, idx) => {

                    return (
                        <ProductInputRow
                            key={idx}
                            label={`Počet kusov na predajni,`}
                            example="napr: 0"
                        >
                            <CustomInput
                                label={currentUser.admin === 1 ? retailNames[currentUser.premises - 1] : retailNames[idx]}
                                type='number'
                                // name={store.name}
                                value={value.toString()}
                                handleChange={e => handleAvailableChange(e, idx)}
                            />
                        </ProductInputRow>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default ProductGlassesForm
