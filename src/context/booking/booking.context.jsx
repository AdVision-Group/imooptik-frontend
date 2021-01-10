import React, { createContext, useState, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'

import {
    fetchCalendars,
    fetchBookings,
    fetchBookingRows
} from './booking.queries'

export const BookingContext = createContext({
    calendars: null,
    getCalendars: () => { },
    bookings: null,
    getBookings: () => { },
    bookingRows: null,
    getBookingRows: () => { }
})

const BookingProvider = ({ children }) => {
    const {
        getMessage,
        setIsLoading,
        setShowModal,
        closeModal
    } = useContext(LoadingModalContext)

    // ------------------------
    // CALENDAR ACTIONS
    // ------------------------
    const [calendars, setCalendars] = useState(null)

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

    // ------------------------
    // BOOKINGS ACTIONS
    // ------------------------
    const [bookings, setBookings] = useState(null)

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

    // ------------------------
    // BOOKINGSROW ACTIONS
    // ------------------------
    const [bookingRows, setBookingRows] = useState(null)

    const getBookingRows = async () => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await fetchBookingRows()
            const data = await response.json()

            if (data.error) {
                getMessage(data.message)
                setIsLoading(false)
                return
            }

            if (data.bookingRows) {
                setBookingRows(data.bookingRows)
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

    return (
        <BookingContext.Provider
            value={{
                calendars,
                getCalendars,
                bookings,
                getBookings,
                bookingRows,
                getBookingRows,
            }}
        >
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider