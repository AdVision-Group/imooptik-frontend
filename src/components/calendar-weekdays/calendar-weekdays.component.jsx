import React, { useState, useEffect, useContext } from 'react'
import { useFetchById } from '../../hooks/useFetch'
import { BookingContext } from '../../context/booking/booking.context'
import { WeekCalendarContext } from '../../context/week-calendar/week-calendar.context'

import UserbookingDetailsModal from '../modal-userbookings-details/modal-userbookings-details.component'
import UserBookingModal from '../modal-user-bookings/modal-user-booking.component'
import CalendarBookedDay from '../calendar-booked-day/calendar-booked-day.component'

import {
    dayNames,
    getPreviousMonthDays,
    getNextMonthDays,
    getCurrentMonthDays,
    getBooking,
    checkIfHasAppoinment
} from '../../utils/calendar.utils'

import { changeSlash } from '../../utils/week-calendar.utils'

import {
    Container,
    HeaderBlock,
    HourBlock,
    AppointmentContainer,
    HourGrid,
    TableHead,
    HourBlockContainer,
    EmptyContainer
} from './calendar-weekdays.styles'

const WeekDays = ({
    calendar,
    year,
    month,
    weekIndex,
    handleCalendarBlockClick
}) => {
    const { getDayData, refetchWeekCalendar } = useContext(WeekCalendarContext)
    const { createUserBooking } = useContext(BookingContext)
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const lastDay = new Date(year, month + 1, 0).getDate()
    const firstDayIndex = new Date(year, month, 0).getDay();
    const lastDayIndex = new Date(year, month + 1, 0).getDay()
    const prevLastDay = new Date(year, month, 0).getDate()

    const nextDays = 7 - lastDayIndex

    const [calendarDays, setCalendarDays] = useState([])
    const [selectedDay, setSelectedDay] = useState(null)
    const [showUserBooking, setShowUserBooking] = useState(false)
    const [showBookingDetails, setShowBookingDetails] = useState(false)

    const [selectedUserBooking, setSelectedUserBooking] = useState(null)

    const handleOpenUserBookingModal = (dayData) => {
        setSelectedDay({
            ...dayData,
            year,
            month,
        })
        setShowUserBooking(true)
    }

    const handleOpenDetailsModal = (userBooking) => {
        setSelectedUserBooking(userBooking)
        setShowBookingDetails(true)
    }

    useEffect(() => {
        if (isLoading) return

        if (response.calendar) {
            const prevMonthDays = getPreviousMonthDays(firstDayIndex)
            const monthDays = getCurrentMonthDays(lastDay)
            const nextMonthDays = getNextMonthDays(nextDays)
            const monthDaysWithBookings = getBooking(monthDays, response.calendar, month, year)

            setCalendarDays([
                ...prevMonthDays,
                ...monthDaysWithBookings,
                ...nextMonthDays
            ])
        }
    }, [isLoading])

    return (
        <div>
            {showBookingDetails && <UserbookingDetailsModal calendarId={calendar} userBooking={selectedUserBooking} close={() => setShowBookingDetails(false)} />}
            {showUserBooking && <UserBookingModal refetchWeekCalendar={refetchWeekCalendar} createUserBooking={createUserBooking} refetchCalendar={refetch} calendar={response?.calendar} day={selectedDay} close={() => setShowUserBooking(false)} />}
            <Container>
                <TableHead>
                    {calendarDays.slice(weekIndex * 7, (weekIndex * 7) + 7).map(({ dayNumber, isDisable, isPrevDay, isNextDay }, idx) => (
                        <HeaderBlock isDisabled={isDisable} key={idx}>
                            {isPrevDay ? (
                                <React.Fragment>
                                    <p>{dayNames[new Date(year, month - 1, prevLastDay - (dayNumber)).getDay()]}</p>
                                    <p>{prevLastDay - (dayNumber - 1)}</p>
                                </React.Fragment>
                            ) : isNextDay ? (
                                <React.Fragment>
                                    <p>{dayNames[new Date(year, month + 1, dayNumber - 1).getDay()]}</p>
                                    <p>{dayNumber} </p>
                                </React.Fragment>
                            ) : (
                                        <React.Fragment>
                                            <p>{dayNames[new Date(year, month, dayNumber - 1).getDay()]}</p>
                                            <p>{dayNumber} </p>
                                        </React.Fragment>
                                    )}
                        </HeaderBlock>
                    ))}
                </TableHead>

                <HourGrid>
                    {calendarDays.slice(weekIndex * 7, (weekIndex * 7) + 7).map((dayData, idx) => {
                        const day = getDayData(dayData?.dayNumber, idx)
                        return (
                            <HourBlock key={idx}>
                                {day && day.map((interval, idx) => (
                                    <HourBlockContainer style={response?.calendar?.interval === 60 ? ({ height: "10rem" }) : ({ height: "5rem" })} key={idx}>
                                        {interval?.userBookings && <CalendarBookedDay
                                            dayData={dayData}
                                            calendarId={calendar}
                                            time={interval.time}
                                            userBookings={interval.userBookings}
                                            open={() => handleOpenDetailsModal(interval)}
                                        />}
                                        <EmptyContainer onClick={() => handleOpenUserBookingModal({ ...dayData, time: interval.time })} />
                                        <span>{changeSlash(interval?.time) ?? ""}</span>
                                    </HourBlockContainer>
                                ))}
                            </HourBlock>
                        )
                    })}
                </HourGrid>
            </Container>
        </div>
    )
}

export default WeekDays


// return <HourBlock key={idx}>
//     {[...Array(24)].map((value, index) => {
//         if (Number(response?.calendar?.startTimes[idx].split('/')[0]) > index) return
//         if (Number(response?.calendar?.endTimes[idx].split('/')[0]) < index) return
//         if (response?.calendar?.endTimes[idx] === "X") return
//         return (
//             <HourBlockContainer key={index}>
//                 {dayData.bookings && checkIfHasAppoinment(index, dayData?.bookings) ? (
//                     <React.Fragment>
                        // <CalendarBookedDay
                        //     dayData={dayData}
                        //     calendarId={calendar}
                        //     time={`${index < 10 ? `0${index}` : index}/00`}
                        // />
//                         <CalendarBookedDay
//                             dayData={dayData}
//                             calendarId={calendar}
//                             time={`${index < 10 ? `0${index}` : index}/30`}
//                         />
//                         <EmptyContainer onClick={() => handleOpenUserBookingModal({ ...dayData, time: `${index}:00` })} />

//                     </React.Fragment>
//                 ) : (
//                         <EmptyContainer onClick={() => handleOpenUserBookingModal({ ...dayData, time: `${index}:00` })} />
//                     )}
//                 <span>{index}:00</span>

//             </HourBlockContainer>
//         )
//     })}
// </HourBlock>