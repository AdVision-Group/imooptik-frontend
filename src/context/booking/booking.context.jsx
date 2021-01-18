import React, { createContext, useState, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'

import {
    fetchCalendars,
    fetchSingleCalendar,
    fetchBookings,
    // fetchBookingRows,
    fetchUserBookings
} from './booking.queries'

export const BookingContext = createContext({
    calendar: null,
    calendars: null,
    getCalendars: () => { },
    getCalendar: () => { },
    bookings: null,
    getBookings: () => { },
    userBookings: null,
    getUserBookings: () => { },
    // bookingRows: null,
    // getBookingRows: () => { },
    activeCalendar: 0,
    resetBooking: () => { },
    selectedDate: {
        name: "",
        value: ''
    },
    setSelectedDate: () => { }
})

const BookingProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const {
        getMessage,
        setIsLoading,
        setShowModal,
        closeModal
    } = useContext(LoadingModalContext)

    // ------------------------
    // CALENDAR ACTIONS
    // ------------------------
    const [activeCalendar, setActiveCalendar] = useState(0)
    const [calendars, setCalendars] = useState(null)
    const [calendar, setCalendar] = useState(null)
    const [selectedDate, setSelectedDate] = useState({
        name: '',
        value: ''
    })

    // Get all calendars
    const getCalendars = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchCalendars()
            const data = await response.json()

            if (data.error) {
                getMessage(data.message)
                setIsLoading(false)
                return
            }

            if (data.calendars) {
                setCalendars(data.calendars)
                setIsLoading(false)
                closeModal()
            }

            getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // Get single calendar
    const getCalendar = async (id, idx) => {
        setIsLoading(true)
        setShowModal(true)
        setSelectedDate({
            name: '',
            value: ''
        })

        try {
            const response = await fetchSingleCalendar(id)
            const data = await response.json()

            console.log(data)
            if (data.calendar) {
                setCalendar(data.calendar)
                setActiveCalendar(idx)
                closeModal()
                return
            }

            getMessage(data.message)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    // ------------------------
    // BOOKINGS ACTIONS
    // ------------------------
    const [bookings, setBookings] = useState(null)
    const [userBookings, setUserBookings] = useState(null)

    const getBookings = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchBookings()
            const data = await response.json()

            if (data.error) {
                getMessage(data.message)
                setIsLoading(false)
                return
            }

            if (data.bookings) {
                setBookings(data.bookings)
                setIsLoading(false)
                closeModal()
            }

            getMessage(data.message)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const getUserBookings = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchUserBookings(token)
            const data = await response.json()

            if (data.userBookings) {
                setUserBookings(data.userBookings)
                closeModal()
                return
            }

            getMessage(data.message)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const resetBooking = () => {
        setActiveCalendar(0)
    }

    return (
        <BookingContext.Provider
            value={{
                calendar,
                calendars,
                getCalendars,
                getCalendar,
                bookings,
                getBookings,
                userBookings,
                getUserBookings,
                // bookingRows,
                // getBookingRows,
                activeCalendar,
                resetBooking,
                selectedDate,
                setSelectedDate,
            }}
        >
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider