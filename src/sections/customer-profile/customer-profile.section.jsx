import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { UserContext } from '../../context/user/user.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams, Prompt } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import UserForm from '../../components/user-form/user-form.component'
import NewUserForm from '../../components/new-user-form/new-user-form.component'

import Popup from '../../components/popup/pop-up.component'

import {
    Header,
    DeleteProfileButton,
    // Name,
    SaveButton,
} from './customer-profile.styles'

const CustomerProfile = () => {
    const { id } = useParams()
    const { isAdmin } = useContext(AuthContext)
    const {
        closeModal,
        isLoading,
        message,
        showModal,
    } = useContext(LoadingModalContext)

    const {
        isUpdating,
        user,
        getUser,
        handleChange,
        handleParameterChange,
        handleCompanyChange,
        updateUser,
        resetUser,
        formToShow,
        switchFormButtons,
        toggleUserForm,
        createUser,
    } = useContext(UserContext)

    const [userObj, setUserObj] = useState({})
    const [hasChanges, setHasChanges] = useState(false)

    const handleUserChange = (e) => {
        setHasChanges(true)
        const { name, value } = e.target

        handleChange(e)
        setUserObj({
            ...userObj,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setHasChanges(false)

        if (id === 'novy-zakaznik') {
            console.log("Create new user")
            createUser(user)
        } else {
            console.log("Update existing user")
            if (userObj.fName || userObj.lName) {
                delete userObj["fName"]
                delete userObj["lName"]
            } else if (!userObj.fName || !userObj.lName) {
                delete userObj["name"]
            }
            updateUser(userObj, user._id)
        }
    }

    useEffect(() => {
        setUserObj({
            ...userObj,
            name: user.fName + " " + user.lName
        })
    }, [userObj.fName, userObj.lName])

    useEffect(() => {
        if (id !== 'novy-zakaznik') {
            getUser(id)
        }
    }, [id])

    useEffect(() => {
        return () => {
            console.log("UNMOUNT")
            resetUser()
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Prompt
                when={hasChanges}
                message={"Máte neuložené zmeny, chcete aj tak odísť ?"}
            />
            <form onSubmit={handleSubmit}>
                <Header>
                    <h1>Profil</h1>
                    <div>
                        {isUpdating && <DeleteProfileButton>Vymazať</DeleteProfileButton>}
                        <SaveButton type="submit">
                            {isUpdating ? "Uložiť zmeny" : "Vytvoriť"}
                        </SaveButton>
                    </div>
                </Header>

                <ScrollContainer>
                    {
                        isUpdating ? (
                            <UserForm
                                isAdmin={isAdmin}
                                isUpdating={isUpdating}
                                user={user}
                                handleChange={handleUserChange}
                                handleParameterChange={handleParameterChange}
                                handleCompanyChange={handleCompanyChange}
                            />
                        ) : (
                                <NewUserForm
                                    isAdmin={isAdmin}
                                    handleParameterChange={handleParameterChange}
                                    formToShow={formToShow}
                                    switchFormButtons={switchFormButtons}
                                    toggleUserForm={toggleUserForm}
                                    user={user}
                                    handleChange={handleUserChange}
                                />
                            )
                    }


                </ScrollContainer>

            </form>
        </section>
    )
}

export default CustomerProfile
