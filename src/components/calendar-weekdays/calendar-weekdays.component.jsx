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
    TableHead,
    HourBlockContainer
} from './calendar-weekdays.styles'

const WeekDays = ({
    calendar,
    year,
    month,
    weekIndex,
    handleCalendarBlockClick
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

    console.log(response?.calendar)

    return (
        <div>
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
                                if (Number(response?.calendar?.startTimes[idx].split('/')[0]) > index + 1) return
                                if (Number(response?.calendar?.endTimes[idx].split('/')[0]) < index + 1) return
                                if (response?.calendar?.endTimes[idx] === "X") return
                                return (
                                    <HourBlockContainer key={index}>
                                        {dayData.bookings && checkIfHasAppoinment(index, dayData?.bookings) && (
                                            <AppointmentContainer onClick={() => handleCalendarBlockClick(dayData)}>
                                                <p>{dayData?.bookings.find(booking => Number(booking?.split('/')[0]) === index)?.replace("/", ":")}</p>
                                            </AppointmentContainer>
                                        )}
                                        <span>{index + 1}:00</span>
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
