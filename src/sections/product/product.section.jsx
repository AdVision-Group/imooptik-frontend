import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { ImageContext } from '../../context/image/image.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams, Prompt } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import ModalImage from '../../components/modal-product-image-gallery/modal-product-image-gallery.component'
import OldModalImage from '../../components/modal-images/modal-images.component'
import GetProductDataModal from '../../components/modal-get-product-data/modal-get-product-data.component'
import GetLensesDataModal from '../../components/modal-get-lenses-data/modal-get-lenses-data.component'
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
    const [showOldImageModal, setOldImageModal] = useState(false)
    const [isGetProductDataModalVisible, setIsGetProductDataModalVisible] = useState(false)
    const [isGetLensesDataModalVisible, setIsGetLensesDataModalVisible] = useState(false)
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
        getSingleProduct,
        getSingleLenses
    } = useContext(WarehouseContext)

    const [hasChanged, setHasChanged] = useState(false)
    const [productObj, setProductObj] = useState({})


    const { response, isLoading: isLoadingFilters, refetch } = useFetch(`api/store/products/${productObj?.type}/filters`, !productObj?.type, "GET")
    const [filters, setFilters] = useState(null)

    const handleGetProductData = (boolean) => {
        setIsGetProductDataModalVisible(boolean)
    }

    const handleGetLensesData = (boolean) => {
        setIsGetLensesDataModalVisible(boolean)
    }

    const handleChangeType = e => {
        setHasChanged(true)
        const { name, value } = e.target

        if (!isUpdating) {
            if (productObj.type === 0) {
                if (Object.keys(productObj).length > 2) {
                    const confirm = window.confirm("Rozpisane polia budú vymazane")
                    if (confirm) {
                        resetLenses()
                        setSelectedImage('')
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
                        setSelectedImage('')
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
    // console.count("PRODUCT OBJ")
    // console.log(productObj)
    // console.count("PRODUCT OBJ")

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

    const handleSelectImage = (imgId = '', bonusImages, img) => {
        setHasChanged(true)
        setSelectedImage(img)
        setProductObj({
            ...productObj,
            image: imgId,
            ...(bonusImages) && { bonusImages }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let newProductObj = {
            ...productObj,
            ...(productObj.type === 0) && { type: lenses.lensType },
            ...(productObj.type === 0) && { dioptric: lenses.dioptric }
        }

        // console.log("PRODUCT OBJECT")
        // console.log(lensObj)
        // console.log(productObj)



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

                const obj = {
                    ...newProductObj,
                    ...(newProductObj.bonusImages) && { bonusImages: newProductObj.bonusImages.map(img => img._id) }
                }

                console.log(obj)

                updateProduct(obj)
                return
            }
        } else {
            if (productObj.type === 0) {
                console.log("NEW LENSES OBJ")
                console.log(newProductObj)
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
                    delete newProductObj['_id']

                    const obj = {
                        ...newProductObj,
                        ...(newProductObj.bonusImages) && { bonusImages: newProductObj.bonusImages.map(img => img._id) }
                    }

                    console.log(obj)

                    createProduct(obj)
                }
            }
        }


    }

    const [lensObj, setLensObj] = useState(null)

    const fillProductData = (productData) => {
        console.log("productData")
        console.log("productData")
        console.log(productData)

        setLensObj({
            ...productObj,
            ...productData
        })

        setProductObj({
            ...productObj,
            ...productData
        })
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
                if (productObj.type !== undefined && !productObj.eanCode) {
                    console.log("SET EANCODE")
                    console.log(productObj)
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
            getSingleProduct(id, (data) => {

                handleSelectImage(data?.product?.image?._id, data.product.bonusImages, data.product.image)
                setProductObj(prevValue => ({
                    ...prevValue,
                    type: data.product.type,
                }))
            })
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
    }, [id,])

    console.log(productObj)

    useEffect(() => {
        // if (product.image) {
        //     setSelectedImage(product.image)
        // }
        if (lenses.image) {
            setSelectedImage(lenses.image)
        }
    }, [lenses.image])

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

            {isGetLensesDataModalVisible && <GetLensesDataModal close={() => handleGetLensesData(false)} getSingleProduct={getSingleProduct} productObj={productObj} setProductObj={setProductObj} getSingleLenses={getSingleLenses} fillProductData={fillProductData} />}
            {isGetProductDataModalVisible && <GetProductDataModal close={() => setIsGetProductDataModalVisible(false)} getSingleProduct={getSingleProduct} productObj={productObj} setProductObj={setProductObj} />}
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            {showImageModal && <ModalImage close={() => setImageModal(false)} setImage={handleSelectImage} />}
            {showOldImageModal && <OldModalImage close={() => setOldImageModal(false)} setImage={handleSelectImage} />}
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
                        setImageModal={setOldImageModal}
                        handleChange={handleChange}
                        handleParameterChange={handleParameterChange}
                        checkParameter={checkParameter}
                        filters={filters}
                        handleGetProductData={handleGetLensesData}
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
                        productObj={productObj}
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
                        productObj={productObj}

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
                        handleGetProductData={handleGetProductData}
                    />
                )}

                {(productObj.type === 1 || productObj.type === 2 || productObj.type === 4) && (
                    <ProductGlassesForm
                        product={product}
                        productObj={productObj}
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
                        handleGetProductData={handleGetProductData}
                    />
                )}

            </ScrollContainer>

        </section >
    )
}

export default ProductSection
