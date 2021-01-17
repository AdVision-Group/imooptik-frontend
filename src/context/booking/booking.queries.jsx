

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