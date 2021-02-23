import React, { useState, useEffect } from 'react'
import stringSimilarity from "string-similarity"


// import Spinner from '../spinner/spinner.component'

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
    const [isBelongToAnother, setIsBelongToAnother] = useState(false)

    useEffect(() => {
        if (isLoading) return
        const bookingsDueTime = response?.userBookings?.filter(booking => !booking?.cancelled).map(booking => booking?.dueTime)

        // console.log(bookingsDueTime)
        if (bookingsDueTime.length > 0) {
            const matches = stringSimilarity.findBestMatch(userBookings?.dueDate, bookingsDueTime);
            const exactBooking = response?.userBookings?.find(booking => booking?.dueTime === userBookings?.dueDate)
            const todayBooking = response?.userBookings?.find(booking => booking?.dueTime === matches?.bestMatch?.target)

            // console.log(matches)


            // console.log(todayBooking)

            if (userBookings?.dueDate === todayBooking?.dueTime) {
                setIsValiDueTime(true)
            } else if (matches?.bestMatch?.target === todayBooking?.dueTime) {
                setIsBelongToAnother(true)
            }

            setAppointment(todayBooking)

        }

    }, [isLoading])

    useEffect(() => {
        return () => {
            setIsHalfHour(false)
            setIsValiDueTime(false)
        }
    }, [])

    return (
        <React.Fragment>
            <BookedDayContainer onClick={isValidDueTime ? open : () => { }} color={appointment?.booking?.color ? `#${appointment?.booking?.color}` : `#${response?.userBookings[0]?.booking?.color}`} isHalfHour={isHalfHour}>
                {/* <BookedDayContainer onClick={() => console.log(appointment)} color={appointment?.booking?.color ? `#${appointment?.booking?.color}` : `#${response?.userBookings[0]?.booking?.color}`} isHalfHour={isHalfHour}> */}
                {isValidDueTime && <div>
                    <h4>{appointment && appointment?.booking?.name}</h4>
                    <h5>{time}</h5>
                </div>}

            </BookedDayContainer>
        </React.Fragment>
    )
}

export default CalendarBookedDay
