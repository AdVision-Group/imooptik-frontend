import React, { createContext, useState, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import { fetchProducts, postProduct, deleteProduct, patchProduct } from './warehouse.queries'

export const WarehouseContext = createContext({
    products: null,
    totalCount: 0,
    getProducts: () => { },
    createNewProduct: () => { },
    handleProductDelete: () => { },
    updateProduct: () => { }
})

const WarehouseProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const { setIsLoading, setShowModal, getMessage, closeModal } = useContext(LoadingModalContext)

    const [products, setProducts] = useState(null)
    const [totalCount, setTotalCount] = useState(0)

    const getProducts = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchProducts(token)
            const data = await response.json()

            console.log(data)

            if (data.products) {
                setTotalCount(data.count)
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

    const createNewProduct = async (productToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postProduct(token, productToAdd)
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

    const updateProduct = async (productToUpdate) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await patchProduct(token, productToUpdate)
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
                totalCount,
                getProducts,
                createNewProduct,
                handleProductDelete,
                updateProduct
            }}
        >
            {children}
        </WarehouseContext.Provider>
    )
}

export default WarehouseProvider