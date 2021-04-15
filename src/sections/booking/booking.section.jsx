import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { AuthContext } from '../../context/auth/auth.context'

// import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'
import BookingCalendarOverview from "../../components/booking-calendar-overview/booking-calendar-overview.component"
import WeekCalendarProvider from '../../context/week-calendar/week-calendar.context'

import Calendar from '../../components/calendar/calendar.component'
import WeekDays from '../../components/calendar-weekdays/calendar-weekdays.component'
// import BookingAppoinments from '../../components/booking-appoinments/booking-appoinment.component'
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
    FixedContainer,
} from '../../global.styles'

import {
    Header,
    Title,
    GridRow,
    CalendarGridContainer,
    CalendarHeading,
    CalendarHeader,
    CalendarFormat,
    CalendarMonthContainer,
    IconContainer,
    UpdateButton
} from './booking.styles'

const BookingSection = () => {
    const { isAdmin, currentUser, isOptometrist } = useContext(AuthContext)
    const { showModal, setShowModal, message, closeModal } = useContext(LoadingModalContext)
    const { push } = useHistory()
    // const [showModal, setShowModal] = useState(true)
    const [showPremisesSection, setShowPremisesSection] = useState(true)
    const [activeCalendarFormat, setActiveCalendarFormat] = useState(1)
    const [calendars, setCalendars] = useState([])
    const [selectedCalendar, setSelectedCalendar] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [calendarWeekIndex, setCalendarWeekIndex] = useState(0)
    const [selectedDay, setSelectedDay] = useState(null)

    const [showUserBooking, setShowUserBooking] = useState(false)


    const handleOpenUserBookingModal = (dayData) => {
        if (dayData !== null) {
            setSelectedDay({
                ...dayData,
            })
        }
        setShowUserBooking(true)
    }

    const { isLoading, response } = useFetch('api/booking/calendars')

    const handleShowCalendarClick = (calendarId) => {
        if (!calendarId) return
        setSelectedCalendar(calendarId)
        setShowPremisesSection(false)
        resetCalendarToDefault()
    }

    const getPrevWeek = () => {
        if (calendarWeekIndex - 1 < 0) {
            if (selectedMonth === 0) {
                setSelectedYear(prevValue => prevValue - 1)
                setSelectedMonth(11)
                setCalendarWeekIndex(Math.ceil(new Date(selectedYear, selectedMonth, 0).getDate() / 7) - 1)

            } else {
                setSelectedMonth(prevValue => prevValue - 1)
                setCalendarWeekIndex(Math.ceil(new Date(selectedYear, selectedMonth, 0).getDate() / 7) - 1)
                // setCalendarWeekIndex(Math.ceil(new Date().getDate() / 7))

            }
        } else {
            setCalendarWeekIndex(prevValue => prevValue - 1)
        }
    }

    const getNextWeek = () => {
        const lastDayIndex = new Date(selectedYear, selectedMonth, 0).getDate()

        if (((calendarWeekIndex) * 7) >= lastDayIndex - 7) {
            setCalendarWeekIndex(0)
            setSelectedMonth(prevValue => prevValue + 1)

            if (selectedMonth === 11) {
                setSelectedYear(prevValue => prevValue + 1)
                setSelectedMonth(0)
                setCalendarWeekIndex(0)

            }
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
        Date.prototype.getWeekOfMonth = function() {
            var firstWeekday = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
            var offsetDate = this.getDate() + firstWeekday - 1;
            return Math.floor(offsetDate / 7);
          }
        setSelectedMonth(new Date().getMonth())
        setSelectedYear(new Date().getFullYear())
        // if(new Date(selectedYear, selectedMonth, 0).getDay() === 1) {
            // setCalendarWeekIndex(Math.ceil(new Date().getDate() / 7) - 1)
        // } else {

        console.log(new Date().getWeekOfMonth())
            setCalendarWeekIndex(new Date().getWeekOfMonth() )
            // setCalendarWeekIndex(Math.ceil(new Date().getDate() / 7))
        // }
        // setSelectedDay(null)
    }

    const handleCalendarBlockClick = (dayData) => {
        // if (!dayData.bookings) return
        // if (!dayData.bookingDate) return
        Date.prototype.getWeekOfMonth = function() {
            var firstWeekday = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
            var offsetDate = this.getDate() + firstWeekday - 1;
            return Math.floor(offsetDate / 7);
          }

        // setSelectedCalendar(null)
        // setSelectedDay(dayData)
        setCalendarWeekIndex(new Date().getWeekOfMonth() )

        // setCalendarWeekIndex(Math.ceil(dayData.dayNumber / 7) - 1)
        setActiveCalendarFormat(1)
    }

    // useEffect(() => {
    //     // if(!dayData.dayNumber) return
    //     // if()
    //     console.log(Math.ceil(new Date(selectedYear, selectedMonth + 1, 0).getDate()  / 7))
    //     console.log(new Date(selectedYear, selectedMonth + 1, 0).getDate())

    //     setCalendarWeekIndex(Math.ceil(new Date().getDate() / 7))
    // }, [])

    useEffect(() => {
        if (!isLoading) {
            if (response) {
                if (isAdmin) {
                    setCalendars(response.calendars)
                    const userCalendar = response.calendars.find(calendar => calendar.premises === currentUser.premises)
                    handleShowCalendarClick(userCalendar?._id)
                    setShowModal(false)
                } else {
                    setCalendars(response.calendars.filter(calendar => calendar.premises === currentUser.premises))
                    const userCalendar = response.calendars.find(calendar => calendar.premises === currentUser.premises)
                    handleShowCalendarClick(userCalendar?._id)
                    setShowModal(false)
                }
                closeModal()
            }
        }
    }, [isLoading])

    useEffect(() => {
        return () => {
            setShowModal(true)
            setShowPremisesSection(true)
            setActiveCalendarFormat(0)
            setCalendars([])
            setSelectedCalendar(null)
            setSelectedMonth(new Date().getMonth())
            setSelectedYear(new Date().getFullYear())
            setCalendarWeekIndex(0)
            setSelectedDay(null)
            closeModal()
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={() => setShowModal(false)} />}

            {isAdmin && <Header>
                <FixedContainer>
                    <div>
                        <h1>Rezervácie</h1>
                    </div>
                    <div>
                        <UpdateButton onClick={() => handleOpenUserBookingModal(null)}>Pridať rezerváciu</UpdateButton>
                        <UpdateButton onClick={() => push('rezervacie/novy-kalendar')}>Pridať kalendár</UpdateButton>
                    </div>

                </FixedContainer>
            </Header>}

            {(!isOptometrist && !isAdmin) && (
                <Header>
                    <FixedContainer>
                        <div>
                            <h1>Rezervácie</h1>
                        </div>
                        {selectedCalendar ? <div>
                            <UpdateButton onClick={() => handleOpenUserBookingModal(null)}>Pridať rezerváciu</UpdateButton>
                        </div> : (
                                <div>
                                    <p>K vašemu účtu nieje priradená prevádzka</p>
                                </div>
                            )}

                    </FixedContainer>
                </Header>
            )}

            {(isOptometrist && !isAdmin) && (
                <Header>
                    <FixedContainer>
                        <div>
                            <h1>Rezervácie</h1>
                        </div>
                        {selectedCalendar ? <div>
                            <UpdateButton onClick={() => handleOpenUserBookingModal(null)}>Pridať rezerváciu</UpdateButton>
                            <UpdateButton onClick={() => push(`rezervacie/${selectedCalendar}`)}>Upraviť kalendár</UpdateButton>
                        </div> : (
                                <div>
                                    <p>K vašemu účtu nieje priradená prevádzka</p>
                                </div>
                            )}

                    </FixedContainer>
                </Header>
            )}

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
                                        <div>
                                            <p>{calendarWeekIndex + 1}</p>
                                            <p>{months[selectedMonth]}</p>
                                        </div>
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
                                    <WeekCalendarProvider
                                        calendar={selectedCalendar}
                                        month={selectedMonth}
                                        year={selectedYear}
                                        weekIndex={calendarWeekIndex}
                                        handleCalendarBlockClick={handleCalendarBlockClick}
                                    >
                                        <WeekDays
                                            calendar={selectedCalendar}
                                            month={selectedMonth}
                                            year={selectedYear}
                                            weekIndex={calendarWeekIndex}
                                            handleCalendarBlockClick={handleCalendarBlockClick}
                                            showUserBooking={showUserBooking}
                                            setShowUserBooking={setShowUserBooking}
                                            handleOpenUserBookingModal={handleOpenUserBookingModal}
                                            selectedDay={selectedDay}
                                            getNextWeek={getNextWeek}
                                        />

                                    </WeekCalendarProvider>
                                )}
                        </CalendarGridContainer>

                        <BookingCalendarBookings calendarId={selectedCalendar} />
                    </React.Fragment>
                )}

                {/* {selectedDay && (
                    <BookingAppoinments
                        day={selectedDay}
                    />
                )} */}
            </ScrollContainer>
        </section>
    )
}

export default BookingSection
