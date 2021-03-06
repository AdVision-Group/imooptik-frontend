import React, { createContext, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'
import {useFetchContext} from '../fetch-context/fetch.context'
import { useHistory } from 'react-router-dom'

import {fetchError} from '../../utils/errors'

export const BookingContext = createContext({
    createCalendar: () => { },
    updateCalendar: () => { },
    deleteCalendar: () => { },
    createBooking: () => { },
    updateBooking: () => { },
    deleteBooking: () => { },
    createUserBooking: () => { },
    reBookUserBooking: () => {}
})

export const useBookingContext = () => useContext(BookingContext)

const BookingProvider = ({ children }) => {
    const { push } = useHistory()
    const {fetchData} = useFetchContext()
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
            getMessage(data.messageSK)

        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const updateCalendar = async (calendarToUpdate, calendarId, refetch, callback = () => {}) => {
        setIsLoading(true)
        setShowModal(true)

        // const raw = JSON.stringify(calendarToUpdate);

        // const requestOptions = {
        //     method: 'PATCH',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };


        try {
            fetchData(`/api/admin/booking/calendars/${calendarId}`, calendarToUpdate, (data) => {
                console.log(data)

                if(data.error) {
                    getMessage(data.messageSK)
                    setIsLoading(false)
                    return
                }

                if(data.calendar) {
                    setIsLoading(false)
                    getMessage(data.messageSK)

                    if(refetch) {
                        refetch()
                        // closeModal()
                        setShowModal(false)
                        callback()
                        return
                    }

                    push('/dashboard/rezervacie')
                    closeModal()
                }

                setIsLoading(false)
                getMessage(data.messageSK)
            }, "PATCH")

            // const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/admin/booking/calendars/${calendarId}`, requestOptions)
            // const data = await response.json()


            // if (data.calendar) {
            //     setIsLoading(false)
            //     closeModal()
            //     push('/dashboard/rezervacie')
            //     return
            // }


            // setIsLoading(false)
            // getMessage(data.messageSK)
        } catch (err) {
            fetchError(err, getMessage, () => {
                setIsLoading(false)
            })
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

            setIsLoading(false)
            getMessage(data.messageSK)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const reBookUserBooking = async (bookingToRebook, oldBookingId, refetch = () => {}, callback = () => {}) => {
        setIsLoading(true)
        setShowModal(true)

        try {
            fetchData(`/api/booking/userBookings`, bookingToRebook, (data) => {
                // getMessage(data.messageSK)
                // console.log(data)
                // console.log(oldBookingId)

                if(data.error) {
                    getMessage(data.messageSK)
                    setIsLoading(false)
                    return
                }

                if(data.userBooking) {
                    fetchData(`/api/booking/userBookings/${oldBookingId}/cancel`, null, (deletedBookingData) => {
                        // console.log(deletedBookingData)

                        // refetch()
                        setIsLoading(false)
                        getMessage("Úspesne prerezervované")
                        setShowModal(false)
                        callback()
                    }, "POST")
                }
                setIsLoading(false)

            }, "POST")

        } catch (err) {
            fetchError(err, getMessage, () => {
                setIsLoading(false)
            })
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

            if (data.booking) {
                setIsLoading(false)
                closeModal()
                return
            }

            setIsLoading(false)
            getMessage(data.messageSK)
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

            setIsLoading(false)
            getMessage(data.message)
        } catch (err) {
            console.log(err)
            getMessage("Niečo sa pokazilo")
            setIsLoading(false)
        }
    }

    const createUserBooking = async (userBookingToAdd, refetchCalendar, close, refetchWeekCalendar) => {
        setIsLoading(true)
        setShowModal(true)

        const raw = JSON.stringify(userBookingToAdd);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/booking/userBookings`, requestOptions)
            const data = await response.json()

            if (data.userBooking) {
                setIsLoading(false)

                refetchCalendar()
                refetchWeekCalendar()
                closeModal()
                close()
            }


            setIsLoading(false)
            getMessage(data.messageSK)
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
                createUserBooking,
                reBookUserBooking
            }}
        >
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider