import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Spinner from '../spinner/spinner.component'
import CustomInput from '../custom-input/custom-input.component'

import { useFetchByQuery } from '../../hooks/useFetch'
import { retailNames } from '../../utils/warehouse.utils'


import {
    formatDate,
    formatCalendarStartTime,
    formatCalendarEndTime
} from '../../utils/calendar.utils'


import {
    ModalContainer,
    Modal,
    CloseButton,
    GridContainer,
    BlockContainer,
    Header,
    CancelButton,
    Container,
    DateContainer,
    CustomSelect,
    ReBookContainer
} from './modal-userbookings-details.styles'

const UserbookingDetailsModal = ({ reBookUserBooking, close, userBooking, calendarId, day, cancelUserBooking, refetchCalendar, calendar }) => {
    const { response, isLoading } = useFetchByQuery(`api/booking/calendars/${calendarId}/dayInfo`, {
        date: userBooking?.userBookings?.dueDate.split(":")[1]
    }, !userBooking)

    const [booking, setBooking] = useState(null)

    useEffect(() => {
        if (isLoading) return
        if (!response) return

        const newBooking = response.userBookings.find(booking => booking.dueTime === userBooking.userBookings.dueDate)
        setBooking(newBooking)

    }, [isLoading])

    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [rebook, setReBook] = useState(false)
    const [rebookObj, setReBookObj] = useState({
        date: "",
        hour: "",
        min: 0
    })

    const toggleReBook = () => {
        setReBook(prevValue => !prevValue)
    }

    const handleChangeDate = e => {
        const { name, value } = e.target

        setReBookObj(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleRebookSubmit = () => {
        // console.log(booking)
        const rebook = {
            ...(booking.name) && { name: booking.name},
            ...(booking.email) && { email: booking.email},
            ...(booking.phone) && { phone: booking.phone},
            ...(booking.note) && { note: booking.note},
            booking: booking.booking._id,
            values: {},
            dueTime: formatDate(rebookObj),
        }

        // console.log(rebook)

        reBookUserBooking(rebook, booking._id, refetchCalendar, () => {
            refetchCalendar()
            close()
        })

    }

    useEffect(() => {
        if (day) {
            const { time, dayNumber, month, year } = day
            setStartTime(formatCalendarStartTime(calendar, day))
            setEndTime(formatCalendarEndTime(calendar, day))
            // const formatedDate = formatDate(`${dayNumber}-${month}-${year}`, time)
            setReBookObj({
                date: `${year}-${month < 9 ? `0${month + 1}` : (month + 1)}-${dayNumber < 10 ? `0${dayNumber}` : dayNumber}`,
                hour: Number(time?.split("/")[0]),
                min: Number(time?.split("/")[1])
            })
        }
    }, [day])

    useEffect(() => {
        return () => {
            setReBook({
                date: "",
                hour: "",
                min: 0
            })
        }
    }, [])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                {!booking && <Spinner />}
                <h2>{booking?.booking?.name}</h2>

                <Header>
                    <h3>Informácie:</h3>
                    <div>
                        <CancelButton onClick={() => toggleReBook()}>Proobjednať</CancelButton>
                        <CancelButton onClick={() => cancelUserBooking(booking._id)}>Zrušiť rezerváciu</CancelButton>
                    </div>
                </Header>
                {rebook && <ReBookContainer>
                    <h3>Dátum vyšetrenia</h3>
                    <DateContainer>
                        <CustomInput
                            label=''
                            type='date'
                            name='date'
                            handleChange={handleChangeDate}
                            value={rebookObj?.date}

                        />
                        <div>
                            <CustomInput
                                label='Čas'
                                type='number'
                                name='hour'
                                value={rebookObj?.hour?.toString()}
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
                                value={rebookObj?.min?.toString()}
                                onChange={handleChangeDate}
                            >
                                <option value={0}>00</option>
                                {calendar?.interval === 15 && <option value={45}>45</option>}
                                {(calendar?.interval === 30 || calendar?.interval === 15) && <option value={30}>30</option>}
                                {calendar?.interval === 15 && <option value={15}>15</option>}
                            </CustomSelect>
                        </div>
                    </DateContainer>
                    <CancelButton onClick={() => handleRebookSubmit()}>Proobjednať</CancelButton>
                </ReBookContainer>}
                <GridContainer>
                    <BlockContainer>
                        <h3>Meno a priezvisko</h3>
                        <p>{booking?.name}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>Prevadzka</h3>
                        <p>{retailNames[booking?.booking?.premises]}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>Tel. číslo</h3>
                        <p>{booking?.phone}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>E-mail</h3>
                        <p>{booking?.email}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>Dátum</h3>
                        <p>{booking?.dueTime}</p>
                    </BlockContainer>
                    <BlockContainer>
                        <h3>Zrušené</h3>
                        <p>{booking?.cancelled ? "Ano" : "Nie"}</p>
                    </BlockContainer>
                </GridContainer>

                <Container>
                    <BlockContainer>
                        <h3>Poznámka</h3>
                        {booking?.note ? (
                            <p>{booking?.note}</p>
                        ) : (
                                <p>Žiadná poznámka</p>
                            )}
                    </BlockContainer>

                    <BlockContainer>
                        <h3>Popis</h3>
                        <p>{booking?.booking?.description}</p>
                    </BlockContainer>

                </Container>
            </Modal>
        </ModalContainer>
    ), document.getElementById('portal'))
}

export default UserbookingDetailsModal
