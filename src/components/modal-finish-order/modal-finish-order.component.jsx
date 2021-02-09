import React, { useState, useEffect } from 'react'

import CustomInput from '../custom-input/custom-input.component'

import {
    CloseButton,
    Modal,
    ModalContainer,
    AddButton,
    CustomSelect,
    OptionsCheckbox,
    OverwriteAddressCheckbox,
    DiscountCheckboxContainer
} from './modal-finish-order.styles'

const FinishOrderModal = ({
    close,
    order,
    combinedProducts,
    createOrder,
    setHasChanged,
    isUpdating,
    updateOrder
}) => {
    const [orderDetail, setOrderDetails] = useState({
        paymentType: "cash"
    })
    const [hasDeposit, setHasDeposit] = useState(false)
    const [overwrite, setOverwrite] = useState(false)

    const toggleDeposit = prevValue => {
        if (prevValue) {
            setHasDeposit(false)
            if (orderDetail.paidAlready) {
                delete orderDetail["paidAlready"]
                setOrderDetails({
                    ...orderDetail
                })
            }
        } else {
            setHasDeposit(true)
        }
    }

    const toggleOverwriteAddress = prevValue => {
        if (prevValue) {
            setOverwrite(false)
            if (orderDetail.overwrite) {
                delete orderDetail["overwrite"]
                setOrderDetails({
                    ...orderDetail
                })
            }
        } else {
            setOverwrite(true)
        }
    }

    const handleOrderDetailChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete orderDetail[name]
            setOrderDetails({
                ...orderDetail
            })
            return
        }

        setOrderDetails({
            ...orderDetail,
            [name]: value
        })
    }

    const handleAddressOverwriteChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete orderDetail.overwrite[name]
            setOrderDetails({
                ...orderDetail
            })
            return
        }

        setOrderDetails({
            ...orderDetail,
            overwrite: {
                ...orderDetail.overwrite,
                [name]: value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (isUpdating) {
            let orderObj = {
                ...orderDetail,
            }
            console.log("orderDetail")
            console.log(orderDetail)
            console.log(order)

            delete orderObj['paymentType']
            delete orderObj['shouldDeliver']

            setHasChanged(false)
            updateOrder(orderObj, order.order._id)

        } else {
            let orderObj = {
                ...orderDetail,
                user: order.user._id,
                combinedProducts: combinedProducts.map(product => product._id),
                status: hasDeposit ? "half-paid" : "paid"
            }

            console.log(orderObj)
            setHasChanged(false)
            createOrder(orderObj)
        }
    }

    useEffect(() => {
        return () => {
            setOrderDetails({
                paymentType: "cash"
            })
            setHasDeposit(false)
            setOverwrite(false)
        }
    }, [])

    return (
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>{isUpdating ? "Upraviť objednávku" : 'Dokončeniť objednávky'}</h2>

                {!isUpdating && <div>
                    <h4>Spôsob platby</h4>

                    <CustomSelect
                        name='paymentType'
                        value={orderDetail?.paymentType ?? "cash"}
                        onChange={(e) => handleOrderDetailChange(e)}
                    >
                        <option value={"cash"}>Hotovosť</option>
                        <option value={"card"}>Karta</option>
                        <option value={"coupon"}>Kupón</option>
                    </CustomSelect>

                    <DiscountCheckboxContainer>
                        <input id="hasDeposit" name='hasDeposit' type='checkbox' value={hasDeposit} onChange={() => toggleDeposit(hasDeposit)} />
                        <label htmlFor='hasDeposit'>Pridať zálohu</label>
                    </DiscountCheckboxContainer>

                    {hasDeposit && (
                        <CustomInput
                            label="Zaplatená záloha"
                            name="paidAlready"
                            type='text'
                            value={orderDetail?.paidAlready ?? ""}
                            onChange={e => handleOrderDetailChange(e)}
                        />
                    )}
                </div>
                }
                <div>
                    <h4>Informácie o doručení</h4>
                    <OptionsCheckbox
                        label={"Doručiť na adresu"}
                        isActive={orderDetail?.shouldDeliver}
                        handleClick={() => handleOrderDetailChange({
                            target: {
                                name: 'shouldDeliver',
                                value: orderDetail?.shouldDeliver ? !orderDetail?.shouldDeliver : true
                            }
                        })}
                    />
                    <OptionsCheckbox
                        label={"Nákup na firmu"}
                        isActive={orderDetail?.buyingAsCompany}
                        handleClick={() => handleOrderDetailChange({
                            target: {
                                name: 'buyingAsCompany',
                                value: orderDetail?.buyingAsCompany ? !orderDetail?.buyingAsCompany : true
                            }
                        })}
                    />

                    {orderDetail?.shouldDeliver && (
                        <div>
                            <h4>Adresa</h4>
                            <p>{order.user.psc}</p>
                            <p>{order.user.address}</p>
                            <p>{order.user.city}</p>
                            <p>{order.user.country}</p>

                            <div>
                                <OverwriteAddressCheckbox>
                                    <input id="overwrite" name='overwrite' type='checkbox' value={overwrite} onChange={() => toggleOverwriteAddress(overwrite)} />
                                    <label htmlFor='overwrite'>Iná adresa</label>
                                </OverwriteAddressCheckbox>

                                {overwrite && (
                                    <div>
                                        <CustomInput
                                            label="Adresa"
                                            name="address"
                                            type='text'
                                            value={orderDetail?.overwrite?.address ?? ""}
                                            onChange={e => handleAddressOverwriteChange(e)}
                                        />
                                        <CustomInput
                                            label="PSČ"
                                            name="psc"
                                            type='text'
                                            value={orderDetail?.overwrite?.psc ?? ""}
                                            onChange={e => handleAddressOverwriteChange(e)}
                                        />
                                        <CustomInput
                                            label="Mesto"
                                            name="city"
                                            type='text'
                                            value={orderDetail?.overwrite?.city ?? ""}
                                            onChange={e => handleAddressOverwriteChange(e)}
                                        />
                                        <CustomInput
                                            label="Štát"
                                            name="country"
                                            type='text'
                                            value={orderDetail?.overwrite?.country ?? ""}
                                            onChange={e => handleAddressOverwriteChange(e)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <AddButton onClick={handleSubmit}>Vytvoriť objednávku</AddButton>
            </Modal>
        </ModalContainer>
    )
}

export default FinishOrderModal
