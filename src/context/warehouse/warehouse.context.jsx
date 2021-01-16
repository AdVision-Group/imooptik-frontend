import React, { createContext, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import { ImageContext } from '../image/image.context'
import {
    fetchProducts,
    postProduct,
    deleteProduct,
    patchProduct,
    postLenses,
    fetchLenses,
    patchLenses,
    delLense,
    fetchSingleProduct,
    fetchSingleLenses
    // fetchFilteredProducts
} from './warehouse.queries'

import {
    initProductObj,
    initLensesObj,
    productCategories
} from './warehouse.utils'


export const WarehouseContext = createContext({
    formToShow: 0,
    toggleProductForms: () => { },
    showUpdateForm: () => { },
    isUpdating: false,
    activeCategoryIndex: 0,
    categories: [],
    toggleDraft: () => { },
    handleCategoryChange: () => { },
    handleAvailableChange: () => { },
    handleSizeChange: () => { },
    selectImage: () => { },
    product: null,
    products: null,
    handleChange: () => { },
    handleSpecsChange: () => { },
    resetProduct: () => { },
    lenses: null,
    lensesArr: null,
    handleLensesChange: () => { },
    handleLensesDioptersRangeChange: () => { },
    handleLensesCylinderRangeChange: () => { },
    totalCount: 0,
    getProducts: () => { },
    getSingleProduct: () => { },
    createNewProduct: () => { },
    handleProductDelete: () => { },
    updateProduct: () => { },
    createNewLenses: () => { },
    getLenses: () => { },
    getSigleLenses: () => { },
    updateLenses: () => { },
    deleteLenses: () => { },
    lensesParameters: {},
    handleParameterChange: () => { }
})


const WarehouseProvider = ({ children }) => {
    const { token, currentUser } = useContext(AuthContext)
    const { setIsLoading, setShowModal, getMessage, closeModal } = useContext(LoadingModalContext)
    const { setSelectedImage } = useContext(ImageContext)
    const { push } = useHistory()

    // ------------------------

    const [totalCount, setTotalCount] = useState(0)
    const [isUpdating, setIsUpdating] = useState(false)
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

    // ------------------------

    const switchFormButtons = [
        {
            name: "Okuliare a i."
        },
        {
            name: "Sklá"
        }
    ]
    const [formToShow, setFormToShow] = useState(0)

    // ------------------------

    const [categories] = useState(productCategories)
    const [product, setProduct] = useState(currentUser.admin === 1 ? initProductObj : { ...initProductObj, available: [0, 0, 0, 0] })
    const [products, setProducts] = useState(null)

    // ------------------------

    const [lenses, setLenses] = useState(initLensesObj)
    const [lensesArr, setLensesArr] = useState(null)

    const [lensesParameters, setLensesParameters] = useState({
        diopters: [0, 0],
        curvature: 0,
        average: 0
    })

    const handleParameterChange = (e, idx) => {
        const { name, value } = e.target
        let arr = lensesParameters.lenses[name]
        arr[idx] = Number(value)
        setLensesParameters({
            ...lensesParameters,
            [name]: arr
        })
    }

    // ------------------------
    // PRODUCT ACTIONS
    // ------------------------

    const toggleProductForms = (e, idx) => {
        e.preventDefault()
        setFormToShow(idx)
    }

    const toggleDraft = () => {
        setProduct({
            ...product,
            eshop: !product.eshop
        })
        setLenses({
            ...lenses,
            eshop: !product.eshop
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }
    const handleSpecsChange = (e) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            specs: {
                ...product.specs,
                [name]: value
            }
        })
    }

    const handleCategoryChange = (value) => {
        setActiveCategoryIndex(value)
        setProduct({
            ...product,
            type: value
        })
    }

    const handleAvailableChange = (e, idx) => {
        let arr = product.available
        arr[idx] = Number(e.target.value)
        setProduct({
            ...product,
            available: arr
        })
    }

    const handleSizeChange = (e, idx) => {
        let arr = product.specs.size
        arr[idx] = Number(e.target.value)
        setProduct({
            ...product,
            specs: {
                ...product.specs,
                size: arr
            }
        })
    }

    const selectImage = (imgId) => {
        setProduct({
            ...product,
            imagePath: imgId
        })
        setLenses({
            ...lenses,
            imagePath: imgId
        })
    }

    const resetProduct = () => {
        setProduct(currentUser.admin === 1 ? initProductObj : { ...initProductObj, available: [0, 0, 0, 0] })
        setLenses(initLensesObj)
        setSelectedImage(null)
        setIsUpdating(false)
        setActiveCategoryIndex(0)
        setFormToShow(0)
    }

    const handleLensesChange = (e) => {
        const { name, value } = e.target
        setLenses({
            ...lenses,
            [name]: value
        })
    }

    const handleLensesCylinderRangeChange = (e, idx) => {
        let arr = lenses.cylinderRange
        arr[idx] = Number(e.target.value)
        setLenses({
            ...lenses,
            cylinderRange: arr
        })
    }

    const handleLensesDioptersRangeChange = (e, idx) => {
        let arr = lenses.dioptersRange
        arr[idx] = Number(e.target.value)
        setLenses({
            ...lenses,
            dioptersRange: arr
        })
    }

    const showUpdateForm = (formName) => {
        setFormToShow(formName)
        setIsUpdating(true)

    }

    // ------------------------
    // START GLASSES ACTIONS
    // ------------------------

    // Get all products
    const getProducts = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchProducts(token)
            const data = await response.json()

            if (data.products) {
                setTotalCount(totalCount + data.count)
                setProducts(data.products)
                setIsLoading(false)
                closeModal()
                return
            }

            getMessage(data.message)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Get single product

    const getSingleProduct = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchSingleProduct(id)
            const data = await response.json()

            if (data.error) {
                getMessage(data.message)
                setIsLoading(false)
                return
            }

            if (data.product) {
                if (currentUser.admin === 1) {
                    setProduct({
                        ...product,
                        ...data.product,
                        specs: {
                            ...product.specs,
                            ...data.product.specs
                        },
                        imagePath: data.product.image._id,
                        available: [data.product.available[currentUser.premises - 1]]
                    })
                } else {
                    setProduct({
                        ...product,
                        ...data.product,
                        specs: {
                            ...product.specs,
                            ...data.product.specs
                        },
                        imagePath: data.product.image._id,
                        available: data.product.available.filter((num, idx) => idx !== 4)

                    })
                }
                setActiveCategoryIndex(data.product.type)
                setSelectedImage(data.product.image)
                setIsUpdating(true)
            }

            closeModal()
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }

    }

    // Create Glasses
    const createNewProduct = async (productToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postProduct(token, productToAdd)
            const data = await response.json()

            console.log(data)

            if (data.error) {
                getMessage(data.message)
                setIsLoading(false)
                return
            }

            setIsLoading(false)
            getMessage(data.success)
            resetProduct()
            push('/dashboard/obchod')
            getProducts()
            closeModal()

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Update Glasses
    const updateProduct = async (productToUpdate) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await patchProduct(token, productToUpdate)
            const data = await response.json()
            console.log(data)

            if (data.error) {
                getMessage(data.message)
                setIsLoading(false)
                return
            }

            getMessage(data.message)
            setIsLoading(false)
            push('/dashboard/obchod')
            getProducts()

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Delete glasses
    const handleProductDelete = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await deleteProduct(token, id)
            const data = await response.json()

            setIsLoading(false)
            getMessage(data.message)
            getProducts()
            push('/dashboard/obchod')

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // ------------------------
    // END GLASSES ACTIONS
    // ------------------------


    // ------------------------
    // START LENSES ACTIONS
    // ------------------------

    // Get all lenses
    const getLenses = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchLenses(token)
            const data = await response.json()

            if (data.lenses) {
                setTotalCount(totalCount + data.count)
                setLensesArr(data.lenses)
                setIsLoading(false)
                closeModal()
                return
            }

            setIsLoading(false)
            getMessage(data.message)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Get single lenses
    const getSigleLenses = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchSingleLenses(id)
            const data = await response.json()

            console.log(data)


            if (data.error) {
                getMessage(data.message)
                setIsLoading(false)
                return
            }

            if (data.lenses) {
                setLenses({
                    ...lenses,
                    ...data.lenses,
                    imagePath: data.lenses.image._id
                })
                setSelectedImage(data.lenses.image)
                setIsUpdating(true)
            }

            closeModal()


        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Create Lense
    const createNewLenses = async (productToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postLenses(token, productToAdd)
            const data = await response.json()

            if (data) {
                setIsLoading(false)
                getMessage(data.message)
                push('/dashboard/obchod')
                getLenses()
                closeModal()
            }
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Update Lense
    const updateLenses = async (productToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await patchLenses(token, productToAdd)
            const data = await response.json()

            console.log(data)

            if (data) {
                setIsLoading(false)
                getMessage(data.message)
                push('/dashboard/obchod')
                getLenses()
            }

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Delete Lense
    const deleteLenses = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await delLense(token, id)
            const data = await response.json()

            if (data.error) {
                setIsLoading(false)
                getMessage(data.message)
            }


            getLenses()
            setIsLoading(false)
            getMessage(data.message)
            push('/dashboard/obchod')
            closeModal()

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // ------------------------
    // END LENSES ACTIONS
    // ------------------------

    return (
        <WarehouseContext.Provider
            value={{
                switchFormButtons,
                formToShow,
                toggleProductForms,
                showUpdateForm,
                isUpdating,
                activeCategoryIndex,
                categories,
                toggleDraft,
                handleCategoryChange,
                handleAvailableChange,
                handleSizeChange,
                selectImage,
                product,
                products,
                handleChange,
                handleSpecsChange,
                resetProduct,
                lenses,
                lensesArr,
                handleLensesChange,
                handleLensesDioptersRangeChange,
                handleLensesCylinderRangeChange,
                totalCount,
                getProducts,
                getSingleProduct,
                createNewProduct,
                handleProductDelete,
                updateProduct,
                createNewLenses,
                getLenses,
                getSigleLenses,
                updateLenses,
                deleteLenses,
                lensesParameters,
                handleParameterChange,
            }}
        >
            {children}
        </WarehouseContext.Provider>
    )
}

export default WarehouseProvider