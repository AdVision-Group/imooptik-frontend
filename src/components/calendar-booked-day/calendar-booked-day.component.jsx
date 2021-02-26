import React, { useState, useEffect } from 'react'
import stringSimilarity from "string-similarity"


// import Spinner from '../spinner/spinner.component'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    BookedDayContainer
} from './calendar-booked-day.styles'

const CalendarBookedDay = ({ dayData, calendarId, time, userBookings, open }) => {
    const [isHalfHour, setIsHalfHour] = useState(false)
    const { response, isLoading, refetch } = useFetchByQuery(`api/booking/calendars/${calendarId}/dayInfo`, {
        date: dayData.bookingDate
    }, !dayData?.bookingDate)
    const [appointment, setAppointment] = useState(null)
    const [isValidDueTime, setIsValiDueTime] = useState(false)
    // const [isBelongToAnother, setIsBelongToAnother] = useState(false)

    useEffect(() => {
        if (isLoading) return
        const bookingsDueTime = response?.userBookings?.filter(booking => !booking?.cancelled).map(booking => booking?.dueTime)

        if (bookingsDueTime?.length > 0) {
            const matches = stringSimilarity.findBestMatch(userBookings?.dueDate, bookingsDueTime);

            const exactBooking = response?.userBookings?.find(booking => booking?.dueTime === userBookings?.dueDate)
            const todayBooking = response?.userBookings?.find(booking => booking?.dueTime === matches?.bestMatch?.target)

            if (userBookings?.dueDate === exactBooking?.dueTime) {
                setIsValiDueTime(true)
            } else if (matches?.bestMatch?.target === todayBooking?.dueTime) {
                // setIsBelongToAnother(true)
            }

            setAppointment(exactBooking)

        }

    }, [isLoading])

    useEffect(() => {
        if (!dayData?.bookingDate) return
        refetch()
    }, [dayData?.bookingDate])

    useEffect(() => {
        return () => {
            setIsHalfHour(false)
            setIsValiDueTime(false)
        }
    }, [])

    return (
        <React.Fragment>
            <BookedDayContainer onClick={isValidDueTime ? open : () => { }} color={appointment?.booking?.color ? `#${appointment?.booking?.color}` : `var(--appointment-container-background-color)`} isHalfHour={isHalfHour}>
                {/* <BookedDayContainer onClick={() => console.log(appointment)} color={appointment?.booking?.color ? `#${appointment?.booking?.color}` : `#${response?.userBookings[0]?.booking?.color}`} isHalfHour={isHalfHour}> */}
                {isValidDueTime && <div>
                    <h4>{appointment && appointment?.booking?.name}</h4>
                    <h5>{time}</h5>
                </div>}
                {/* {(isBelongToAnother && !isValidDueTime) && <div>
                    <h4>Test</h4>
                </div>} */}

            </BookedDayContainer>
        </React.Fragment>
    )
}

export default CalendarBookedDay
