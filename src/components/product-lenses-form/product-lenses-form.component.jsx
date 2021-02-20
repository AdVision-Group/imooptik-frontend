import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'

import {
    LensesFormContainer,
    LensesContainer,
    LensesParametersContainer,
    ProductImage,
    ImageContainer,
} from './product-lenses-form.styles'

const ProductLensesForm = ({
    lenses,
    selectedImage,
    setImageModal,
    handleChange,
    handleParameterChange,
    checkParameter,
}) => {
    return (
        <LensesFormContainer>
            <LensesContainer>
                <h3>Základné informácie</h3>
                <CustomInput
                    label="eanCode*"
                    type='text'
                    name='eanCode'
                    value={lenses?.eanCode?.toString() ?? ""}
                    handleChange={(e) => handleChange(e)}
                />
                <CustomInput
                    label="Názov šošoviek*"
                    type='text'
                    name='name'
                    value={lenses.name ?? ""}
                    handleChange={(e) => handleChange(e)}
                />

                <CustomInput
                    label="Značka*"
                    type='text'
                    name='brand'
                    value={lenses.brand ?? ""}
                    handleChange={(e) => handleChange(e)}
                />

                <CustomTextarea
                    label="Popis*"
                    name='description'
                    rows='5'
                    value={lenses.description ?? ""}
                    handleChange={(e) => handleChange(e)}
                    required
                />

                <CustomInput
                    label="Cena*"
                    type='text'
                    name='price'
                    value={lenses.price.toString() ?? ""}
                    handleChange={(e) => handleChange(e)}
                    required
                />

                <ImageContainer>
                    <ProductImage onClick={() => setImageModal(true)} hasImage={selectedImage}>
                        {!selectedImage && "Vybrať obrázok"}
                        {selectedImage && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`} alt={selectedImage.alt} />}
                    </ProductImage>
                </ImageContainer>
            </LensesContainer>
            <LensesParametersContainer>
                <h3>Parametre</h3>

                <h4>Dioptrie</h4>
                {[...Array(2)].map((value, idx) => {
                    const inputLabel = idx === 0 ? "minimum*" : "maximum*"

                    return (
                        <div key={idx}>
                            <CustomInput
                                label={inputLabel}
                                type='number'
                                name='dioptersRange'
                                value={checkParameter(lenses.dioptersRange, idx)}
                                handleChange={(e) => handleParameterChange(e, idx)}
                            />
                        </div>
                    )
                })}

                <h4>Cylinder</h4>
                {[...Array(2)].map((value, idx) => {
                    const inputLabel = idx === 0 ? "minimum*" : "maximum*"

                    return (
                        <div key={idx}>
                            <CustomInput
                                label={inputLabel}
                                type='number'
                                name='cylinderRange'
                                value={checkParameter(lenses.cylinderRange, idx)}
                                handleChange={(e) => handleParameterChange(e, idx)}
                            />
                        </div>
                    )
                })}
            </LensesParametersContainer>
        </LensesFormContainer>
    )
}

export default ProductLensesForm
