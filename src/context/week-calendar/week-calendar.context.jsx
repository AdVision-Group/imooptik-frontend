import React, { createContext, useState, useEffect } from 'react'

import { useFetchById } from '../../hooks/useFetch'
import {
    getHourTime,
    checkBookings
} from '../../utils/week-calendar.utils'

export const WeekCalendarContext = createContext({
    getDayData: () => { },
    refetchWeekCalendar: () => { },
})

const WeekCalendarProvider = ({ children, calendar, month, year, ...otherProps }) => {
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const [calendarDataObj, setCalendarDataObj] = useState(null)
    const [numberOfHours, setNumberOfHours] = useState(0)


    const getDayData = (dayNumber, dayIdx) => {
        if (!calendarDataObj) return
        const newDay = [...Array(numberOfHours)].map((value, idx) => {
            const splitedStartTime = calendarDataObj.startTimes[dayIdx]?.split("/").map(value => Number(value))
            const splitedEndTime = calendarDataObj.endTimes[dayIdx]?.split("/").map(value => Number(value))
            const time = getHourTime(idx, calendarDataObj.interval)
            const splitedTime = time.split('/').map(value => Number(value))
            if (splitedStartTime[0] > splitedTime[0]) return
            if (splitedEndTime[0] < splitedTime[0]) return
            if (calendarDataObj.startTimes[dayIdx] === 'X') return
            if (splitedEndTime[0] === splitedTime[0] && !(splitedEndTime[1] === splitedTime[1]) && splitedTime[1] === 30) return

            return ({
                id: idx,
                time: time,
                userBookings: checkBookings(calendarDataObj, idx, dayNumber, month, year)
            })
        })

        return newDay.filter(item => item !== undefined)
    }

    useEffect(() => {
        if (isLoading) return
        setCalendarDataObj(response.calendar)
        if (response.calendar.interval === 30) setNumberOfHours(48)
        if (response.calendar.interval === 60) setNumberOfHours(24)
    }, [isLoading])

    useEffect(() => {
        return () => {
            setCalendarDataObj(null)
        }
    }, [])

    return (
        <WeekCalendarContext.Provider
            value={{
                getDayData,
                refetchWeekCalendar: refetch,
            }}
        >
            {children}
        </WeekCalendarContext.Provider>
    )
}

export default WeekCalendarProvider