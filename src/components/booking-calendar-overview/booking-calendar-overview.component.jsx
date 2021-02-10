import React from 'react'

import {
    ContainerOverview,
    UpdateButton,
    Options,
    ShowButton
} from './booking-calendar-overview.styles'

const BookingCalendarOverview = ({
    calendar = {},
    selectedCalendar = null,
    handleShowUpClick = () => { },
    handleUpdateClick = () => { }
}) => {
    return (
        <ContainerOverview>
            <h3>{calendar?.name}</h3>
            <p>Interval medzi vyšetreniami: <span>{calendar?.interval}min</span></p>
            <p>Počet minút pred rezerváciou: <span>{calendar?.allowMinutesBefore}min</span></p>
            <p>Koľko dní dopredu sa da objednať: <span>{calendar?.daysIntoFuture}</span></p>
            <Options>
                <ShowButton isActive={selectedCalendar === calendar?._id} onClick={handleShowUpClick}>Zobraziť</ShowButton>
                <UpdateButton onClick={handleUpdateClick}>Upraviť</UpdateButton>
            </Options>
        </ContainerOverview>
    )
}

export default BookingCalendarOverview
