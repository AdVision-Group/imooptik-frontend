import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {useAuth} from '../../context/auth/auth.context'

import {useAnalytics} from '../../context/analytics/analytics.context'

import CustomInput from '../custom-input/custom-input.component'

import {formatPrice} from '../../utils/warehouse.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    CustomSelect,
    SubmitButton,
} from './modal-update-registry.styles'

const UpdateRegistryModal = ({ close, premise, option, setRefetchIndex }) => {
    const {updateRegistry} = useAnalytics()
    const {isAdmin} = useAuth()

    const [updateObj, setUpdateObj] = useState({
        amount: 0,
        premises: premise,
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUpdateObj(prevValue => ({
            // ...prevValue,
            ...(isAdmin) && { premises: prevValue.premises},
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (updateObj.amount === 0) return

        const obj = {
            ...updateObj,
            amount: option === "deposit" ? formatPrice(updateObj.amount) : (formatPrice(updateObj.amount) * (-1)) 
        }

        updateRegistry(obj, (data) => {
            // console.log(data)
            setRefetchIndex(prevValue => prevValue + 1)
            close()
        })
    }

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Upraviť stav pokladne</h2>

                {/* <h3>Priradiť k prevádzke</h3>
                <CustomSelect value={updateObj.premises} name='premises' onChange={(e) => handleChange(e)}>
                    <option value={0}>Nezadané</option>
                    {retailNames.map((name, idx) => {
                        if (idx === 0) return
                        return (
                            <option key={idx} value={idx}>{name}</option>
                        )
                    })}
                </CustomSelect> */}

                {option === 'withdraw' ? (
                    <h3>Množstvo ktoré chcete vybrať</h3>
                ) : (
                    <h3>Množstvo ktoré chcete vložiť</h3>
                )}
                <div>
                    <CustomInput
                        label='Vložte sumu*'
                        name='amount'
                        value={updateObj.amount.toString()}
                        handleChange={handleChange}
                    />
                </div>

                <SubmitButton onClick={handleSubmit}>Odoslať</SubmitButton>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default UpdateRegistryModal
