import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/auth/auth.context'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'
import BookingCalendarOverview from "../../components/booking-calendar-overview/booking-calendar-overview.component"

import Calendar from '../../components/calendar/calendar.component'
import WeekDays from '../../components/calendar-weekdays/calendar-weekdays.component'
import BookingAppoinments from '../../components/booking-appoinments/booking-appoinment.component'
import BookingCalendarBookings from '../../components/booking-calendar-bookings/booking-calendar-bookings.component'

import { useFetch } from '../../hooks/useFetch'
import { calendarFormat, months } from '../../utils/calendar.utils'

import {
    AiOutlineLeft,
    AiOutlineRight,
    AiOutlineDownCircle,
    AiOutlineUpCircle
} from 'react-icons/ai'

import {
    Title,
    GridRow,
    CalendarGridContainer,
    CalendarHeading,
    CalendarHeader,
    CalendarFormat,
    CalendarMonthContainer,
    IconContainer
} from './booking.styles'

const BookingSection = () => {
    const { isAdmin, currentUser } = useContext(AuthContext)
    const { push } = useHistory()
    const [showModal, setShowModal] = useState(true)
    const [showPremisesSection, setShowPremisesSection] = useState(true)
    const [activeCalendarFormat, setActiveCalendarFormat] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const [calendars, setCalendars] = useState([])
    const [selectedCalendar, setSelectedCalendar] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [calendarWeekIndex, setCalendarWeekIndex] = useState(0)
    const [selectedDay, setSelectedDay] = useState(null)

    const { isLoading, response, message } = useFetch('api/booking/calendars')

    const handleShowCalendarClick = (calendarId) => {
        setSelectedCalendar(calendarId)
        setShowPremisesSection(false)
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
            setSelectedMonth(11)
        } else {
            setSelectedMonth(prevValue => prevValue - 1)
        }
    }

    const getNextMonth = () => {
        if (selectedMonth === 11) {
            setSelectedYear(prevValue => prevValue + 1)
            setSelectedMonth(0)
        } else {
            setSelectedMonth(prevValue => prevValue + 1)
        }

    }

    const resetCalendarToDefault = () => {
        setSelectedMonth(new Date().getMonth())
        setSelectedYear(new Date().getFullYear())
        setCalendarWeekIndex(Math.ceil(new Date().getDate() / 7) - 1)
        setSelectedDay(null)
    }

    const handleCalendarBlockClick = (dayData) => {
        if (!dayData.bookings) return
        if (!dayData.bookingDate) return

        setSelectedCalendar(null)
        setSelectedDay(dayData)
    }

    useEffect(() => {
        if (!isLoading) {
            if (response) {
                if (isAdmin) {
                    setCalendars(response.calendars)
                    setShowModal(false)
                } else {
                    setCalendars(response.calendars.filter(calendar => calendar.premises === currentUser.premises))
                    const userCalendar = response.calendars.find(calendar => calendar.premises === currentUser.premises)
                    handleShowCalendarClick(userCalendar._id)
                    setShowModal(false)
                }
            }
        }
    }, [isLoading])

    useEffect(() => {
        console.log("unmount")
        return () => {
            setShowModal(true)
            setShowPremisesSection(true)
            setActiveCalendarFormat(0)
            setSearchQuery('')
            setCalendars([])
            setSelectedCalendar(null)
            setSelectedMonth(new Date().getMonth())
            setSelectedYear(new Date().getFullYear())
            setCalendarWeekIndex(0)
            setSelectedDay(null)
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={() => setShowModal(false)} />}
            {isAdmin && <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('rezervacie/novy-kalendar')}
                title="Rezervácie"
            />}

            <ScrollContainer>
                {isAdmin && <CalendarHeading>
                    <Title>Pobočky</Title>
                    <div onClick={() => setShowPremisesSection(prevValue => !prevValue)}>
                        <p>
                            {calendars.find(calendar => calendar._id === selectedCalendar)?.name}
                        </p>
                        <IconContainer>
                            {showPremisesSection ? <AiOutlineUpCircle /> : <AiOutlineDownCircle />}
                        </IconContainer>
                    </div>
                </CalendarHeading>}

                {showPremisesSection && <GridRow>
                    {calendars && calendars.map((calendar, idx) => (
                        <BookingCalendarOverview
                            key={idx}
                            calendar={calendar}
                            selectedCalendar={selectedCalendar}
                            handleShowUpClick={() => handleShowCalendarClick(calendar._id)}
                            handleUpdateClick={() => push(`rezervacie/${calendar._id}`)}
                        />
                    ))}
                </GridRow>}

                {selectedCalendar && (
                    <React.Fragment>
                        <CalendarHeader>
                            <Title>Kalendár</Title>

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
                                    handleCalendarBlockClick={handleCalendarBlockClick}
                                />
                            ) : (
                                    <WeekDays
                                        calendar={selectedCalendar}
                                        month={selectedMonth}
                                        year={selectedYear}
                                        weekIndex={calendarWeekIndex}
                                        handleCalendarBlockClick={handleCalendarBlockClick}

                                    />
                                )}
                        </CalendarGridContainer>

                        <BookingCalendarBookings calendarId={selectedCalendar} />
                    </React.Fragment>
                )}

                {selectedDay && (
                    <BookingAppoinments
                        day={selectedDay}
                    />
                )}
            </ScrollContainer>
        </section>
    )
}

export default BookingSection
