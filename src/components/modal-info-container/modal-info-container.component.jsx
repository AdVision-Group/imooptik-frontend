import React from 'react'


import { useFetch } from '../../hooks/useFetch'

import OrderLensesOverview from '../order-lenses-overview/order-lenses-overview.component'
import OrderProductOverview from '../order-product-overview/order-product-overview.component'

import {
    AiOutlineClose
} from 'react-icons/ai'

import {
    ModalContainer,
    CloseButton
} from './modal-info-container.styles'

const ModalInfoContaier = ({ product, productType, closeModal }) => {
    const type = productType === 'lens' ? 'lenses' : 'products'
    const { response, isLoading, error } = useFetch(`api/store/${type}/${product[productType]}`)

    if (isLoading) return <ModalContainer><h1>Loading...</h1></ModalContainer>

    if (response.lenses) {
        return (
            <ModalContainer>
                <CloseButton onClick={closeModal}>Zatvoriť <div><AiOutlineClose /></div></CloseButton>
                <OrderLensesOverview product={response.lenses} />
            </ModalContainer>
        )
    }

    return (
        <ModalContainer>
            <CloseButton onClick={closeModal}>Zatvoriť <div><AiOutlineClose /></div></CloseButton>
            <OrderProductOverview product={response.product} />
        </ModalContainer>
    )
}

export default ModalInfoContaier
