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

    const dayBlocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <Container>
            {
                blocks.map(({ name }, idx) => (
                    <HeaderBlock key={idx}>
                        {name}
                    </HeaderBlock>
                ))

            }
            <Dayblock />
            <Dayblock />
            <Dayblock />
            <Dayblock />
            {
                dayBlocks.map((block, idx) => (
                    <Dayblock key={idx} active={idx === activeIndex} onClick={() => setActiveIndex(idx)}>
                        <p>12</p>
                    </Dayblock>
                ))
            }
        </Container>
    )
}

export default Calendar
