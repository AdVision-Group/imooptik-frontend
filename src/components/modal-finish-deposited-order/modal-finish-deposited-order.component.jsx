import React from 'react'
import ReactDOM from 'react-dom'

import {
    ModalContainer,
    Modal,
    CloseButton,
    SubmitButton
} from './modal-finish-deposited-order.styles'


const FinishDepositedOrderModal = ({ close }) => {
    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Zaplatiť zákazku</h2>
                <h3>Tu sa ešte pracuje...</h3>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default FinishDepositedOrderModal
