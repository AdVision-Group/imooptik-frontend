import React, { createContext, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'


export const OrdersContext = createContext({
    orders: null,
    getPDF: () => { },
    getOrders: () => { },
    createOrder: () => { },
    updateOrder: () => { },
    finishOrder: () => { },
    cancelOrder: () => { },
})

const OrdersProvider = ({ children }) => {
    const { push } = useHistory()
    const { setIsLoading, setShowModal, getMessage, closeModal } = useContext(LoadingModalContext)
    const { token } = useContext(AuthContext)
    const [orders, setOrders] = useState(null)







    // REQUESTS

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

            if (data.orders) {
                setOrders(data.orders)
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

    const getPDF = async (orderId) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${orderId}/createPdf`, requestOptions)
            const data = await response.json()

            if (data.filename) {
                setIsLoading(false)
                getMessage(data.messageSK)

                setTimeout(() => {
                    const win = window.open(`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/pdf/${data.filename}`, "_blank", "noreferrer noopener");
                    win?.focus();
                }, 100)
            }

            getMessage(data.messageSK)
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

            if (data.error) {
                getMessage(data.messageSK)
                setIsLoading(false)
                return
            }

            if (data.order) {
                getOrders()
                closeModal()
                push('/dashboard/objednavky')

                setTimeout(() => {
                    getPDF(data.order._id)
                    //     const win = window.open(`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/pdf/${data.order.pdfPath}`, "_blank", "noreferrer noopener");
                    //     win?.focus();
                }, 100)

            }

            // {`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/pdf/${order.order.pdfPath}`} target="_blank" rel="noreferrer noopener"

            // getMessage(data.messageSK)
            // setIsLoading(false)
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

            if (data.order) {
                getOrders()
                closeModal()
                push('/dashboard/objednavky')
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const finishOrder = async (orderId, refetch) => {
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

            if (data.order) {
                refetch()
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

    const cancelOrder = async (orderId, refetch) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${orderId}/cancel`, requestOptions)
            const data = await response.json()

            if (data.order) {
                setTimeout(() => {
                    refetch()
                    closeModal()

                }, 100)
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

    return (
        <OrdersContext.Provider
            value={{
                orders,
                getPDF,
                getOrders,
                createOrder,
                updateOrder,
                finishOrder,
                cancelOrder,
            }}
        >
            {children}
        </OrdersContext.Provider>
    )
}

export default OrdersProvider