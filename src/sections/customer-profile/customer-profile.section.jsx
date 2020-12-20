import React, { useState } from 'react'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import OrderOverview from '../../components/order-overview/order-overview.component'

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

    return (
        <section>
            <Header>
                <Name>John Doe</Name>
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
