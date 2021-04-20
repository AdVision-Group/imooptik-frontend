import React, { useState, useContext, useEffect } from 'react'
import { BookingContext } from '../../context/booking/booking.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { AuthContext } from '../../context/auth/auth.context'
import { useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomRetailSelect from '../../components/custom-select/custom-select.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Popup from '../../components/popup/pop-up.component'

import TimePicker from 'react-time-picker';

import { useFetchById } from '../../hooks/useFetch'

import { retailNames } from '../../utils/warehouse.utils'
import {
    dayNames,
    calendarTimes,
    formatCalendarObj,
    formatExceptDays,
    formatExceptDaysToObj,
    formatExceptHours
} from '../../utils/calendar.utils'

import {
    FixedContainer,
} from '../../global.styles'

import {
    Header,
    CreateCalendarButton,
    Container,
    GridContainer,
    ContainerRow,
    TableHead,
    TableCol,
    TableRow,
    AddDayButton,
    DeleteCalendarButton,
    HolidayInputContainer,
    CustomTimePicker

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
    const { isAdmin } = useContext(AuthContext)
    const { createCalendar, updateCalendar, deleteCalendar } = useContext(BookingContext)
    const { calendarId } = useParams()
    const { response, isLoading: isFetching } = useFetchById("api/booking/calendars", calendarId, calendarId === 'novy-kalendar')
    const [calendar, setCalendar] = useState({
        fromTime: ["00:00"],
        toTime: ["23:59"]
    })
    const [isUpdating, setIsUpdating] = useState(false)

    const [fromTime, setFromTime] = useState("00:00")
    const [toTime, setToTime] = useState("23:59")

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
        let arr = calendar[name] ? calendar[name] : ['X', 'X', 'X', 'X', 'X', 'X', 'X']
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

    const handleTimeChange = (value, name, idx) => {
        console.log(value)
        console.log(name)
        console.log(idx)

        let arr = calendar[name]

        arr[idx] = value

        setCalendar(prevValue => ({
            ...prevValue,
            [name]: arr
        }))
    }



    const removeExceptDay = (value) => {
        console.log(value)
        const newArr = calendar.exceptDays.filter(v => v !== value)

        setCalendar(prevValue => ({
            ...prevValue,
            exceptDays: newArr
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

        if (isUpdating) {
            const calendarToUpdate = formatCalendarObj(calendar, calendar.fromTime, calendar.toTime)

            updateCalendar(calendarToUpdate, calendar._id)
        } else {
            let calendarToCreate = {}
            if (calendar.exceptDays) {
                calendarToCreate = {
                    ...calendar,
                    exceptDays: formatExceptDaysToObj(calendar.exceptDays, calendar.fromTime, calendar.toTime)
                }
            } else {
                calendarToCreate = { ...calendar }
            }


            createCalendar(calendarToCreate)
        }
    }

    useEffect(() => {
        if (isFetching) return
        if (response.calendar) {
            setIsUpdating(true)
            if (response.calendar.exceptDays) {
                const exceptDaysArr = formatExceptDays(response.calendar.exceptDays)
                const exceptDaysArraaa = formatExceptHours(response.calendar.exceptDays)

                console.log("exceptDaysArr")
                console.log(exceptDaysArraaa)

                setCalendar({
                    ...response.calendar,
                    exceptDays: exceptDaysArr,
                    fromTime: exceptDaysArraaa.map(time => time.split("-")[0]),
                    toTime: exceptDaysArraaa.map(time => time.split("-")[1])
                })
                closeModal()
            } else {
                setCalendar({
                    ...response.calendar,
                    fromTime: [],
                    toTime: []
                })
                closeModal()
            }
        }
    }, [isFetching])

    useEffect(() => {
        return () => {
            setIsUpdating(false)
            setCalendar({})
        }
    }, [])

    return (
        <section>
            {(showModal) && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Header>
                <FixedContainer>
                    <div>
                        {isUpdating ? (
                            <h1>Kalendár: {calendar?.name}</h1>
                        ) : (
                            <h1>Nový kalendár</h1>
                        )}
                    </div>
                    <div>
                        {/* {isUpdating && <DeleteCalendarButton onClick={() => deleteCalendar(calendar?._id)}>Vymazať</DeleteCalendarButton>} */}
                        <CreateCalendarButton onClick={handleSubmit}>{isUpdating ? "Upraviť" : "Vytvoriť"}</CreateCalendarButton>
                    </div>

                </FixedContainer>
            </Header>
            <ScrollContainer>
                <GridContainer>
                    <div>
                        {isAdmin && <Container>
                            <h3>Základné informácie</h3>
                            <div>
                                <h4>Kalendár je pre prevádzku</h4>
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
                        </Container>}
                        <Container>
                            <h3>Dovolenka</h3>
                            {calendar?.exceptDays && calendar?.exceptDays?.map((value, idx) => (
                                <HolidayInputContainer key={idx}>
                                    <CustomInput
                                        type="date"
                                        // label='Dátum'
                                        name="exceptDays"
                                        value={value || ""}
                                        handleChange={(e) => handleCalendarExceptDaysChange(e, idx)}
                                    />
                                    <CustomTimePicker>
                                        <TimePicker
                                            onChange={(e) => handleTimeChange(e, "fromTime", idx)}
                                            value={calendar?.fromTime[idx] ?? "00:00"}
                                            // format={"hh:mm"}
                                            // minTime={"00:00"}
                                            // maxTime={"23:59"}
                                            locale="sv-sv"
                                            disableClock={true}
                                        />
                                    </CustomTimePicker>
                                    <CustomTimePicker>
                                        <TimePicker
                                            onChange={(e) => handleTimeChange(e, "toTime", idx)}
                                            value={calendar?.toTime[idx] ?? "23:00"}
                                            // format={"hh:mm"}
                                            // minTime={"00:00"}
                                            // maxTime={"23:59"}
                                            locale="sv-sv"
                                            disableClock={true}
                                        />
                                    </CustomTimePicker>
                                    {/* <CustomInput
                                        type="time"
                                        // label='Dátum'
                                        name="time"
                                        value={time}
                                        handleChange={(e) => console.log(e.target.value)}
                                    /> */}
                                    <button onClick={() => removeExceptDay(value)}>X</button>
                                </HolidayInputContainer >
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
                                <option value={15}>15min</option>
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
                                value={calendar?.allowMinutesBefore?.toString() || ""}
                                handleChange={handleCalendarValueChange}
                            />
                        </div>
                        <div>
                            <h4>Koľko dní dopredu sa dá objednať</h4>
                            <CustomInput
                                type="text"
                                label='Počet dní'
                                name="daysIntoFuture"
                                value={calendar?.daysIntoFuture?.toString() || ""}
                                handleChange={handleCalendarValueChange}
                            />
                        </div>
                    </Container>

                    <ContainerRow>
                        <h3>Ordinačné hodiny</h3>
                        <TableHead>
                            <TableCol isFirst>
                                Čas \ Deň
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
                                    <select name='startTimes' value={calendar?.startTimes ? calendar?.startTimes[idx] : "x"} onChange={(e) => handleCalendarTimeChange(e, idx)}>
                                        <option value={"X"}>Žiadny</option>
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
                                    <select name='endTimes' value={calendar?.endTimes ? calendar?.endTimes[idx] : "x"} onChange={(e) => handleCalendarTimeChange(e, idx)}>
                                        <option value={"X"}>Žiadny</option>
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
