import React, {useState, useEffect} from 'react'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'

import {
    AccessoriesFormContainer,
    AccessoriesContainer,
    StockContainer,
    ImageContainer,
    ProductImage,
    DeleteButton,
    NewImageContainer,
    NewImagesContainer,
    BrandedCheckbox
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
    isUpdating,
    filters,
    productObj
}) => {
    const [isOutlet, setIsOutlet] = useState(false)

    const handleIsOutletClick = (isOutletBool) => {
        if (isOutletBool) {
            handleChange({
                target: {
                    name: "outlet",
                    value: false
                }
            })
            setIsOutlet(false)
        } else {
            handleChange({
                target: {
                    name: "outlet",
                    value: true
                }
            })

            setIsOutlet(true)

        }
    }


    useEffect(() => {
        if (product.outlet) setIsOutlet(true)
    }, [isOutlet])


    return (
        <AccessoriesFormContainer>
            <AccessoriesContainer>
                <h3>Základné informácie</h3>
                <CustomInput
                    label="eanCode*"
                    type='text'
                    name='eanCode'
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
                    list="brands"
                />

                <datalist id="brands">
                    {filters?.brands && filters?.brands.map((brand, idx) => (
                        <option key={idx} value={brand} />
                    ))}
                </datalist>

                <div>
                    <BrandedCheckbox
                        label={"Outlet"}
                        isActive={isOutlet}
                        handleClick={() => handleIsOutletClick(isOutlet)}
                    />

                    {isOutlet && (
                        <React.Fragment>
                            <CustomInput
                                label="zľava v %"
                                type='text'
                                name='outletPercentage'
                                value={product?.outletPercentage?.toString() || "70"}
                                handleChange={(e) => handleChange(e)}
                            />
                        </React.Fragment>
                    )}
                </div>

                {/* <CustomInput
                    label="Kategória"
                    type='text'
                    name='category'
                    value={product.category ?? ""}
                    handleChange={(e) => handleChange(e)}
                    list="categories"

                />

                <datalist id="categories">
                    {filters?.categories && filters?.categories.map((brand, idx) => (
                        <option key={idx} value={brand} />
                    ))}
                </datalist> */}

                {/* {isUpdating && <CustomInput
                    label="Link"
                    type='text'
                    name='link'
                    value={product.link ?? ""}
                    handleChange={(e) => handleChange(e)}
                />} */}

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

                <NewImagesContainer>
                    {productObj?.bonusImages && productObj?.bonusImages.map((img) => (
                        <NewImageContainer key={img._id}>
                            {/* <DeleteButton >&#10005;</DeleteButton> */}
                            <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${img.imagePath}`} alt={img.alt} />
                        </NewImageContainer>
                    ))}
                </NewImagesContainer>
            </AccessoriesContainer>
            {currentUser.admin >= 2 ? (
                <StockContainer>
                    <h3>Skladové zásoby</h3>
                    {product.available.map((value, idx) => {
                        if (idx === 0) return
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
                    })}
                </StockContainer>
            ) : (
                <StockContainer>
                    <h3>Skladové zásoby</h3>
                    <CustomInput
                        label={currentUser.admin === 1 ? retailNames[currentUser.premises] : retailNames[currentUser.premises]}
                        type='number'
                        name={"available"}
                        value={checkParameter(product.available, currentUser.premises)}
                        handleChange={e => handleAvailableChange(e, currentUser.premises)}
                    />
                </StockContainer>
            )}
        </AccessoriesFormContainer>
    )
}

export default ProductAccessoriesForm
