import React, { useContext, useState, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams, Prompt } from 'react-router-dom'

// import InputRow from '../../components/product-input-row/product-input-row.component'
// import CustomInput from '../../components/custom-input/custom-input.component'
// import CustomFormSwitch from '../../components/custom-form-switch/custom-form-switch.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
// import OrderProductOverview from '../../components/order-product-overview/order-product-overview.component'
// import CustomCheckBox from '../../components/custom-checkbox/custom-checkbox.component'
// import CombinedProductOverview from '../../components/combined-product-overview/combined-product-overview.component'
// import OrderAddressForm from '../../components/order-address-form/order-address-form.component'

import Popup from "../../components/popup/pop-up.component"
import CombinedProductModal from '../../components/modal-finish-combined-product/modal-finish-combined-product.component'

import SelectUserComponent from './steps/select-user.component'
import FindProductComponent from "./steps/find-product.component"
import SelectLensesComponent from './steps/select-lenses.component'
import SummaryComponent from './steps/summary.component'

import { useFetchById } from '../../hooks/useFetch'

import {
    Header,
} from './order.styles'

const OrderSection = () => {
    const { userId, orderId } = useParams()
    const [step, setStep] = useState('selectUser')
    const [order, setOrder] = useState({})



    const [hasChanged, setHasChanged] = useState(false)
    const [showCombinedProductModal, setShowCombinedProductModal] = useState(false)

    const [combinedProducts, setCombinedProducts] = useState([])

    const handleAddCombineProduct = combinedProductToAdd => {
        setCombinedProducts([
            ...combinedProducts,
            combinedProductToAdd
        ])
    }

    const handleOrderChange = valueToAdd => {
        setHasChanged(true)
        const { name, value } = valueToAdd
        setOrder({
            ...order,
            [name]: value
        })
    }

    // console.log("order")
    // console.log(order)
    // console.log(combinedProducts)
    // console.log("order")

    const {
        closeModal,
        isLoading,
        showModal,
        message
    } = useContext(LoadingModalContext)

    // const userData = useFetchById("api/admin/users", userId)
    const orderData = useFetchById("api/admin/orders", orderId)

    // console.log(userData)
    console.log(orderData)
    console.log(order)
    console.log(combinedProducts)

    useEffect(() => {
        if (userId !== 'nova-objednavka' && orderId) {
            setStep('summary')
            if (orderData.response) {
                setOrder({
                    ...order,
                    order: orderData.response.order,
                    user: orderData.response.order.orderedBy,
                })
                setCombinedProducts(orderData.response.order.combinedProducts.map(product => ({ combinedProduct: { ...product }, product: product.product })))
            }
        }

    }, [userId, orderId, orderData.response])

    useEffect(() => {
        if (userId === 'nova-objednavka' && !orderId) {
            if (order.user) {
                setStep('findProduct')
            }
        }
    }, [order.user])

    useEffect(() => {
        return () => {
            setStep('selectUser')
        }
    }, [])

    return (

        <section>
            <Prompt
                when={hasChanged}
                message={"Máte nedokončenú objednávku, skutočne chcete odísť?"}
            />
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            {showCombinedProductModal && <CombinedProductModal
                order={order}
                close={() => setShowCombinedProductModal(false)}
                addCombineProduct={handleAddCombineProduct}
                next={() => {
                    setStep("summary")
                    setShowCombinedProductModal(false)
                }}
            />
            }
            <Header>
                <div>
                    <h1>Nová objednávka</h1>
                </div>
            </Header>
            <ScrollContainer>
                <div>
                    {step === 'selectUser' && (
                        <SelectUserComponent
                            next={() => setStep('findProduct')}
                            addToOrder={handleOrderChange}
                        />
                    )}
                    {step === 'findProduct' && (
                        <FindProductComponent
                            back={() => setStep("selectUser")}
                            next={setStep}
                            addToOrder={handleOrderChange}
                            showModal={() => setShowCombinedProductModal(true)}
                        />
                    )}
                    {step === 'selectLenses' && (
                        <SelectLensesComponent
                            back={() => setStep("findProduct")}
                            next={() => setStep('summary')}
                            addToOrder={handleOrderChange}
                            order={order}
                            showModal={() => setShowCombinedProductModal(true)}
                        />
                    )}
                    {step === 'summary' && (
                        <SummaryComponent
                            order={order}
                            combinedProducts={combinedProducts}
                            back={() => setStep("selectLenses")}
                            addNextProduct={() => setStep('findProduct')}
                            setHasChanged={setHasChanged}
                        />
                    )}
                </div>

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
