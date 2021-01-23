import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../../context/user/user.context'

import CustomInput from '../../../components/custom-input/custom-input.component'

import Fuse from 'fuse.js'

import {
    SelectUserContainer,
    UserTableContainer,
    UserTableHead,
    UserTableRow,
    UserTableCol
} from '../order.styles'

const SelectUserComponent = ({ next }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [userItems, setUserItems] = useState([])

    const {
        users,
        getUsers,
    } = useContext(UserContext)

    const handleClick = (user) => {
        console.log("Selected user")
        console.log(user)
        console.log("Selected user")
        next()
    }

    useEffect(() => {
        if (!users) {
            getUsers()
        }
        if (users) {
            setUserItems(users)
        }
    }, [users])

    useEffect(() => {
        if (users) {
            const fuse = new Fuse(users, {
                keys: [
                    'name',
                    'email',
                    'phone'
                ]
            })
            if (searchQuery !== '') {
                const results = fuse.search(searchQuery)
                setUserItems(results.map(result => result.item))
            } else {
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
            <SelectUserContainer>
                <h3>Vyhľadať zákaznika</h3>
                <div>
                    <CustomInput
                        label={"Meno, priezvisko, email alebo tel. číslo"}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </SelectUserContainer>

            <UserTableContainer>
                <UserTableHead>
                    <UserTableCol>Meno a priezvisko</UserTableCol>
                    <UserTableCol>Email</UserTableCol>
                    <UserTableCol>Možnosti</UserTableCol>
                </UserTableHead>
                {userItems.map((user, idx) => (
                    <UserTableRow key={idx} onClick={() => handleClick(user)}>
                        <UserTableCol>{user.name}</UserTableCol>
                        <UserTableCol>{user.email}</UserTableCol>
                        <UserTableCol>{user.phone}</UserTableCol>
                    </UserTableRow>
                ))}
            </UserTableContainer>

        </div>
    )
}

export default SelectUserComponent
