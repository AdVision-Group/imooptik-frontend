import React, { useState, useEffect, useContext } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { BookingContext } from '../../context/booking/booking.context'
import { useHistory } from 'react-router-dom'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'
import BookingCalendarOverview from "../../components/booking-calendar-overview/booking-calendar-overview.component"

import Calendar from '../../components/calendar/calendar.component'

import {
    Title,
    GridRow,
    CalendarGridContainer,
    AppoimentOverview,
    Time,
    Line,
    // TwoRowGrid,
    Name,
    Desc,
    Options,
    ConfirmButton,
    DeclineButton,
    AppoimentContainer,
    AppoimentCol,
    NoteContainer
} from './booking.styles'

const BookingSection = () => {
    const { push } = useHistory()
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)

    const bookingData = useContext(BookingContext)

    const {
        calendar,
        calendars,
        bookings,
        // bookingRows,
        getCalendars,
        getCalendar,
        userBookings,
        getUserBookings,
        getBookings,
        // getBookingRows
        activeCalendar,
        selectedDate,
        setSelectedDate,
        resetBooking
    } = bookingData

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        if (!calendars) {
            getCalendars()
            getUserBookings()
        }
    }, [calendars])

    useEffect(() => {
        if (!bookings) {
            getBookings()
        }
    }, [calendars])

    useEffect(() => {
        return () => {
            resetBooking()
        }
    }, [])

    if (!calendars) return <Popup loading={isLoading} title={message} close={closeModal} />

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('rezervacie/novy-kalendar')}
                title="Kalendar objednávok"
            />

            <ScrollContainer>
                <Title>Pobočky</Title>
                <GridRow>
                    {calendars.map((calendar, idx) => (
                        <BookingCalendarOverview key={idx} calendar={calendar} handleClick={() => getCalendar(calendar._id, idx + 1)} handleUpdateClick={() => push(`rezervacie/${calendar._id}`)} isActive={activeCalendar === idx + 1} />
                    ))}
                </GridRow>

                {calendar.name && (
                    <React.Fragment>
                        <Title>Kalendár</Title>
                        <CalendarGridContainer>
                            <Calendar calendar={calendar} setSelectedDate={setSelectedDate} />

                            {calendar.name && selectedDate.name && <AppoimentOverview>
                                <Title>{selectedDate.name.charAt(0).toUpperCase() + selectedDate.name.slice(1)}</Title>

                                {
                                    calendar.booked[selectedDate.value].map((date, idx) => {
                                        const filteredUserBookings = userBookings.filter(booking => booking.dueDate === selectedDate.value && booking.dueTime.split(":")[0] === date)
                                        const time = date.split('/')[0] + ":" + date.split('/')[1]

                                        return (
                                            <AppoimentContainer key={idx}>
                                                <Time>{time}</Time>
                                                <Line />
                                                {
                                                    filteredUserBookings.map((user, idx) => {
                                                        const bookingType = bookings.find(booking => booking._id === user.booking)

                                                        return (
                                                            <AppoimentCol key={idx}>
                                                                <div>
                                                                    <Name>{user.name}</Name>
                                                                    <Desc>{bookingType.name}</Desc>
                                                                </div>
                                                                <Options>
                                                                    <ConfirmButton>Vybavený</ConfirmButton>
                                                                    <DeclineButton>Neprišiel</DeclineButton>
                                                                </Options>
                                                                <NoteContainer>
                                                                    <p>{user.note}</p>
                                                                </NoteContainer>
                                                            </AppoimentCol>
                                                        )
                                                    })
                                                }
                                            </AppoimentContainer>
                                        )
                                    })
                                }
                            </AppoimentOverview>}
                        </CalendarGridContainer>
                    </React.Fragment>
                )}
            </ScrollContainer>
        </section>
    )
}

export default BookingSection
