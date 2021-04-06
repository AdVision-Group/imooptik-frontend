import React, { useContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { AuthContext } from '../../context/auth/auth.context'
import { UserContext } from '../../context/user/user.context'

import UserForm from '../user-form/user-form.component'

import {
    CloseButton,
    Modal,
    ModalContainer,
    UpdateButton
} from './modal-order-update-user.styles'

const OrderUpdateUserModal = ({ close, userId, refetchUser, addUser }) => {
    const { isAdmin, isOptometrist } = useContext(AuthContext)
    const {
        user,
        isUpdating,
        handleChange,
        handleParameterChange,
        handleCompanyChange,
        getUser,
        updateUser
    } = useContext(UserContext)

    const [userObj, setUserObj] = useState({})
    // const [hasChanges, setHasChanges] = useState(false)

    const handleUserChange = (e) => {
        // setHasChanges(true)
        const { name, value } = e.target

        handleChange(e)


        if (value === '') {
            delete userObj[name]
            // delete userObj.company[]
            return
        }

        setUserObj({
            ...userObj,
            [name]: value
        })
    }

    const handleLensesParameterChange = (e, idx) => {
        // setHasChanges(true)

        const { name, value } = e.target
        let arr = user.lenses[name]
        arr[idx] = value


        handleParameterChange(e, idx)
        setUserObj({
            ...userObj,
            lenses: {
                ...user.lenses,
                [name]: arr
            }
        })
    }

    const handleCompanyAddressChange = (e) => {
        // setHasChanges(true)

        const { name, value } = e.target
        handleCompanyChange(e)

        if (value === '') {
            delete userObj.company[name]
            if (Object.keys(userObj.company).length === 0) {
                delete userObj["company"]
            }
            // delete userObj.company[]
            return
        }

        setUserObj({
            ...userObj,
            company: {
                ...userObj.company,
                [name]: value
            }
        })
    }

    const handleSubmit = (e, path) => {
        e.preventDefault()
        // setHasChanges(false)

        console.log(userObj)

        if (userObj.fName || userObj.lName) {
            delete userObj["fName"]
            delete userObj["lName"]
        } else if (!userObj.fName || !userObj.lName) {
            delete userObj["name"]
        }

        let newUserObj = {
            ...userObj,
        }

        if (userObj.company) {
            newUserObj = {
                ...userObj,
                company: {
                    ...user.company,
                    ...userObj.company
                }
            }
        }

        updateUser(newUserObj, user._id, "isOrder", refetchUser, close, addUser)
    }

    useEffect(() => {
        setUserObj({
            ...userObj,
            name: user.fName + " " + user.lName
        })
    }, [userObj.fName, userObj.lName])

    useEffect(() => {
        if (userId) {
            getUser(userId)
        }
    }, [userId])

    return ReactDOM.createPortal((
        <ModalContainer>
            <CloseButton onClick={close} />
            <Modal>
                <UserForm
                    user={user}
                    isAdmin={isAdmin}
                    isUpdating={isUpdating}
                    isOptometrist={isOptometrist}
                    handleChange={handleUserChange}
                    handleParameterChange={handleLensesParameterChange}
                    handleCompanyChange={handleCompanyAddressChange}
                    isOrder={true}
                />

                <UpdateButton onClick={handleSubmit}>Uložiť</UpdateButton>
            </Modal>
        </ModalContainer >
    ), document.getElementById('portal'))
}

export default OrderUpdateUserModal
