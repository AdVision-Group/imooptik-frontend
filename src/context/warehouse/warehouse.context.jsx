import React, { createContext, useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'

import { premisesTabs, categoryTabs, initLensesObj, formatPrice } from './warehouse.utils'

export const WarehouseContext = createContext({
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
    getSingleProduct: () => { },
    getSingleLenses: () => { },
    getLenses: () => { },
    createLenses: () => { },
    handleLensesChange: () => { },
    handleLensesParameterChange: () => { },
    resetLenses: () => { },
})

const WarehouseProvider = ({ children }) => {
    const { push } = useHistory()
    const { token, isAdmin, currentUser, stats } = useContext(AuthContext)
    const { closeModal, setIsLoading, setShowModal, getMessage } = useContext(LoadingModalContext)

    const [totalProducts, setTotalProducts] = useState(0)
    const [totalLenses, setTotalLenses] = useState(0)

    const [product, setProduct] = useState({})
    const [lenses, setLenses] = useState(initLensesObj)

    const [products, setProducts] = useState(null)
    const [activePremisesTab, setActivePremisesTab] = useState(0)
    const [retailPremisesTabs, setRetailPremisesTabs] = useState([])

    const [productCategoryTypeTabs, setProductCategoryTypeTabs] = useState(categoryTabs)
    const [activeCategoryTypeTab, setActiveCategoryTypeTab] = useState(0)

    const handleLensesChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete lenses[name]
            return
        }

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

    const resetLenses = () => {
        setLenses(initLensesObj)
        setLenses({
            ...lenses,
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
                getLenses,
                createLenses,
                getSingleProduct,
                getSingleLenses,
                handleLensesChange,
                handleLensesParameterChange,
                resetLenses,
            }}
        >
            {children}
        </WarehouseContext.Provider>
    )
}

export default WarehouseProvider