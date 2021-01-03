import React, { createContext, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import { fetchProducts, postProduct, deleteProduct, patchProduct, postLenses, fetchLenses, patchLenses, delLense } from './warehouse.queries'

export const WarehouseContext = createContext({
    products: null,
    lenses: null,
    totalCount: 0,
    getProducts: () => { },
    createNewProduct: () => { },
    handleProductDelete: () => { },
    updateProduct: () => { },
    createNewLenses: () => { },
    getLenses: () => { },
    updateLenses: () => { },
    deleteLense: () => { }
})

const WarehouseProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const { setIsLoading, setShowModal, getMessage, closeModal } = useContext(LoadingModalContext)
    const { push } = useHistory()

    const [products, setProducts] = useState(null)
    const [lenses, setLenses] = useState(null)
    const [totalCount, setTotalCount] = useState(0)

    const getProducts = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchProducts(token)
            const data = await response.json()

            if (data.products) {
                setTotalCount(totalCount + data.count)
                setProducts(data.products)
                closeModal()
            }

            setIsLoading(false)
            getMessage(data.message)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getLenses = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchLenses(token)
            const data = await response.json()

            if (data.lenses) {
                setTotalCount(totalCount + data.count)
                setLenses(data.lenses)
                closeModal()
            }

            setIsLoading(false)
            getMessage(data.message)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }
    const deleteLense = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await delLense(token, id)
            const data = await response.json()

            if (data.lenses) {
                getLenses()
                closeModal()
            }

            setIsLoading(false)
            getMessage(data.message)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const createNewLenses = async (productToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postLenses(token, productToAdd)
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

    const createNewProduct = async (productToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postProduct(token, productToAdd)
            const data = await response.json()

            console.log(data)

            if (data) {
                setIsLoading(false)
                getMessage(data.message)
                push('/dashboard/obchod')
                getProducts()
            }

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateProduct = async (productToUpdate) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await patchProduct(token, productToUpdate)
            const data = await response.json()
            console.log(data)

            if (data) {
                setIsLoading(false)
                getMessage(data.message)
                push('/dashboard/obchod')
                getProducts()
            }

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const handleProductDelete = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await deleteProduct(token, id)
            const data = await response.json()

            console.log(data)

            if (data.product) {
                getProducts()
                closeModal()
            } else {
                setIsLoading(false)
                getMessage(data.message)
            }

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    return (
        <WarehouseContext.Provider
            value={{
                products,
                lenses,
                totalCount,
                getProducts,
                createNewProduct,
                handleProductDelete,
                updateProduct,
                createNewLenses,
                getLenses,
                updateLenses,
                deleteLense
            }}
        >
            {children}
        </WarehouseContext.Provider>
    )
}

export default WarehouseProvider