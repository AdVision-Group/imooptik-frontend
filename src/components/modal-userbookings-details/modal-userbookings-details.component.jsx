import React from 'react'
import ReactDOM from 'react-dom'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    ModalContainer,
    Modal,
    CloseButton
} from './modal-userbookings-details.styles'

const UserbookingDetailsModal = ({ close, userBooking, calendarId }) => {
    console.log("userBooking")
    console.log("userBooking")
    console.log(userBooking)
    const { response, isLoading } = useFetchByQuery(`api/booking/calendars/${calendarId}/dayInfo`, {
        date: userBooking?.userBookings?.dueDate.split(":")[1]
    }, !userBooking)

    console.log(response)


    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Userbooking details</h2>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default UserbookingDetailsModal
