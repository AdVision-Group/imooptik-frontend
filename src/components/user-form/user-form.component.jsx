import React from 'react'
import { useHistory } from 'react-router-dom'

import InputRow from '../product-input-row/product-input-row.component'
import CustomInput from '../custom-input/custom-input.component'
import ProfileOrderOverview from '../profile-order-overview/profile-order-overview.component'

import {
    retailNames
} from '../../context/warehouse/warehouse.utils'

import {
    Profile,
    GridContainer,
    GridRow,
    Row,
    ThreeColRow,
    ZeroMargin,
    Title,
    Container,
    OrderHeader,
    OrderButton,
    CustomSelect,
    AdminPanelContainer
} from './user.form-styles'

const UserForm = ({ isAdmin, isUpdating, user, handleChange, handleDioptersChange, handleDistanceChange, handleCylinderChange, handleCylinderAxesChange }) => {
    const { push } = useHistory()

    const handleAddOrderButtonClick = e => {
        e.preventDefault()
        push(`/dashboard/objednavky/${user._id}`)
    }

    return (
        <GridContainer>
            <Profile>
                {isAdmin && <AdminPanelContainer>
                    <h2>Admin panel</h2>
                    <InputRow
                        label="Predajňa na ktorej uživatel pracuje"
                        example=''
                    >
                        <CustomSelect name='premises' value={user.premises} onChange={(e) => handleChange(e)}>
                            <option value={0}>Nezadané</option>
                            {
                                retailNames.map((name, idx) => {
                                    if (idx === 4) return
                                    return (
                                        <option key={idx} value={idx + 1}>{name}</option>

                                    )
                                })
                            }
                        </CustomSelect>
                    </InputRow>
                    <InputRow
                        label="Výška administrativných práv"
                        example=""
                    >
                        <CustomSelect name='admin' value={user.admin} onChange={(e) => handleChange(e)}>
                            <option value={0}>Zákaznik</option>
                            <option value={1}>Predavač</option>
                            <option value={2}>Vedúci</option>
                        </CustomSelect>
                    </InputRow>
                </AdminPanelContainer>}
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

            {isUpdating && <div>
                <OrderHeader>
                    <Title>
                        Objednávky
                    </Title>
                    <OrderButton onClick={e => handleAddOrderButtonClick(e)}>Pridať objednávku</OrderButton>
                </OrderHeader>

                <div>
                    {user.orders.length > 0 ? user.orders.map((order, idx) => (
                        <ProfileOrderOverview
                            key={idx}
                            id={order}
                        />
                    )) : (
                            <p>Žiadné objednávky</p>
                        )}


                </div>
            </div>}
        </GridContainer>
    )
}

export default UserForm
