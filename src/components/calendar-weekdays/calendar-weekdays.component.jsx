import React from 'react'

import { getMonday, dayNames } from '../../utils/calendar.utils'

import {
    Container,
    HeaderBlock
} from './calendar-weekdays.styles'

const WeekDays = () => {
    const date = new Date()
    const monday = getMonday(date).getDate()

    console.log(monday)


    return (
        <div>
            <Container>
                {[...Array(7)].map((value, idx) => (
                    <HeaderBlock key={idx}>
                        <p>{dayNames[idx]}</p>
                        <p>{monday + idx}</p>
                    </HeaderBlock>
                ))}
            </Container>
        </div>
    )
}

export default WeekDays
