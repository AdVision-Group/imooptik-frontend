import React from 'react'

import CustomInput from '../custom-input/custom-input.component'
// import CustomTextarea from '../custom-textarea/custom-textarea.component'

import {
    formatfloatNumber
} from '../../utils/warehouse.utils'

import { lensesTypes } from '../../context/warehouse/warehouse.utils'

import { AiOutlineCopy } from 'react-icons/ai'

import {
    LensesFormContainer,
    LensesContainer,
    LensesParametersContainer,
    ProductImage,
    ImageContainer,
    TypesContainer,
    SubGridContainer,
    TypeCheckbox,
    CopyButton
} from './product-lenses-form.styles'

const ProductLensesForm = ({
    lenses,
    selectedImage,
    setImageModal,
    handleChange,
    handleParameterChange,
    checkParameter,
    filters,
    handleGetProductData
}) => {

    const formatParameter = (e, idx) => {
        const value = formatfloatNumber(e.target.value)
        handleParameterChange({
            target: {
                value: Number(value).toFixed(2),
                name: e.target.name
            }
        }, idx)
    }

    // const [isOutlet, setIsOutlet] = useState(false)

    // const handleIsOutletClick = (isOutletBool) => {
    //     if (isOutletBool) {
    //         handleChange({
    //             target: {
    //                 name: "outlet",
    //                 value: false
    //             }
    //         })
    //         setIsOutlet(false)
    //     } else {
    //         handleChange({
    //             target: {
    //                 name: "outlet",
    //                 value: true
    //             }
    //         })

    //         setIsOutlet(true)

    //     }
    // }

    // useEffect(() => {
    //     if (product.outlet) setIsOutlet(true)
    // }, [isOutlet])


    // console.log(lenses)

    return (
        <LensesFormContainer>
            <LensesContainer>
                <CopyButton onClick={() => handleGetProductData(true)}><AiOutlineCopy /></CopyButton>
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
                    list="brands"
                />

                <datalist id="brands">
                    {filters?.brands && filters?.brands.map((brand, idx) => (
                        <option key={idx} value={brand} />
                    ))}
                </datalist>

                {/* <div>
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
                </div> */}


                {/* <CustomTextarea
                    label="Popis*"
                    name='description'
                    rows='5'
                    value={lenses.description ?? ""}
                    handleChange={(e) => handleChange(e)}
                    required
                /> */}

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
            <SubGridContainer>
                <TypesContainer>
                    <h3>Druh</h3>

                    <div>
                        {lensesTypes.map((type, idx) => (
                            <TypeCheckbox
                                key={idx}
                                label={type}
                                value={type}
                                name='lensType'
                                isActive={type === lenses?.lensType}
                                handleClick={() => handleChange({
                                    target: {
                                        name: "lensType",
                                        value: type
                                    }
                                })}
                            />
                        ))}
                    </div>

                    {lenses.lensType === "slnečné" && (
                        <div>
                            <TypeCheckbox
                                label="Polarizované"
                                value={lenses.photochromic}
                                name='photochromic'
                                isActive={lenses.photochromic}
                                handleClick={() => handleChange({
                                    target: {
                                        name: "photochromic",
                                        value: !lenses.photochromic
                                    }
                                })}
                            />
                        </div>
                    )}

                    <div>
                        <TypeCheckbox
                            label="Dioptrické"
                            value={lenses.dioptric}
                            name='dioptric'
                            isActive={lenses.dioptric}
                            handleClick={() => handleChange({
                                target: {
                                    name: "dioptric",
                                    value: !lenses.dioptric
                                }
                            })}
                        />
                    </div>

                    <CustomInput
                        label="Farba šošovky"
                        type='text'
                        name='color'
                        value={lenses.color ?? ""}
                        handleChange={(e) => handleChange(e)}
                    />
                </TypesContainer>
                {lenses?.dioptric && <LensesParametersContainer>
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
                                    onBlur={(e) => formatParameter(e, idx)}
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
                </LensesParametersContainer>}
            </SubGridContainer>
        </LensesFormContainer>
    )
}

export default ProductLensesForm
