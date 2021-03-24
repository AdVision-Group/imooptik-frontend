import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { UserContext } from '../../context/user/user.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import UserForm from '../../components/user-form/user-form.component'
import NewUserForm from '../../components/new-user-form/new-user-form.component'

import Popup from '../../components/popup/pop-up.component'

import {
    FixedContainer
} from '../../global.styles'

import {
    Header,
    DeleteProfileButton,
    // Name,
    SaveButton,
} from './customer-profile.styles'

const CustomerProfile = () => {
    const { id } = useParams()
    const { isAdmin, isOptometrist } = useContext(AuthContext)
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

        if (id === 'novy-zakaznik') {
            if (userObj.fName || userObj.lName) {
                delete userObj["fName"]
                delete userObj["lName"]
            }

            if (formToShow === 1) {
                const newUserObj = {
                    ...userObj,
                    admin: userObj.admin || 1
                }
                createUser(newUserObj, path)
                return
            }
            createUser(userObj, path)
        } else {
            if (userObj.fName || userObj.lName) {
                delete userObj["fName"]
                delete userObj["lName"]
            } else if (!userObj.fName || !userObj.lName) {
                delete userObj["name"]
            }

            if (userObj.company) {
                const newUserObj = {
                    ...userObj,
                    company: {
                        ...user.company,
                        ...userObj.company
                    }
                }
                updateUser(newUserObj, user._id)
                return
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

    //unmount
    useEffect(() => {
        return () => {
            resetUser()
            handleChange({
                target: {
                    name: 'lenses',
                    value: {
                        cylinder: [1001, 1001, 1001, 1001],
                        cylinderAxes: [1001, 1001, 1001, 1001],
                        diopters: [1001, 1001, 1001, 1001],
                        distance: [1001, 1001, 1001, 1001],
                        addition: [1001, 1001, 1001, 1001],
                        basis: [1001, 1001, 1001, 1001],
                        prism: [1001, 1001, 1001, 1001],
                    },
                }
            })
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            {/* <Prompt
                when={hasChanges}
                message={"Chcete opustiť tuto stránku?"}
            /> */}
            <form>
                <Header>
                    <FixedContainer>
                        <h1>Profil</h1>
                        <div>
                            {isUpdating && <DeleteProfileButton type='button'>Vymazať</DeleteProfileButton>}
                            {!isUpdating && <SaveButton onClick={(e) => handleSubmit(e, 'profile')}>Vytvoriť a prejsť na profil</SaveButton>}
                            {!isUpdating && !(formToShow === 1) && <SaveButton onClick={(e) => handleSubmit(e, 'order')}>Vytvoriť a prejsť na objednávku</SaveButton>}
                            <SaveButton onClick={(e) => handleSubmit(e, 'customers')}>
                                {isUpdating ? "Uložiť zmeny" : "Vytvoriť"}
                            </SaveButton>
                        </div>

                    </FixedContainer>
                </Header>

                <ScrollContainer>
                    {
                        isUpdating ? (
                            <UserForm
                                user={user}
                                isAdmin={isAdmin}
                                isUpdating={isUpdating}
                                isOptometrist={isOptometrist}
                                handleChange={handleUserChange}
                                handleParameterChange={handleLensesParameterChange}
                                handleCompanyChange={handleCompanyAddressChange}
                            />
                        ) : (
                            <NewUserForm
                                isAdmin={isAdmin}
                                handleParameterChange={handleLensesParameterChange}
                                formToShow={formToShow}
                                switchFormButtons={switchFormButtons}
                                toggleUserForm={toggleUserForm}
                                user={user}
                                handleChange={handleUserChange}
                                handleCompanyChange={handleCompanyAddressChange}
                                resetUser={resetUser}

                            />
                        )
                    }


                </ScrollContainer>

            </form>
        </section>
    )
}

export default CustomerProfile
