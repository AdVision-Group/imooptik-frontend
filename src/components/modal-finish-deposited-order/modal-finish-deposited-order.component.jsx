import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import ReactDOM from 'react-dom'

import { translatePaymentMethod } from '../../utils/orders.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    SubmitButton,
    CustomSelect
} from './modal-finish-deposited-order.styles'


const FinishDepositedOrderModal = ({ close, id, refetch, order }) => {
    const { token } = useContext(AuthContext)
    const {
        getMessage,
        message,
        isLoading,
        setIsLoading,
        closeModal
    } = useContext(LoadingModalContext)

    const [value, setValue] = useState("")

    const handleClick = async () => {
        setIsLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("auth-token", token);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            paymentType: value,
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

    console.log(order)

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Spôsob úhrady</h2>
                <div>
                    <h3>Záloha</h3>
                    <p>{(order?.paidAlready / 100).toFixed(2)}€</p>
                    <span>{translatePaymentMethod(order?.advancePaymentType)}</span>
                </div>

                <CustomSelect value={value} onChange={(e) => setValue(e.target.value)}>
                    <option value={''}>Neuvedené</option>
                    <option value={'card'}>Karta</option>
                    <option value={'cash'}>Hotovosť</option>
                    <option value={'coupon'}>Kupón</option>

                </CustomSelect>
                <SubmitButton onClick={handleClick}>Zaplatiť</SubmitButton>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default FinishDepositedOrderModal
