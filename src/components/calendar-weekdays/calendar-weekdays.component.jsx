import React from 'react'

import { getMonday, dayNames } from '../../utils/calendar.utils'

import {
    Container,
    HeaderBlock,
    HourBlock
} from './calendar-weekdays.styles'

const WeekDays = () => {
    const date = new Date()
    const monday = getMonday(date).getDate()

    console.log("monday")
    console.log(monday)
    console.log("monday")


    return (
        <div>
            <Container>
                {[...Array(7)].map((value, idx) => (
                    <HeaderBlock key={idx}>
                        <p>{dayNames[idx]}</p>
                        <p>{monday + idx}</p>
                    </HeaderBlock>
                ))}

                {[...Array(7)].map((value, idx) => {
                    return <HourBlock idx={idx}>
                        {[...Array(24)].map((value, index) => (
                            <div idx={index}>
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
