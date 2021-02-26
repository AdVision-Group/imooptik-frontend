import React, { useState, useEffect } from 'react'

import {
    dayNames,
    getPreviousMonthDays,
    getNextMonthDays,
    getCurrentMonthDays,
    getBooking
} from '../../utils/calendar.utils'

import { useFetchById } from '../../hooks/useFetch'

import {
    Container,
    HeaderBlock,
    Dayblock,

} from './calendar.styles'

const Calendar = ({
    calendar,
    month,
    year,
    handleCalendarBlockClick
}) => {
    const date = new Date()

    date.setDate(1)
    const lastDay = new Date(year, month + 1, 0).getDate()
    const prevLastDay = new Date(year, month, 0).getDate()

    const firstDayIndex = new Date(year, month, 0).getDay();
    const lastDayIndex = new Date(year, month + 1, 0).getDay()

    const nextDays = 7 - lastDayIndex

    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const [prevDays, setPrevDays] = useState([])
    const [currentMonthDays, setCurrentMonthDays] = useState([])
    const [nextMonthDays, setMonthNextDays] = useState([])

    useEffect(() => {
        refetch()
    }, [month])

    useEffect(() => {
        if (calendar) {
            refetch()
        }
    }, [calendar])

    useEffect(() => {
        if (!isLoading) {
            if (response?.calendar) {
                const prevDaysArr = getPreviousMonthDays(firstDayIndex)
                const arr = getCurrentMonthDays(lastDay)
                const nextDaysArr = getNextMonthDays(nextDays)
                const checkedArr = getBooking(arr, response.calendar, month, year)

                setPrevDays(prevDaysArr)
                setCurrentMonthDays(checkedArr)
                setMonthNextDays(nextDaysArr)
            }
        }
    }, [isLoading])

    useEffect(() => {
        return () => {
            setPrevDays([])
            setCurrentMonthDays([])
            setMonthNextDays([])
        }
    }, [])

    return (
        <Container>

            {dayNames.map((name, idx) => (
                <HeaderBlock key={idx}>
                    {name}
                </HeaderBlock>
            ))}

            {prevDays.map((value, idx) => (
                <Dayblock faded={true} key={idx}>
                    <p>
                    </p>
                    <p>
                        {prevLastDay - idx}
                    </p>
                </Dayblock>
            ))}

            {currentMonthDays.map((data, idx) => {
                const { dayNumber, bookings } = data
                return (
                    <Dayblock key={idx} onClick={() => handleCalendarBlockClick(data)}>
                        <p>
                            {bookings && <span>
                                {bookings.length}
                            </span>}
                        </p>
                        <p>
                            {dayNumber}
                        </p>
                    </Dayblock>
                )
            })}
            {nextMonthDays.map((value, idx) => (
                <Dayblock faded={true} key={idx}>
                    <p>
                    </p>
                    <p>
                        {idx + 1}
                    </p>
                </Dayblock>
            ))}
        </Container>
    )
}

export default Calendar
