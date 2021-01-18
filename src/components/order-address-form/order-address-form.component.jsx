import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { AuthContext } from '../../context/auth/auth.context'

import InputRow from '../product-input-row/product-input-row.component'
import CustomInput from '../custom-input/custom-input.component'
import Spinner from '../spinner/spinner.component'

import {
    Modal,
    ModalContainer,
    SubmitAddressButton,
    CloseButton,
    Title
} from './order-address-form.styles'

const OrderAddressForm = ({ closeForm, id, getUsers, selectedUser, setSelectedUser }) => {
    const { token } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const [address, setAddress] = useState({
        address: selectedUser.address || '',
        psc: selectedUser.psc || '',
        city: selectedUser.city || '',
        country: selectedUser.country || '',
        phone: selectedUser.phone || ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setAddress({
            ...address,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const myHeaders = new Headers();
            myHeaders.append("auth-token", token);
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                address: address.address,
                city: address.city,
                country: address.country,
                psc: address.psc,
                phone: address.phone
            })

            const requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/users/${id}`, requestOptions)
            const data = await response.json()

            console.log(data)
            if (data.user) {
                setSelectedUser({
                    ...data.user
                })
                closeForm()
            }

            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return ReactDOM.createPortal((
            <ModalContainer>
                <Modal>
                    <Spinner />
                </Modal>
            </ModalContainer>
        ), document.getElementById('portal'))
    }

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={closeForm}>close</CloseButton>
            <Modal>
                <Title>Upraviť adresu uživatela</Title>
                <InputRow
                    label=""
                    example='napr: Šmajdalfová 10'
                >
                    <CustomInput
                        label="Ulica a čislo domu"
                        type='text'
                        name='address'
                        value={address.address}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <InputRow
                    label=""
                    example='napr: 91501'
                >
                    <CustomInput
                        label="PSČ"
                        type='text'
                        name='psc'
                        value={address.psc}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <InputRow
                    label=""
                    example='napr: Bratislava'
                >
                    <CustomInput
                        label="Mesto"
                        type='text'
                        name='city'
                        value={address.city}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <InputRow
                    label=""
                    example='napr: Slovakia'
                >
                    <CustomInput
                        label="Krajina"
                        type='text'
                        name='country'
                        value={address.country}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <InputRow
                    label=""
                    example='napr: 0912 345 567'
                >
                    <CustomInput
                        label="Tel. číslo"
                        type='text'
                        name='phone'
                        value={address.phone}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <SubmitAddressButton onClick={handleSubmit}>Odoslať</SubmitAddressButton>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default OrderAddressForm
