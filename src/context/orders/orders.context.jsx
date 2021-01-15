import React, { createContext, useState, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'

import { initCombinedProductObj, paymentOptionsArr, stepsArr } from './orders.utils'

import {
    fetchOrders
} from './orders.queries'

export const OrdersContext = createContext({
    orders: null,
    getOrders: () => { },
    productsToOrder: [],
    selectedProduct: null,
    selectedLenses: null,
    combinedProduct: null,
    paymentOptions: [],
    deposit: 0,
    setDeposit: () => { },
    steps: [],
    activeStep: '',
    handleChangeStep: () => { },
    selectedPayment: 0,
    handleChangePayment: () => { },
    handleSelectProduct: () => { },
    handleSelectLenses: () => { },
    handleRemoveProduct: () => { },
    handleParameterChange: () => { }
})

const OrdersProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const {
        getMessage,
        setIsLoading,
        setShowModal,
        closeModal
    } = useContext(LoadingModalContext)

    const [orders, setOrders] = useState(null)
    const [productsToOrder, setProductsToOrder] = useState([])

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [selectedLenses, setSelectedLenses] = useState(null)
    const [combinedProduct, setCombinedProduct] = useState(initCombinedProductObj)
    const paymentOptions = paymentOptionsArr
    const steps = stepsArr
    const [deposit, setDeposit] = useState(0)

    const [activeStep, setActiveStep] = useState('eshop')
    const handleChangeStep = (idx) => {
        setActiveStep(steps[idx])
    }

    const [selectedPayment, setSelectedPayment] = useState(0)
    const handleChangePayment = (e, idx) => {
        e.preventDefault()
        setSelectedPayment(idx)
    }

    const handleSelectProduct = (e, productToAdd) => {
        e.preventDefault()
        // setProductsToOrder([
        //     ...productsToOrder,
        //     productToAdd
        // ])
        setSelectedProduct(productToAdd)
        setCombinedProduct({
            ...combinedProduct,
            product: productToAdd._id
        })
        setActiveStep(steps[1])
    }

    const handleSelectLenses = (e, lensesToAdd) => {
        console.log(lensesToAdd)
        e.preventDefault()
        setSelectedLenses(lensesToAdd)
        setCombinedProduct({
            ...combinedProduct,
            lens: lensesToAdd._id
        })
        setActiveStep(steps[2])
    }

    const handleRemoveProduct = (e, productToRemove, idx) => {
        e.preventDefault()
        setProductsToOrder(productsToOrder.filter((product, index) => index !== idx))
    }

    const handleParameterChange = (e, idx) => {
        const { name, value } = e.target
        let arr = combinedProduct.lenses[name]
        arr[idx] = Number(value)
        setCombinedProduct({
            ...combinedProduct,
            lenses: {
                ...combinedProduct.lenses,
                [name]: arr
            }
        })
    }

    const getOrders = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchOrders(token)
            const data = await response.json()

            if (data.orders) {
                setOrders(data.orders)
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

    console.log("combinedProduct")
    console.log(combinedProduct)
    console.log("combinedProduct")

    return (
        <OrdersContext.Provider
            value={{
                orders,
                getOrders,
                productsToOrder,
                selectedProduct,
                selectedLenses,
                combinedProduct,
                paymentOptions,
                deposit,
                setDeposit,
                steps,
                activeStep,
                handleChangeStep,
                selectedPayment,
                handleChangePayment,
                handleSelectProduct,
                handleSelectLenses,
                handleRemoveProduct,
                handleParameterChange,
            }}
        >
            {children}
        </OrdersContext.Provider>
    )
}

export default OrdersProvider