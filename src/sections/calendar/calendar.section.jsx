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
    calendarTimes2,
    formatCalendarObj,
    formatExceptDays,
    formatExceptDaysToObj,
    formatExceptHours,
    formatBreakHours,
    formatBreaksArr
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
    CustomTimePicker,
    CustomSelect,
    DisabledDayContainer
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
        toTime: ["00:00"],
        breakFromTime: ["00:00"],
        breakToTime: ["00:00"],
        lunchFromTime: ["00:00"],
        lunchToTime: ["00:00"],
        disabledDays: []
    })
    const [isUpdating, setIsUpdating] = useState(false)

    // const [fromTime, setFromTime] = useState("00:00")
    // const [toTime, setToTime] = useState("23:59")

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

    const handleTimeChange = (value, name, idx, index) => {
        // console.log(value)
        // console.log(name)
        // console.log(idx) 

        let arr = calendar[name]

        arr[idx][index] = value

        setCalendar(prevValue => ({
            ...prevValue,
            [name]: arr
        }))
    }

    // const removeExceptDay = (value) => {
    //     // console.log(value)
    //     const newArr = calendar.exceptDays.filter(v => v !== value)

    //     setCalendar(prevValue => ({
    //         ...prevValue,
    //         exceptDays: newArr
    //     }))
    // }

    const removeDisbledDay = (name, idx) => {
        const arr = calendar[name].filter((_, index) => index !== idx)

        console.log(arr)

        setCalendar(prevValue => ({
            ...prevValue,
            [name]: arr
        }))
    }

    const removeTimeBlock = (name, from, to, idx, time, toTime, index, value, length) => {
        console.log(length)
        let newArr = []
 
        if(length === 1) {
            setCalendar(prevValue => ({
                ...prevValue,
                [name]: [],
                [from]: [],
                [to]: []
            }))
        }

        if(calendar[from][index].length === 1) {
            newArr = calendar[name].filter((_, i) => i !== index && _ !== value)
            
            // let newFromArr = calendar[from].splice(index, 1)
            // let newToArr = calendar[to].splice(index, 1)

            // console.log(newFromArr)
            // console.log(newToArr)

            let fromArr = calendar[from]
            let toArr = calendar[to]
            fromArr.splice(index, 1)
            toArr.splice(index, 1)
    
            // fromArr[index] = [...newFromArr]
            // toArr[index] = [...newToArr]

            setCalendar(prevValue => ({
                ...prevValue,
                ...(newArr.length > 0) && {[name]: newArr},
                [from]: fromArr,
                [to]: toArr
            }))
            return

        } else {
            newArr = calendar[name].filter((_, i) => i !== index && _ !== value)
            let newFromArr = calendar[from][index].filter((_, i) => i !== idx && _ !== time)
            let newToArr = calendar[to][index].filter((_, i) => i !== idx && _ !== toTime)
            let fromArr = calendar[from]
            let toArr = calendar[to]
    
            fromArr[index] = [...newFromArr]
            toArr[index] = [...newToArr]

            console.log(fromArr[index].length)

            if(fromArr[index].length <= 0) {
                fromArr[index] = []
                toArr[index] = []

                return setCalendar(prevValue => ({
                    ...prevValue,
                    [name]: newArr,
                    [from]: fromArr,
                    [to]: toArr
                }))
            }

            setCalendar(prevValue => ({
                ...prevValue,
                // ...(newArr.length > 0) && {[name]: newArr},
                [from]: fromArr,
                [to]: toArr
            }))
        }
        // let newFromArr = calendar[from].map(v => v.filter((_, i) => i !== idx && _ !== time))


    }

    const handleAddNewDay = (name, from, to) => {
        setCalendar(prevValue => ({
            ...prevValue,
            [name]: prevValue[name] ? [...prevValue[name], ["00:00"]] : [["00:00"]],
            [from]: prevValue[from] ? [...prevValue[from], ["00:00"]] : [["00:00"]],
            [to]: prevValue[to] ? [...prevValue[to], ["00:00"]] : [["00:00"]]
        }))
    }

    const handleAddNewDisabledDay = (name) => {
        setCalendar(prevValue => ({
            ...prevValue,
            [name]: prevValue[name] ? [...prevValue[name], 1] : [1],
        }))
    }

    const handleDisableDayChange = (e, idx) => {
        const {name, value} = e.target
        let arr = calendar[name]

        arr[idx] = value

        setCalendar(prevValue => ({
            ...prevValue,
            [name]: arr
        }))
    }

    const handleAddNewBreak = () => {
        setCalendar(prevValue => ({
            ...prevValue,
            breaks: prevValue.breaks ? [...prevValue.breaks, ""] : [""]
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
            const calendarToUpdate = formatCalendarObj(calendar, calendar.fromTime, calendar.toTime, calendar.breakFromTime, calendar.breakToTime)

            updateCalendar(calendarToUpdate, calendar._id)
        } else {
            let calendarToCreate = {}
            if (calendar.exceptDays) {
                calendarToCreate = {
                    ...calendar,
                    except: formatExceptDaysToObj(calendar.exceptDays, calendar.fromTime, calendar.toTime),
                }
            }
            
            if (calendar.breaks) {
                calendarToCreate = {
                    ...calendar,
                    breaks: formatBreaksArr(calendar.breaks, calendar.breakFromTime, calendar.breakToTime)
                }
            }
            
            if (calendar.lunches) {
                calendarToCreate = {
                    ...calendar,
                    lunches: formatBreaksArr(calendar.lunches, calendar.lunchFromTime, calendar.lunchToTime)
                }
            }

            calendarToCreate = { ...calendar }

            createCalendar(calendarToCreate)
        }
    }

    useEffect(() => {
        if (isFetching) return
        if (response.calendar) {
            setIsUpdating(true)

            setCalendar({
                ...response.calendar,
                fromTime: [],
                toTime: [],
                breakFromTime: [],
                breakToTime: [],
                lunchFromTime: [],
                lunchToTime: [],
                disabledDays: []
            })

            if (response.calendar.except) {
                const exceptDates = formatExceptDays(response.calendar.except)
                const exceptHours = formatExceptHours(response.calendar.except)

                
                // console.log("exceptDaysArr")
                // console.log(exceptHours)

                setCalendar(prevValue => ({
                    ...prevValue,
                    except: exceptDates,
                    fromTime: exceptHours.map(v => v.map(time => time.split("-")[0])),
                    toTime: exceptHours.map(v => v.map(time => time.split("-")[1])),
                }))
                // closeModal()
                // return 
            }
            if (response.calendar.lunches) {
                const lunchesDates = formatExceptDays(response.calendar.lunches)
                const lunchesHours = formatExceptHours(response.calendar.lunches)

                setCalendar(prevValue => ({
                    ...prevValue,
                    lunches: lunchesDates,
                    lunchFromTime: lunchesHours.map(v => v.map(time => time.split("-")[0])),
                    lunchToTime: lunchesHours.map(v => v.map(time => time.split("-")[1])),
                }))
                // closeModal()
                // return 
            }
            if (response.calendar.breaks) {
                const breaksDates = formatExceptDays(response.calendar.breaks)
                const breaksHours = formatExceptHours(response.calendar.breaks)

                // console.log("exceptDaysArr")
                // console.log(exceptDaysArraaa)

                setCalendar(prevValue => ({
                    ...prevValue,
                    breaks: breaksDates,
                    breakFromTime: breaksHours.map(v => v.map(time => time.split("-")[0])),
                    breakToTime: breaksHours.map(v => v.map(time => time.split("-")[1])),
                }))
                // closeModal()
                // return 
            }

            // if (response.calendar.breaks) {
            //     breakHourArr = formatBreakHours(response.calendar.breaks)

            //     // console.log("exceptDaysArr")
            //     // console.log(exceptDaysArraaa)

            //     setCalendar(prevValue => ({
            //         ...prevValue,
            //         breaks: response.calendar.breaks,
            //         breakFromTime: breakHourArr.map(time => time.split("-")[0]),
            //         breakToTime: breakHourArr.map(time => time.split("-")[1])
            //     }))
            //     // closeModal()
            //     // return 
            // }

            // console.log(response.calendar)
            closeModal()
        }
    }, [isFetching])

    // console.log(calendar)

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

                        {/* <Container>
                            <h3>Dni kedy sa nevyšetruje</h3>
                            {calendar?.disabledDays && calendar?.disabledDays?.map((value, idx) => (
                                <DisabledDayContainer key={idx}>
                                    <CustomSelect name='disabledDays' value={value} onChange={(e) => handleDisableDayChange(e, idx)}>
                                        {days.map(({name, value: v}, idx) => {
                                            return (
                                                <option key={idx} value={v}>{name}</option>
                                            )
                                        })}
                                    </CustomSelect>
                                    <button onClick={() => removeDisbledDay("disabledDays", idx)}>X</button>
                                </DisabledDayContainer>
                            ))}
                            <AddDayButton onClick={() => handleAddNewDisabledDay("disabledDays")}>+</AddDayButton>
                        </Container> */}
                        <Container>
                            <h3>Dovolenky</h3>
                            {calendar?.except && calendar?.except?.map((value, idx) => (
                                <HolidayInputContainer key={idx} style={{marginBottom: "2rem"}}>
                                    <CustomInput
                                        type="date"
                                        // label='Dátum'
                                        name="except"
                                        value={value || ""}
                                        handleChange={(e) => handleCalendarExceptDaysChange(e, idx)}
                                    />
                                    <div>
                                        {calendar.fromTime && calendar.fromTime[idx]?.map((time, index) => (
                                            <div key={idx} style={{display: "flex"}}>
                                                <CustomTimePicker>
                                                    <p>Od:</p>
                                                    <TimePicker
                                                        onChange={(e) => handleTimeChange(e, "fromTime", idx, index)}
                                                        value={time ?? "00:00"}
                                                        // format={"hh:mm"}
                                                        // minTime={"00:00"}
                                                        // maxTime={"23:59"}
                                                        locale="sv-sv"
                                                        disableClock={true}
                                                    />
                                                </CustomTimePicker>
                                                <CustomTimePicker>
                                                    <p>Do:</p>
                                                    <TimePicker
                                                        onChange={(e) => handleTimeChange(e, "toTime", idx, index)}
                                                        value={calendar?.toTime[idx][index] ?? "00:00"}
                                                        // format={"hh:mm"}
                                                        // minTime={"00:00"}
                                                        // maxTime={"23:59"}
                                                        locale="sv-sv"
                                                        disableClock={true}
                                                    />
                                                </CustomTimePicker>
                                                <button onClick={() => removeTimeBlock("except", "fromTime", "toTime", index, time, calendar?.toTime[idx][index], idx, value, calendar?.except.length)}>X</button>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <CustomInput
                                        type="time"
                                        // label='Dátum'
                                        name="time"
                                        value={time}
                                        handleChange={(e) => console.log(e.target.value)}
                                    /> */}
                                </HolidayInputContainer >
                            ))}
                            <AddDayButton onClick={() => handleAddNewDay("except", "fromTime", "toTime")}>+</AddDayButton>
                        </Container>
                        <Container>
                            <h3>Obedy</h3>
                            {calendar?.lunches && calendar?.lunches?.map((value, idx) => (
                                <HolidayInputContainer key={idx} style={{marginBottom: "2rem"}}>
                                    <CustomInput
                                        type="date"
                                        // label='Dátum'
                                        name="lunches"
                                        value={value || ""}
                                        handleChange={(e) => handleCalendarExceptDaysChange(e, idx)}
                                    />
                                    <div>
                                        {calendar.lunchFromTime && calendar.lunchFromTime[idx]?.map((time, index) => (
                                            <div key={idx} style={{display: "flex"}}>
                                                <CustomTimePicker>
                                                    <p>Od:</p>
                                                    <TimePicker
                                                        onChange={(e) => handleTimeChange(e, "lunchFromTime", idx, index)}
                                                        value={time ?? "00:00"}
                                                        // format={"hh:mm"}
                                                        // minTime={"00:00"}
                                                        // maxTime={"23:59"}
                                                        locale="sv-sv"
                                                        disableClock={true}
                                                    />
                                                </CustomTimePicker>
                                                <CustomTimePicker>
                                                    <p>Do:</p>
                                                    <TimePicker
                                                        onChange={(e) => handleTimeChange(e, "lunchToTime", idx, index)}
                                                        value={calendar?.lunchToTime[idx][index] ?? "00:00"}
                                                        // format={"hh:mm"}
                                                        // minTime={"00:00"}
                                                        // maxTime={"23:59"}
                                                        locale="sv-sv"
                                                        disableClock={true}
                                                    />
                                                </CustomTimePicker>
                                                <button onClick={() => removeTimeBlock("lunches", "lunchFromTime", "lunchToTime", index, time, calendar?.lunchToTime[idx][index], idx, value, calendar?.lunches.length)}>X</button>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <CustomInput
                                        type="time"
                                        // label='Dátum'
                                        name="time"
                                        value={time}
                                        handleChange={(e) => console.log(e.target.value)}
                                    /> */}
                                </HolidayInputContainer >
                            ))}
                            <AddDayButton onClick={() => handleAddNewDay("lunches", "lunchFromTime", "lunchToTime")}>+</AddDayButton>
                        </Container>
                        <Container>
                            <h3>Prestávky</h3>
                            {calendar?.breaks && calendar?.breaks?.map((value, idx) => (
                                <HolidayInputContainer key={idx} style={{marginBottom: "2rem"}}>
                                    <CustomInput
                                        type="date"
                                        // label='Dátum'
                                        name="breaks"
                                        value={value || ""}
                                        handleChange={(e) => handleCalendarExceptDaysChange(e, idx)}
                                    />
                                    <div>
                                        {calendar.breakFromTime && calendar.breakFromTime[idx]?.map((time, index) => (
                                            <div key={idx} style={{display: "flex"}}>
                                                <CustomTimePicker>
                                                    <p>Od:</p>
                                                    <TimePicker
                                                        onChange={(e) => handleTimeChange(e, "breakFromTime", idx, index)}
                                                        value={time ?? "00:00"}
                                                        // format={"hh:mm"}
                                                        // minTime={"00:00"}
                                                        // maxTime={"23:59"}
                                                        locale="sv-sv"
                                                        disableClock={true}
                                                    />
                                                </CustomTimePicker>
                                                <CustomTimePicker>
                                                    <p>Do:</p>
                                                    <TimePicker
                                                        onChange={(e) => handleTimeChange(e, "breakToTime", idx, index)}
                                                        value={calendar?.breakToTime[idx][index] ?? "00:00"}
                                                        // format={"hh:mm"}
                                                        // minTime={"00:00"}
                                                        // maxTime={"23:59"}
                                                        locale="sv-sv"
                                                        disableClock={true}
                                                    />
                                                </CustomTimePicker>
                                                <button onClick={() => removeTimeBlock("breaks", "breakFromTime", "breakToTime", index, time, calendar?.breakToTime[idx][index], idx, value, calendar?.breaks.length)}>X</button>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <CustomInput
                                        type="time"
                                        // label='Dátum'
                                        name="time"
                                        value={time}
                                        handleChange={(e) => console.log(e.target.value)}
                                    /> */}
                                </HolidayInputContainer >
                            ))}
                            <AddDayButton onClick={() => handleAddNewDay("breaks", "breakFromTime", "breakToTime")}>+</AddDayButton>
                        </Container>
                        {/* <Container>
                            <h3>Prestávky</h3>
                            {calendar?.breaks && calendar?.breaks?.map((value, idx) => (
                                <HolidayInputContainer key={idx}>
                                    {/* <CustomInput
                                        type="date"
                                        // label='Dátum'
                                        name="exceptDays"
                                        value={value || ""}
                                        handleChange={(e) => handleCalendarExceptDaysChange(e, idx)}
                                    /> 
                                    <CustomTimePicker>
                                        <TimePicker
                                            onChange={(e) => handleTimeChange(e, "breakFromTime", idx)}
                                            value={calendar?.breakFromTime[idx] ?? "00:00"}
                                            // format={"hh:mm"}
                                            // minTime={"00:00"}
                                            // maxTime={"23:59"}
                                            locale="sv-sv"
                                            disableClock={true}
                                        />
                                    </CustomTimePicker>
                                    <CustomTimePicker>
                                        <TimePicker
                                            onChange={(e) => handleTimeChange(e, "breakToTime", idx)}
                                            value={calendar?.breakToTime[idx] ?? "00:00"}
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
                                    /> 
                                    <button onClick={() => removeBreakTime(value)}>X</button>
                                </HolidayInputContainer >
                            ))}
                            {calendar?.breaks?.length < 5 && <AddDayButton onClick={handleAddNewBreak}>+</AddDayButton>}
                        </Container> */}
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
                                        {calendarTimes2.map(({ name, value }, idx) => (
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
                                        {calendarTimes2.map(({ name, value }, idx) => (
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

const days = [
    {
        name: "Pondelok",
        value: 1
    },
    {
        name: "Utorok",
        value: 2
    },
    {
        name: "Streda",
        value: 3
    },
    {
        name: "Štvrtok",
        value: 4
    },
    {
        name: "Piatok",
        value: 5
    },
    {
        name: "Sobota",
        value: 6
    },
    {
        name: "Nedeľa",
        value: 0
    },
]
// const days = [
//     {
//         name: "Pondelok",
//         value: 0
//     },
//     {
//         name: "Utorok",
//         value: 1
//     },
//     {
//         name: "Streda",
//         value: 2
//     },
//     {
//         name: "Štvrtok",
//         value: 3
//     },
//     {
//         name: "Piatok",
//         value: 4
//     },
//     {
//         name: "Sobota",
//         value: 5
//     },
//     {
//         name: "Nedeľa",
//         value: 6
//     },
// ]