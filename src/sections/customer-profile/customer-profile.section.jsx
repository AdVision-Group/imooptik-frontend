import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/user/user.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { useParams } from 'react-router-dom'


import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import OrderOverview from '../../components/order-overview/order-overview.component'
import Popup from '../../components/popup/pop-up.component'

import {
    Header,
    Profile,
    DeleteProfileButton,
    // Name,
    GridContainer,
    GridRow,
    Row,
    ThreeColRow,
    ZeroMargin,
    SaveButton,
    Title,
    Container
} from './customer-profile.styles'

const CustomerProfile = () => {
    const { id } = useParams()
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
        resetUser
    } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (id === 'novy-zakaznik') {
            console.log("Create new user")
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
                    <GridContainer>
                        <Profile>
                            <div>
                                <h2>Informácie</h2>
                                <GridRow>
                                    <div>
                                        <CustomInput
                                            label="Meno*"
                                            type='text'
                                            name='fName'
                                            value={user.fName}
                                            handleChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            label="Priezvisko*"
                                            type='text'
                                            name='lName'
                                            value={user.lName}
                                            handleChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </GridRow>
                            </div>

                            <Container>
                                <h2>Kontaktné údaje</h2>
                                <Row>
                                    <div>
                                        <CustomInput
                                            label="E-mail*"
                                            type='email'
                                            name='email'
                                            value={user.email}
                                            handleChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            label="Telefónne číslo"
                                            type='text'
                                            name='phone'
                                            value={user.phone}
                                            handleChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </Row>
                            </Container>

                            <Container>
                                <h2>Fakturačné údaje</h2>
                                <GridRow>
                                    <ZeroMargin>
                                        <CustomInput
                                            label="Ulica a čislo domu"
                                            type='text'
                                            name='address'
                                            value={user.address}
                                            handleChange={(e) => handleChange(e)}
                                        />
                                    </ZeroMargin>
                                    <ZeroMargin>
                                        <CustomInput
                                            label="PSČ"
                                            type='text'
                                            name='psc'
                                            value={user.psc}
                                            handleChange={(e) => handleChange(e)}
                                        />
                                    </ZeroMargin>
                                </GridRow>
                                <GridRow>
                                    <div>
                                        <CustomInput
                                            label="Mesto"
                                            type='text'
                                            name='city'
                                            value={user.city}
                                            handleChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            label="Krajina"
                                            type='text'
                                            name='country'
                                            value={user.country}
                                            handleChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </GridRow>
                            </Container>

                            <Container>
                                <h2>Parametre</h2>

                                <ThreeColRow>
                                    <div>
                                        Dioptrie
                                </div>
                                    <div>
                                        <CustomInput
                                            label="Ľavé oko"
                                            type='text'
                                            name='city'
                                            value={user.lenses.diopters[0].toString()}
                                            handleChange={(e) => handleDioptersChange(e, 0)}
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            label="Pravé oko"
                                            type='text'
                                            name='state'
                                            value={user.lenses.diopters[1].toString()}
                                            handleChange={(e) => handleDioptersChange(e, 1)}
                                        />
                                    </div>
                                </ThreeColRow>

                                <ThreeColRow>
                                    <div>
                                        Vzdialenosť
                                </div>
                                    <div>
                                        <CustomInput
                                            label="Ľavé oko"
                                            type='text'
                                            name='city'
                                            value={user.lenses.distance[0].toString()}
                                            handleChange={(e) => handleDistanceChange(e, 0)}
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            label="Pravé oko"
                                            type='text'
                                            name='state'
                                            value={user.lenses.distance[1].toString()}
                                            handleChange={(e) => handleDistanceChange(e, 1)}
                                        />
                                    </div>
                                </ThreeColRow>

                                <ThreeColRow>
                                    <div>
                                        Cylinder
                                </div>
                                    <div>
                                        <CustomInput
                                            label="Ľavé oko"
                                            type='text'
                                            name='city'
                                            value={user.lenses.cylinder[0].toString()}
                                            handleChange={(e) => handleCylinderChange(e, 0)}
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            label="Pravé oko"
                                            type='text'
                                            name='state'
                                            value={user.lenses.cylinder[1].toString()}
                                            handleChange={(e) => handleCylinderChange(e, 1)}
                                        />
                                    </div>
                                </ThreeColRow>

                                <ThreeColRow>
                                    <div>
                                        Os cylindrov
                                </div>
                                    <div>
                                        <CustomInput
                                            label="Ľavé oko"
                                            type='text'
                                            name='city'
                                            value={user.lenses.cylinderAxes[0].toString()}
                                            handleChange={(e) => handleCylinderAxesChange(e, 0)}
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            label="Pravé oko"
                                            type='text'
                                            name='state'
                                            value={user.lenses.cylinderAxes[1].toString()}
                                            handleChange={(e) => handleCylinderAxesChange(e, 1)}
                                        />
                                    </div>
                                </ThreeColRow>
                            </Container>


                        </Profile>

                        <div>
                            <Title>
                                Objednávky
                        </Title>

                            <div>
                                <OrderOverview
                                    name='Product name'
                                    id='[Product ID]'
                                    date='28. November 2020'
                                    totalPrice='99.99'
                                />
                                <OrderOverview
                                    name='Product name'
                                    id='[Product ID]'
                                    date='28. November 2020'
                                    totalPrice='99.99'
                                />
                                <OrderOverview
                                    name='Product name'
                                    id='[Product ID]'
                                    date='28. November 2020'
                                    totalPrice='99.99'
                                />
                            </div>
                        </div>
                    </GridContainer>
                </ScrollContainer>

            </form>
        </section>
    )
}

export default CustomerProfile
