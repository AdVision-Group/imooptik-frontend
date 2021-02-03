import React, { useState } from 'react'

import CustomInput from '../custom-input/custom-input.component'

import {
    CloseButton,
    Modal,
    ModalContainer,
    AddButton,
    CustomSelect,
    OptionsCheckbox,
    OverwriteAddressCheckbox
} from './modal-finish-order.styles'

const FinishOrderModal = ({ close, order, combinedProducts, createOrder, setHasChanged }) => {
    const [orderDetail, setOrderDetails] = useState({
        paymentType: "cash"
    })
    const [overwrite, setOverwrite] = useState(false)

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

    console.log(orderDetail)

    const handleSubmit = e => {
        e.preventDefault()

        let orderObj = {
            ...orderDetail,
            user: order.user._id,
            combinedProducts: combinedProducts.map(product => product.combinedProduct._id),
            status: orderDetail.paymentType === 'coupon' ? "half-paid" : "paid"
        }

        console.log(orderObj)
        setHasChanged(false)
        createOrder(orderObj)
    }

    return (
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h3>Dokončenie objednávky</h3>

                <div>
                    <CustomInput
                        label="Zľavový kupón"
                        name="coupon"
                        type='text'
                        value={orderDetail?.coupon ?? ""}
                        onChange={e => handleOrderDetailChange(e)}
                    />

                    <h4>Spôsob platby</h4>

                    <CustomSelect
                        name='paymentType'
                        value={orderDetail?.paymentType ?? "cash"}
                        onChange={(e) => handleOrderDetailChange(e)}
                    >
                        <option value={"cash"}>Hotovosť</option>
                        <option value={"card"}>Karta</option>
                        <option value={"coupon"}>Záloha</option>
                    </CustomSelect>

                    {orderDetail?.paymentType === 'coupon' && (
                        <CustomInput
                            label="Zaplatená záloha"
                            name="paidAlready"
                            type='text'
                            value={orderDetail?.paidAlready ?? ""}
                            onChange={e => handleOrderDetailChange(e)}
                        />
                    )}
                </div>

                <div>
                    <h4>Ďalšie informácie</h4>
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
                                    <input id="overwrite" name='overwrite' type='checkbox' value={overwrite} onChange={() => setOverwrite(!overwrite)} />
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
                                )

                                }
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
