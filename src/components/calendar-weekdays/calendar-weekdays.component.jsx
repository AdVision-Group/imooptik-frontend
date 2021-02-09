import React, { useState, useEffect } from 'react'
import { useFetchById } from '../../hooks/useFetch'

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
    TableHead
} from './calendar-weekdays.styles'

const WeekDays = ({
    calendar,
    year,
    month,
    weekIndex
}) => {
    const { response, isLoading } = useFetchById('api/booking/calendars', calendar, !calendar)
    const lastDay = new Date(year, month + 1, 0).getDate()
    const firstDayIndex = new Date(year, month, 0).getDay();
    const lastDayIndex = new Date(year, month + 1, 0).getDay()
    const prevLastDay = new Date(year, month, 0).getDate()


    const nextDays = 7 - lastDayIndex

    const [calendarDays, setCalendarDays] = useState([])

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
            <Container>
                <TableHead>
                    {calendarDays.slice(weekIndex * 7, (weekIndex * 7) + 7).map(({ dayNumber, isDisable, isPrevDay, isNextDay }, idx) => (
                        <HeaderBlock isDisabled={isDisable} key={idx}>
                            {isPrevDay ? (
                                <React.Fragment>
                                    <p>{dayNames[new Date(year, month - 1, prevLastDay - (dayNumber - 1)).getDay()]}</p>
                                    <p>{prevLastDay - (dayNumber - 1)}</p>
                                </React.Fragment>
                            ) : isNextDay ? (
                                <React.Fragment>
                                    <p>{dayNames[new Date(year, month + 1, dayNumber).getDay()]}</p>
                                    <p>{dayNumber} </p>
                                </React.Fragment>
                            ) : (
                                        <React.Fragment>
                                            <p>{dayNames[new Date(year, month, dayNumber).getDay()]}</p>
                                            <p>{dayNumber} </p>
                                        </React.Fragment>
                                    )}
                        </HeaderBlock>
                    ))}
                </TableHead>

                <HourGrid>
                    {calendarDays.slice(weekIndex * 7, (weekIndex * 7) + 7).map((dayData, idx) => {

                        return <HourBlock key={idx}>
                            {[...Array(24)].map((value, index) => (
                                <div key={index}>
                                    {dayData.bookings && checkIfHasAppoinment(index, dayData?.bookings) && (
                                        <AppointmentContainer>
                                            <p>{dayData?.bookings.find(booking => Number(booking.split('/')[0]) === index + 1).replace("/", ":")}</p>
                                        </AppointmentContainer>
                                    )}
                                    <span>{index + 1}:00</span>
                                </div>
                            ))}
                        </HourBlock>

                    })}
                </HourGrid>
            </Container>
        </div>
    )
}

export default WeekDays
