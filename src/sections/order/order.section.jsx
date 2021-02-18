import React, { useContext, useState, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { OrderContext } from '../../context/order/order.context'
import { useParams, Prompt } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'

import Popup from "../../components/popup/pop-up.component"

import SelectUserComponent from './steps/1-select-user/select-user.component'
import SelectProductComponent from "./steps/2-select-product/select-product.component"
import SelectLensesComponent from './steps/3-select-lenses/select-lenses.component'
import SummaryComponent from './steps/4-summary/summary.component'

import { useFetchById } from '../../hooks/useFetch'

import {
    Header,
} from './order.styles'

const OrderSection = () => {
    const {
        step,
        order,
        setOrder,
        addUser,
        resetOrder,
        changeStep
    } = useContext(OrderContext)

    const { userId, orderId } = useParams()

    const [hasChanged, setHasChanged] = useState(false)
    const [showCombinedProductModal, setShowCombinedProductModal] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const [combinedProducts, setCombinedProducts] = useState([])

    const handleOrderChange = valueToAdd => {
        setHasChanged(true)
        const { name, value } = valueToAdd
        setOrder({
            ...order,
            [name]: value
        })
    }

    const {
        getMessage,
        setShowModal,
        closeModal,
        isLoading,
        showModal,
        message
    } = useContext(LoadingModalContext)

    const showErrorMessage = (message) => {
        getMessage(message)
        setShowModal(true)
    }

    const userData = useFetchById("api/admin/users", userId, !(userId && orderId))
    const orderData = useFetchById("api/admin/orders", orderId, !orderId)

    const handleAddNextProduct = () => {
        changeStep('findProduct')
        if (order?.product) {
            if (order?.lenses) {
                delete order["lenses"]
                delete order["product"]
            } else {
                delete order["product"]
            }
            setOrder({ ...order })
        }
    }

    useEffect(() => {
        if (userId !== 'nova-objednavka' && orderId) {
            setIsUpdating(true)
            changeStep('summary')
            if (orderData.response) {
                addUser(orderData.response.order.orderedBy)
                setOrder({
                    ...order,
                    order: orderData.response.order,
                    user: orderData.response.order.orderedBy,
                })
                setCombinedProducts(orderData.response.order.combinedProducts)
            }
        } else if (userId !== 'nova-objednavka' && orderId === undefined) {
            changeStep('findProduct')
            if (userData.response) {
                addUser(userData.response.user)
            }
        }

    }, [userId, orderId, userData.response, orderData.response])

    useEffect(() => {
        return () => {
            changeStep('select-user')
            resetOrder({})
            setHasChanged(false)
            setShowCombinedProductModal(false)
            setCombinedProducts([])
            setIsUpdating(false)
        }
    }, [])

    console.log("ORDER OBJECT")
    console.log(order)

    return (

        <section>
            <Prompt
                when={hasChanged}
                message={"Máte nedokončenú objednávku, skutočne chcete odísť?"}
            />
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Header>
                <div>
                    <h1>{isUpdating ? `Objednavka číslo ${order?.order?.customId}` : "Nová objednávka"}</h1>
                </div>
            </Header>
            <ScrollContainer>
                <div>
                    {step === 'select-user' && (
                        <SelectUserComponent
                            next={() => changeStep('select-product')}
                            addToOrder={handleOrderChange}
                        />
                    )}
                    {step === 'select-product' && (
                        <SelectProductComponent
                            back={() => changeStep("select-user")}
                            next={changeStep}
                            showErrorMessage={showErrorMessage}
                        />
                    )}
                    {step === 'select-lenses' && (
                        <SelectLensesComponent
                            back={() => changeStep("select-product")}
                            next={() => changeStep('summary')}
                        />
                    )}
                    {step === 'summary' && (
                        <SummaryComponent
                            order={order}
                            isUpdating={isUpdating}
                            combinedProducts={combinedProducts}
                            back={() => changeStep("select-lenses")}
                            addNextProduct={handleAddNextProduct}
                            setHasChanged={setHasChanged}
                        />
                    )}
                </div>

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
