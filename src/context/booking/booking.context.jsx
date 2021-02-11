import React, { createContext, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import { useHistory } from 'react-router-dom'

export const BookingContext = createContext({
    createCalendar: () => { },
    updateCalendar: () => { },
    deleteCalendar: () => { },
    createBooking: () => { },
    updateBooking: () => { },
    deleteBooking: () => { },
    createUserBooking: () => { },
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

    const myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("Content-Type", "application/json");

    const createCalendar = async (calendarToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(calendarToAdd);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/calendars`, requestOptions)
            const data = await response.json()

            if (data.calendar) {
                setIsLoading(false)
                closeModal()
                push('/dashboard/rezervacie')
                return
            }

            setIsLoading(false)
            getMessage(data.message)

        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateCalendar = async (calendarToUpdate, calendarId) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(calendarToUpdate);

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/calendars/${calendarId}`, requestOptions)
            const data = await response.json()

            console.log(data)


            if (data.calendar) {
                setIsLoading(false)
                closeModal()
                push('/dashboard/rezervacie')
                return
            }


            setIsLoading(false)
            getMessage(data.message)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const deleteCalendar = async (calendarId) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow'
        };


        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/calendars/${calendarId}`, requestOptions)
            const data = await response.json()

            console.log(data)

            setIsLoading(false)
            getMessage(data.message)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const createBooking = async (bookingToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(bookingToAdd);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/bookings`, requestOptions)
            const data = await response.json()

            console.log(data)
            if (data.booking) {
                setIsLoading(false)
                closeModal()
                return
            }

            setIsLoading(false)
            getMessage(data.message)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateBooking = async (bookingToUpdate, bookingId) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(bookingToUpdate);

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/bookings/${bookingId}`, requestOptions)
            const data = await response.json()

            console.log(data)

            setIsLoading(false)
            getMessage(data.message)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const deleteBooking = async (bookingId) => {
        setIsLoading(true)
        setShowModal(true)

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/bookings/${bookingId}`, requestOptions)
            const data = await response.json()

            console.log(data)

            setIsLoading(false)
            getMessage(data.message)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const createUserBooking = async (userBookingToAdd) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(userBookingToAdd);

        const requestOptions = {
            method: 'POST',
            // headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/userBookings`, requestOptions)
            const data = await response.json()

            console.log("USERBOOKING RESPONSE")
            console.log(data)


            setIsLoading(false)
            getMessage(data.message)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }


    return (
        <BookingContext.Provider
            value={{
                createCalendar,
                updateCalendar,
                deleteCalendar,
                createBooking,
                updateBooking,
                deleteBooking,
                createUserBooking
            }}
        >
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider