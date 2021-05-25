import React, { createContext, useState, useEffect, useContext } from 'react'
import { AuthContext } from '../auth/auth.context'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { useFetchById } from '../../hooks/useFetch'
import {
    getHourTime,
    checkBookings,
    getTimeline,
    handleExceptionDays
} from '../../utils/week-calendar.utils'

export const WeekCalendarContext = createContext({
    timeline: null,
    getDayData: () => { },
    refetchWeekCalendar: () => { },
    cancelUserBooking: () => { },
    // fillDayData: () => { }
})

const WeekCalendarProvider = ({ children, calendar, monthIndex, year }) => {
    const { response, isLoading, refetch } = useFetchById('api/booking/calendars', calendar, !calendar)
    const { closeModal, setIsLoading, setShowModal, getMessage } = useContext(LoadingModalContext)
    const { token } = useContext(AuthContext)
    const [numberOfHours, setNumberOfHours] = useState(0)
    const [timeline, setTimeline] = useState(null)

    const getDayData = (dayN, dayIdx, calendar, isPrevDay, prevDayNumber) => {
        if (!calendar) return
        const numberedStartTimes = calendar.startTimes.filter(number => number !== "X").map(time => (Number(time.split("/")[0])))
        const startTime = Math.min(...numberedStartTimes)

        let dayNumber = isPrevDay ? prevDayNumber : dayN
        let month = isPrevDay ? monthIndex - 1 : monthIndex

        // console.log(monthIndex)

        let breaks = null
        let lunches = null
        let holidays = null

        // console.log(`Day number ${dayNumber}`)
        // console.log(`Day dayIdx ${dayIdx}`)
        // console.log(`Day number ${dayNumber}`)
        let isDisabled = false

        if(calendar?.disabledDays) {
            //return if disabled Day equal the dayblock
            calendar.disabledDays.forEach(day => {
                if(day === dayIdx + 1 ) return isDisabled = true
            })
        }

        if(isDisabled) return

        if(calendar?.except) {
            Object.keys(calendar?.except).forEach(date => {
                const splitedDate = date.split("/") 
    
    
                if(Number(splitedDate[0]) === Number(dayNumber) && Number(splitedDate[1]) === Number(month) + 1 && Number(splitedDate[2]) === Number(year)) {
                    return holidays = calendar.except[date]
                }
            })
        }
        if(calendar?.breaks) {
            Object.keys(calendar?.breaks).forEach(date => {
                const splitedDate = date.split("/") 
    
    
                if(Number(splitedDate[0]) === Number(dayNumber) && Number(splitedDate[1]) === Number(month) + 1 && Number(splitedDate[2]) === Number(year)) {
                    return breaks = calendar.breaks[date]
                }
            })
        }
        if(calendar?.lunches) {
            Object.keys(calendar?.lunches).forEach(date => {
                const splitedDate = date.split("/") 
    
    
                if(Number(splitedDate[0]) === Number(dayNumber) && Number(splitedDate[1]) === Number(month) + 1 && Number(splitedDate[2]) === Number(year)) {
                    return lunches = calendar.lunches[date]
                }
            })
        }

        const hourblock = [...Array(numberOfHours)].map((value, idx) => {
            const splitedStartTime = calendar.startTimes[dayIdx]?.split("/").map(value => Number(value))
            const splitedEndTime = calendar.endTimes[dayIdx]?.split("/").map(value => Number(value))
            const time = getHourTime(idx, calendar.interval)
            const splitedTime = time.split('/').map(value => Number(value))

            
            if (startTime > splitedTime[0]) return
            if (splitedStartTime[0] > startTime && splitedStartTime[0] > splitedTime[0]) return ({ empty: true })
            if (splitedStartTime[0] > startTime && splitedStartTime[0] > splitedTime[0] && !(splitedStartTime[1] === splitedTime[1]) && splitedTime[1] === 30) return ({ empty: true })

            if (splitedEndTime[0] < splitedTime[0]) return
            if (calendar.startTimes[dayIdx] === 'X') return
            if (splitedEndTime[0] === splitedTime[0] && !(splitedEndTime[1] === splitedTime[1]) && splitedTime[1] === 30) return
            if (splitedEndTime[0] === splitedTime[0] && !(splitedEndTime[1] === splitedTime[1]) && splitedTime[1] === 15) return 
            if (splitedEndTime[0] === splitedTime[0] && !(splitedEndTime[1] === splitedTime[1]) && splitedTime[1] === 45) return 

            // console.log(time)
            // console.log(holidays)

            // console.log(holidays?.find(v => Number(v.split("/")[0]) >= splitedTime[0] || Number(v.split("-")[1].split('/')[0] <= splitedTime[0])))

            const holiday = holidays?.find(v => {
                const startTime = v.split('-')[0]
                const endTime = v.split('-')[1]
                const splitedHolidayStartTime = startTime.split('/').map(value => Number(value))
                const splitedHolidayEndTime = endTime.split('/').map(value => Number(value))

                return splitedHolidayStartTime[0] <= splitedTime[0] && splitedHolidayEndTime[0] >= splitedTime[0]
            })

            const breakTime = breaks?.find(v => {
                const startTime = v.split('-')[0]
                const endTime = v.split('-')[1]
                const splitedHolidayStartTime = startTime.split('/').map(value => Number(value))
                const splitedHolidayEndTime = endTime.split('/').map(value => Number(value))

                return startTime === time || splitedHolidayStartTime[0] <= splitedTime[0] && splitedHolidayEndTime[0] >= splitedTime[0]
            })

            const lunchTime = lunches?.find(v => {
                const startTime = v.split('-')[0]
                const endTime = v.split('-')[1]
                const splitedHolidayStartTime = startTime.split('/').map(value => Number(value))
                const splitedHolidayEndTime = endTime.split('/').map(value => Number(value))

                return splitedHolidayStartTime[0] <= splitedTime[0] && splitedHolidayEndTime[0] >= splitedTime[0]
            })

            if(holiday) {
                const holidayStartTime = holiday.split('-')[0]
                const holidayEndTime = holiday.split('-')[1]
                const splitedHolidayStartTime = holidayStartTime.split('/').map(value => Number(value))
                const splitedHolidayEndTime = holidayEndTime.split('/').map(value => Number(value))
                
                if (splitedHolidayStartTime[0] <= splitedTime[0] && splitedHolidayEndTime[0] >= splitedTime[0]) {
                    if(splitedHolidayStartTime[0] < splitedTime[0] && splitedHolidayEndTime[0] > splitedTime[0]) {
                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] === splitedTime[1] && splitedHolidayStartTime[0] !== splitedHolidayEndTime[0]) {
                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] === splitedHolidayEndTime[0] && splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] < splitedTime[1] && splitedHolidayEndTime[1] > splitedTime[1]) {
                        return ({
                            id: idx,
                            time: time,
                            userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                        })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayStartTime[0] < splitedHolidayEndTime[0] && splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] <= splitedTime[1]) {

                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] === splitedTime[1]) {
                        return ({
                            id: idx,
                            time: time,
                            userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                        })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] >= splitedTime[1]) {
                        return ({ empty: true })
                    }
                    // if(splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] === splitedTime[1]) {
                    //     return ({ empty: true })
                    // }
                    if(splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] === splitedTime[1]) {
                        return ({ empty: true })
                    }
    
                    return ({
                        id: idx,
                        time: time,
                        userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                    })
                }
            }
            if(breakTime) {
                const holidayStartTime = breakTime.split('-')[0]
                const holidayEndTime = breakTime.split('-')[1]
                const splitedHolidayStartTime = holidayStartTime.split('/').map(value => Number(value))
                const splitedHolidayEndTime = holidayEndTime.split('/').map(value => Number(value))
                
                if (splitedHolidayStartTime[0] <= splitedTime[0] && splitedHolidayEndTime[0] >= splitedTime[0]) {
                    if(splitedHolidayStartTime[0] < splitedTime[0] && splitedHolidayEndTime[0] > splitedTime[0]) {
                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] === splitedTime[1] && splitedHolidayStartTime[0] !== splitedHolidayEndTime[0]) {
                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] === splitedHolidayEndTime[0] && splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] < splitedTime[1] && splitedHolidayEndTime[1] > splitedTime[1]) {
                        return ({
                            id: idx,
                            time: time,
                            userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                        })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayStartTime[0] < splitedHolidayEndTime[0] && splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] <= splitedTime[1]) {

                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] === splitedTime[1]) {
                        return ({
                            id: idx,
                            time: time,
                            userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                        })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] >= splitedTime[1]) {
                        return ({ empty: true })
                    }
                    // if(splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] === splitedTime[1]) {
                    //     return ({ empty: true })
                    // }
                    if(splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] === splitedTime[1]) {
                        return ({ empty: true })
                    }
    
                    return ({
                        id: idx,
                        time: time,
                        userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                    })
                }
            }
            if(lunchTime) {
                const holidayStartTime = lunchTime.split('-')[0]
                const holidayEndTime = lunchTime.split('-')[1]
                const splitedHolidayStartTime = holidayStartTime.split('/').map(value => Number(value))
                const splitedHolidayEndTime = holidayEndTime.split('/').map(value => Number(value))
                
                if (splitedHolidayStartTime[0] <= splitedTime[0] && splitedHolidayEndTime[0] >= splitedTime[0]) {
                    if(splitedHolidayStartTime[0] < splitedTime[0] && splitedHolidayEndTime[0] > splitedTime[0]) {
                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] === splitedTime[1] && splitedHolidayStartTime[0] !== splitedHolidayEndTime[0]) {
                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] === splitedHolidayEndTime[0] && splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] < splitedTime[1] && splitedHolidayEndTime[1] > splitedTime[1]) {
                        // console.log("HERE 111")
                        // console.log(`${splitedHolidayStartTime[0]} || ${splitedHolidayStartTime[1]} |||| ${splitedHolidayEndTime[0]} || ${splitedHolidayEndTime[1]} |||| ${splitedTime[0]} || ${splitedTime[1]} && splitedHolidayEndTime[1] === splitedTime[1]`)

                        return ({ empty: true })

                        // return ({
                        //     id: idx,
                        //     time: time,
                        //     userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                        // })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayStartTime[0] < splitedHolidayEndTime[0] && splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] <= splitedTime[1]) {

                        return ({ empty: true })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] === splitedTime[1]) {
                        // console.log("HERE 222")
                        // console.log(`${splitedHolidayStartTime[0]} || ${splitedHolidayStartTime[1]} |||| ${splitedHolidayEndTime[0]} || ${splitedHolidayEndTime[1]} |||| ${splitedTime[0]} || ${splitedTime[1]} && splitedHolidayEndTime[1] === splitedTime[1]`)


                        return ({
                            id: idx,
                            time: time,
                            userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                        })
                    }
                    if(splitedHolidayStartTime[0] !== splitedHolidayEndTime[0] && splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] >= splitedTime[1]) {
                        return ({ empty: true })
                    }
                    // if(splitedHolidayEndTime[0] === splitedTime[0] && splitedHolidayEndTime[1] === splitedTime[1]) {
                    //     return ({ empty: true })
                    // }
                    if(splitedHolidayStartTime[0] === splitedTime[0] && splitedHolidayStartTime[1] === splitedTime[1]) {
                        return ({ empty: true })
                    }
    
                    return ({
                        id: idx,
                        time: time,
                        userBookings: checkBookings(calendar, idx, dayNumber, month, year)
                    })
                }
            }
            
            
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
        if (response.calendar.interval === 15) setNumberOfHours(96)
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