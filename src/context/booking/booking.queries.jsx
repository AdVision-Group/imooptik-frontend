

export const fetchCalendars = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/calendars`)
}
export const fetchBookings = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/bookings`)
}
export const fetchBookingRows = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/bookingRows`)
}