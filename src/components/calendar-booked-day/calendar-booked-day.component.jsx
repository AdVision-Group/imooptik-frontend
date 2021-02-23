import React, { useState, useEffect } from 'react'

import Spinner from '../spinner/spinner.component'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    BookedDayContainer
} from './calendar-booked-day.styles'

const CalendarBookedDay = ({ dayData, calendarId, time, userBookings, open }) => {
    const [isHalfHour, setIsHalfHour] = useState(false)
    const { response, isLoading } = useFetchByQuery(`api/booking/calendars/${calendarId}/dayInfo`, {
        date: dayData.bookingDate
    }, (!userBookings && !dayData))
    const [appointment, setAppointment] = useState(null)
    const [isValidDueTime, setIsValiDueTime] = useState(false)

    useEffect(() => {
        if (isLoading) return
        const todayBooking = response?.userBookings?.find(booking => booking?.dueTime === userBookings?.dueDate)

        if (userBookings.dueDate === todayBooking?.dueTime) {
            setIsValiDueTime(true)
        }

        setAppointment(todayBooking)

    }, [isLoading])

    useEffect(() => {
        return () => {
            setIsHalfHour(false)
            setIsValiDueTime(false)
        }
    }, [])

    return (
        <React.Fragment>
            <BookedDayContainer onClick={isValidDueTime ? open : () => { }} isHalfHour={isHalfHour}>
                {isValidDueTime && <div>
                    <h4>{appointment && appointment?.booking?.name}</h4>
                    <h5>{time}</h5>
                </div>}

            </BookedDayContainer>
        </React.Fragment>
    )
}

export default CalendarBookedDay
