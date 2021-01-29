import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams, Prompt } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ModalImage from '../../components/modal-images/modal-images.component'
import Popup from '../../components/popup/pop-up.component'

import CustomInput from '../../components/custom-input/custom-input.component'
import CustomTextarea from '../../components/custom-textarea/custom-textarea.component'

// import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox.component'
// import CustomFormSwitch from '../../components/custom-form-switch/custom-form-switch.component'
// import ProductGlassesForm from '../../components/product-glasses-form/product-glasses-form.component'
import ProductLensesForm from '../../components/product-lenses-form/product-lenses-form.component'
import ProductAccessoriesForm from '../../components/product-accessories-form/product-accessories-form.component'
import ProductContactLensesForm from '../../components/product-contact-lenses-form/product-contact-lenses-form.component'

// import { useFetch } from '../../hooks/useFetch'

import { productCategories, checkParameter, brands, retailNames, diaConvert } from '../../context/warehouse/warehouse.utils'

import {
    Header,
    CategoryContainer,
    CategoryCheckbox,
    SubmitButton,
    ImageContainer,
    ProductImage,
    IsPublicCheckbox,

} from './product.styles'

const ProductSection = () => {
    const { id } = useParams()
    const { currentUser } = useContext(AuthContext)
    const { closeModal, message, isLoading, showModal, getMessage, setShowModal } = useContext(LoadingModalContext)
    const { selectedImage, setSelectedImage } = useContext(ImageContext)
    const [showImageModal, setImageModal] = useState(false)

    const {
        eanCode,
        product,
        lenses,
        contactLensesParameters,
        handleLensesChange,
        handleLensesParameterChange,
        createProduct,
        resetProduct,
        resetLenses,
        resetContactLenses,
        createLenses,
        handleProductChange,
        handleProductAvailableChange,
        getEanCode,
        handleAddNewParameter,
        handleContactLensesParameterChange
    } = useContext(WarehouseContext)

    const [hasChanged, setHasChanged] = useState(false)
    const [productObj, setProductObj] = useState({})



    const handleChangeType = e => {
        setHasChanged(true)
        const { name, value } = e.target

        if (productObj.type === 0) {
            if (Object.keys(productObj).length > 1) {
                const confirm = window.confirm("Rozpisane polia budú vymazane")
                if (confirm) {
                    resetLenses()
                }
            }
        } else {
            if (Object.keys(productObj).length > 2) {
                const confirm = window.confirm("Rozpisane polia budú vymazane")
                if (confirm) {
                    resetProduct()
                }
            }
        }

        setProductObj({
            [name]: value
        })
    }

    const handleChange = (e) => {
        setHasChanged(true)
        const { name, value } = e.target

        console.log(name)
        console.log(value)


        if (productObj.type === 0) {
            handleLensesChange(e)
        }

        if (productObj.type === 5) {
            handleProductChange(e)
        }

        if (productObj.type === 3) {
            handleProductChange(e)
        }

        if (value === '') {
            delete productObj[name]
            return
        }

        setProductObj({
            ...productObj,
            [name]: value
        })
    }

    const handleAvailableChange = (e, idx) => {
        const { name, value } = e.target
        let arr = product[name]
        arr[idx] = value === '' ? 1001 : Number(value)

        handleProductAvailableChange(e, idx)
        setProductObj({
            ...productObj,
            [name]: arr
        })
    }

    const handleContactLensesChange = (e, idx) => {
        const { name, value } = e.target
        let arr = contactLensesParameters[name]
        arr[idx] = value === '' ? 1001 : value

        handleContactLensesParameterChange(e, idx)

        if (value === '') {
            if (productObj.contactLenses[name].length > 1) {
                arr.splice(idx, 1)
                setProductObj({
                    ...productObj,
                    contactLenses: {
                        ...productObj.contactLenses,
                        [name]: arr
                    }
                })
            } else {
                delete productObj.contactLenses[name]
            }
            if (Object.keys(productObj.contactLenses).length === 0) {
                delete productObj["contactLenses"]
            }
            // delete userObj.company[]
            return
        }

        setProductObj({
            ...productObj,
            contactLenses: {
                ...productObj.contactLenses,
                [name]: arr
            }
        })
    }

    const handleParameterChange = (e, idx) => {
        const { name, value } = e.target
        let arr = lenses[name]
        arr[idx] = value === '' ? 1001 : Number(value)

        handleLensesParameterChange(e, idx)
        setProductObj({
            ...productObj,
            [name]: arr
        })
    }

    const handleSelectImage = (imgId) => {
        setHasChanged(true)
        setProductObj({
            ...productObj,
            image: imgId
        })
    }

    console.log("PRODUCT OBJECT")
    console.log(productObj)
    console.log(product)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (productObj.type === 0) {
            if (!productObj.name || !productObj.brand || !productObj.description || !productObj.price || !productObj.image || !productObj.dioptersRange || !productObj.cylinderRange) {
                setShowModal(true)
                getMessage("Povinné údaje sú prázdne")
                return
            } else {
                setHasChanged(false)
                delete productObj['type']
                createLenses(productObj)
            }
        }

        if (productObj.type === 5 || productObj.type === 3) {
            if (!productObj.name || !productObj.price || !productObj.image) {
                setShowModal(true)
                getMessage("Povinné údaje sú prázdne")
                return
            } else {
                setHasChanged(false)
                createProduct(productObj)
            }
        }


    }

    useEffect(() => {
        if (id === "novy-produkt") {
            if (!eanCode) {
                getEanCode()
            } else {
                if (productObj.type) {
                    handleChange({
                        target: {
                            name: "eanCode",
                            value: eanCode
                        }
                    })
                }
            }
        }
    }, [id, eanCode, productObj.type, productObj.eanCode])

    useEffect(() => {
        return () => {
            resetProduct()
            resetLenses()
            resetContactLenses()
            setProductObj({})
            setSelectedImage(null)
        }
    }, [])

    return (
        <section>
            <Prompt
                when={hasChanged}
                message="Chcete opustiť formulár?"
            />
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            {showImageModal && <ModalImage close={() => setImageModal(false)} setImage={handleSelectImage} />}
            <Header>
                <div>
                    <h1>Nový Produkt</h1>
                </div>
                <div>
                    <IsPublicCheckbox
                        label="Verejné"
                        // value={product.ehop}
                        name='eshop'
                        isActive={product.eshop}
                        handleClick={() => handleChange({
                            target: {
                                name: "eshop",
                                value: !product.eshop
                            }
                        })}
                    />
                    <SubmitButton onClick={handleSubmit}>Vytvoriť</SubmitButton>
                </div>
            </Header>

            <ScrollContainer>
                <CategoryContainer>
                    <h3>Aký produkt chcete pridať?</h3>
                    {productCategories.map((category, idx) => (
                        <CategoryCheckbox
                            key={idx}
                            label={category.name}
                            value={category.value}
                            name='type'
                            isActive={category.value === productObj.type}
                            handleClick={() => handleChangeType({
                                target: {
                                    name: "type",
                                    value: category.value
                                }
                            })}
                        />
                    ))}
                </CategoryContainer>

                {productObj.type === 0 && (
                    <ProductLensesForm
                        lenses={lenses}
                        selectedImage={selectedImage}
                        setImageModal={setImageModal}
                        handleChange={handleChange}
                        handleParameterChange={handleParameterChange}
                        checkParameter={checkParameter}
                    />
                )}

                {productObj.type === 5 && (
                    <ProductAccessoriesForm
                        product={product}
                        currentUser={currentUser}
                        retailNames={retailNames}
                        selectedImage={selectedImage}
                        handleChange={handleChange}
                        setImageModal={setImageModal}
                        checkParameter={checkParameter}
                        handleAvailableChange={handleAvailableChange}
                    />
                )}

                {productObj.type === 3 && (
                    <ProductContactLensesForm
                        product={product}
                        retailNames={retailNames}
                        currentUser={currentUser}
                        selectedImage={selectedImage}
                        contactLensesParameters={contactLensesParameters}
                        handleChange={handleChange}
                        setImageModal={setImageModal}
                        checkParameter={checkParameter}
                        handleAddNewParameter={handleAddNewParameter}
                        handleAvailableChange={handleAvailableChange}
                        handleContactLensesChange={handleContactLensesChange}
                    />
                )}

            </ScrollContainer>

        </section >
    )
}

export default ProductSection
