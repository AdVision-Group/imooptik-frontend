import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import CustomInput from '../custom-input/custom-input.component'
import CustomTextarea from '../custom-textarea/custom-textarea.component'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    ModalContainer,
    Modal,
    CloseButton,
    SubmitButton,
    Navbar,
    UserTable,
    TableHead,
    Tablebody,
    TableCol,
    SearchTab,
    CustomSelect
} from './modal-user-booking.styles'

const UserBookingModal = ({ close, day, calendar, refetchCalendar, createUserBooking }) => {

    const [query, setQuery] = useState(null)
    const [activeTab, setActiveTab] = useState(0)
    const [userBooking, setUserBooking] = useState({})

    const { refetch, response } = useFetchByQuery('api/admin/users/filter', query, !query)

    const handleSearch = () => {
        if (!query) return
        refetch()
    }

    const handleSearchOnEnter = (e) => {
        if (query !== null) {
            if (e.key === 'Enter') {
                refetch()
            }
        }
    }

    const handleUserBookingChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete userBooking[name]
            setUserBooking({ ...userBooking })
            return
        }

        setUserBooking(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const selectUser = (userObj) => {
        setUserBooking(prevValue => ({
            ...prevValue,
            ...userObj
        }))
        setActiveTab(0)
        setQuery(null)
    }

    const handleSubmit = () => {
        if (!userBooking?.name) return
        if (!userBooking?.email) return
        if (!userBooking?.phone) return
        if (!userBooking?.booking) return

        console.log("USER BOOKING BEFORE SEND")
        console.log(userBooking)
        let bookingToAdd = {
            ...userBooking,
            values: {}
        }

        createUserBooking(bookingToAdd)
        refetchCalendar()
        close()
    }

    useEffect(() => {
        if (day) {
            const { time, dayNumber, month, year } = day
            setUserBooking(prevValue => ({
                ...prevValue,
                dueTime: `${time.replace(":", "/")}:${dayNumber < 10 ? `0${dayNumber}` : dayNumber}/${month < 9 ? `0${month + 1}` : (month + 1)}/${year}`
            }))
        }
    }, [day])

    useEffect(() => {
        return () => {
            setUserBooking({})
            setQuery(null)
            setActiveTab(0)
        }
    }, [])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <h2>Objednať zákazníka</h2>

                <Navbar
                    items={optionTabs}
                    activeIndex={activeTab}
                    setActiveIndex={setActiveTab}
                />

                {activeTab === 1 ? (
                    <SearchTab>
                        <CustomInput
                            label='Meno, priezvisko, e-mail alebo tel. číslo'
                            name='query'
                            value={query ? query?.query : ""}
                            handleChange={e => setQuery({
                                limit: 10,
                                query: e.target.value
                            })}
                            onKeyPress={handleSearchOnEnter}
                        />

                        <SubmitButton onClick={handleSearch}>Hľadať</SubmitButton>


                        <UserTable>
                            <TableHead>
                                <TableCol>Meno</TableCol>
                                <TableCol>E-mail</TableCol>
                                <TableCol>Tel. číslo</TableCol>
                            </TableHead>
                            {response?.users ? response?.users?.map(({ name, email, phone }, idx) => (
                                <Tablebody key={idx} onClick={() => selectUser({ name, email, phone })}>
                                    <TableCol>{name}</TableCol>
                                    <TableCol>{email}</TableCol>
                                    <TableCol>{phone}</TableCol>
                                </Tablebody>
                            )) : (
                                    <div>
                                        <p>Žiaden výsledok</p>
                                    </div>
                                )}
                        </UserTable>
                    </SearchTab>
                ) : (
                        <React.Fragment>
                            <div>
                                <CustomInput
                                    label='Meno*'
                                    name='name'
                                    value={userBooking?.name || ""}
                                    handleChange={handleUserBookingChange}
                                />
                            </div>
                            <div>
                                <CustomInput
                                    label='E-mail*'
                                    name='email'
                                    value={userBooking?.email || ""}
                                    handleChange={handleUserBookingChange}
                                />
                            </div>
                            <div>
                                <CustomInput
                                    label='Tel. číslo*'
                                    name='phone'
                                    value={userBooking?.phone || ""}
                                    handleChange={handleUserBookingChange}
                                />
                            </div>

                            <div>
                                <CustomTextarea
                                    label='Poznámka'
                                    name='note'
                                    rows="5"
                                    value={userBooking?.note || ""}
                                    handleChange={handleUserBookingChange}
                                />
                            </div>

                            <div>
                                <h3>Vyšetrenie</h3>
                                <CustomSelect
                                    name='booking'
                                    value={userBooking?.booking || ""}
                                    onChange={handleUserBookingChange}
                                >
                                    <option value={''}>Nezvolené</option>
                                    {calendar?.bookings.map((booking, idx) => {
                                        if (booking.active === false) return
                                        return (
                                            <option key={idx} value={booking._id}>{booking.name}</option>
                                        )
                                    })}
                                </CustomSelect>
                            </div>
                        </React.Fragment>
                    )}

                {activeTab === 0 && <SubmitButton onClick={handleSubmit}>Vytvoriť</SubmitButton>}
            </Modal>
        </ModalContainer >
    ), document.getElementById('portal'))
}

export default UserBookingModal

const optionTabs = [
    {
        id: 0,
        name: "Nový zákazník",
    },
    {
        id: 1,
        name: "Vyhladať zákazníka",
    },
]