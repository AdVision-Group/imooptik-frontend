

export const fetchCalendars = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/calendars`)
}

export const fetchSingleCalendar = (id) => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/calendars/${id}`)
}

export const fetchBookings = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/bookings`)
}
export const fetchBookingRows = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/bookingRows`)
}

export const fetchUserBookings = (token) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/userBookings`, requestOptions)
}


export const postCalendar = (token, calendar) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    console.log(calendar)


    const raw = JSON.stringify({
        ...calendar
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/calendars`, requestOptions)
}

export const patchCalendar = (token, calendar) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    console.log(calendar)

    const {
        name,
        interval,
        startTimes,
        endTimes,
        daysIntoFuture,
        allowMinutesBefore
    } = calendar

    const raw = JSON.stringify({
        name,
        interval,
        startTimes,
        endTimes,
        daysIntoFuture,
        allowMinutesBefore
    });

    const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/calendars/${calendar._id}`, requestOptions)
}

export const deleteCalendar = (id) => {
    // /api/admin/booking/calendars/:id
    // const myHeaders = new Headers();
    // myHeaders.append("auth-token", token);
    // myHeaders.append("Content-Type", "application/json");

    // console.log(calendar)


    // const raw = JSON.stringify({
    //     ...calendar
    // });

    const requestOptions = {
        method: 'DELETE',
        // headers: myHeaders,
        // body: raw,
        redirect: 'follow'
    };

    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/calendars/${id}`, requestOptions)

}