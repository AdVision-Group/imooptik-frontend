import React from 'react'

import {
    CloseButton,
    Modal,
    ModalContainer
} from './modal-finish-order.styles'

const FinishOrderModal = ({ close }) => {
    return (
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h3>Dokončenie objednávky</h3>
            </Modal>
        </ModalContainer>
    )
}

export default FinishOrderModal
