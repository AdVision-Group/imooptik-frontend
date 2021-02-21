import React, { useState, useEffect } from 'react'

import Spinner from '../spinner/spinner.component'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    BookedDayContainer
} from './calendar-booked-day.styles'

const CalendarBookedDay = ({ dayData, calendarId, time, userBookings }) => {
    const [isHalfHour, setIsHalfHour] = useState(false)
    const { response, isLoading } = useFetchByQuery(`api/booking/calendars/${calendarId}/dayInfo`, {
        date: dayData.bookingDate
    }, !userBookings)
    const [appointment, setAppointment] = useState(null)
    const [isValidDueTime, setIsValiDueTime] = useState(false)

    console.log(userBookings)

    useEffect(() => {
        if (isLoading) return
        console.log(response)
        const todayBooking = response.userBookings.find(booking => booking.dueTime === userBookings.dueDate)

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

    // console.log(isHalfHour)
    // if (isLoading) return <Spinner />

    // const appointment = 
    // console.log(appointment)

    return (
        <React.Fragment>
            <BookedDayContainer isHalfHour={isHalfHour} onClick={() => {
                console.log("response")
                console.log("response")
                console.log("response")
                console.log(response)
            }}>
                {isValidDueTime && <div>
                    <h4>{appointment && appointment?.booking?.name}</h4>
                    <h5>{time}</h5>
                </div>}

            </BookedDayContainer>
        </React.Fragment>
    )
}

export default CalendarBookedDay
