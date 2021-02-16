import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import Popup from '../popup/pop-up.component'

import {
    ModalContainer,
    Modal,
    CloseButton,
    CustomSelect,
    SubmitButton
} from './order-pay-modal.styles'

const OrderPayModal = ({ order, close }) => {
    const { token } = useContext(AuthContext)
    const [paymentMethod, setPaymentMethod] = useState('cash')

    console.log(order)

    const {
        getMessage,
        message,
        isLoading,
        setIsLoading,
        closeModal
    } = useContext(LoadingModalContext)

    const handleClick = async () => {
        setIsLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("auth-token", token);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            // premises: Number(value),
            user: order.orderedBy._id,
            combinedProducts: order.combinedProducts,
            status: "paid",
            paidAlready: order.paidAlready,
            paymentMethod,
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        console.log(raw)

        // try {
        //     const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${order._id}/delegate`, requestOptions)
        //     console.log(response)
        //     // if (response.status === 400) {
        //     //     getMessage("Faktúra musí byt zaplatená, aby mohla byť priradená prevádzke")
        //     // }
        //     // if (response.status === 401) {
        //     //     getMessage("Musíš byt vedúci, aby si mohol manipulovať s priradovanim")
        //     // }
        //     const data = await response.json()

        //     console.log(data)

        //     if (data.order) {
        //         getOrders()
        //         setIsLoading(false)
        //         close()
        //         return
        //     }

        //     getMessage(data.message)
        //     setIsLoading(false)

        // } catch (err) {
        //     console.log(err)
        //     setIsLoading(false)
        // }
    }

    if (isLoading || message) return <Popup loading={isLoading} title={message} close={closeModal} />

    return (
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h3>Vyberte spôsob platby</h3>
                <CustomSelect value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value={"cash"}>Hotovosť</option>
                    <option value={"card"}>Karta</option>
                </CustomSelect>
                <p>Záloha: {(order.paidAlready / 100)}€</p>
                <SubmitButton onClick={handleClick}>Zaplatiť</SubmitButton>
            </Modal>
        </ModalContainer>
    )
}

export default OrderPayModal
