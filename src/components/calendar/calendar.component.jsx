import React, { useState } from 'react'

import {
    Container,
    HeaderBlock,
    Dayblock
} from './calendar.styles'

const Calendar = () => {
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
    // const month = 7
    let firstDayOfCurrentMonth = new Date(year, month).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    if (firstDayOfCurrentMonth === 0) {
        firstDayOfCurrentMonth = 7
    }

    let arr = []
    let j = 1

    for (let i = 0; i < 42; i++) {
        if (i < firstDayOfCurrentMonth - 1) {
            arr.push(0)
        } else if (i < daysInMonth + firstDayOfCurrentMonth - 1) {
            arr.push(j++)
        }
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
                arr.map((block, idx) => (
                    <Dayblock key={idx} active={idx === activeIndex} onClick={block === 0 ? null : () => setActiveIndex(idx)}>
                        {!(block === 0) && <p>{block}</p>}
                    </Dayblock>
                ))
            }
        </Container>
    )
}

export default Calendar
