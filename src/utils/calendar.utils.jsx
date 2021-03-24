export const calendarTimes = [
    {
        name: '00:00',
        value: '00/00'
    },
    {
        name: '00:30',
        value: '00/30'
    },
    {
        name: '01:00',
        value: '01/00'
    },
    {
        name: '01:30',
        value: '01/30'
    },
    {
        name: '02:00',
        value: '02/00'
    },
    {
        name: '02:30',
        value: '02/30'
    },
    {
        name: '03:00',
        value: '03/00'
    },
    {
        name: '03:30',
        value: '03/30'
    },
    {
        name: '04:00',
        value: '04/00'
    },
    {
        name: '04:30',
        value: '04/30'
    },
    {
        name: '05:00',
        value: '05/00'
    },
    {
        name: '05:30',
        value: '05/30'
    },
    {
        name: '06:00',
        value: '06/00'
    },
    {
        name: '06:30',
        value: '06/30'
    },
    {
        name: '07:00',
        value: '07/00'
    },
    {
        name: '07:30',
        value: '07/30'
    },
    {
        name: '08:00',
        value: '08/00'
    },
    {
        name: '08:30',
        value: '08/30'
    },
    {
        name: '09:00',
        value: '09/00'
    },
    {
        name: '09:30',
        value: '09/30'
    },
    {
        name: '10:00',
        value: '10/00'
    },
    {
        name: '10:30',
        value: '10/30'
    },
    {
        name: '11:00',
        value: '11/00'
    },
    {
        name: '11:30',
        value: '11/30'
    },
    {
        name: '12:00',
        value: '12/00'
    },
    {
        name: '12:30',
        value: '12/30'
    },
    {
        name: '13:00',
        value: '13/00'
    },
    {
        name: '13:30',
        value: '13/30'
    },
    {
        name: '14:00',
        value: '14/00'
    },
    {
        name: '14:30',
        value: '14/30'
    },
    {
        name: '15:00',
        value: '15/00'
    },
    {
        name: '15:30',
        value: '15/30'
    },
    {
        name: '16:00',
        value: '16/00'
    },
    {
        name: '16:30',
        value: '16/30'
    },
    {
        name: '17:00',
        value: '17/00'
    },
    {
        name: '17:30',
        value: '17/30'
    },
    {
        name: '18:00',
        value: '18/00'
    },
    {
        name: '18:30',
        value: '18/30'
    },
    {
        name: '19:00',
        value: '19/00'
    },
    {
        name: '19:30',
        value: '19/30'
    },
    {
        name: '20:00',
        value: '20/00'
    },
    {
        name: '20:30',
        value: '20/30'
    },
    {
        name: '21:00',
        value: '21/00'
    },
    {
        name: '22:30',
        value: '22/30'
    },
    {
        name: '23:00',
        value: '23/00'
    },
    {
        name: '23:30',
        value: '23/30'
    },
]

export const dayNames = [
    'Pondelok',
    'Utorok',
    'Streda',
    'Štvrtok',
    'Piatok',
    'Sobota',
    'Nedeľa'
]

export const months = [
    'január',
    'február',
    'marec',
    'apríl',
    'máj',
    'jún',
    'júl',
    'august',
    'september',
    'október',
    'november',
    'december',
]

export const calendarFormat = [
    'Mesiac',
    'Týždeň'
]

export const getMonday = (d) => {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

export const getPreviousMonthDays = (firstDayIndex) => {
    let arr = [];
    for (let x = firstDayIndex; x > 0; x--) {
        arr.push({
            dayNumber: x,
            isDisable: true,
            isPrevDay: true,
        })
    }
    return arr
}

export const getNextMonthDays = (nextDays) => {
    let arr = [];
    for (let x = 1; x <= nextDays; x++) {
        arr.push({
            dayNumber: x,
            isDisable: true,
            isNextDay: true
        })
    }
    // return arr.length >= 6 ? [] : arr /
    return arr
}

export const getCurrentMonthDays = (lastDay) => {
    let arr = [];
    for (let x = 1; x <= lastDay; x++) {
        arr.push({
            dayNumber: x,
        })
    }
    return arr
}

export const getBooking = (days, calendar, month, year) => {
    if (!calendar.booked) return days;
    const bookingsArr = Object.keys(calendar?.booked)

    const bookingDates = bookingsArr.filter((booking) => {
        const spliteBookingString = booking.split('/')
        let isBelongHere = false;

        spliteBookingString.forEach(value => {
            if (month === Number(spliteBookingString[1]) - 1 && year === Number(spliteBookingString[2])) {
                return isBelongHere = true
            }
        })

        if (isBelongHere) {
            return booking
        }
        return false
    })

    const daysWithBookingsArr = days.map(day => {
        let dayObj = {}

        bookingDates.forEach(date => {
            const splitedDate = date.split('/')
            if (Number(splitedDate[0]) === day.dayNumber) {
                return dayObj = {
                    dayNumber: day.dayNumber,
                    bookings: calendar.booked[date],
                    bookingDate: bookingDates.find(bookDate => bookDate === date)
                }
            } else {
                if (dayObj.bookings) return
                return dayObj = {
                    dayNumber: day.dayNumber,
                }
            }
        })

        if (dayObj.bookings) return dayObj

        return {
            dayNumber: day.dayNumber,
        }

    });
    return daysWithBookingsArr
}

export const checkIfHasAppoinment = (hourIndex, bookingsArr) => {
    let result = false;
    if (bookingsArr) {
        bookingsArr.forEach(booking => {
            const formatBookingTime = booking.split('/')
            if (Number(formatBookingTime[0]) === hourIndex) {
                return result = true
            }
        })
    }
    return result
}

export const formatCalendarObj = calendarObj => {
    let obj = { ...calendarObj }
    if (obj.bookings) delete obj["bookings"]
    if (obj.booked !== undefined) delete obj["booked"]
    if (obj.__v !== undefined) delete obj["__v"]
    if (obj._id) delete obj["_id"]
    if (obj.dateCreated) delete obj["dateCreated"]
    if (obj.exceptDays) {
        obj = {
            ...obj,
            exceptDays: formatExceptDaysToObj(obj.exceptDays)
        }
    }

    return obj
}

export const formatExceptDays = exceptDaysObj => {
    const arr = Object.keys(exceptDaysObj)
    const formatedArr = arr.map(value => value.split('/').reverse().join('-'))
    return formatedArr
}

export const formatExceptDaysToObj = exceptDaysArr => {
    let obj = {}
    const formatedArr = exceptDaysArr.map(value => value.split('-').reverse().join('/'))

    formatedArr.forEach(day => {
        obj = {
            ...obj,
            [day]: "00/00-23/59"
        }
    })
    return obj
}

export const formatBookingObj = bookingObj => {
    let obj = { ...bookingObj }
    if (obj.rows) delete obj["rows"]
    if (obj.__v !== undefined) delete obj["__v"]
    if (obj._id) delete obj["_id"]
    if (obj.dateCreated) delete obj["dateCreated"]
    if (obj.timesBooked !== undefined) delete obj["timesBooked"]
    if (obj.premises) delete obj["premises"]
    if (obj.calendar) delete obj["calendar"]

    return obj
}

export const formatDate = (bookingDate) => {
    const splitedDate = bookingDate?.date.split('-')
    const formatedDate = `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`
    const formatedHour = `${bookingDate?.hour < 10 ? `0${bookingDate?.hour}` : bookingDate?.hour}/${bookingDate?.min === 0 ? `0${bookingDate?.min}` : bookingDate?.min}`

    return `${formatedHour}:${formatedDate}`
}

export const formatCalendarStartTime = (calendar, day) => {
    let dayIndex = new Date(day.year, day.month, day.dayNumber).getDay()
    if (dayIndex === 0) dayIndex = 7
    if (calendar.startTimes[dayIndex - 1] === "X") return
    return calendar.startTimes[dayIndex - 1].replace("/", ":")
}
export const formatCalendarEndTime = (calendar, day) => {
    let dayIndex = new Date(day.year, day.month, day.dayNumber).getDay()
    if (dayIndex === 0) dayIndex = 7
    if (calendar.endTimes[dayIndex - 1] === "X") return
    return calendar.endTimes[dayIndex - 1].replace("/", ":")
}