import React, { useEffect } from 'react'

import { useFetchByQuery } from '../../hooks/useFetch'
import Spinner from '../spinner/spinner.component'
import BookingAppoinment from '../booking-appoinment/booking-appoinment.component'

import {
    TableHead,
    TableRow,
    TableCol
} from './booking-appoinment.styles'

const BookingAppoinments = ({ day }) => {

    const { response, isLoading, refetch } = useFetchByQuery('api/admin/booking/userBookings/filter', {
        filters: {
            dueDate: day.bookingDate
        }
    })

    useEffect(() => {
        refetch()
    }, [day])

    if (isLoading) return <Spinner />

    return (
        <div>
            <TableHead>
                <TableCol>#</TableCol>
                <TableCol>Vyšetrenie</TableCol>
                <TableCol>Meno</TableCol>
                <TableCol>Dátum</TableCol>
                <TableCol>Poznámka</TableCol>
                <TableCol>Možnosti</TableCol>
            </TableHead>

            {response?.userBookings?.map(({ booking, name, dueDate, note }, idx) => (
                <TableRow key={idx}>
                    <TableCol>{idx + 1}</TableCol>
                    <TableCol><BookingAppoinment bookingId={booking} /></TableCol>
                    <TableCol>{name}</TableCol>
                    <TableCol>{dueDate}</TableCol>
                    <TableCol>{note}</TableCol>
                    <TableCol>Možnosti</TableCol>
                </TableRow>
            ))}
        </div>
    )
}

export default BookingAppoinments
