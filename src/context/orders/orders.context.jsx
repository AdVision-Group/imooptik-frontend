import React, { createContext, useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'


export const OrdersContext = createContext({
    orders: null,
    getOrders: () => { },
    createOrder: () => { },
    updateOrder: () => { },
    finishOrder: () => { },
})

const OrdersProvider = ({ children }) => {
    const { push } = useHistory()
    const { setIsLoading, setShowModal, getMessage, closeModal } = useContext(LoadingModalContext)
    const { token } = useContext(AuthContext)
    const [orders, setOrders] = useState(null)

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const getOrders = async () => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders`, requestOptions)
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

    const createOrder = async (orderToCreate) => {
        setIsLoading(true)
        setShowModal(true)

        let orderObj = {
            ...orderToCreate
        }


        console.log("ORDER BEFORE SEND")
        console.log(orderObj)

        const raw = JSON.stringify(orderObj)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders`, requestOptions)
            const data = await response.json()

            console.log(data)

            if (data.order) {
                getOrders()
                closeModal()
                push('/dashboard/objednavky')
            }

            getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateOrder = async (orderToUpdate, orderId) => {
        setIsLoading(true)
        setShowModal(true)

        let orderObj = {
            ...orderToUpdate
        }


        console.log("ORDER BEFORE SEND")
        console.log(orderObj)

        const raw = JSON.stringify(orderObj)

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${orderId}`, requestOptions)
            const data = await response.json()

            console.log(data)

            if (data.order) {
                getOrders()
                closeModal()
                push('/dashboard/objednavky')
            }

            getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const finishOrder = async (orderId) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${orderId}/fulfill`, requestOptions)
            const data = await response.json()

            console.log(data)

            if (data.error === 'undelegated-order') {
                setIsLoading(false)
                getMessage("Objednávka nemôže byť dokončená ak nieje priradená k prevádzke")
                return
            }

            if (data.order) {
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
                orders,
                getOrders,
                createOrder,
                updateOrder,
                finishOrder
            }}
        >
            {children}
        </OrdersContext.Provider>
    )
}

export default OrdersProvider