import React, { createContext, useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'

import { initCombinedProductObj, paymentOptionsArr, stepsArr } from './orders.utils'
import { initUserObj } from '../user/user.utils'


import {
    fetchOrders,
    postOrder,
    postCombinedProduct,
    fetchUserOrder,
    postFulfill,
    postFinish
} from './orders.queries'

export const OrdersContext = createContext({
    selectedUser: null,
    setSelectedUser: () => { },
    hasAddress: false,
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
    getUserOrder: () => { },
    isUpdating: false,
    status: '',
    orderPremises: 0,
    resetOrder: () => { },
    handleFulfill: () => { },
    handleFinish: () => { }
})

const OrdersProvider = ({ children }) => {
    const { push } = useHistory()
    const { token } = useContext(AuthContext)
    const {
        getMessage,
        setIsLoading,
        setShowModal,
        closeModal
    } = useContext(LoadingModalContext)

    const [isUpdating, setIsUpdating] = useState(false)
    const [status, setStatus] = useState('')
    const [orderPremises, setOrderPremises] = useState(0)

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

    const [hasAddress, setHasAddress] = useState(false)
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
        console.log(user)
        setSelectedUser({
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
        if (productToAdd.type === 4) {
            setActiveStep(steps[3])
        } else if (productToAdd.type === 5) {
            setActiveStep(steps[3])
        } else {
            setActiveStep(steps[1])
        }
    }

    const handleSelectLenses = (e, lensesToAdd) => {
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


    const resetOrder = () => {
        console.log('reset order')
        setStatus('')
        setIsUpdating(false)
        setSelectedPayment(0)
        setDeposit(0)
        setCoupon('')
    }

    const resetInput = () => {
        setSelectedLenses(null)
        setSelectedProduct(null)
        setActiveStep('eshop')
        setCombinedProduct(initCombinedProductObj)
        setOverWrite({
            address: '',
            psc: '',
            city: '',
            country: ''
        })
    }

    const getOrders = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchOrders(token)
            const data = await response.json()

            console.log(data)

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

        let payment = 'paid'

        if (selectedPayment === 2) {
            payment = 'half-paid'
        }

        try {
            const response = await postOrder(token, { user, combinedProducts }, isDifferentAddress, overwrite, coupon, deposit, payment, paymentOptions[selectedPayment].value)
            if (response.status === 200) {
                getMessage("Objednavkabola vytvorená")
            }

            const data = await response.json()


            if (data.order) {
                resetInput()
                push('/dashboard/objednavky')
                getOrders()
            }

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

        let productToAdd = {}

        if (selectedProduct.type === 5) {
            productToAdd = {
                product: combinedProductToAdd.product,
                // lens: ""
            }
        } else if (selectedProduct.type === 4) {
            productToAdd = {
                product: combinedProductToAdd.product,
                // lenses: combinedProductToAdd.lenses
            }
        } else {
            productToAdd = {
                lenses: combinedProductToAdd.lenses,
                product: combinedProductToAdd.product,
                lens: combinedProductToAdd.lens,
            }
        }

        try {
            const response = await postCombinedProduct(productToAdd)
            const data = await response.json()


            if (data.combinedProduct) {

                setProductsToOrder([
                    ...productsToOrder,
                    data.combinedProduct
                ])
                resetInput()
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

    const getUserOrder = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchUserOrder(token, id)
            const data = await response.json()

            console.log(data)
            if (data.order) {
                setIsUpdating(true)
                setProductsToOrder(data.order.combinedProducts)
                setStatus(data.order.status)
                setOrderPremises(data.order.premises)
            }

            setIsLoading(false)
            getMessage(data.message)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }


    const handleFulfill = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postFulfill(token, id)
            if (response.status === 400) {
                getMessage("Objednávka nieje priradena k prevádzke")

            }
            const data = await response.json()

            console.log(data)
            if (data.order) {

                getOrders()
                setIsLoading(false)
                return
            }

            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }
    const handleFinish = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await postFinish(token, id)
            const data = await response.json()

            console.log(data)

            if (data.order) {
                getOrders()
                setIsLoading(false)
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
        if (selectedUser) {
            const { address, city, psc, country, phone } = selectedUser
            if (address && city && psc && country && phone) {
                setHasAddress(true)
            } else {
                setHasAddress(false)
            }

        }
    }, [selectedUser])


    return (
        <OrdersContext.Provider
            value={{
                selectedUser,
                setSelectedUser,
                hasAddress,
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
                getUserOrder,
                isUpdating,
                status,
                orderPremises,
                resetOrder,
                handleFulfill,
                handleFinish
            }}
        >
            {children}
        </OrdersContext.Provider>
    )
}

export default OrdersProvider