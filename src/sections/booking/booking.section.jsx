import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'
import BookingCalendarOverview from "../../components/booking-calendar-overview/booking-calendar-overview.component"

import Calendar from '../../components/calendar/calendar.component'
import WeekDays from '../../components/calendar-weekdays/calendar-weekdays.component'

import { useFetch } from '../../hooks/useFetch'
import { calendarFormat, months, getMonday } from '../../utils/calendar.utils'

import {
    AiOutlineLeft,
    AiOutlineRight
} from 'react-icons/ai'

import {
    Title,
    GridRow,
    CalendarGridContainer,
    CalendarHeader,
    CalendarFormat,
    CalendarMonthContainer
} from './booking.styles'

const BookingSection = () => {
    const { push } = useHistory()
    const [showModal, setShowModal] = useState(true)
    const [activeCalendarFormat, setActiveCalendarFormat] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const [calendars, setCalendars] = useState([])
    const [selectedCalendar, setSelectedCalendar] = useState(null)
    const [selectedDay] = useState(new Date().getDay())
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [selectedMondayOfWeek, setSelectedMondayOWeek] = useState(getMonday(new Date(selectedYear, selectedMonth, selectedDay)))
    const [calendarWeekIndex, setCalendarWeekIndex] = useState(0)

    const { isLoading, response, message, refetch } = useFetch('api/booking/calendars')

    const handleShowCalendarClick = (calendarId) => {
        setSelectedCalendar(calendarId)
        resetCalendarToDefault()
    }

    const getPrevWeek = () => {
        if (calendarWeekIndex - 1 < 0) {
            setCalendarWeekIndex(0)

        } else {
            setCalendarWeekIndex(prevValue => prevValue - 1)
        }
    }

    const getNextWeek = () => {
        const lastDayIndex = new Date(selectedYear, selectedMonth, 0).getDate()
        console.log(calendarWeekIndex * 7)
        console.log(lastDayIndex)
        if (((calendarWeekIndex + 1) * 7) >= lastDayIndex) {
            setCalendarWeekIndex(0)
        } else {
            setCalendarWeekIndex(prevValue => prevValue + 1)
        }
    }

    const getPrevMonth = () => {
        if (selectedMonth === 0) {
            setSelectedYear(prevValue => prevValue - 1)
            setSelectedMonth(10)
        } else {
            setSelectedMonth(prevValue => prevValue - 1)
        }
    }

    const getNextMonth = () => {
        console.log('click')
        if (selectedMonth === 10) {
            setSelectedYear(prevValue => prevValue + 1)
            setSelectedMonth(0)
        } else {
            setSelectedMonth(prevValue => prevValue + 1)
        }

    }

    const resetCalendarToDefault = () => {
        setSelectedMonth(new Date().getMonth())
        setSelectedYear(new Date().getFullYear())
        setSelectedMondayOWeek(getMonday(new Date(selectedYear, selectedMonth, selectedDay)))
        setCalendarWeekIndex(0)
    }

    useEffect(() => {
        setSelectedMondayOWeek(getMonday(new Date(selectedYear, selectedMonth, selectedDay)))
    }, [selectedDay])

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
                        <BookingCalendarOverview
                            key={idx}
                            calendar={calendar}
                            selectedCalendar={selectedCalendar}
                            handleShowUpClick={() => handleShowCalendarClick(calendar._id)}
                        />
                    ))}
                </GridRow>

                {selectedCalendar && (
                    <React.Fragment>
                        <CalendarHeader>
                            <div>
                                <Title>Kalendár</Title>
                            </div>

                            {activeCalendarFormat === 0 ? (
                                <CalendarMonthContainer>
                                    <button onClick={getPrevMonth}><AiOutlineLeft /></button>
                                    <p>{months[selectedMonth]}</p>
                                    <button onClick={getNextMonth}><AiOutlineRight /></button>
                                </CalendarMonthContainer>
                            ) : (
                                    <CalendarMonthContainer>
                                        <button onClick={getPrevWeek}><AiOutlineLeft /></button>
                                        <p>{calendarWeekIndex + 1}</p>
                                        <button onClick={getNextWeek}><AiOutlineRight /></button>
                                    </CalendarMonthContainer>
                                )}

                            <ul>
                                {calendarFormat.map((name, idx) => (
                                    <CalendarFormat key={idx} isActive={activeCalendarFormat === idx} onClick={() => setActiveCalendarFormat(idx)}>{name}</CalendarFormat>
                                ))}
                            </ul>
                        </CalendarHeader>
                        <CalendarGridContainer>
                            {activeCalendarFormat === 0 ? (
                                <Calendar
                                    calendar={selectedCalendar}
                                    month={selectedMonth}
                                    year={selectedYear}
                                />
                            ) : (
                                    <WeekDays
                                        calendar={selectedCalendar}
                                        month={selectedMonth}
                                        year={selectedYear}
                                        monday={selectedMondayOfWeek}
                                        weekIndex={calendarWeekIndex}
                                    />
                                )}
                        </CalendarGridContainer>
                    </React.Fragment>
                )}
            </ScrollContainer>
        </section>
    )
}

export default BookingSection
