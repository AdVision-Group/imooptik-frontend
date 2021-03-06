import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import {useBookingContext} from '../../context/booking/booking.context'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    formatDate,
    formatCalendarStartTime,
    formatCalendarEndTime,
    formatExceptDays,
    formatExceptHours,
    getExceptDaysObj,
    formatBreakHour,
    formatLuncheskHour
} from '../../utils/calendar.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    SubmitButton,
    Navbar,
    UserTable,
    TableHead,
    Tablebody,
    TableCol,
    SearchTab,
    CustomSelect,
    DateContainer,
    Header,
    BreakButton
} from './modal-user-booking.styles'

const UserBookingModal = ({ refetchWeekCalendar, close, day, calendar, refetchCalendar, createUserBooking }) => {
    const {updateCalendar} = useBookingContext()

    const [query, setQuery] = useState(null)
    const [activeTab, setActiveTab] = useState(0)
    const [userBooking, setUserBooking] = useState({})
    const [bookingDate, setBookingDate] = useState({
        date: "",
        hour: "",
        min: 0
    })

    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)



    const { refetch, response } = useFetchByQuery('api/admin/users/filter', query, !query)

    const handleSearch = () => {
        if (!query) return
        refetch()
    }

    const handleSearchOnEnter = (e) => {
        if (query !== null) {
            if (e.key === 'Enter') {
                refetch()
            }
        }
    }

    const handleUserBookingChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete userBooking[name]
            setUserBooking({ ...userBooking })
            return
        }

        setUserBooking(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const selectUser = (userObj) => {
        setUserBooking(prevValue => ({
            ...prevValue,
            ...userObj
        }))
        setActiveTab(0)
        setQuery(null)
    }

    const handleChangeDate = e => {
        const { name, value } = e.target

        setBookingDate(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        // if (!userBooking?.name) return
        // if (!userBooking?.email) return
        // if (!userBooking?.phone) return
        // if (!userBooking?.booking) return

        let bookingToAdd = {
            ...userBooking,
            dueTime: formatDate(bookingDate),
            values: {}
        }

        console.log(bookingToAdd)
        
        createUserBooking(bookingToAdd, refetchCalendar, close, refetchWeekCalendar)
        // refetchCalendar()
        // close()
    }

    const handleBreakSubmit = (property) => {
        const exceptDays = formatExceptDays(calendar.exceptDays || {})
        const exceptHours = formatExceptHours(calendar.exceptDays || {})

        // console.log(exceptDays)
        // console.log(exceptHours)

        const newExceptDays = [
            ...exceptDays,
            bookingDate.date
        ]

        const formatedHour = `${bookingDate?.hour < 10 ? `0${bookingDate?.hour}` : bookingDate?.hour}:${bookingDate?.min === 0 ? `0${bookingDate?.min}` : bookingDate?.min}`


        const newExceptHours = [
            ...exceptHours,
            `${formatedHour}-${property === 'breaks' ? formatBreakHour(formatedHour) : formatLuncheskHour(formatedHour)}`
        ]

        // console.log(newExceptDays)
        // console.log(newExceptHours)

        
        const calendarToUpdate = {
            [property]: getExceptDaysObj(newExceptDays, newExceptHours, calendar, property)
        }

        // console.log(calendarToUpdate)

        updateCalendar(calendarToUpdate, calendar._id, refetchCalendar, () => {
            close()
        })
    }

    useEffect(() => {
        if (day) {
            const { time, dayNumber, month, year } = day
            setStartTime(formatCalendarStartTime(calendar, day))
            setEndTime(formatCalendarEndTime(calendar, day))

            console.log(day.isPrevDay)
            // const formatedDate = formatDate(`${dayNumber}-${month}-${year}`, time)
            const d = day.isPrevDay ? `${year}-${month < 9 ? `0${month + 1}` : (month + 1)}-${day?.prevDayNumber < 10 ? `0${day?.prevDayNumber}` : day?.prevDayNumber}` : `${year}-${month < 9 ? `0${month + 1}` : (month + 1)}-${dayNumber < 10 ? `0${dayNumber}` : dayNumber}`

            setBookingDate({
                date: d,
                hour: Number(time?.split("/")[0]),
                min: Number(time?.split("/")[1])
            })
        }
    }, [day])

    useEffect(() => {
        return () => {
            setUserBooking({})
            setQuery(null)
            setActiveTab(0)
        }
    }, [])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <Header>
                    <h2>Objednať zákazníka</h2>
                    <BreakButton onClick={() => handleBreakSubmit("lunches")}>Obed</BreakButton>
                    <BreakButton onClick={() => handleBreakSubmit("breaks")}>Prestavka</BreakButton>
                </Header>


                <Navbar
                    items={optionTabs}
                    activeIndex={activeTab}
                    setActiveIndex={setActiveTab}
                />

                {activeTab === 1 ? (
                    <SearchTab>
                        <CustomInput
                            label='Meno, priezvisko, e-mail alebo tel. číslo'
                            name='query'
                            value={query ? query?.query : ""}
                            handleChange={e => setQuery({
                                limit: 10,
                                query: e.target.value
                            })}
                            onKeyPress={handleSearchOnEnter}
                        />

                        <SubmitButton onClick={handleSearch}>Hľadať</SubmitButton>


                        <UserTable>
                            <TableHead>
                                <TableCol>Meno</TableCol>
                                <TableCol>E-mail</TableCol>
                                <TableCol>Tel. číslo</TableCol>
                            </TableHead>
                            {response?.users ? response?.users?.map(({ name, email, phone }, idx) => (
                                <Tablebody key={idx} onClick={() => selectUser({ name, email, phone })}>
                                    <TableCol>{name}</TableCol>
                                    <TableCol>{email}</TableCol>
                                    <TableCol>{phone}</TableCol>
                                </Tablebody>
                            )) : (
                                <div>
                                    <p>Žiaden výsledok</p>
                                </div>
                            )}
                        </UserTable>
                    </SearchTab>
                ) : (
                    <React.Fragment>
                        <div>
                            <h3>Dátum vyšetrenia</h3>
                            <DateContainer>
                                <CustomInput
                                    label=''
                                    type='date'
                                    name='date'
                                    handleChange={handleChangeDate}
                                    value={bookingDate?.date}

                                />
                                <div>
                                    <CustomInput
                                        label='Čas'
                                        type='number'
                                        name='hour'
                                        value={bookingDate?.hour?.toString()}
                                        min={startTime?.split(":")[0]}
                                        max={endTime?.split(":")[0]}
                                        handleChange={handleChangeDate}
                                        step="1"
                                    />
                                </div>
                                <p>:</p>
                                <div>
                                    <CustomSelect
                                        name='min'
                                        value={bookingDate?.min?.toString()}
                                        onChange={handleChangeDate}
                                    >
                                        <option value={0}>00</option>
                                        {calendar?.interval === 15 && <option value={15}>15</option>}
                                        {(calendar?.interval === 30 || calendar?.interval === 15) && <option value={30}>30</option>}
                                        {calendar?.interval === 15 && <option value={45}>45</option>}
                                    </CustomSelect>
                                </div>
                            </DateContainer>
                        </div>
                        <div>
                            <CustomInput
                                label='Meno*'
                                name='name'
                                value={userBooking?.name || ""}
                                handleChange={handleUserBookingChange}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label='E-mail'
                                name='email'
                                value={userBooking?.email || ""}
                                handleChange={handleUserBookingChange}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label='Tel. číslo*'
                                name='phone'
                                value={userBooking?.phone || ""}
                                handleChange={handleUserBookingChange}
                            />
                        </div>

                        <div>
                            <CustomTextarea
                                label='Poznámka'
                                name='note'
                                rows="5"
                                value={userBooking?.note || ""}
                                handleChange={handleUserBookingChange}
                            />
                        </div>

                        <div>
                            <h3>Vyšetrenie</h3>
                            <CustomSelect
                                name='booking'
                                value={userBooking?.booking || ""}
                                onChange={handleUserBookingChange}
                            >
                                <option value={''}>Nezvolené</option>
                                {calendar?.bookings.map((booking, idx) => {
                                    if (booking.active === false) return
                                    return (
                                        <option key={idx} value={booking._id}>{booking.name}</option>
                                    )
                                })}
                            </CustomSelect>
                        </div>
                    </React.Fragment>
                )}

                {activeTab === 0 && <SubmitButton onClick={handleSubmit}>Vytvoriť</SubmitButton>}
            </Modal>
        </ModalContainer >
    ), document.getElementById('portal'))
}

export default UserBookingModal

const optionTabs = [
    {
        id: 0,
        name: "Nový zákazník",
    },
    {
        id: 1,
        name: "Vyhľadať zákazníka",
    },
]