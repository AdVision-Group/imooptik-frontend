import React, { createContext, useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'

import {
    // premisesTabs,
    categoryTabs,
    initLensesObj,
    initProductObj,
    formatPrice,
    diaConvert,
    initContactLensesObj,
    initGlassesObj,
    formatfloatNumber,
    formatLink,
} from './warehouse.utils'

import {
    retailNamesTabs
} from '../../utils/warehouse.utils'

export const WarehouseContext = createContext({
    eanCode: null,
    product: {},
    lenses: {},
    contactLensesParameters: {},
    glassesParameters: {},
    totalProducts: 0,
    totalLenses: 0,
    activePremisesTab: 0,
    activeCategoryTypeTab: 0,
    retailPremisesTabs: [],
    productCategoryTypeTabs: [],
    products: null,
    lensesProducts: null,
    handleChangeCategoryTypeTab: () => { },
    handleChangePremisesTab: () => { },
    getProductsByQuery: () => { },
    handleProductChange: () => { },
    handleProductAvailableChange: () => { },
    getSingleProduct: () => { },
    createProduct: () => { },
    updateProduct: () => { },
    deleteProduct: () => { },
    getSingleLenses: () => { },
    getLenses: () => { },
    createLenses: () => { },
    updateLenses: () => { },
    deleteLenses: () => { },
    handleLensesChange: () => { },
    handleLensesParameterChange: () => { },
    resetProduct: () => { },
    resetLenses: () => { },
    resetContactLenses: () => { },
    resetGlassesParameters: () => { },
    getEanCode: () => { },
    handleAddNewParameter: () => { },
    handleContactLensesParameterChange: () => { },
    handleGlassesParameterChange: () => { },
    handleGlassesParameterSpecsChange: () => { },
    handleGlassesSizeChange: () => { },
    deactivateMany: () => { },
})

const WarehouseProvider = ({ children }) => {
    const { push } = useHistory()
    const { token, isAdmin, currentUser, stats } = useContext(AuthContext)
    const { closeModal, setIsLoading, setShowModal, getMessage } = useContext(LoadingModalContext)

    const [totalProducts, setTotalProducts] = useState(0)
    const [totalLenses, setTotalLenses] = useState(0)
    const [eanCode, setEanCode] = useState(null)

    const [product, setProduct] = useState({ ...initProductObj })
    const [lenses, setLenses] = useState({ ...initLensesObj })
    const [contactLensesParameters, setContactLensesParameters] = useState({ ...initContactLensesObj })
    const [glassesParameters, setGlassesParameters] = useState({ ...initGlassesObj })

    const [products, setProducts] = useState(null)
    const [lensesProducts, setLensesProducts] = useState(null)
    const [activePremisesTab, setActivePremisesTab] = useState(0)
    const [retailPremisesTabs, setRetailPremisesTabs] = useState([])

    const [productCategoryTypeTabs] = useState(categoryTabs)
    const [activeCategoryTypeTab, setActiveCategoryTypeTab] = useState(0)

    const handleGlassesParameterChange = e => {
        const { name, value } = e.target
        setGlassesParameters({
            ...glassesParameters,
            [name]: value
        })
    }

    const handleGlassesParameterSpecsChange = e => {
        const { name, value } = e.target
        setGlassesParameters({
            ...glassesParameters,
            specs: {
                ...glassesParameters.specs,
                [name]: value
            }
        })
    }

    const handleGlassesSizeChange = (e, idx) => {
        const { name, value } = e.target
        let arr = glassesParameters.specs[name]
        arr[idx] = value === '' ? 1001 : value
        setGlassesParameters({
            ...glassesParameters,
            specs: {
                ...glassesParameters.specs,
                [name]: arr
            }
        })

    }

    const handleAddNewParameter = e => {
        const { name } = e.target
        setContactLensesParameters({
            ...contactLensesParameters,
            [name]: [...contactLensesParameters[name], 1001]
        })
    }

    const handleContactLensesParameterChange = (e, idx) => {
        const { name, value } = e.target
        let arr = contactLensesParameters[name]
        arr[idx] = value === '' ? 1001 : value
        setContactLensesParameters({
            ...contactLensesParameters,
            [name]: arr
        })
    }

    const handleProductChange = e => {
        const { name, value } = e.target

        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleProductAvailableChange = (e, idx) => {
        const { name, value } = e.target
        let arr = product[name]
        arr[idx] = value === '' ? 1001 : Number(value)
        setProduct({
            ...product,
            [name]: arr
        })
    }

    const handleLensesChange = e => {
        const { name, value } = e.target

        setLenses({
            ...lenses,
            [name]: value
        })
    }

    const handleLensesParameterChange = (e, idx) => {
        const { name, value } = e.target
        let arr = lenses[name]
        arr[idx] = value === '' ? 1001 : Number(value)
        setLenses({
            ...lenses,
            [name]: arr
        })
    }

    const resetProduct = () => {
        setProduct({
            ...initProductObj,
            available: [0, 1001, 1001, 1001, 1001, 1001, 1001],
        })
        setEanCode(null)
    }

    const resetLenses = () => {
        // setLenses({ ...initLensesObj })
        setLenses({
            ...initLensesObj,
            dioptersRange: [1001, 1001],
            cylinderRange: [1001, 1001],
        })
    }

    const resetContactLenses = () => {
        setContactLensesParameters({
            ...initContactLensesObj,
            allowedCurves: [1001],
            allowedDiameters: [1001],
            dioptersRange: [1001, 1001]
        })
    }

    const resetGlassesParameters = () => {
        setGlassesParameters({
            ...initGlassesObj,
            specs: {
                ...initGlassesObj.specs,
                size: [1001, 1001, 1001, 1001]
            }
        })
    }

    const handleChangePremisesTab = (idx) => {
        setActivePremisesTab(idx)
    }

    const handleChangeCategoryTypeTab = (idx) => {
        setActiveCategoryTypeTab(idx)
    }



    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");


    const getEanCode = async () => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/nextEanCode`, requestOptions)
            const data = await response.json()

            if (data.eanCode) {
                setEanCode(data.eanCode)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getProductsByQuery = async (query) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(query)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/filter`, requestOptions)
            const data = await response.json()

            if (data.products) {
                setProducts(data.products)
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

    const getLenses = async () => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/lenses`, requestOptions)
            const data = await response.json()

            if (data.lenses) {
                setProducts(data.lenses)
                setLensesProducts(data.lenses)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getSingleProduct = async (id, callback) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/products/${id}`)
            const data = await response.json()

            if (data.error === 'not-found') {
                getSingleLenses(id, () => { })
            }

            if (data.product) {
                setProduct({
                    ...data.product,
                    price: (data.product.price / 100).toFixed(2)
                })
                if (data.product.type === 3) {
                    setContactLensesParameters({
                        ...data.product.contactLenses
                    })
                } else {
                    setGlassesParameters({
                        colorCode: data.product.colorCode ?? "",
                        specs: {
                            ...data.product.specs,
                            size: [...Array(4)].map((value, idx) => data.product.specs.size[idx] ? data.product.specs.size[idx] : 0)
                        }
                    })
                }
                callback(data)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const createProduct = async (productToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        const linkName = diaConvert(productToAdd?.name || '').replaceAll(" ", "-").toLowerCase().trim()
        const linkFrameColor = diaConvert(productToAdd?.specs?.frameColor || '').replaceAll(" ", "-").toLowerCase().trim()

        let linkSize1 = null
        let linkSize2 = null
        let linkSize3 = null
        let linkSize4 = null

        if (productToAdd?.specs?.size) {
            linkSize1 = diaConvert(productToAdd?.specs?.size[0].toString() || '').replaceAll(" ", "-").replaceAll(",", "-").replaceAll(".", "-").toLowerCase().trim()
            linkSize2 = diaConvert(productToAdd?.specs?.size[1].toString() || '').replaceAll(" ", "-").replaceAll(",", "-").replaceAll(".", "-").toLowerCase().trim()
            linkSize3 = diaConvert(productToAdd?.specs?.size[2].toString() || '').replaceAll(" ", "-").replaceAll(",", "-").replaceAll(".", "-").toLowerCase().trim()
            linkSize4 = diaConvert(productToAdd?.specs?.size[3].toString() || '').replaceAll(" ", "-").replaceAll(",", "-").replaceAll(".", "-").toLowerCase().trim()
        }

        const slug = linkName + (linkFrameColor ? `-${linkFrameColor}` : "") + (linkSize1 !== null ? `-${linkSize1}` : "") + (linkSize2 !== null ? `-${linkSize2}` : "") + (linkSize3 !== null ? `-${linkSize3}` : "") + (linkSize4 !== null ? `-${linkSize4}` : "")


        let modifiedProduct = {
            ...productToAdd,
            price: formatPrice(productToAdd?.price?.toString() || ""),
            link: slug,
        }

        if (productToAdd.specs) {
            if (productToAdd.specs.size) {
                modifiedProduct = {
                    ...modifiedProduct,
                    specs: {
                        ...modifiedProduct.specs,
                        size: productToAdd.specs.size.map(value => value === 1001 ? 0 : formatfloatNumber(value))
                    }
                }
            }
        }

        if (productToAdd.contactLenses) {
            if (productToAdd.contactLenses.allowedCurves) {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        allowedCurves: productToAdd.contactLenses.allowedCurves.map(value => formatfloatNumber(value))
                    }
                }
            }
            if (productToAdd.contactLenses.allowedDiameters) {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        allowedDiameters: productToAdd.contactLenses.allowedDiameters.map(value => formatfloatNumber(value))
                    }
                }
            }
            if (productToAdd.contactLenses.dioptersRange) {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        dioptersRange: productToAdd.contactLenses.dioptersRange.map(value => formatfloatNumber(value))
                    }
                }
            }
        }

        const raw = JSON.stringify({
            ...modifiedProduct,
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products`, requestOptions)
            const data = await response.json()

            if (data.product) {
                push('/dashboard/obchod')
                getProductsByQuery({
                    limit: 10
                })
                setEanCode(null)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateProduct = async (productToUpdate) => {
        setIsLoading(true)
        setShowModal(true)



        let modifiedProduct = {
            ...productToUpdate,
        }


        // return

        if (modifiedProduct.price) {
            modifiedProduct = {
                ...modifiedProduct,
                price: formatPrice(productToUpdate.price.toString()),
            }
        }

        if (modifiedProduct.available) {
            if (typeof modifiedProduct.available === "number") {
                modifiedProduct = {
                    ...modifiedProduct,
                    available: productToUpdate.available
                }
            } else {
                modifiedProduct = {
                    ...modifiedProduct,
                    available: productToUpdate.available ? productToUpdate.available.map(value => value === 1001 ? 0 : value) : [0, 0, 0, 0, 0, 0, 0]
                }
            }
        }

        if (productToUpdate.name || productToUpdate?.specs?.frameColor || productToUpdate?.specs?.size) {
            const linkName = diaConvert(productToUpdate?.name || product?.name || "").replaceAll(" ", "-").toLowerCase().trim()
            const linkFrameColor = diaConvert(productToUpdate?.specs?.frameColor || product?.specs?.frameColor || '').replaceAll(" ", "-").toLowerCase().trim()

            let linkSize1 = null
            let linkSize2 = null
            let linkSize3 = null
            let linkSize4 = null

            if (product?.specs?.size) {
                linkSize1 = diaConvert(productToUpdate?.specs?.size[0].toString() || product?.specs?.size[0].toString() || '').replaceAll(" ", "-").replaceAll(",", "-").replaceAll(".", "-").toLowerCase().trim()
                linkSize2 = diaConvert(productToUpdate?.specs?.size[1].toString() || product?.specs?.size[1].toString() || '').replaceAll(" ", "-").replaceAll(",", "-").replaceAll(".", "-").toLowerCase().trim()
                linkSize3 = diaConvert(productToUpdate?.specs?.size[2].toString() || product?.specs?.size[2].toString() || '').replaceAll(" ", "-").replaceAll(",", "-").replaceAll(".", "-").toLowerCase().trim()
                linkSize4 = diaConvert(productToUpdate?.specs?.size[3].toString() || product?.specs?.size[3].toString() || '').replaceAll(" ", "-").replaceAll(",", "-").replaceAll(".", "-").toLowerCase().trim()
            }

            const slug = linkName + (linkFrameColor ? `-${linkFrameColor}` : "") + (linkSize1 !== null ? `-${linkSize1}` : "") + (linkSize2 !== null ? `-${linkSize2}` : "") + (linkSize3 !== null ? `-${linkSize3}` : "") + (linkSize4 !== null ? `-${linkSize4}` : "")

            modifiedProduct = {
                ...modifiedProduct,
                link: slug
            }
        }

        if (productToUpdate.specs) {
            if (productToUpdate.specs.size) {
                modifiedProduct = {
                    ...modifiedProduct,
                    specs: {
                        ...modifiedProduct.specs,
                        size: productToUpdate.specs.size.map(value => value === 1001 ? 0 : formatfloatNumber(value))
                    }
                }
            }
        }

        if (productToUpdate.contactLenses) {
            if (productToUpdate.contactLenses.allowedCurves) {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        allowedCurves: productToUpdate.contactLenses.allowedCurves.map(value => formatfloatNumber(value))
                    }
                }
            } else {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        allowedCurves: contactLensesParameters.allowedCurves
                    }
                }
            }

            if (productToUpdate.contactLenses.allowedDiameters) {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        allowedDiameters: productToUpdate.contactLenses.allowedDiameters.map(value => formatfloatNumber(value))
                    }
                }
            } else {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        allowedDiameters: contactLensesParameters.allowedDiameters
                    }
                }
            }
            if (productToUpdate.contactLenses.dioptersRange) {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        dioptersRange: productToUpdate.contactLenses.dioptersRange.map(value => formatfloatNumber(value))
                    }
                }
            } else {
                modifiedProduct = {
                    ...modifiedProduct,
                    contactLenses: {
                        ...modifiedProduct.contactLenses,
                        dioptersRange: contactLensesParameters.dioptersRange
                    }
                }
            }
        }

        const raw = JSON.stringify({
            ...modifiedProduct,
        })


        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/${product._id}`, requestOptions)
            const data = await response.json()

            if (data.error) {
                getMessage(data.messageSK)
                setIsLoading(false)
                return

            }

            if (data.product) {
                push('/dashboard/obchod')
                getProductsByQuery({
                    limit: 10
                })
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const deleteProduct = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/${id}`, requestOptions)
            const data = await response.json()

            if (data.product) {
                // push('/dashboard/obchod')
                getProductsByQuery({
                    limit: 10
                })
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getSingleLenses = async (id, callback) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/lenses/${id}`)
            const data = await response.json()

            if (data.lenses) {
                setLenses(data.lenses)
                callback(data)
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const createLenses = async (lensesToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify({
            ...lensesToAdd,
            price: formatPrice(lensesToAdd.price.toString())
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/lenses`, requestOptions)
            const data = await response.json()

            if (data.lenses) {
                push('/dashboard/obchod')
                getLenses()
                closeModal()
                return
            }


            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateLenses = async (lensesToUpdate, id) => {
        setIsLoading(true)
        setShowModal(true)

        let modifiedLenses = {
            ...lensesToUpdate
        }

        if (modifiedLenses.price) {
            modifiedLenses = {
                ...modifiedLenses,
                price: formatPrice(lensesToUpdate.price.toString()),
            }
        }

        const raw = JSON.stringify({
            ...modifiedLenses,
        });

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/lenses/${id}`, requestOptions)
            const data = await response.json()

            if (data.lenses) {
                push('/dashboard/obchod')
                getLenses()
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const deleteLenses = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/lenses/${id}`, requestOptions)
            const data = await response.json()

            if (data.lenses) {
                getLenses()
                closeModal()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const deactivateMany = async (databObj) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(databObj);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/products/deactivateMany`, requestOptions)
            const data = await response.json()

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (products) {
            if (activeCategoryTypeTab === 0) {
                getProductsByQuery({
                    limit: 10,
                    skip: 0,
                    sortBy: {
                        date: -1
                    }
                })
            } else if (activeCategoryTypeTab === 1) {
                getLenses()
            } else {
                getProductsByQuery({
                    limit: 10,
                    filters: {
                        type: 3
                    },
                    sortBy: {
                        date: -1
                    }
                })
            }
        }
    }, [activeCategoryTypeTab])

    useEffect(() => {
        if (currentUser) {
            if (isAdmin) {
                setRetailPremisesTabs(retailNamesTabs)
                setActivePremisesTab(0)
            } else {
                setRetailPremisesTabs(retailNamesTabs.filter(tab => tab.premises === currentUser.premises))
                setActivePremisesTab(0)
            }
        }
    }, [currentUser, isAdmin])

    useEffect(() => {
        if (stats) {
            setTotalProducts(stats.products)
            setTotalLenses(stats.lenses)
        }
    }, [stats])

    useEffect(() => {
        if (product.name !== '') {
            setProduct({
                ...product,
                link: formatLink(product.name)
            })
        }
    }, [product.name])

    return (
        <WarehouseContext.Provider
            value={{
                eanCode,
                product,
                lenses,
                contactLensesParameters,
                glassesParameters,
                totalProducts,
                totalLenses,
                activePremisesTab,
                activeCategoryTypeTab,
                retailPremisesTabs,
                productCategoryTypeTabs,
                products,
                lensesProducts,
                handleChangeCategoryTypeTab,
                handleChangePremisesTab,
                getProductsByQuery,
                handleProductChange,
                handleProductAvailableChange,
                getLenses,
                getSingleProduct,
                createProduct,
                updateProduct,
                deleteProduct,
                getSingleLenses,
                createLenses,
                updateLenses,
                deleteLenses,
                handleLensesChange,
                handleLensesParameterChange,
                resetProduct,
                resetLenses,
                resetContactLenses,
                resetGlassesParameters,
                getEanCode,
                handleAddNewParameter,
                handleContactLensesParameterChange,
                handleGlassesParameterChange,
                handleGlassesParameterSpecsChange,
                handleGlassesSizeChange,
                deactivateMany
            }}
        >
            {children}
        </WarehouseContext.Provider>
    )
}

export default WarehouseProvider