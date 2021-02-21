export const getTimefromIndex = (idx, isHalf) => {
    if (Number(idx) === NaN) return
    console.log(isHalf)
    let time = ""
    if (isHalf) {
        time = idx < 10 ? `0${idx}:30` : `${idx}:30`
    } else {
        time = idx < 10 ? `0${idx}:00` : `${idx}:00`
    }

    return time;
}

export const getHourTime = (idx, interval) => {
    if (Number(idx) === NaN) return
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