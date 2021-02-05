import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'
import BookingCalendarOverview from "../../components/booking-calendar-overview/booking-calendar-overview.component"

import Calendar from '../../components/calendar/calendar.component'
import WeekDays from '../../components/calendar-weekdays/calendar-weekdays.component'

import { useFetch } from '../../hooks/useFetch'
import { calendarFormat } from '../../utils/calendar.utils'

import {
    Title,
    GridRow,
    CalendarGridContainer,
    CalendarHeader,
    CalendarFormat
} from './booking.styles'

const BookingSection = () => {
    const { push } = useHistory()
    const [showModal, setShowModal] = useState(true)
    const [activeCalendarFormat, setActiveCalendarFormat] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const [calendars, setCalendars] = useState([])

    const { isLoading, response, message, refetch } = useFetch('api/booking/calendars')

    useEffect(() => {
        if (!isLoading) {
            if (response) {
                setCalendars(response.calendars)
                setShowModal(false)
            }
        }
    }, [isLoading])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={() => setShowModal(false)} />}
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('rezervacie/novy-kalendar')}
                title="Kalendar s objednávkami"
            />

            <ScrollContainer>
                <Title>Pobočky</Title>
                <GridRow>
                    {calendars && calendars.map((calendar, idx) => (
                        <BookingCalendarOverview key={idx} calendar={calendar} />
                    ))}
                </GridRow>

                <CalendarHeader>
                    <div>
                        <Title>Kalendár</Title>
                    </div>
                    <ul>
                        {calendarFormat.map((name, idx) => (
                            <CalendarFormat key={idx} isActive={activeCalendarFormat === idx} onClick={() => setActiveCalendarFormat(idx)}>{name}</CalendarFormat>
                        ))}
                    </ul>
                </CalendarHeader>
                <CalendarGridContainer>
                    {activeCalendarFormat === 0 ? (
                        <Calendar />
                    ) : (
                            <WeekDays />
                        )}
                </CalendarGridContainer>
            </ScrollContainer>
        </section>
    )
}

export default BookingSection
