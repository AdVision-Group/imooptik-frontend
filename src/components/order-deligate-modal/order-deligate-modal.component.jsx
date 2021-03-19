import React, { useState, useContext } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { AuthContext } from '../../context/auth/auth.context'
import ReactDOM from 'react-dom'

import Popup from '../popup/pop-up.component'

import { retailNames } from '../../utils/warehouse.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    CustomSelect,
    SubmitButton
} from './order-deligate-modal.styles'


const OrderDeligateModal = ({ close, premise, id, refetch }) => {
    const [value, setValue] = useState(premise)
    const { token } = useContext(AuthContext)
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
            premises: Number(value),
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/orders/${id}/delegate`, requestOptions)
            // if (response.status === 400) {
            //     getMessage("Faktúra musí byt zaplatená, aby mohla byť priradená prevádzke")
            // }
            // if (response.status === 401) {
            //     getMessage("Musíš byt vedúci, aby si mohol manipulovať s priradovanim")
            // }
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

    if (isLoading || message) return <Popup loading={isLoading} title={message} close={closeModal} />

    return ReactDOM.createPortal((
        <ModalContainer >
            <CloseButton onClick={close} />
            <Modal>
                <h3>Priradiť k prevádzke</h3>
                <CustomSelect value={value} onChange={(e) => setValue(e.target.value)}>
                    <option value={0}>Nezadané</option>
                    {retailNames.map((name, idx) => {
                        if (idx === 0) return
                        return (
                            <option key={idx} value={idx}>{name}</option>
                        )
                    })}
                </CustomSelect>
                <SubmitButton onClick={handleClick}>Priradiť</SubmitButton>
            </Modal>
        </ModalContainer >
    ), document.getElementById('portal'))
}

export default OrderDeligateModal
