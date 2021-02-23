import React, { useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BookingContext } from '../../context/booking/booking.context'


import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'

import { useFetchById } from '../../hooks/useFetch'
import {
    formatBookingObj
} from '../../utils/calendar.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    SubmitButton,
    InputContainer,
    ModalHeader,
    CustomSelect
} from './modal-booking.styles'

const BookingModal = ({ close, calendarId, refetch, selectedBooking }) => {
    const { createBooking, updateBooking } = useContext(BookingContext)
    const { response, isLoading } = useFetchById("api/booking/bookings", selectedBooking, !selectedBooking)

    const [booking, setBooking] = useState({})
    const [isUpdating, setIsUpdating] = useState(false)

    const handleBookingChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete booking[name]
            setBooking({
                ...booking
            })
            return
        }

        setBooking(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        if (!booking?.name) return

        if (isUpdating) {
            let bookingToUpdate = formatBookingObj(booking)

            console.log("BOOKING BEFORE UPDATE")
            console.log(bookingToUpdate)

            updateBooking(bookingToUpdate, booking._id)
        } else {
            let bookingToAdd = {
                ...booking,
                calendar: calendarId
            }

            console.log("BOOKING BEFORE CREATE")
            console.log(bookingToAdd)
            createBooking(bookingToAdd)
        }

        refetch()
        close()
    }

    useEffect(() => {
        if (isLoading) return
        if (response?.booking) {
            setIsUpdating(true)
            setBooking(response?.booking)
        }
    }, [selectedBooking, isLoading])

    useEffect(() => {
        return () => {
            setIsUpdating(false)
            setBooking({})
        }
    }, [])

    console.log(booking)

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <ModalHeader>
                    {!isUpdating && <h2>Nové vyšetrenie</h2>}
                    {isUpdating && <h2>Upraviť vyšetrenie</h2>}
                    <div>
                        <CustomCheckbox
                            label="Aktivné"
                            isActive={booking?.active || false}
                            name='active'
                            handleClick={() => handleBookingChange({
                                target: {
                                    name: 'active',
                                    value: booking?.active ? !booking?.active : true
                                }
                            })}
                        />
                    </div>
                </ModalHeader>
                <InputContainer>
                    <CustomInput
                        label="Názov vyšetrenia*"
                        name="name"
                        value={booking?.name || ""}
                        handleChange={handleBookingChange}
                    />
                </InputContainer>
                <InputContainer>
                    <CustomInput
                        label="Cena"
                        name="price"
                        value={booking?.price || ""}
                        handleChange={handleBookingChange}
                    />
                </InputContainer>
                <InputContainer>
                    <CustomInput
                        label="Čas"
                        name="time"
                        value={booking?.time || ""}
                        handleChange={handleBookingChange}
                    />
                </InputContainer>
                <InputContainer>
                    <CustomSelect
                        label="Farba"
                        type='text'
                        name='color'
                        value={booking?.color || ""}
                        onChange={handleBookingChange}
                    >
                        <option value='DD4C4C'>Červená</option>
                        <option value='ebac01'>Žltá</option>
                        <option value='32AA5F'>Zelená</option>
                    </CustomSelect>
                </InputContainer>
                <InputContainer>
                    <CustomTextarea
                        label="Popis"
                        rows='5'
                        name="description"
                        value={booking?.description || ""}
                        handleChange={handleBookingChange}
                    />
                </InputContainer>
                {!isUpdating && <SubmitButton onClick={handleSubmit}>Pridať</SubmitButton>}
                {isUpdating && <SubmitButton onClick={handleSubmit}>Uložiť</SubmitButton>}
            </Modal>
        </ModalContainer>
    ), document.getElementById("portal"))
}

export default BookingModal
