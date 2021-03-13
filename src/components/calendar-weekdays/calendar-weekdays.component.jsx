import React, { useState, useEffect, useContext } from 'react'
import { useFetchById } from '../../hooks/useFetch'
import { BookingContext } from '../../context/booking/booking.context'
import { WeekCalendarContext } from '../../context/week-calendar/week-calendar.context'

import UserbookingDetailsModal from '../modal-userbookings-details/modal-userbookings-details.component'
import UserBookingModal from '../modal-user-bookings/modal-user-booking.component'
import CalendarBookedDay from '../calendar-booked-day/calendar-booked-day.component'

import {
    dayNames,
    getPreviousMonthDays,
    getNextMonthDays,
    getCurrentMonthDays,
    getBooking,
} from '../../utils/calendar.utils'

import { changeSlash } from '../../utils/week-calendar.utils'

import {
    Container,
    HeaderBlock,
    HourBlock,
    HourGrid,
    TableHead,
    HourBlockContainer,
    EmptyContainer,
    HourTime,
    EmptyHourBlock
} from './calendar-weekdays.styles'

const WeekDays = ({
    calendar,
    year,
    month,
    weekIndex,
    showUserBooking,
    setShowUserBooking,
    handleOpenUserBookingModal,
    selectedDay,
}) => {
    const { timeline, getDayData, refetchWeekCalendar, cancelUserBooking } = useContext(WeekCalendarContext)
    const { createUserBooking } = useContext(BookingContext)
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const lastDay = new Date(year, month + 1, 0).getDate()
    const firstDayIndex = new Date(year, month, 0).getDay();
    const lastDayIndex = new Date(year, month + 1, 0).getDay()
    const prevLastDay = new Date(year, month, 0).getDate()

    const nextDays = 7 - lastDayIndex

    const [calendarDays, setCalendarDays] = useState([])
    // const [selectedDay, setSelectedDay] = useState(null)
    const [showBookingDetails, setShowBookingDetails] = useState(false)

    const [selectedUserBooking, setSelectedUserBooking] = useState(null)

    const handleOpenDetailsModal = (userBooking) => {
        setSelectedUserBooking(userBooking)
        setShowBookingDetails(true)
    }

    const handleCancelUserBooking = (userBookingId) => {
        cancelUserBooking(userBookingId, refetch, setShowBookingDetails)
    }

    useEffect(() => {
        if (isLoading) return

        if (response.calendar) {
            const prevMonthDays = getPreviousMonthDays(firstDayIndex)
            const monthDays = getCurrentMonthDays(lastDay)
            const nextMonthDays = getNextMonthDays(nextDays)
            const monthDaysWithBookings = getBooking(monthDays, response.calendar, month, year)

            setCalendarDays([
                ...prevMonthDays,
                ...monthDaysWithBookings,
                ...nextMonthDays
            ])

            // fillDayData([
            //     ...prevMonthDays,
            //     ...monthDaysWithBookings,
            //     ...nextMonthDays
            // ], response.calendar)
        }
    }, [isLoading])

    useEffect(() => {
        refetch()
    }, [month])


    return (
        <div>
            {showBookingDetails && <UserbookingDetailsModal cancelUserBooking={handleCancelUserBooking} refetchCalendar={refetch} calendarId={calendar} userBooking={selectedUserBooking} close={() => setShowBookingDetails(false)} />}
            {showUserBooking && <UserBookingModal refetchWeekCalendar={refetchWeekCalendar} createUserBooking={createUserBooking} refetchCalendar={refetch} calendar={response?.calendar} day={selectedDay} close={() => setShowUserBooking(false)} />}
            <Container>
                <TableHead>
                    <HeaderBlock>{" "}</HeaderBlock>
                    {calendarDays.slice(weekIndex * 7, (weekIndex * 7) + 7).map(({ dayNumber, isDisable, isPrevDay, isNextDay }, idx) => (
                        <HeaderBlock isDisabled={isDisable} key={idx}>
                            {isPrevDay ? (
                                <React.Fragment>
                                    <p>{dayNames[new Date(year, month - 1, prevLastDay - (dayNumber)).getDay()]}</p>
                                    <p>{prevLastDay - (dayNumber - 1)}</p>
                                </React.Fragment>
                            ) : isNextDay ? (
                                <React.Fragment>
                                    <p>{dayNames[new Date(year, month + 1, dayNumber - 1).getDay()]}</p>
                                    <p>{dayNumber} </p>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <p>{dayNames[new Date(year, month, dayNumber - 1).getDay()]}</p>
                                    <p>{dayNumber} </p>
                                </React.Fragment>
                            )}
                        </HeaderBlock>
                    ))}
                </TableHead>

                <HourGrid>
                    <HourBlock>
                        {timeline && timeline.map((time, idx) => (
                            <HourBlockContainer key={idx} style={response?.calendar?.interval === 60 ? ({ height: "10rem" }) : ({ height: "5rem" })}>
                                <HourTime >
                                    <p>{changeSlash(time) ?? ""}</p>
                                </HourTime>
                            </HourBlockContainer>

                        ))}
                    </HourBlock>
                    {calendarDays.length > 0 && calendarDays.slice(weekIndex * 7, (weekIndex * 7) + 7).map((dayData, idx) => {
                        const day = getDayData(dayData?.dayNumber, idx, response.calendar)
                        return (
                            < HourBlock key={idx} >
                                { day && day.map((interval, idx) => {
                                    if (interval?.empty) return (
                                        <EmptyHourBlock style={response?.calendar?.interval === 60 ? ({ height: "10rem" }) : ({ height: "5rem" })} />
                                    )
                                    return (
                                        <HourBlockContainer style={response?.calendar?.interval === 60 ? ({ height: "10rem" }) : ({ height: "5rem" })} key={idx}>
                                            {interval?.userBookings && <CalendarBookedDay
                                                dayData={dayData}
                                                calendarId={calendar}
                                                time={interval.time}
                                                userBookings={interval.userBookings}
                                                open={() => handleOpenDetailsModal(interval)}
                                            />}
                                            <EmptyContainer onClick={dayData.isDisable ? () => { } : () => handleOpenUserBookingModal({
                                                ...dayData, time: interval.time, year,
                                                month,
                                            })} />
                                        </HourBlockContainer>
                                    )
                                })}
                            </HourBlock >
                        )
                    })}
                </HourGrid>
            </Container>
        </div>
    )
}

export default WeekDays
