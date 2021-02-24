import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'


import {
    ServiceFormContainer,
    ServiceContainer,
    ImageContainer,
    ProductImage
} from './product-service-form.styles'

const ProductServiceForm = ({
    product,
    isUpdating,
    handleChange,
    selectedImage,
    setImageModal,
}) => {
    return (
        <ServiceFormContainer>
            <ServiceContainer>
                <h3>Základné informácie</h3>
                <CustomInput
                    label="Názov služby*"
                    type='text'
                    name='name'
                    value={product.name ?? ""}
                    handleChange={(e) => handleChange(e)}
                />

                <CustomInput
                    label="Cena*"
                    type='text'
                    name='price'
                    value={product.price.toString() ?? ""}
                    handleChange={(e) => handleChange(e)}
                    required
                />

                <CustomTextarea
                    label="Popis"
                    name='description'
                    rows='5'
                    value={product.description ?? ""}
                    handleChange={(e) => handleChange(e)}
                    required
                />

                <ImageContainer>
                    <ProductImage onClick={() => setImageModal(true)} hasImage={selectedImage}>
                        {!selectedImage && "Vybrať obrázok"}
                        {selectedImage && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${selectedImage.imagePath}`} alt={selectedImage.alt} />}
                    </ProductImage>
                </ImageContainer>
            </ServiceContainer>
        </ServiceFormContainer>
    )
}

export default ProductServiceForm
