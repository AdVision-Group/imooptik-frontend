import React from 'react'

import { dayNames } from '../../utils/calendar.utils'

import {
    Container,
    HeaderBlock,
    Dayblock,
    BookingContainer,
    DayRowContainer,
    DayNumber
} from './calendar.styles'

const Calendar = ({ calendar, setSelectedDate }) => {
    const date = new Date()
    date.setDate(1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    const firstDayIndex = date.getDate()
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

    const nextDays = 7 - lastDayIndex - 1

    return (
        <Container>
            {dayNames.map((name, idx) => (
                <HeaderBlock key={idx}>
                    {name}
                </HeaderBlock>
            ))}
            {[...Array(firstDayIndex).map((value, idx) => (
                <Dayblock faded={true} key={idx}>
                    {prevLastDay - idx}
                </Dayblock>
            ))]}
            {[...Array(lastDay)].map((value, idx) => (
                <Dayblock key={idx}>
                    {idx + 1}
                </Dayblock>
            ))}
            {[...Array(nextDays + 1)].map((value, idx) => (
                <Dayblock faded={true} key={idx}>
                    {idx + 1}
                </Dayblock>
            ))}
        </Container>
    )
}

export default Calendar
