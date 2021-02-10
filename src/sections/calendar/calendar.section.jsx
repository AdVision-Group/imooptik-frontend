import React, { useState, useContext, useEffect } from 'react'
import { BookingContext } from '../../context/booking/booking.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomRetailSelect from '../../components/custom-select/custom-select.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Popup from '../../components/popup/pop-up.component'

import { useFetchById } from '../../hooks/useFetch'

import { retailNames } from '../../utils/warehouse.utils'
import { dayNames, calendarTimes } from '../../utils/calendar.utils'

import {
    Header,
    CreateCalendarButton,
    Container,
    GridContainer,
    ContainerRow,
    TableHead,
    TableCol,
    TableRow,
    AddDayButton
} from './calendar.styles'

const CalendarSection = () => {
    const {
        closeModal,
        getMessage,
        setShowModal,
        isLoading,
        message,
        showModal,
    } = useContext(LoadingModalContext)
    const { calendarId } = useParams()
    const { response } = useFetchById("api/booking/calendars", calendarId, calendarId)
    const [calendar, setCalendar] = useState({})

    const handleCalendarValueChange = (e) => {
        const { name, value } = e.target

        if (value === '') {
            delete calendar[name]
            setCalendar({
                ...calendar
            })
            return
        }

        setCalendar(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleCalendarTimeChange = (e, idx) => {
        const { name, value } = e.target
        let arr = calendar[name] ? calendar[name] : ['x', 'x', 'x', 'x', 'x', 'x', 'x']
        arr[idx] = value

        setCalendar(prevValue => ({
            ...prevValue,
            [name]: arr
        }))
    }

    const handleCalendarExceptDaysChange = (e, idx) => {
        const { name, value } = e.target
        let arr = calendar[name]
        arr[idx] = value

        setCalendar(prevValue => ({
            ...prevValue,
            [name]: arr
        }))
    }

    const handleAddNewDay = () => {
        setCalendar(prevValue => ({
            ...prevValue,
            exceptDays: prevValue.exceptDays ? [...prevValue.exceptDays, ""] : [""]
        }))
    }

    const handleSubmit = () => {
        if (!calendar.name) {
            getMessage("Meno Kalendára je povinné")
            setShowModal(true)
            return
        }
        if (!calendar.premises) {
            getMessage("Nie je zvolená prevádzka ku ktorej patrí kalendár")
            setShowModal(true)
            return
        }
        if (!calendar.endTimes && !calendar.startTimes) {
            getMessage("Nie sú vyplnené časy na prehliadky")
            setShowModal(true)
            return
        }
        if (!calendar.interval) {
            getMessage("Nie je zvolený interval")
            setShowModal(true)
            return
        }

        console.log("RAW CALENDAR")
        console.log(calendar)
    }

    console.log(response)
    console.log(calendar)

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Header>
                <div>
                    <h1>Nový kalendár</h1>
                </div>
                <div>
                    <CreateCalendarButton onClick={handleSubmit}>Vytvoriť</CreateCalendarButton>
                </div>
            </Header>
            <ScrollContainer>
                <GridContainer>
                    <div>
                        <Container>
                            <h3>Základné informácie</h3>
                            <div>
                                <h4>Kalendar je pre prevádzku</h4>
                                <CustomRetailSelect
                                    name='premises'
                                    value={calendar?.premises || "0"}
                                    listItems={retailNames}
                                    defaultOption
                                    defaultValue={0}
                                    defaultLabel="Nezadané"
                                    handleChange={handleCalendarValueChange}
                                />
                            </div>
                            <div>
                                <h4>Meno kalendára</h4>
                                <CustomInput
                                    type="text"
                                    label='Meno*'
                                    name="name"
                                    value={calendar?.name || ""}
                                    handleChange={handleCalendarValueChange}
                                />
                            </div>
                        </Container>
                        <Container>
                            <h3>Nastavenie dní kedy sa nerobia prehliadky</h3>
                            {calendar?.exceptDays && calendar?.exceptDays?.map((value, idx) => (
                                <div key={idx}>
                                    <CustomInput
                                        type="date"
                                        // label='Dátum'
                                        name="exceptDays"
                                        value={value || ""}
                                        handleChange={(e) => handleCalendarExceptDaysChange(e, idx)}
                                    />
                                </div>
                            ))}
                            <AddDayButton onClick={handleAddNewDay}>Pridať</AddDayButton>
                        </Container>
                    </div>

                    <Container>
                        <h3>Nastavenie kalendára</h3>

                        <div>
                            <h4>Interval medzi prehliadkami</h4>
                            <select
                                name='interval'
                                value={calendar?.interval || ""}
                                onChange={handleCalendarValueChange}
                            >
                                <option value={""}>Nezadané</option>
                                <option value={30}>30min</option>
                                <option value={60}>60min</option>
                            </select>
                        </div>
                        <div>
                            <h4>Čas pred objednaním</h4>
                            <CustomInput
                                type="text"
                                label='Počet minút'
                                name="allowMinutesBefore"
                                value={calendar?.allowMinutesBefore || ""}
                                handleChange={handleCalendarValueChange}
                            />
                        </div>
                        <div>
                            <h4>Koľko dní dopredu sa dá objednať</h4>
                            <CustomInput
                                type="text"
                                label='Počet dní'
                                name="daysIntoFuture"
                                value={calendar?.daysIntoFuture || ""}
                                handleChange={handleCalendarValueChange}
                            />
                        </div>
                    </Container>

                    <ContainerRow>
                        <h3>Ordinačné hodiny</h3>
                        <TableHead>
                            <TableCol isFirst>
                                Čas \ Den
                            </TableCol>
                            {dayNames.map((name, idx) => (
                                <TableCol key={idx}>
                                    {name}
                                </TableCol>
                            ))}
                        </TableHead>
                        <TableRow>
                            <TableCol isFirst>
                                Začiatok
                            </TableCol>
                            {[...Array(7)].map((value, idx) => (
                                <TableCol key={idx}>
                                    <select name='startTimes' onChange={(e) => handleCalendarTimeChange(e, idx)}>
                                        <option value={"x"}>Žiadný</option>
                                        {calendarTimes.map(({ name, value }, idx) => (
                                            <option key={idx} value={value}>{name}</option>
                                        ))}
                                    </select>
                                </TableCol>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCol isFirst>
                                Koniec
                            </TableCol>
                            {[...Array(7)].map((value, idx) => (
                                <TableCol key={idx}>
                                    <select name='endTimes' onChange={(e) => handleCalendarTimeChange(e, idx)}>
                                        <option value={"x"}>Žiadný</option>
                                        {calendarTimes.map(({ name, value }, idx) => (
                                            <option key={idx} value={value}>{name}</option>
                                        ))}
                                    </select>
                                </TableCol>
                            ))}
                        </TableRow>
                    </ContainerRow>
                </GridContainer>
            </ScrollContainer>
        </section>
    )
}

export default CalendarSection
