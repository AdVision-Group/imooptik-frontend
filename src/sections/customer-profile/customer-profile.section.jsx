import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { UserContext } from '../../context/user/user.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams } from 'react-router-dom'

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
        handleDioptersChange,
        handleDistanceChange,
        handleCylinderChange,
        handleCylinderAxesChange,
        updateUser,
        resetUser,
        formToShow,
        switchFormButtons,
        toggleUserForm,
        createUser
    } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (id === 'novy-zakaznik') {
            console.log("Create new user")
            createUser(user)
        } else {
            console.log("Update existing user")
            updateUser(user)
        }
    }

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
                                handleChange={handleChange}
                                handleDioptersChange={handleDioptersChange}
                                handleDistanceChange={handleDistanceChange}
                                handleCylinderChange={handleCylinderChange}
                                handleCylinderAxesChange={handleCylinderAxesChange}
                            />
                        ) : (
                                <NewUserForm
                                    formToShow={formToShow}
                                    switchFormButtons={switchFormButtons}
                                    toggleUserForm={toggleUserForm}
                                    user={user}
                                    handleChange={handleChange}
                                />
                            )
                    }


                </ScrollContainer>

            </form>
        </section>
    )
}

export default CustomerProfile
