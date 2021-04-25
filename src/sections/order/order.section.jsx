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
import OrderSummaryProductName from '../../components/order-summary-product-name/order-summary-product-name.component'
import OrderSummaryLensesName from '../../components/order-summary-lenses-name/order-summary-lenses-name.component'

import { useFetchById } from '../../hooks/useFetch'

import {
    Header,
    ProductsOverviewContainer,
    SummaryTableHead,
    SummaryTableRow,
    SummaryTableTitle,
    TableCol,
    TotalContainer
} from './order.styles'

const OrderSection = () => {
    const {
        step,
        order,
        cart,
        setOrder,
        addUser,
        resetOrder,
        changeStep
    } = useContext(OrderContext)

    const { userId, orderId } = useParams()

    const [hasChanged, setHasChanged] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

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

    const userData = useFetchById("api/admin/users", userId, !(userId !== 'nova-objednavka'))
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
                    combinedProducts: orderData.response.order.combinedProducts,
                    note: orderData.response.order.note
                })
            }
        } else if (userId !== 'nova-objednavka' && orderId === undefined) {
            changeStep('select-product')
            if (userData.response) {
                addUser(userData.response.user)
            }
        }

    }, [userId, orderId, userData.response, orderData.response])

    useEffect(() => {
        if (userData.isLoading) return
        addUser(userData.response.user)

    }, [userData.isLoading])

    useEffect(() => {
        return () => {
            changeStep('select-user')
            resetOrder({})
            setHasChanged(false)
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
                {step !== 'summary' && <ProductsOverviewContainer>
                    <SummaryTableTitle>Prehľad objednávky</SummaryTableTitle>
                    <SummaryTableHead>
                        <TableCol>#</TableCol>
                        <TableCol>
                            <span>Eankód</span>
                            <span>Názov produktu</span>
                        </TableCol>
                        <TableCol>Cena</TableCol>
                        <TableCol>Po zľave</TableCol>
                        <TableCol>Ks</TableCol>
                        <TableCol>
                            <span>Eankód</span>
                            <span>Názov šošovky</span>
                        </TableCol>
                        <TableCol>Cena</TableCol>
                        <TableCol>Po zľave</TableCol>
                        <TableCol>Ks</TableCol>
                        <TableCol>Spolu</TableCol>
                        <TableCol>Po zľave</TableCol>
                    </SummaryTableHead>

                    {cart && cart.map((item, idx) => (
                        <SummaryTableRow key={idx}>
                            <TableCol>{idx + 1}</TableCol>
                            <TableCol>{item?.product ? <OrderSummaryProductName name={item?.product?.name} eanCode={item?.product?.eanCode} /> : ""}</TableCol>
                            <TableCol>{item?.product?.price ? `${(item?.product?.price / 100).toFixed(2)}€` : ''}</TableCol>
                            <TableCol>{item?.discount?.product ? item?.discount?.product.flat ? `${((item?.product?.price - (Number(item?.discount?.product?.flat) * 100)) / 100).toFixed(2)}€` : "" : ""} {item?.discount?.product?.percent && `(${item?.discount?.product?.percent}%)`}</TableCol>
                            <TableCol>{item?.product && item?.productQuant}</TableCol>
                            <TableCol>{item?.lens ? <OrderSummaryLensesName name={item?.lens?.name} eanCode={item?.lens?.eanCode} /> : ""}</TableCol>
                            <TableCol>{item?.lens?.price ? `${(item?.lens?.price / 100).toFixed(2)}€` : ''}</TableCol>
                            <TableCol>{item?.discount?.lenses ? item?.discount?.lenses?.flat ? `${((item?.lens?.price - (Number(item?.discount?.lenses?.flat) * 100)) / 100).toFixed(2)}€` : "" : ""} {item?.discount?.lenses?.percent && `(${item?.discount?.lenses?.percent}%)`}</TableCol>
                            <TableCol>{item?.lens && item?.lensesQuant}</TableCol>
                            <TableCol>{`${(((item?.product?.price || 0) + (item?.lens?.price || 0)) / 100).toFixed(2)}€`}</TableCol>
                            {/* <TableCol>{(combinedProduct?.discountedPrice / 100).toFixed(2)}€</TableCol> */}
                        </SummaryTableRow>
                    ))}

                    <TotalContainer>
                        {/* <p>Spolu: {(priceTotal / 100).toFixed(2)}€</p> */}
                    </TotalContainer>
                </ProductsOverviewContainer>}

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
                            isUpdating={isUpdating}
                            back={() => changeStep("select-lenses")}
                            addNextProduct={handleAddNextProduct}
                            setHasChanged={setHasChanged}
                            refetchUser={userData.refetch}
                        />
                    )}
                </div>

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
