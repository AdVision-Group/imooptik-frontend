import React, { createContext, useState, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'

import { initCombinedProductObj, paymentOptionsArr, stepsArr } from './orders.utils'
import { initUserObj } from '../user/user.utils'


import {
    fetchOrders,
    postOrder,
    postCombinedProduct
} from './orders.queries'

export const OrdersContext = createContext({
    selectedUser: null,
    setSelectedUser: () => { },
    isDifferentAddress: false,
    setIsDifferentAddress: () => { },
    overwrite: {},
    coupon: '',
    setCoupon: () => { },
    handleOverwriteChange: () => { },
    handleChangeSelectedUser: () => { },
    isSearchingUser: false,
    handleSelectUser: () => { },
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
    handleParameterChange: () => { },
    createOrder: () => { },
    createCombinedProduct: () => { },
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

    const [coupon, setCoupon] = useState('')

    const [selectedUser, setSelectedUser] = useState(initUserObj)
    const [isSearchingUser, setIsSearchingUser] = useState(false)

    const [isDifferentAddress, setIsDifferentAddress] = useState(false)
    const [overwrite, setOverWrite] = useState({
        address: '',
        psc: '',
        city: '',
        country: ''
    })

    const handleOverwriteChange = (e) => {
        const { name, value } = e.target
        setOverWrite({
            ...overwrite,
            [name]: value
        })
    }


    const handleChangeSelectedUser = (e) => {
        const { name, value } = e.target
        setIsSearchingUser(true)
        setSelectedUser({
            ...selectedUser,
            [name]: value
        })
    }


    const handleSelectUser = (user) => {
        setSelectedUser({
            ...selectedUser,
            ...user
        })
        setIsSearchingUser(false)

    }

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
            product: productToAdd._id,
            price: combinedProduct.price + productToAdd.price
        })
        setActiveStep(steps[1])
    }

    const handleSelectLenses = (e, lensesToAdd) => {
        console.log(lensesToAdd)
        e.preventDefault()
        setSelectedLenses(lensesToAdd)
        setCombinedProduct({
            ...combinedProduct,
            lens: lensesToAdd._id,
            price: combinedProduct.price + lensesToAdd.price

        })
        setActiveStep(steps[2])
    }

    const handleRemoveProduct = (e, productToRemove) => {
        e.preventDefault()
        setProductsToOrder(productsToOrder.filter((product) => product._id !== productToRemove._id))
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

    const createOrder = async (user, combinedProducts) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postOrder(token, { user, combinedProducts }, isDifferentAddress, overwrite)
            const data = await response.json()

            console.log(data)

            if (data.orderId) {

            }

            getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const createCombinedProduct = async (combinedProductToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postCombinedProduct(combinedProductToAdd)
            const data = await response.json()

            console.log(data)

            if (data.combinedProduct) {

                setProductsToOrder([
                    ...productsToOrder,
                    data.combinedProduct
                ])

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

    return (
        <OrdersContext.Provider
            value={{
                selectedUser,
                setSelectedUser,
                isDifferentAddress,
                setIsDifferentAddress,
                overwrite,
                coupon,
                setCoupon,
                handleOverwriteChange,
                handleChangeSelectedUser,
                isSearchingUser,
                handleSelectUser,
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
                createOrder,
                createCombinedProduct,
            }}
        >
            {children}
        </OrdersContext.Provider>
    )
}

export default OrdersProvider