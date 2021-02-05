import React from 'react'

import {
    ContainerOverview,
    UpdateButton,
    Options,
    ShowButton
} from './booking-calendar-overview.styles'

const BookingCalendarOverview = ({ calendar }) => {
    console.log(calendar)

    return (
        <ContainerOverview>
            <h3>{calendar?.name}</h3>
            <p>Interval medzi vyšetreniami: <span>{calendar?.interval}min</span></p>
            <p>Počet minút pred rezerváciou: <span>{calendar?.allowMinutesBefore}min</span></p>
            <p>Koľko dní dopredu sa da objednať: <span>{calendar?.daysIntoFuture}</span></p>
            <Options>
                <ShowButton >Zobraziť</ShowButton>
                <UpdateButton >Upraviť</UpdateButton>
            </Options>
        </ContainerOverview>
    )
}

export default BookingCalendarOverview
