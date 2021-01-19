import React, { useState, useContext, useEffect } from 'react'
import { BookingContext } from '../../context/booking/booking.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import InputRow from '../../components/product-input-row/product-input-row.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Popup from '../../components/popup/pop-up.component'

import {
    Header,
    DayTimesContainer,
    CreateCalendarButton,
    DayNames
} from './calendar.styles'

const CalendarSection = () => {
    const { calendarId } = useParams()
    const {
        isUpdatingCalendar,
        handleCalendarChange,
        handleDayTimeChange,
        getCalendar,
        createCalendar,
        calendar,
        resetBooking
    } = useContext(BookingContext)

    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (calendarId === 'novy-kalendar') {
            createCalendar(calendar)
        } else {
            console.log('update calendar')
        }
    }

    useEffect(() => {
        if (calendarId !== 'novy-kalendar') {
            getCalendar(calendarId)
        }
    }, [calendarId])

    useEffect(() => {
        return () => {
            resetBooking()
        }
    }, [])

    if (!calendar || showModal) return <Popup loading={isLoading} title={message} close={closeModal} />


    console.log(isUpdatingCalendar)
    console.log(calendar)

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Header>
                    <div>
                        <h1>Nový kalendár</h1>
                    </div>
                    <div>
                        <CreateCalendarButton>Vytvoriť kalendár</CreateCalendarButton>
                    </div>
                </Header>
                <ScrollContainer>
                    <InputRow
                        label="Meno kalendáru"
                        example=''
                    >
                        <CustomInput
                            label="Pobočka*"
                            type='text'
                            name='name'
                            value={calendar.name}
                            handleChange={(e) => handleCalendarChange(e)}
                            required
                        />
                    </InputRow>
                    <InputRow
                        label="Koľko dní dopredu sa da objednať"
                        example=''
                    >
                        <CustomInput
                            label="Počet dní"
                            type='number'
                            name='daysIntoFuture'
                            value={calendar.daysIntoFuture.toString()}
                            handleChange={(e) => handleCalendarChange(e)}
                            required
                        />
                    </InputRow>
                    <InputRow
                        label="Minimalný čas k odoslaní rezervácie"
                        example=''
                    >
                        <CustomInput
                            label="Min"
                            type='number'
                            name='allowMinutesBefore'
                            value={calendar.allowMinutesBefore.toString()}
                            handleChange={(e) => handleCalendarChange(e)}
                            required
                        />
                    </InputRow>
                    <InputRow
                        label="Čas medzi rezerváciami"
                        example=''
                    >
                        <CustomInput
                            label="Min*"
                            type='number'
                            name='interval'
                            value={calendar.interval.toString()}
                            handleChange={(e) => handleCalendarChange(e)}
                            required
                        />
                    </InputRow>

                    <DayTimesContainer>
                        <DayNames>
                            <h3>Den</h3>
                            <div>
                                <h4>Pondelok</h4>
                            </div>
                            <div>
                                <h4>Utorok</h4>
                            </div>
                            <div>
                                <h4>Streda</h4>
                            </div>
                            <div>
                                <h4>Štvrtok</h4>
                            </div>
                            <div>
                                <h4>Piatok</h4>
                            </div>
                            <div>
                                <h4>Sobota</h4>
                            </div>
                            <div>
                                <h4>Nedeľa</h4>
                            </div>
                        </DayNames>
                        <div>
                            <h3>Začiatok prehliadok</h3>
                            {calendar.startTimes.map((value, idx) => (
                                <div key={idx}>
                                    <CustomInput
                                        label="Čas: HH/MM*"
                                        type='text'
                                        name='startTimes'
                                        value={value}
                                        handleChange={(e) => handleDayTimeChange(e, idx)}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Koniec prehliadok</h3>
                            {calendar.endTimes.map((value, idx) => (
                                <div key={idx}>
                                    <CustomInput
                                        label="Čas: HH/MM*"
                                        type='text'
                                        name='endTimes'
                                        value={value}
                                        handleChange={(e) => handleDayTimeChange(e, idx)}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </DayTimesContainer>
                </ScrollContainer>
            </form>
        </section>
    )
}

export default CalendarSection
