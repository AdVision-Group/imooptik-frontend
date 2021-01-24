import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../../context/user/user.context'

import CustomInput from '../../../components/custom-input/custom-input.component'

import {
    SearchContainer,
    TableContainer,
    UserTableHead,
    UserTableRow,
    TableCol,
    SearchButton
} from '../order.styles'

const SelectUserComponent = ({ next, addToOrder }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [userItems, setUserItems] = useState([])

    const {
        users,
        getFilteredUsers,
        getUserByQuery
    } = useContext(UserContext)

    const handleClick = (user) => {
        addToOrder({
            name: "user",
            value: user
        })
        next()
    }

    const handleSearchOnEnter = (e) => {
        if (searchQuery !== '') {
            if (e.key === 'Enter') {
                getUserByQuery({
                    query: searchQuery
                })
            }
        }
    }
    const handleSearch = () => {
        if (searchQuery === '') return
        getUserByQuery({
            query: searchQuery
        })
    }

    useEffect(() => {
        if (!users) {
            getFilteredUsers({
                limit: 5
            })
        }
        if (users) {
            setUserItems(users)
        }
    }, [users])

    useEffect(() => {
        if (users) {
            if (searchQuery === '') {
                getFilteredUsers({
                    limit: 5
                })
                setUserItems(users)
            }
        }
    }, [searchQuery])

    useEffect(() => {
        return () => {
            setSearchQuery('')
            setUserItems([])
        }
    }, [])

    return (
        <div>
            <SearchContainer>
                <h3>Vyhľadať zákaznika</h3>
                <div>
                    <CustomInput
                        label={"Meno, priezvisko, email alebo tel. číslo"}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleSearchOnEnter}
                    />
                </div>
                <SearchButton onClick={handleSearch}>Hľadať</SearchButton>
            </SearchContainer>

            <TableContainer>
                <UserTableHead>
                    <TableCol>Meno a priezvisko</TableCol>
                    <TableCol>Email</TableCol>
                    <TableCol>Možnosti</TableCol>
                </UserTableHead>
                {userItems.map((user, idx) => (
                    <UserTableRow key={idx} onClick={() => handleClick(user)}>
                        <TableCol>{user.name}</TableCol>
                        <TableCol>{user.email}</TableCol>
                        <TableCol>{user.phone}</TableCol>
                    </UserTableRow>
                ))}
            </TableContainer>

        </div>
    )
}

export default SelectUserComponent
