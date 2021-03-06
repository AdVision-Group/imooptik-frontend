import React, { useState, useContext } from 'react'
import { BookingContext } from '../../context/booking/booking.context'
import { AuthContext } from '../../context/auth/auth.context'

import BookingModal from '../modal-booking/modal-booking.component'
import Spinner from '../../components/spinner/spinner.component'
import { useFetchById } from '../../hooks/useFetch'

import {
    GridContainer,
    Container,
    Header,
    AddButton,
    ContainerHeader,
    ContainerBody,
    ContainerOptions,
    UpdateButton,
    DeleteButton,
    InfoParagraph,
    ActiveSpan
} from './booking-calendar-bookings.styles'

const BookingCalendarBookings = ({
    calendarId
}) => {
    const { isAdmin } = useContext(AuthContext)
    const { deleteBooking } = useContext(BookingContext)
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendarId, !calendarId)
    const [showBookingModal, setShowBookingModal] = useState(false)
    const [selectedBooking, setSelectedBooking] = useState(null)

    const handleDeleteClick = (bookingId) => {
        deleteBooking(bookingId)
        refetch()
    }

    const handleUpdateClick = (bookingId) => {
        setSelectedBooking(bookingId)
        setShowBookingModal(true)
    }

    const handleCloseModal = () => {
        setShowBookingModal(false)
        setSelectedBooking(null)
    }

    if (isLoading) return <Spinner />

    return (
        <GridContainer>
            {showBookingModal && (
                <BookingModal
                    selectedBooking={selectedBooking}
                    calendarId={calendarId}
                    close={handleCloseModal}
                    refetch={refetch}
                />
            )}
            <div>
                <Header>
                    <h3>Vyšetrenia</h3>
                    {isAdmin && <AddButton onClick={() => setShowBookingModal(true)}>Pridať</AddButton>}
                </Header>

                <div>
                    {response?.calendar?.bookings?.map((booking, idx) => (
                        <Container key={idx}>
                            <ContainerHeader>
                                <div>
                                    <h4>{booking.name}</h4>
                                    <ActiveSpan isActive={booking?.active}>{booking?.active ? "Aktívne" : "Neaktívne"}</ActiveSpan>
                                </div>
                                <div>
                                    <p>{booking.price}€</p>
                                </div>

                            </ContainerHeader>
                            <ContainerBody>
                                <p>{booking.description}</p>
                            </ContainerBody>
                            {isAdmin && <ContainerOptions>
                                <UpdateButton onClick={() => handleUpdateClick(booking._id)}>Upraviť</UpdateButton>
                                <DeleteButton onClick={() => handleDeleteClick(booking._id)}>Vymazať</DeleteButton>
                            </ContainerOptions>}
                        </Container>
                    ))}
                    {!response?.calendar?.bookings?.length && (
                        <InfoParagraph>Žiadné vyšetrenia</InfoParagraph>
                    )}
                </div>
            </div>
        </GridContainer>
    )
}

export default BookingCalendarBookings
