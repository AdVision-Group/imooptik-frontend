import React, { createContext, useState, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import { useHistory } from 'react-router-dom'

import {
    fetchCalendars,
    fetchSingleCalendar,
    fetchBookings,
    // fetchBookingRows,
    fetchUserBookings,
    postCalendar,
    patchCalendar,
    deleteCalendar
} from './booking.queries'

import {
    initCalendarObj
} from './booking.utils'

export const BookingContext = createContext({
    calendar: null,
    calendars: null,
    handleCalendarChange: () => { },
    handleDayTimeChange: () => { },
    getCalendars: () => { },
    getCalendar: () => { },
    createCalendar: () => { },
    updateCalendar: () => { },
    delCalendar: () => { },
    isUpdatingCalendar: false,
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
    const { push } = useHistory()
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
    const [isUpdatingCalendar, setIsUpdatingCalendar] = useState(false)
    const [activeCalendar, setActiveCalendar] = useState(0)
    const [calendars, setCalendars] = useState(null)
    const [calendar, setCalendar] = useState(initCalendarObj)
    const [selectedDate, setSelectedDate] = useState({
        name: '',
        value: ''
    })

    const handleCalendarChange = (e) => {
        const { name, value } = e.target
        setCalendar({
            ...calendar,
            [name]: value
        })
    }

    const handleDayTimeChange = (e, idx) => {
        const { name, value } = e.target
        let arr = calendar.startTimes
        arr[idx] = value
        setCalendar({
            ...calendar,
            [name]: arr
        })
    }

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

    // Get single calendar
    const getCalendar = async (id, idx) => {
        setIsLoading(true)
        setShowModal(true)
        setSelectedDate({
            name: '',
            value: ''
        })
        if (!idx) {
            setIsUpdatingCalendar(true)
        }

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

    const createCalendar = async (calendarToAdd) => {
        setIsLoading(true)
        setShowModal(true)
        try {
            const response = await postCalendar(token, calendarToAdd)
            const data = await response.json()

            if (data.calendar) {
                setIsLoading(false)
                closeModal()
                getCalendars()
                push('/dashboard/rezervacie')
                return
            }

            setIsLoading(false)
            getMessage(data.message)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateCalendar = async (calendarToUpdate) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await patchCalendar(token, calendarToUpdate)
            const data = await response.json()

            console.log(data)
            if (data.calendar) {
                setIsLoading(false)
                closeModal()
                getCalendars()
                push('/dashboard/rezervacie')
                return
            }

            setIsLoading(false)
            getMessage(data.message)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    const delCalendar = async (id) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            const response = await deleteCalendar(id)
            const data = await response.json()

            console.log(data)

            setIsLoading(false)
            getMessage(data.message)
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
        setCalendar(initCalendarObj)
        setIsUpdatingCalendar(false)
    }

    return (
        <BookingContext.Provider
            value={{
                calendar,
                calendars,
                handleCalendarChange,
                handleDayTimeChange,
                getCalendars,
                getCalendar,
                createCalendar,
                updateCalendar,
                delCalendar,
                isUpdatingCalendar,
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