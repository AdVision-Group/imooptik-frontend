
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
    'september',
    'október',
    'november',
    'december',
]

export const calendarFormat = [
    'Mesiac',
    'Týžden'
]

export const getMonday = (d) => {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
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
    console.log(nextDays)
    let arr = [];
    for (let x = 1; x <= nextDays; x++) {
        arr.push({
            dayNumber: x,
            isDisable: true,
            isNextDay: true
        })
    }
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
            if (month + 1 === Number(spliteBookingString[1]) && year === Number(spliteBookingString[2])) {
                return isBelongHere = true
            } else {
                return isBelongHere = false
            }
        })
        if (isBelongHere) {
            return booking
        } else {
            // return
        }
    })

    const daysWithBookingsArr = days.map(day => {
        let dayObj = {}

        bookingDates.forEach(date => {
            const splitedDate = date.split('/')
            if (Number(splitedDate[0]) === day.dayNumber) {
                return dayObj = {
                    dayNumber: day.dayNumber,
                    bookings: calendar.booked[date]
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