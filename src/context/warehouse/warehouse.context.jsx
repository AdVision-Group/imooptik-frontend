import React, { createContext, useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'

import {
    premisesTabs,
    categoryTabs,
    initLensesObj,
    initProductObj,
    formatPrice,
    diaConvert
} from './warehouse.utils'

export const WarehouseContext = createContext({
    eanCode: null,
    product: {},
    lenses: {},
    totalProducts: 0,
    totalLenses: 0,
    activePremisesTab: 0,
    activeCategoryTypeTab: 0,
    retailPremisesTabs: [],
    productCategoryTypeTabs: [],
    products: null,
    handleChangeCategoryTypeTab: () => { },
    handleChangePremisesTab: () => { },
    getProductsByQuery: () => { },
    handleProductChange: () => { },
    handleProductAvailableChange: () => { },
    getSingleProduct: () => { },
    createProduct: () => { },
    getSingleLenses: () => { },
    getLenses: () => { },
    createLenses: () => { },
    handleLensesChange: () => { },
    handleLensesParameterChange: () => { },
    resetProduct: () => { },
    resetLenses: () => { },
    getEanCode: () => { },
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

    const [products, setProducts] = useState(null)
    const [activePremisesTab, setActivePremisesTab] = useState(0)
    const [retailPremisesTabs, setRetailPremisesTabs] = useState([])

    const [productCategoryTypeTabs, setProductCategoryTypeTabs] = useState(categoryTabs)
    const [activeCategoryTypeTab, setActiveCategoryTypeTab] = useState(0)

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
            available: [1001, 1001, 1001, 1001, 0],
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

            console.log(data)
            if (data.eanCode) {
                setEanCode(data.eanCode)
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

    const getProductsByQuery = async (query) => {
        setIsLoading(true)
        setShowModal(true)

        console.log(query)
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

            console.log(data)
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

            console.log(data)
            if (data.lenses) {
                setProducts(data.lenses)
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

    const getSingleProduct = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/products/${id}`)
            const data = await response.json()

            console.log(data)

            if (data.product) {
                setProduct(data.product)
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

    const createProduct = async (productToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        const slug = diaConvert(productToAdd.name).replaceAll(" ", "-").toLowerCase().trim()

        const raw = JSON.stringify({
            ...productToAdd,
            price: formatPrice(productToAdd.price.toString()),
            link: slug,
            available: productToAdd.available.map(value => value === 1001 ? 0 : value)
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

            console.log(data)
            if (data.product) {
                push('/dashboard/obchod')
                getProductsByQuery({
                    limit: 10
                })
                setEanCode(null)
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

    const getSingleLenses = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/lenses/${id}`)
            const data = await response.json()

            console.log(data)

            if (data.lenses) {
                setLenses(data.lenses)
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

            console.log(data)

            if (data.lenses) {
                push('/dashboard/obchod')
                getLenses()
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

    useEffect(() => {
        if (products) {
            console.log(`GET ${productCategoryTypeTabs[activeCategoryTypeTab].name} DATA`)
            if (activeCategoryTypeTab === 0) {
                getProductsByQuery({
                    limit: 10
                })
            } else {
                getLenses()
            }
        }
    }, [activeCategoryTypeTab])

    useEffect(() => {
        console.log("SET PREMISES")
        if (currentUser) {
            if (isAdmin) {
                setRetailPremisesTabs(premisesTabs)
                setActivePremisesTab(0)
            } else {
                setRetailPremisesTabs(premisesTabs.filter(tab => tab.premises === currentUser.premises))
                setActivePremisesTab(0)
            }
        }
    }, [currentUser, isAdmin])

    useEffect(() => {
        if (stats) {
            console.log("SET STATS")
            setTotalProducts(stats.products)
            setTotalLenses(stats.lenses)
        }
    }, [stats])

    return (
        <WarehouseContext.Provider
            value={{
                eanCode,
                product,
                lenses,
                totalProducts,
                totalLenses,
                activePremisesTab,
                activeCategoryTypeTab,
                retailPremisesTabs,
                productCategoryTypeTabs,
                products,
                handleChangeCategoryTypeTab,
                handleChangePremisesTab,
                getProductsByQuery,
                handleProductChange,
                handleProductAvailableChange,
                getLenses,
                getSingleProduct,
                createProduct,
                getSingleLenses,
                createLenses,
                handleLensesChange,
                handleLensesParameterChange,
                resetProduct,
                resetLenses,
                getEanCode,
            }}
        >
            {children}
        </WarehouseContext.Provider>
    )
}

export default WarehouseProvider