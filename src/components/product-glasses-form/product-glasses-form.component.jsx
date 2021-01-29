import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'
import ProductInputRow from '../product-input-row/product-input-row.component'

import {
    ImageContainer,
    ProductImage,
    GlassesContainerForm,
    GlassesContainer,
    GlassesParameterContainer,
    StockContainer,
    CustomSelect
} from './product-glasses-form.styles.jsx'

const ProductGlassesForm = ({
    product,
    handleChange,
    selectedImage,
    retailNames,
    currentUser,
    checkParameter,
    handleAvailableChange,
    handleGlassesParametersChange,
    handleGlassesSpecsSizeChange,
    handleSpecsChange,
    glassesParameters,
    setImageModal
}) => {

    return (
        <GlassesContainerForm>
            <GlassesContainer>
                <h3>Základné informácie</h3>
                <CustomInput
                    label="eanCode*"
                    type='text'
                    name='name'
                    value={product.eanCode.toString() ?? ""}
                    handleChange={(e) => handleChange(e)}
                />
                <CustomInput
                    label="Názov doplnku*"
                    type='text'
                    name='name'
                    value={product.name ?? ""}
                    handleChange={(e) => handleChange(e)}
                />

                <CustomInput
                    label="Značka"
                    type='text'
                    name='brand'
                    value={product.brand ?? ""}
                    handleChange={(e) => handleChange(e)}
                />

                <CustomInput
                    label="Kategória"
                    type='text'
                    name='category'
                    value={product.category ?? ""}
                    handleChange={(e) => handleChange(e)}
                />

                <CustomTextarea
                    label="Popis"
                    name='description'
                    rows='5'
                    value={product.description ?? ""}
                    handleChange={(e) => handleChange(e)}
                    required
                />

                <CustomInput
                    label="Cena*"
                    type='text'
                    name='price'
                    value={product.price.toString() ?? ""}
                    handleChange={(e) => handleChange(e)}
                    required
                />

                <ImageContainer>
                    <ProductImage onClick={() => setImageModal(true)} hasImage={selectedImage}>
                        {!selectedImage && "Vybrať obrázok"}
                        {selectedImage && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`} alt={selectedImage.alt} />}
                    </ProductImage>
                </ImageContainer>
            </GlassesContainer>
            <div>
                <GlassesParameterContainer>
                    <h3>Parametre</h3>
                    <CustomInput
                        label="Farebný kód"
                        type='text'
                        name='colorCode'
                        value={glassesParameters.colorCode ?? ""}
                        handleChange={(e) => handleGlassesParametersChange(e)}
                    />
                    <div>
                        <CustomInput
                            label="Farba rámu"
                            type='text'
                            name='frameColor'
                            value={glassesParameters.specs.frameColor ?? ""}
                            handleChange={(e) => handleSpecsChange(e)}
                        />
                        <CustomInput
                            label="Materiál rámu"
                            type='text'
                            name='frameMaterial'
                            value={glassesParameters.specs.frameMaterial ?? ""}
                            handleChange={(e) => handleSpecsChange(e)}
                        />
                        <CustomInput
                            label="Tvar rámu"
                            type='text'
                            name='frameStyle'
                            value={glassesParameters.specs.frameStyle ?? ""}
                            handleChange={(e) => handleSpecsChange(e)}
                        />
                        <CustomInput
                            label="Farba šošovky"
                            type='text'
                            name='lensColor'
                            value={glassesParameters.specs.lensColor ?? ""}
                            handleChange={(e) => handleSpecsChange(e)}
                        />
                        <CustomSelect
                            label="Pohlavie"
                            type='text'
                            name='sex'
                            value={glassesParameters.specs.sex ?? ""}
                            onChange={(e) => handleSpecsChange(e)}
                        >
                            <option value='M'>Pánske</option>
                            <option value='W'>Dámske</option>
                            <option value='D'>Detské</option>
                            <option value='U'>Nezáleží</option>
                        </CustomSelect>
                    </div>
                    <div>
                        <h4>Velkosť</h4>
                        {glassesParameters.specs.size.map((value, idx) => (
                            <CustomInput
                                key={idx}
                                label={idx + 1}
                                type='text'
                                name='size'
                                value={checkParameter(glassesParameters.specs.size, idx)}
                                handleChange={(e) => handleGlassesSpecsSizeChange(e, idx)}
                            />
                        ))}
                    </div>
                </GlassesParameterContainer>
                <StockContainer>
                    <h3>Skladové zásoby</h3>
                    {
                        product.available.map((value, idx) => {
                            if (idx === 4) return
                            return (
                                <CustomInput
                                    key={idx}
                                    label={currentUser.admin === 1 ? retailNames[currentUser.premises - 1] : retailNames[idx]}
                                    type='number'
                                    name={"available"}
                                    value={checkParameter(product.available, idx)}
                                    handleChange={e => handleAvailableChange(e, idx)}
                                />
                            )
                        })
                    }
                </StockContainer>

            </div>
        </GlassesContainerForm>
    )
}

export default ProductGlassesForm
