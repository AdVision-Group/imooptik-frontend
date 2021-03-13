import React, { createContext, useState, useEffect, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { useFetchById } from '../../hooks/useFetch'
import {
    getHourTime,
    checkBookings,
    getTimeline
} from '../../utils/week-calendar.utils'

export const WeekCalendarContext = createContext({
    timeline: null,
    getDayData: () => { },
    refetchWeekCalendar: () => { },
    cancelUserBooking: () => { },
    // fillDayData: () => { }
})

const WeekCalendarProvider = ({ children, calendar, month, year }) => {
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const { closeModal, setIsLoading, setShowModal, getMessage } = useContext(LoadingModalContext)
    const { token } = useContext(AuthContext)
    const [numberOfHours, setNumberOfHours] = useState(0)
    const [timeline, setTimeline] = useState(null)

    const getDayData = (dayNumber, dayIdx, calendar) => {
        if (!calendar) return
        const numberedStartTimes = calendar.startTimes.filter(number => number !== "X").map(time => (Number(time.split("/")[0])))
        const startTime = Math.min(...numberedStartTimes)

        const hourblock = [...Array(numberOfHours)].map((value, idx) => {
            const splitedStartTime = calendar.startTimes[dayIdx]?.split("/").map(value => Number(value))
            const splitedEndTime = calendar.endTimes[dayIdx]?.split("/").map(value => Number(value))
            const time = getHourTime(idx, calendar.interval)
            const splitedTime = time.split('/').map(value => Number(value))

            if (startTime > splitedTime[0]) return
            if (splitedStartTime[0] > startTime && splitedStartTime[0] > splitedTime[0]) return ({ empty: true })
            if (splitedEndTime[0] < splitedTime[0]) return
            if (calendar.startTimes[dayIdx] === 'X') return
            if (splitedEndTime[0] === splitedTime[0] && !(splitedEndTime[1] === splitedTime[1]) && splitedTime[1] === 30) return

            return ({
                id: idx,
                time: time,
                userBookings: checkBookings(calendar, idx, dayNumber, month, year)
            })
        }).filter(item => item !== undefined)

        return hourblock
    }

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const cancelUserBooking = async (userBookingId, refetchCalendar, setShowBookingDetails) => {
        setShowModal(true)
        setIsLoading(true)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/userBookings/${userBookingId}/cancel`, requestOptions)
            const data = await response.json()

            if (data.userBooking) {
                closeModal()
                setShowBookingDetails()
                setTimeout(() => {
                    refetchCalendar()
                }, 200);
            }

            getMessage(data.messageSK)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (isLoading) return
        if (response.calendar.interval === 30) setNumberOfHours(48)
        if (response.calendar.interval === 60) setNumberOfHours(24)
        const timelineArr = getTimeline(response.calendar.startTimes, response.calendar.endTimes, response.calendar.interval)
        setTimeline(timelineArr)
    }, [isLoading])

    return (
        <WeekCalendarContext.Provider
            value={{
                timeline,
                getDayData,
                refetchWeekCalendar: refetch,
                cancelUserBooking,
                // fillDayData
            }}
        >
            {children}
        </WeekCalendarContext.Provider>
    )
}

export default WeekCalendarProvider