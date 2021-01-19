import React from 'react'

import {
    ContainerOverview,
    UpdateButton,
    Options,
    ShowButton
} from './booking-calendar-overview.styles'

const BookingCalendarOverview = ({ calendar, handleClick, isActive, handleUpdateClick }) => {
    return (
        <ContainerOverview>
            <h3>{calendar.name}</h3>
            <p>Obchodná 59, 84105 Bratislava</p>
            <p>+421 902 688 952</p>
            <p>obchodna@imooptik.sk</p>
            <Options>
                <ShowButton onClick={handleClick} isActive={isActive}>Zobraziť</ShowButton>
                <UpdateButton onClick={handleUpdateClick}>Upraviť</UpdateButton>
            </Options>
        </ContainerOverview>
    )
}

export default BookingCalendarOverview
