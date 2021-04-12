import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {useAnalytics} from '../../context/analytics/analytics.context'

import CustomInput from '../custom-input/custom-input.component'

import {retailNames} from '../../utils/warehouse.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    CustomSelect,
    SubmitButton,
} from './modal-update-registry.styles'

const UpdateRegistryModal = ({ close }) => {
    const {updateRegistry} = useAnalytics()

    const [updateObj, setUpdateObj] = useState({
        amount: 0,
        premises: 0,
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUpdateObj(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (updateObj.amount === 0) return

        updateRegistry(updateObj, (data) => {
            console.log(data)
        })
    }

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Upraviť stav pokladne</h2>

                <h3>Priradiť k prevádzke</h3>
                <CustomSelect value={updateObj.premises} name='premises' onChange={(e) => handleChange(e)}>
                    <option value={0}>Nezadané</option>
                    {retailNames.map((name, idx) => {
                        if (idx === 0) return
                        return (
                            <option key={idx} value={idx}>{name}</option>
                        )
                    })}
                </CustomSelect>

                <h3>Množstvo ktoré chcete vložiť/vybrať</h3>
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
