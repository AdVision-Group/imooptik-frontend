export const getTimefromIndex = (idx, isHalf) => {
    if (isNaN(idx)) return
    let time = ""
    if (isHalf) {
        time = idx < 10 ? `0${idx}:30` : `${idx}:30`
    } else {
        time = idx < 10 ? `0${idx}:00` : `${idx}:00`
    }

    return time;
}

export const getHourTime = (idx, interval) => {
    if (isNaN(idx)) return
    const totalMinutes = idx * interval

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const time = formatTime(hours, minutes)
    return time
}

const formatTime = (hour, min) => {
    if (hour < 10 && min === 0) return `0${hour}/0${min}`
    if (hour < 10) return `0${hour}/${min}`
    if (min === 0) return `${hour}/0${min}`
    return `${hour}/${min}`
}

export const changeSlash = time => {
    if (!time) return
    return time.replace("/", ":")
}

export const checkBookings = (calendarDataObj, idx, day, month, year) => {
    if (!calendarDataObj?.booked) return null
    const dates = Object.keys(calendarDataObj?.booked)

    const bookedDate = dates.find(date => {
        const splitedDate = date.split("/").map(value => Number(value))        
        if (splitedDate[0] === day && splitedDate[1] === month + 1 && splitedDate[2] === year) {
            return date
        }
        return false
    })

    if (!bookedDate) return null

    const time = getHourTime(idx, calendarDataObj.interval)
    const bookingTime = calendarDataObj.booked[bookedDate].find(bookTime => bookTime === time)

    return bookingTime ? ({
        time: bookingTime,
        date: calendarDataObj.booked[bookedDate],
        dueDate: `${bookingTime}:${bookedDate}`
    }) : null
}

export const getTimeline = (startTimes, endTimes, interval) => {
    const numberedStartTimes = startTimes.filter(number => number !== "X").map(time => (Number(time.split("/")[0])))
    const numberedEndTimes = endTimes.filter(number => number !== "X").map(time => (Number(time.split("/")[0])))
    const numberedEndMinutes = endTimes.filter(number => number !== "X").map(time => (Number(time.split("/")[1])))
    const startTime = Math.min(...numberedStartTimes)
    const endTime = Math.max(...numberedEndTimes)
    const endMinutes = Math.max(...numberedEndMinutes)

    const timeline = [...Array(interval === 60 ? 24 : interval === 30 ? 48 : 96)].map((value, idx) => {
        const time = getHourTime(idx, interval)
        const splitedTime = time.split('/').map(value => Number(value))
        if (startTime > splitedTime[0]) return null
        if (endTime < splitedTime[0]) return null
        if (endTime === splitedTime[0] && !(endMinutes === splitedTime[1]) && splitedTime[1] === 30) return null
        if (endTime === splitedTime[0] && !(endMinutes === splitedTime[1]) && splitedTime[1] === 15) return null
        if (endTime === splitedTime[0] && !(endMinutes === splitedTime[1]) && splitedTime[1] === 45) return null
        return time
    }).filter(time => time !== null)

    return timeline
}

export const handleExceptionDays = (calendarDataObj) => {
    
    // console.log("DATUMY")
    // console.log(dates)
    // console.log(calendarDataObj.exceptDays)

    const holidayDates = Object.keys(calendarDataObj?.exceptDays)

    // console.log("holidayDates")
    // console.log("holidayDates")
    // console.log(holidayDates)

    // let hasHoliday = false 

    // dates.forEach(date => {
    //     holidayDates.forEach(hDate => {
    //         if(date === hDate) return hasHoliday = true
    //         return
    //     })
    // } )

    // console.log(hasHoliday)
}