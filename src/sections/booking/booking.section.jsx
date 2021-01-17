import React, { useState, useEffect, useContext } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { BookingContext } from '../../context/booking/booking.context'

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
    TwoRowGrid,
    Name,
    Desc,
    Options,
    ConfirmButton,
    DeclineButton,
    AppoimentContainer
} from './booking.styles'

const BookingSection = () => {
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)

    const {
        calendar,
        calendars,
        // bookings,
        // bookingRows,
        getCalendars,
        getCalendar,
        userBookings,
        getUserBookings,
        // getBookings,
        // getBookingRows
        activeCalendar,
        selectedDate,
        setSelectedDate,
    } = useContext(BookingContext)

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        if (!calendars) {
            getCalendars()
            getUserBookings()
        }
    }, [calendars])

    // useEffect(() => {
    //     if (!bookings) {
    //         getBookings()
    //     }
    // }, [calendars])

    // useEffect(() => {
    //     if (!bookingRows) {
    //         getBookingRows()
    //     }
    // }, [calendars])

    // console.log(bookings)
    // console.log(bookingRows)

    if (!calendars) return <Popup loading={isLoading} title={message} close={closeModal} />

    console.log(userBookings)

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                title="Kalendar objednávok"
            />

            <ScrollContainer>
                <Title>Pobočky</Title>
                <GridRow>
                    {calendars.map((calendar, idx) => (
                        <BookingCalendarOverview key={idx} calendar={calendar} handleClick={() => getCalendar(calendar._id, idx + 1)} isActive={activeCalendar === idx + 1} />
                    ))}
                </GridRow>

                <Title>Kalendár</Title>
                <CalendarGridContainer>
                    {calendar && <Calendar calendar={calendar} setSelectedDate={setSelectedDate} />}

                    {calendar && selectedDate && <AppoimentOverview>
                        <Title>{selectedDate.charAt(0).toUpperCase() + selectedDate.slice(1)}</Title>

                        <AppoimentContainer>
                            <Time>12:00</Time>
                            <Line />
                            <TwoRowGrid>
                                <div>
                                    <Name>Meno Priezvisko</Name>
                                    <Desc>Kontrola očí</Desc>
                                </div>
                                <Options>
                                    <ConfirmButton>Vybavený</ConfirmButton>
                                    <DeclineButton>Neprišiel</DeclineButton>
                                </Options>
                            </TwoRowGrid>
                        </AppoimentContainer>
                        <AppoimentContainer>
                            <Time>12:00</Time>
                            <Line />
                            <TwoRowGrid>
                                <div>
                                    <Name>Meno Priezvisko</Name>
                                    <Desc>Kontrola očí</Desc>
                                </div>
                                <Options>
                                    <ConfirmButton>Vybavený</ConfirmButton>
                                    <DeclineButton>Neprišiel</DeclineButton>
                                </Options>
                            </TwoRowGrid>
                        </AppoimentContainer>
                        <AppoimentContainer>
                            <Time>12:00</Time>
                            <Line />
                            <TwoRowGrid>
                                <div>
                                    <Name>Meno Priezvisko</Name>
                                    <Desc>Kontrola očí</Desc>
                                </div>
                                <Options>
                                    <ConfirmButton>Vybavený</ConfirmButton>
                                    <DeclineButton>Neprišiel</DeclineButton>
                                </Options>
                            </TwoRowGrid>
                        </AppoimentContainer>
                    </AppoimentOverview>}
                </CalendarGridContainer>
            </ScrollContainer>
        </section>
    )
}

export default BookingSection
