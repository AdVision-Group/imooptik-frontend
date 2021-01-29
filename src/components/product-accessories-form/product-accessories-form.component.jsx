import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'

import {
    AccessoriesFormContainer,
    AccessoriesContainer,
    StockContainer,
    ImageContainer,
    ProductImage,
} from './product-accessories-form.styles'

const ProductAccessoriesForm = ({
    product,
    handleChange,
    selectedImage,
    setImageModal,
    handleAvailableChange,
    checkParameter,
    retailNames,
    currentUser,
    isUpdating
}) => {
    return (
        <AccessoriesFormContainer>
            <AccessoriesContainer>
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

                {isUpdating && <CustomInput
                    label="Link"
                    type='text'
                    name='link'
                    value={product.link ?? ""}
                    handleChange={(e) => handleChange(e)}
                />}

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
            </AccessoriesContainer>
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

        </AccessoriesFormContainer>
    )
}

export default ProductAccessoriesForm
