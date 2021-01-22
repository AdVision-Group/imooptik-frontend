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

    // v prvom rade si zistim datumy ktore treba
    const date = new Date()
    //rok v ktoorm sa nachadzame
    const year = date.getFullYear()
    // mesiac aky ma kalendar pouzit
    const month = date.getMonth()
    // zistime aky den je prveho v nami zvoleneho mesiaca
    let firstDayOfCurrentMonth = new Date(year, month).getDay()
    // a celkovy pocet dni v mesiaci
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    // ak je prvy den neela tak jej zmenit hodnotu na 7 pretoze nula robi bordel 
    if (firstDayOfCurrentMonth === 0) {
        firstDayOfCurrentMonth = 7
    }

    // arr je pole kazdeho block v kalendary
    let arr = []
    // ocislovanie dni
    let blockNumber = 1

    let bookedDays = []

    // sluzi na premenu {obj} s bookingmai na [arr] pre jednoduchsi for loop
    if (calendar.booked) {
        bookedDays = Object.keys(calendar.booked)
    }

    // a tu sa nam deje cele magia.. 42 je konstanta maximalnych dni 
    // ktore sa mozu v kalendari nachadzat aj s pradnimy blokmi na zaciatku
    for (let i = 0; i < 42; i++) {
        // pushneme do [arr] block s nulovym dnom(prazdne policko v kalendari) 
        // ak i este nedociahne na prvy den v kalendary (preto je nedela 7)
        if (i < firstDayOfCurrentMonth - 1) {
            arr.push({
                day: 0
            })
            // ak uz prazdne dni (z minuleho mesiaca) mame zasebou 
        } else if (i < daysInMonth + firstDayOfCurrentMonth - 1) {
            // pushneme do [arr] data ktore nam treba, cislo dna, pripadne bookingy atd
            let obj = {}

            // skontroluje ci v dany den je nejaky booking ak ano, 
            //doplni informacie o tom do {obj}
            bookedDays.forEach((day, idx) => {
                if (blockNumber === Number(day.split('/')[0])) {
                    obj = {
                        bookDate: day,
                        booked: calendar.booked[day].length,
                    }
                    return
                }
            })


            arr.push({
                ...obj,
                day: blockNumber++
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

    console.log(arr)

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
