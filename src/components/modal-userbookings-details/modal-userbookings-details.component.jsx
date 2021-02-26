import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Spinner from '../spinner/spinner.component'

import { useFetchByQuery } from '../../hooks/useFetch'
import { retailNames } from '../../utils/warehouse.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    GridContainer,
    BlockContainer,
    Header,
    CancelButton,
    Container
} from './modal-userbookings-details.styles'

const UserbookingDetailsModal = ({ close, userBooking, calendarId, cancelUserBooking }) => {
    const { response, isLoading } = useFetchByQuery(`api/booking/calendars/${calendarId}/dayInfo`, {
        date: userBooking?.userBookings?.dueDate.split(":")[1]
    }, !userBooking)

    const [booking, setBooking] = useState(null)

    useEffect(() => {
        if (isLoading) return
        if (!response) return

        const newBooking = response.userBookings.find(booking => booking.dueTime === userBooking.userBookings.dueDate)
        setBooking(newBooking)

    }, [isLoading])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                {!booking && <Spinner />}
                <h2>{booking?.booking?.name}</h2>

                <Header>
                    <h3>Informácie:</h3>
                    <CancelButton onClick={() => cancelUserBooking(booking._id)}>Zrušiť rezerváciu</CancelButton>
                </Header>
                <GridContainer>
                    <BlockContainer>
                        <h3>Meno a priezvisko</h3>
                        <p>{booking?.name}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>Prevadzka</h3>
                        <p>{retailNames[booking?.booking?.premises]}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>Tel. číslo</h3>
                        <p>{booking?.phone}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>E-mail</h3>
                        <p>{booking?.email}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>Dátum</h3>
                        <p>{booking?.dueTime}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>Zrušené</h3>
                        <p>{booking?.cancelled ? "Ano" : "Nie"}</p>
                    </BlockContainer>
                </GridContainer>

                <Container>
                    <BlockContainer>
                        <h3>Poznámka</h3>
                        {booking?.note ? (
                            <p>{booking?.note}</p>
                        ) : (
                                <p>Žiadná poznámka</p>
                            )}
                    </BlockContainer>

                    <BlockContainer>
                        <h3>Popis</h3>
                        <p>{booking?.booking?.description}</p>
                    </BlockContainer>

                </Container>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default UserbookingDetailsModal
