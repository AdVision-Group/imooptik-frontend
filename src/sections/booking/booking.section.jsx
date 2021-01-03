import React, { useState } from 'react'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'

import Calendar from '../../components/calendar/calendar.component'

import {
    ContainerOverview,
    Title,
    GridRow,
    UpdateButton,
    CalendarGridContainer,
    AppoimentOverview,
    Time,
    Line,
    TwoRowGrid,
    Name,
    Desc,
    Options,
    ConfirmButton,
    DeclineButton,
    AppoimentContainer
} from './booking.styles'

const BookingSection = () => {
    const [searchQuery, setSearchQuery] = useState('')


    return (
        <section>
            <SectionHeader
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                title="Kalendar objednávok"
            />

            <ScrollContainer>
                <Title>Pobočky</Title>

                <GridRow>

                    <ContainerOverview>
                        <h3>Bratislava - Obchodná</h3>
                        <p>Obchodná 59, 84105 Bratislava</p>
                        <p>+421 902 688 952</p>
                        <p>obchodna@imooptik.sk</p>
                        <UpdateButton>Upraviť</UpdateButton>
                    </ContainerOverview>
                    <ContainerOverview>
                        <h3>Bratislava - Obchodná</h3>
                        <p>Obchodná 59, 84105 Bratislava</p>
                        <p>+421 902 688 952</p>
                        <p>obchodna@imooptik.sk</p>
                        <UpdateButton>Upraviť</UpdateButton>
                    </ContainerOverview>
                    <ContainerOverview>
                        <h3>Bratislava - Obchodná</h3>
                        <p>Obchodná 59, 84105 Bratislava</p>
                        <p>+421 902 688 952</p>
                        <p>obchodna@imooptik.sk</p>
                        <UpdateButton>Upraviť</UpdateButton>
                    </ContainerOverview>
                    <ContainerOverview>
                        <h3>Bratislava - Obchodná</h3>
                        <p>Obchodná 59, 84105 Bratislava</p>
                        <p>+421 902 688 952</p>
                        <p>obchodna@imooptik.sk</p>
                        <UpdateButton>Upraviť</UpdateButton>
                    </ContainerOverview>

                </GridRow>

                <Title>Kalendár</Title>
                <CalendarGridContainer>


                    <div>
                        <Calendar />
                    </div>

                    <AppoimentOverview>
                        <Title>Štvrtok, 3. December</Title>

                        <AppoimentContainer>
                            <Time>12:00</Time>
                            <Line />
                            <TwoRowGrid>
                                <div>
                                    <Name>Meno Priezvisko</Name>
                                    <Desc>Kontrola očí</Desc>
                                </div>
                                <Options>
                                    <ConfirmButton>Vybavený</ConfirmButton>
                                    <DeclineButton>Neprišiel</DeclineButton>
                                </Options>
                            </TwoRowGrid>
                        </AppoimentContainer>
                        <AppoimentContainer>
                            <Time>12:00</Time>
                            <Line />
                            <TwoRowGrid>
                                <div>
                                    <Name>Meno Priezvisko</Name>
                                    <Desc>Kontrola očí</Desc>
                                </div>
                                <Options>
                                    <ConfirmButton>Vybavený</ConfirmButton>
                                    <DeclineButton>Neprišiel</DeclineButton>
                                </Options>
                            </TwoRowGrid>
                        </AppoimentContainer>
                        <AppoimentContainer>
                            <Time>12:00</Time>
                            <Line />
                            <TwoRowGrid>
                                <div>
                                    <Name>Meno Priezvisko</Name>
                                    <Desc>Kontrola očí</Desc>
                                </div>
                                <Options>
                                    <ConfirmButton>Vybavený</ConfirmButton>
                                    <DeclineButton>Neprišiel</DeclineButton>
                                </Options>
                            </TwoRowGrid>
                        </AppoimentContainer>
                    </AppoimentOverview>
                </CalendarGridContainer>
            </ScrollContainer>
        </section>
    )
}

export default BookingSection
