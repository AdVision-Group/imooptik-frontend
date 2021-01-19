import React, { useState } from 'react'

import {
    Container,
    HeaderBlock,
    Dayblock,
    BookingContainer,
    DayRowContainer,
    DayNumber
} from './calendar.styles'

const Calendar = ({ calendar, setSelectedDate }) => {
    const blocks = [
        {
            name: 'Pondelok'
        },
        {
            name: 'Utorok'
        },
        {
            name: 'Streda'
        },
        {
            name: 'Štvrtok'
        },
        {
            name: 'Piatok'
        },
        {
            name: 'Sobota'
        },
        {
            name: 'Nedeľa'
        },
    ]

    const [activeIndex, setActiveIndex] = useState(null)

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    let firstDayOfCurrentMonth = new Date(year, month).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    if (firstDayOfCurrentMonth === 0) {
        firstDayOfCurrentMonth = 7
    }

    let arr = []
    let j = 1
    let bookedDays = []

    if (calendar.booked) {
        bookedDays = Object.keys(calendar.booked)
    }
    // const bookedDays = ["28/12/2020", "28/12/2020", "28/12/2020", "28/12/2020", "28/12/2020", "25/12/2020", "30/12/2020", "28/12/2020", "25/12/2020", "30/12/2020"]

    for (let i = 0; i < 42; i++) {
        if (i < firstDayOfCurrentMonth - 1) {
            arr.push({
                day: 0
            })
        } else if (i < daysInMonth + firstDayOfCurrentMonth - 1) {
            let obj = {}
            let numberOfBookings = 1
            bookedDays.forEach((day, idx) => {
                if (j === Number(day.split('/')[0])) {
                    obj = {
                        bookDate: day,
                        booked: calendar.booked[day].length,
                    }
                    return
                }
            })

            arr.push({
                ...obj,
                day: j++
            })
        }
    }

    const handleClick = (day, idx, bookDate) => {
        const d = new Date(year, month, day)
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        setActiveIndex(idx)
        setSelectedDate({
            name: d.toLocaleDateString("sk-SK", options),
            value: bookDate
        })
    }

    return (
        <Container>
            {
                blocks.map(({ name }, idx) => (
                    <HeaderBlock key={idx}>
                        {name}
                    </HeaderBlock>
                ))
            }
            {
                arr.map(({ day, booked, bookDate }, idx) => (
                    <Dayblock key={idx} onClick={booked ? () => handleClick(day, idx, bookDate) : null}>
                        {!(day === 0) && (
                            <DayRowContainer>
                                {booked && <BookingContainer active={idx === activeIndex}>{booked}</BookingContainer>}
                                <DayNumber>{day}</DayNumber>
                            </DayRowContainer>
                        )}
                    </Dayblock>
                ))
            }
        </Container>
    )
}

export default Calendar
