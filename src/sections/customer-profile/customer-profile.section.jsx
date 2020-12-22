import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/user/user.context'
import { useParams, useHistory } from 'react-router-dom'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import OrderOverview from '../../components/order-overview/order-overview.component'
import Popup from '../../components/popup/pop-up.component'

import {
    Header,
    Profile,
    DeleteProfileButton,
    Name,
    GridContainer,
    GridRow,
    Row,
    ThreeColRow,
    ZeroMargin,
    SaveButton,
    Title
} from './customer-profile.styles'

const CustomerProfile = () => {
    const {
        user,
        getUser,
        closeModal,
        isLoading,
        showModal,
        message
    } = useContext(UserContext)
    const { id } = useParams()
    const { push } = useHistory()

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')

    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [street, setStreet] = useState('')
    const [psc, setPsc] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const [dLeftEye, setDLeftEye] = useState('')
    const [dRightEye, setDRightEye] = useState('')

    const [rLeftEye, setRLeftEye] = useState('')
    const [rRightEye, setRRightEye] = useState('')

    const [cLeftEye, setCLeftEye] = useState('')
    const [cRightEye, setCRightEye] = useState('')

    const [ocLeftEye, setOcLeftEye] = useState('')
    const [ocRightEye, setOcRightEye] = useState('')

    console.log(id)
    console.log(user)

    useEffect(() => {
        if (id === 'novy-zakaznik') return
        getUser(id)
    }, [id])

    useEffect(() => {
        if (user) {
            if (user.name) {
                setFName(user.name.split(" ")[0] || '')
                setLName(user.name.split(" ")[1] || '')
            }
            setEmail(user.email || '')
            setPhoneNumber(user.phone || '')
            setStreet(user.address || '')
            setPsc(user.psc || '')
            setCity(user.city || '')
            setState(user.country || '')

            if (user.lenses.diopters.length > 0) {
                setDLeftEye(user.lenses.diopters[0] || '')
                setDRightEye(user.lenses.diopters[1] || '')
            }
            if (user.lenses.distance.length > 0) {
                setRLeftEye(user.lenses.distance[0] || '')
                setRRightEye(user.lenses.distance[1] || '')

            }
            if (user.lenses.cylinder.length > 0) {
                setCLeftEye(user.lenses.cylinder[0] || '')
                setCRightEye(user.lenses.cylinder[1] || '')
            }
            if (user.lenses.cylinderAxes.length > 0) {
                setOcLeftEye(user.lenses.cylinderAxes[0] || '')
                setOcRightEye(user.lenses.cylinderAxes[1] || '')
            }
        }
        return () => {
            setFName('')
            setLName('')

            setEmail('')
            setPhoneNumber('')

            setStreet('')
            setPsc('')
            setCity('')
            setState('')

            setDLeftEye('')
            setDRightEye('')

            setRLeftEye('')
            setRRightEye('')

            setCLeftEye('')
            setCRightEye('')

            setOcLeftEye('')
            setOcRightEye('')
        }
    }, [user])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}


            <Header>
                <Name>Profil</Name>
                <div>
                    <DeleteProfileButton>Vymazať</DeleteProfileButton>
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
                                        label="Meno"
                                        type='text'
                                        name='fname'
                                        value={fName}
                                        handleChange={(e) => setFName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        label="Priezvisko"
                                        type='text'
                                        name='lname'
                                        value={lName}
                                        handleChange={(e) => setLName(e.target.value)}
                                    />
                                </div>
                            </GridRow>
                        </div>

                        <div>
                            <h2>Kontaktné údaje</h2>
                            <Row>
                                <div>
                                    <CustomInput
                                        label="E-mail"
                                        type='email'
                                        name='email'
                                        value={email}
                                        handleChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        label="Telefónne číslo"
                                        type='text'
                                        name='phone'
                                        value={phoneNumber}
                                        handleChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </Row>
                        </div>

                        <div>
                            <h2>Fakturačné údaje</h2>
                            <GridRow>
                                <ZeroMargin>
                                    <CustomInput
                                        label="Ulica a čislo domu"
                                        type='text'
                                        name='street'
                                        value={street}
                                        handleChange={(e) => setStreet(e.target.value)}
                                    />
                                </ZeroMargin>
                                <ZeroMargin>
                                    <CustomInput
                                        label="PSČ"
                                        type='text'
                                        name='psc'
                                        value={psc}
                                        handleChange={(e) => setPsc(e.target.value)}
                                    />
                                </ZeroMargin>
                            </GridRow>
                            <GridRow>
                                <div>
                                    <CustomInput
                                        label="Mesto"
                                        type='text'
                                        name='city'
                                        value={city}
                                        handleChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        label="Krajina"
                                        type='text'
                                        name='state'
                                        value={state}
                                        handleChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                            </GridRow>
                        </div>

                        <div>
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
                                        value={dLeftEye}
                                        handleChange={(e) => setDLeftEye(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        label="Pravé oko"
                                        type='text'
                                        name='state'
                                        value={dRightEye}
                                        handleChange={(e) => setDRightEye(e.target.value)}
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
                                        value={rLeftEye}
                                        handleChange={(e) => setRLeftEye(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        label="Pravé oko"
                                        type='text'
                                        name='state'
                                        value={rRightEye}
                                        handleChange={(e) => setRRightEye(e.target.value)}
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
                                        value={cLeftEye}
                                        handleChange={(e) => setCLeftEye(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        label="Pravé oko"
                                        type='text'
                                        name='state'
                                        value={cRightEye}
                                        handleChange={(e) => setCRightEye(e.target.value)}
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
                                        value={ocLeftEye}
                                        handleChange={(e) => setOcLeftEye(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        label="Pravé oko"
                                        type='text'
                                        name='state'
                                        value={ocRightEye}
                                        handleChange={(e) => setOcRightEye(e.target.value)}
                                    />
                                </div>
                            </ThreeColRow>
                        </div>
                        <SaveButton>
                            Uložiť zmeny
                        </SaveButton>

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
        </section>
    )
}

export default CustomerProfile
