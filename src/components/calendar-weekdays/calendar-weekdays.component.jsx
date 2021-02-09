import React, { useState, useEffect } from 'react'
import { useFetchById } from '../../hooks/useFetch'

import {
    dayNames,
    getPreviousMonthDays,
    getNextMonthDays,
    getCurrentMonthDays
} from '../../utils/calendar.utils'

import {
    Container,
    HeaderBlock,
    HourBlock
} from './calendar-weekdays.styles'

const WeekDays = ({
    calendar,
    year,
    month,
    monday,
    weekIndex
}) => {
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const lastDay = new Date(year, month + 1, 0).getDate()
    const firstDayIndex = new Date(year, month, 0).getDay();
    const lastDayIndex = new Date(year, month + 1, 0).getDay()
    const prevLastDay = new Date(year, month, 0).getDate()


    const nextDays = 7 - lastDayIndex

    const [calendarDays, setCalendarDays] = useState([])
    // const [startIndex, setStartIndex] = useState(0)


    useEffect(() => {
        if (isLoading) return

        if (response.calendar) {
            const prevMonthDays = getPreviousMonthDays(firstDayIndex)
            const monthDays = getCurrentMonthDays(lastDay)
            const nextMonthDays = getNextMonthDays(nextDays)

            setCalendarDays([
                ...prevMonthDays,
                ...monthDays,
                ...nextMonthDays
            ])
        }
    }, [isLoading])

    console.log(calendarDays)

    return (
        <div>
            <Container>
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

                {[...Array(7)].map((value, idx) => {
                    return <HourBlock key={idx}>
                        {[...Array(24)].map((value, index) => (
                            <div key={index}>
                                <span>{index + 1}:00</span>
                            </div>
                        ))}
                    </HourBlock>

                })}
            </Container>
        </div>
    )
}

export default WeekDays
