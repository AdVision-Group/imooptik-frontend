import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import ReactDOM from 'react-dom'

import { translatePaymentMethod } from '../../utils/orders.utils'
import {
    formatPrice
} from '../../utils/warehouse.utils'

import CustomInput from '../custom-input/custom-input.component'

import {
    ModalContainer,
    Modal,
    CloseButton,
    SubmitButton,
    CustomSelect,
    GridContainer,
    CouponValueContainer,
    DiscountCheckboxContainer,

} from './modal-finish-deposited-order.styles'


const FinishDepositedOrderModal = ({ close, id, refetch, order }) => {
    const { token } = useContext(AuthContext)
    const {
        getMessage,
        // message,
        // isLoading,
        setIsLoading,
        // closeModal
    } = useContext(LoadingModalContext)



    const [value, setValue] = useState("")
    const [hasCoupon, setHasCoupon] = useState(false)
    const [couponValue, setCouponValue] = useState('')


    const handleClick = async () => {
        setIsLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("auth-token", token);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            paymentType: value,
            ...(hasCoupon) && { couponValue: formatPrice(couponValue) }
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${id}/fulfill`, requestOptions)

            const data = await response.json()

            if (data.order) {
                refetch()
                setIsLoading(false)
                close()
                return
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    const toggleCoupon = prevValue => {
        if (prevValue) {
            setHasCoupon(false)
            // if (orderDetail.couponValue) {
            //     delete orderDetail["couponValue"]
            //     setOrderDetails({
            //         ...orderDetail
            //     })
            // }
        } else {
            setHasCoupon(true)
        }
    }

    useEffect(() => {
        return () => {
            setHasCoupon(false)
            setCouponValue('')
            setValue('')
        }
    }, [])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Spôsob úhrady</h2>
                <GridContainer>
                    <div>
                        <h3>Dohromady</h3>
                        <p>{(order?.discountedValue / 100).toFixed(2)}€</p>
                        {/* <span>{translatePaymentMethod(order?.advancePaymentType)}</span> */}
                    </div>
                    <div>
                        <h3>Záloha</h3>
                        <p>{(order?.paidAlready / 100).toFixed(2)}€</p>
                        <span>{translatePaymentMethod(order?.advancePaymentType)}</span>
                    </div>
                    <div>
                        <h3>Doplatiť</h3>
                        <p>{((order?.discountedValue - order?.paidAlready) / 100).toFixed(2)}€</p>
                        {/* <span>{translatePaymentMethod(order?.advancePaymentType)}</span> */}
                    </div>
                </GridContainer>

                <CustomSelect value={value} onChange={(e) => setValue(e.target.value)}>
                    <option value={''}>Neuvedené</option>
                    <option value={'card'}>Karta</option>
                    <option value={'cash'}>Hotovosť</option>
                </CustomSelect>

                <DiscountCheckboxContainer>
                    <input id="hasCoupon" name='hasCoupon' type='checkbox' value={hasCoupon} onChange={() => toggleCoupon(hasCoupon)} />
                    <label htmlFor='hasCoupon'>Pridať kupón</label>
                </DiscountCheckboxContainer>

                {hasCoupon && (
                    <CouponValueContainer>
                        <CustomInput
                            label="Hodnota kupónu"
                            name="couponValue"
                            type='text'
                            value={couponValue}
                            onChange={e => setCouponValue(e.target.value)}
                        />
                    </CouponValueContainer>
                )}
                <SubmitButton onClick={handleClick}>Zaplatiť</SubmitButton>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default FinishDepositedOrderModal
