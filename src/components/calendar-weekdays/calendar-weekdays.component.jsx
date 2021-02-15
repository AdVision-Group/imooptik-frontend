import React, { useState, useEffect, useContext } from 'react'
import { useFetchById } from '../../hooks/useFetch'
import { BookingContext } from '../../context/booking/booking.context'

import UserBookingModal from '../modal-user-bookings/modal-user-booking.component'

import {
    dayNames,
    getPreviousMonthDays,
    getNextMonthDays,
    getCurrentMonthDays,
    getBooking,
    checkIfHasAppoinment
} from '../../utils/calendar.utils'

import {
    Container,
    HeaderBlock,
    HourBlock,
    AppointmentContainer,
    HourGrid,
    TableHead,
    HourBlockContainer,
    EmptyContainer
} from './calendar-weekdays.styles'

const WeekDays = ({
    calendar,
    year,
    month,
    weekIndex,
    handleCalendarBlockClick
}) => {
    const { createUserBooking } = useContext(BookingContext)
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const lastDay = new Date(year, month + 1, 0).getDate()
    const firstDayIndex = new Date(year, month, 0).getDay();
    const lastDayIndex = new Date(year, month + 1, 0).getDay()
    const prevLastDay = new Date(year, month, 0).getDate()

    const nextDays = 7 - lastDayIndex

    const [calendarDays, setCalendarDays] = useState([])
    const [selectedDay, setSelectedDay] = useState(null)
    const [showUserBooking, setShowUserBooking] = useState(false)

    const handleOpenUserBookingModal = (dayData) => {
        setSelectedDay({
            ...dayData,
            year,
            month,
        })
        setShowUserBooking(true)
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
        }
    }, [isLoading])

    return (
        <div>
            {showUserBooking && <UserBookingModal createUserBooking={createUserBooking} refetchCalendar={refetch} calendar={response?.calendar} day={selectedDay} close={() => setShowUserBooking(false)} />}
            <Container>
                <TableHead>
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
                    {calendarDays.slice(weekIndex * 7, (weekIndex * 7) + 7).map((dayData, idx) => {

                        return <HourBlock key={idx}>
                            {[...Array(24)].map((value, index) => {
                                if (Number(response?.calendar?.startTimes[idx].split('/')[0]) > index) return
                                if (Number(response?.calendar?.endTimes[idx].split('/')[0]) < index) return
                                if (response?.calendar?.endTimes[idx] === "X") return
                                return (
                                    <HourBlockContainer key={index}>
                                        {dayData.bookings && checkIfHasAppoinment(index, dayData?.bookings) ? (
                                            <React.Fragment>
                                                {dayData?.bookings.find(booking => Number(booking?.split('/')[1]) === 0 && Number(booking?.split('/')[0]) === index) && <AppointmentContainer onClick={() => console.log("Click")}>
                                                    <p>{dayData?.bookings.find(booking => Number(booking?.split('/')[1]) === 0 && Number(booking?.split('/')[0]) === index)?.replace("/", ":")}</p>
                                                </AppointmentContainer>}
                                                {dayData?.bookings.find(booking => Number(booking?.split('/')[1]) === 30 && Number(booking?.split('/')[0]) === index) && <AppointmentContainer onClick={() => console.log("Click")}>
                                                    <p>{dayData?.bookings.find(booking => Number(booking?.split('/')[1]) === 30 && Number(booking?.split('/')[0]) === index)?.replace("/", ":")}</p>
                                                </AppointmentContainer>}
                                                <EmptyContainer onClick={() => handleOpenUserBookingModal({ ...dayData, time: `${index}:00` })} />
                                            </React.Fragment>
                                        ) : (
                                                <EmptyContainer onClick={() => handleOpenUserBookingModal({ ...dayData, time: `${index}:00` })} />
                                            )}
                                        <span>{index}:00</span>

                                    </HourBlockContainer>
                                )
                            })}
                        </HourBlock>

                    })}
                </HourGrid>
            </Container>
        </div>
    )
}

export default WeekDays