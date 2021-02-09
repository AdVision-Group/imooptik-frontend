import React from 'react'
import { useFetchById } from '../../hooks/useFetch'

const BookingAppoinment = ({ bookingId }) => {
    const { isLoading, response } = useFetchById("api/booking/bookings", bookingId, !bookingId)

    if (isLoading) return "Hľadám..."

    return (
        <React.Fragment>
            {response?.booking?.name}
        </React.Fragment>
    )
}

export default BookingAppoinment
