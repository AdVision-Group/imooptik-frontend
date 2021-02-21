import React, { createContext, useState, useEffect } from 'react'

import { useFetchById } from '../../hooks/useFetch'
import {
    getTimefromIndex,
    getHourTime,
    checkBookings
} from '../../utils/week-calendar.utils'

export const WeekCalendarContext = createContext({
    days: [],
    getDayData: () => { },
    refetchWeekCalendar: () => { },
})

const WeekCalendarProvider = ({ children, calendar, month, year, ...otherProps }) => {
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const [calendarDataObj, setCalendarDataObj] = useState(null)
    const [numberOfHours, setNumberOfHours] = useState(0)

    const [days, setDays] = useState([])

    console.log("CONTEXT DATA")
    console.log(numberOfHours)
    console.log(calendarDataObj)

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
            // if (splitedStartTime[0] < splitedTime[0] && splitedStartTime[1] === splitedTime[1]) return
            return ({
                id: idx,
                time: time,
                userBookings: checkBookings(calendarDataObj, idx, dayNumber, month, year)
            })
        })

        // setDays(prevValue => [...prevValue, newDay])
        return newDay.filter(item => item !== undefined)
    }

    useEffect(() => {
        if (isLoading) return
        setCalendarDataObj(response.calendar)
        if (response.calendar.interval === 30) setNumberOfHours(48)
        if (response.calendar.interval === 60) setNumberOfHours(24)
    }, [isLoading])

    // useEffect(() => {
    //     if (numberOfHours === 0) return
    //     const newDay = [...Array(numberOfHours)].map((value, idx) => ({
    //         id: idx,
    //         time: getHourTime(idx, calendarDataObj.interval),
    //         userBookings: checkBookings(calendarDataObj, idx, month, year)
    //     }))

    //     console.log(newDay)

    // }, [numberOfHours])

    // getTimefromIndex(idx, idx % 2 === 0)

    useEffect(() => {
        return () => {
            setCalendarDataObj(null)
            setDays([])
        }
    }, [])

    return (
        <WeekCalendarContext.Provider
            value={{
                days,
                getDayData,
                refetchWeekCalendar: refetch,
            }}
        >
            {children}
        </WeekCalendarContext.Provider>
    )
}

export default WeekCalendarProvider