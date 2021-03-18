import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams, Prompt } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ModalImage from '../../components/modal-images/modal-images.component'
import Popup from '../../components/popup/pop-up.component'

import ProductGlassesForm from '../../components/product-glasses-form/product-glasses-form.component'
import ProductLensesForm from '../../components/product-lenses-form/product-lenses-form.component'
import ProductAccessoriesForm from '../../components/product-accessories-form/product-accessories-form.component'
import ProductContactLensesForm from '../../components/product-contact-lenses-form/product-contact-lenses-form.component'
import ProductServiceForm from '../../components/product-service-form/product-service-form.component'

import { productCategories, checkParameter, formatLink } from '../../context/warehouse/warehouse.utils'
import { retailNames } from '../../utils/warehouse.utils'
import { useFetch } from '../../hooks/useFetch'

import {
    FixedContainer
} from '../../global.styles'

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
    const [isUpdating, setIsUpdating] = useState(false)

    const {
        eanCode,
        product,
        lenses,
        contactLensesParameters,
        glassesParameters,
        handleLensesChange,
        handleLensesParameterChange,
        createProduct,
        updateProduct,
        resetProduct,
        resetLenses,
        resetContactLenses,
        resetGlassesParameters,
        createLenses,
        updateLenses,
        handleProductChange,
        handleProductAvailableChange,
        getEanCode,
        handleAddNewParameter,
        handleContactLensesParameterChange,
        handleGlassesParameterChange,
        handleGlassesParameterSpecsChange,
        handleGlassesSizeChange,
        getSingleProduct
    } = useContext(WarehouseContext)

    const [hasChanged, setHasChanged] = useState(false)
    const [productObj, setProductObj] = useState({})


    const { response, isLoading: isLoadingFilters, refetch } = useFetch(`api/store/products/${productObj?.type}/filters`, !productObj?.type, "GET")
    const [filters, setFilters] = useState(null)

    const handleChangeType = e => {
        setHasChanged(true)
        const { name, value } = e.target

        if (!isUpdating) {
            if (productObj.type === 0) {
                if (Object.keys(productObj).length > 2) {
                    const confirm = window.confirm("Rozpisane polia budú vymazane")
                    if (confirm) {
                        resetLenses()
                    } else {
                        return
                    }
                }
            } else {
                if (Object.keys(productObj).length > 2) {
                    const confirm = window.confirm("Rozpisane polia budú vymazane")
                    if (confirm) {
                        resetProduct()
                        resetContactLenses()
                        resetGlassesParameters()
                    } else {
                        return
                    }
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

        if (productObj.type === 6) {
            handleProductChange(e)
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
        if (productObj.type === 1) {
            handleProductChange(e)
        }



        if (value === '') {
            delete productObj[name]
            return
        }

        if (isUpdating) {
            if (name === 'name') {
                setProductObj({
                    ...productObj,
                    [name]: value,
                    link: formatLink(value)
                })
                return
            }
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

    const handleSubmit = (e) => {
        e.preventDefault()

        let newProductObj = {
            ...productObj,
            ...(productObj.type === 0) && { type: lenses.lensType },
            ...(productObj.type === 0) && { dioptric: lenses.dioptric }
        }

        // console.log(productObj.type)
        // console.log(newProductObj)


        if (currentUser.admin < 2) {
            if (newProductObj.available) {
                newProductObj = {
                    ...productObj,
                    available: productObj.available[currentUser.premises]
                }
            }
        } else {
            if (newProductObj.available) {
                newProductObj = {
                    ...productObj,
                    available: newProductObj.available ? newProductObj.available.map(value => value === 1001 ? 0 : value) : [0, 0, 0, 0, 0, 0]
                }
            }
        }

        if (isUpdating) {
            console.log(newProductObj)
            if (newProductObj.type === 0 || typeof newProductObj.type === 'string') {
                setHasChanged(false)
                delete newProductObj['link']
                // delete newProductObj['type']
                const updatedObj = {
                    ...newProductObj,
                    type: newProductObj.lensType,
                    eanCode: lenses.eanCode
                }
                delete updatedObj['lensType']
                console.log(id)
                updateLenses(updatedObj, id)
                return
            } else if (newProductObj.type === 3) {
                setHasChanged(false)
                delete newProductObj['type']
                updateProduct({ ...newProductObj, contactLenses: {} })
                return
            } else {
                setHasChanged(false)
                delete newProductObj['type']
                updateProduct(newProductObj)
                return
            }
        } else {
            if (productObj.type === 0) {
                if (!newProductObj.name || !newProductObj.brand || !newProductObj.description || !newProductObj.price || !newProductObj.image || !newProductObj.dioptersRange || !newProductObj.cylinderRange) {
                    setShowModal(true)
                    getMessage("Povinné údaje sú prázdne")
                    return
                } else {
                    setHasChanged(false)
                    // delete newProductObj['type']
                    const updatedObg = {
                        ...newProductObj,
                        type: newProductObj.lensType
                    }
                    delete updatedObg['lensType']

                    createLenses(updatedObg)
                }
            }
            if (newProductObj.type === 6 || newProductObj.type === 5 || newProductObj.type === 4 || newProductObj.type === 3 || newProductObj.type === 2 || newProductObj.type === 1) {
                if (!newProductObj.name || !newProductObj.price) {
                    setShowModal(true)
                    getMessage("Povinné údaje sú prázdne")
                    return
                } else {
                    setHasChanged(false)
                    createProduct(newProductObj)
                }
            }
        }


    }

    useEffect(() => {
        if (!productObj?.type) return
        setFilters(null)
        refetch()
    }, [productObj?.type])

    useEffect(() => {
        if (productObj.type === 0) {
            if (productObj.lensType) return
            console.log("SET LENS TYPE")
            console.log(lenses)
            handleChange({
                target: {
                    name: "lensType",
                    value: lenses?.type
                }
            })
        }
    }, [lenses.lensType])

    useEffect(() => {
        if (isLoadingFilters) return
        if (response?.filters) {
            setFilters(response?.filters)
        }
    }, [isLoadingFilters])

    useEffect(() => {
        if (id === "novy-produkt") {
            if (!eanCode) {
                getEanCode()
            } else {
                if (productObj.type !== undefined) {
                    handleChange({
                        target: {
                            name: "eanCode",
                            value: eanCode
                        }
                    })
                }
            }
        }
    }, [id, eanCode, productObj.type, productObj.eanCode, product.type])

    useEffect(() => {
        if (id !== 'novy-produkt') {
            getSingleProduct(id)
            setIsUpdating(true)
            if (!productObj.type) {
                handleChangeType({
                    target: {
                        name: "type",
                        value: product.type
                    }
                })

            }
        }
    }, [id, product.type])

    // console.log(productObj)

    useEffect(() => {
        if (product.image) {
            setSelectedImage(product.image)
        }
        if (lenses.image) {
            setSelectedImage(lenses.image)
        }
    }, [product.image, lenses.image])

    useEffect(() => {
        return () => {
            resetProduct()
            resetLenses()
            resetContactLenses()
            resetGlassesParameters()
            setProductObj({})
            setSelectedImage(null)
            setIsUpdating(false)
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
                <FixedContainer>

                    <div>
                        <h1>{isUpdating ? "Upraviť produkt" : "Nový produkt"}</h1>
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
                        <SubmitButton onClick={handleSubmit}>{isUpdating ? "Upraviť" : "Vytvoriť"}</SubmitButton>
                    </div>
                </FixedContainer>
            </Header>

            <ScrollContainer>
                {!isUpdating && <CategoryContainer>
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
                </CategoryContainer>}

                {productObj.type === 0 && (
                    <ProductLensesForm
                        lenses={lenses}
                        selectedImage={selectedImage}
                        setImageModal={setImageModal}
                        handleChange={handleChange}
                        handleParameterChange={handleParameterChange}
                        checkParameter={checkParameter}
                        filters={filters}
                    />
                )}

                {productObj.type === 6 && (
                    <ProductServiceForm
                        product={product}
                        isUpdating={isUpdating}
                        handleChange={handleChange}
                        selectedImage={selectedImage}
                        setImageModal={setImageModal}
                        filters={filters}
                    />
                )}

                {productObj.type === 5 && (
                    <ProductAccessoriesForm
                        product={product}
                        isUpdating={isUpdating}
                        currentUser={currentUser}
                        retailNames={retailNames}
                        selectedImage={selectedImage}
                        handleChange={handleChange}
                        setImageModal={setImageModal}
                        checkParameter={checkParameter}
                        handleAvailableChange={handleAvailableChange}
                        filters={filters}
                    />
                )}

                {productObj.type === 3 && (
                    <ProductContactLensesForm
                        product={product}
                        isUpdating={isUpdating}
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
                        filters={filters}
                    />
                )}

                {(productObj.type === 1 || productObj.type === 2 || productObj.type === 4) && (
                    <ProductGlassesForm
                        product={product}
                        isUpdating={isUpdating}
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
                        filters={filters}
                    />
                )}

            </ScrollContainer>

        </section >
    )
}

export default ProductSection
