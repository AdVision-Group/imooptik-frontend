import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams, Prompt } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ModalImage from '../../components/modal-images/modal-images.component'
import Popup from '../../components/popup/pop-up.component'

// import CustomCheckbox from '../../components/custom-checkbox/custom-checkbox.component'
// import CustomFormSwitch from '../../components/custom-form-switch/custom-form-switch.component'
import ProductGlassesForm from '../../components/product-glasses-form/product-glasses-form.component'
import ProductLensesForm from '../../components/product-lenses-form/product-lenses-form.component'
import ProductAccessoriesForm from '../../components/product-accessories-form/product-accessories-form.component'
import ProductContactLensesForm from '../../components/product-contact-lenses-form/product-contact-lenses-form.component'

// import { useFetch } from '../../hooks/useFetch'

import { productCategories, checkParameter, retailNames } from '../../context/warehouse/warehouse.utils'

import {
    Header,
    CategoryContainer,
    CategoryCheckbox,
    SubmitButton,
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
        glassesParameters,
        handleLensesChange,
        handleLensesParameterChange,
        createProduct,
        resetProduct,
        resetLenses,
        resetContactLenses,
        resetGlassesParameters,
        createLenses,
        handleProductChange,
        handleProductAvailableChange,
        getEanCode,
        handleAddNewParameter,
        handleContactLensesParameterChange,
        handleGlassesParameterChange,
        handleGlassesParameterSpecsChange,
        handleGlassesSizeChange,
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
                    resetContactLenses()
                    resetGlassesParameters()
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

        if (productObj.type === 0) {
            handleLensesChange(e)
        }

        if (productObj.type === 5) {
            handleProductChange(e)
        }

        if (productObj.type === 4) {
            handleProductChange(e)
        }
        if (productObj.type === 3) {
            handleProductChange(e)
        }
        if (productObj.type === 2) {
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

    const handleGlassesParametersChange = e => {
        setHasChanged(true)
        const { name, value } = e.target

        handleGlassesParameterChange(e)

        if (value === '') {
            delete productObj[name]
            return
        }

        setProductObj({
            ...productObj,
            [name]: value
        })
    }

    const handleSpecsChange = (e) => {
        setHasChanged(true)
        const { name, value } = e.target

        handleGlassesParameterSpecsChange(e)

        if (value === '') {
            delete productObj.specs[name]

            if (Object.keys(productObj.specs).length === 0) {
                delete productObj["specs"]
            }
            return
        }

        setProductObj({
            ...productObj,
            specs: {
                ...productObj.specs,
                [name]: value
            }
        })
    }

    const handleGlassesSpecsSizeChange = (e, idx) => {
        const { name, value } = e.target
        let arr = glassesParameters.specs[name]
        arr[idx] = value === '' ? 1001 : value

        handleGlassesSizeChange(e, idx)

        if (value === '') {
            if (productObj.specs[name].length > 1) {
                arr[idx] = 1001

                const firstIndex = arr[0]
                const canDeleteSpecs = arr.map(value => {
                    if (firstIndex !== value) {
                        return false
                    } else {
                        return true
                    }
                })

                const verdict = canDeleteSpecs.find(value => value === false)

                if (verdict === false) {
                    setProductObj({
                        ...productObj,
                        specs: {
                            ...productObj.specs,
                            [name]: arr
                        }
                    })
                } else {
                    delete productObj.specs[name]
                }

            }
            if (Object.keys(productObj.specs).length === 0) {
                delete productObj["specs"]
            }
            // delete userObj.company[]
            return
        }

        setProductObj({
            ...productObj,
            specs: {
                ...productObj.specs,
                [name]: arr
            }
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
    console.log(glassesParameters)

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

        if (productObj.type === 5 || productObj.type === 4 || productObj.type === 3 || productObj.type === 2) {
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
            resetGlassesParameters()
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

                {(productObj.type === 2 || productObj.type === 4) && (
                    <ProductGlassesForm
                        product={product}
                        retailNames={retailNames}
                        currentUser={currentUser}
                        selectedImage={selectedImage}
                        glassesParameters={glassesParameters}
                        handleChange={handleChange}
                        setImageModal={setImageModal}
                        checkParameter={checkParameter}
                        handleSpecsChange={handleSpecsChange}
                        handleAvailableChange={handleAvailableChange}
                        handleGlassesSpecsSizeChange={handleGlassesSpecsSizeChange}
                        handleGlassesParametersChange={handleGlassesParametersChange}
                    />
                )}

            </ScrollContainer>

        </section >
    )
}

export default ProductSection
