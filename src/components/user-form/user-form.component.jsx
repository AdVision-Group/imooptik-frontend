import React from 'react'
import { useHistory } from 'react-router-dom'

import InputRow from '../product-input-row/product-input-row.component'
import CustomInput from '../custom-input/custom-input.component'
import ProfileOrderOverview from '../profile-order-overview/profile-order-overview.component'
import ParametersTable from '../parameters-table/parameters-table.component'
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component'
import ExaminationsOverview from '../examinations-overview/examinations-overview.component'

import {
    retailNames
} from '../../utils/warehouse.utils'

import {
    Profile,
    GridContainer,
    GridRow,
    Row,
    // ThreeColRow,
    ZeroMargin,
    Title,
    Container,
    OrderHeader,
    OrderButton,
    CustomSelect,
    AdminPanelContainer
} from './user.form-styles'

const UserForm = ({
    isAdmin,
    isUpdating,
    user,
    handleChange,
    handleParameterChange,
    handleCompanyChange,
    isOptometrist,
    isOrder = false
}) => {
    const { push } = useHistory()

    const handleAddOrderButtonClick = e => {
        e.preventDefault()
        push(`/dashboard/objednavky/${user._id}`)
    }

    return (
        <GridContainer>
            <Profile>
                {isAdmin && user.admin !== 0 && <AdminPanelContainer>
                    <h2>Admin panel</h2>
                    <InputRow
                        label="Predajňa na ktorej uživatel pracuje"
                        example=''
                    >
                        <CustomSelect name='premises' value={user.premises} onChange={(e) => handleChange(e)}>
                            <option value={0}>Nezadané</option>
                            {
                                retailNames.map((name, idx) => {
                                    if (idx === 0) return
                                    return (
                                        <option key={idx} value={idx}>{name}</option>
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

                    <Container>
                        <CustomCheckbox
                            label='Optometrista'
                            handleClick={() => handleChange({
                                target: {
                                    name: "optometrist",
                                    value: !user.optometrist
                                }
                            })}
                            isActive={user.optometrist}
                        />
                    </Container>
                </AdminPanelContainer>}
                <div>
                    <h2>Informácie</h2>
                    <GridRow>
                        <div>
                            <CustomInput
                                label="Meno*"
                                type='text'
                                name='fName'
                                value={user.fName ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label="Priezvisko*"
                                type='text'
                                name='lName'
                                value={user.lName ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                        </div>
                        {(user.admin === 0) && <div>
                            <CustomInput
                                // label="Priezvisko*"
                                type='date'
                                name='birthDate'
                                value={user.birthDate}
                                handleChange={(e) => handleChange(e)}
                            />
                        </div>}
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
                                value={user.email ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                        </div>
                        {(user.admin === 0) && <div>
                            <CustomInput
                                label="Telefónne číslo"
                                type='text'
                                name='phone'
                                value={user.phone ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                        </div>}
                    </Row>
                </Container>

                {(user.admin === 0) && <Container>
                    <h2>Fakturačné údaje</h2>
                    <GridRow>
                        <ZeroMargin>
                            <CustomInput
                                label="Ulica a čislo domu"
                                type='text'
                                name='address'
                                value={user.address ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                        </ZeroMargin>
                        <ZeroMargin>
                            <CustomInput
                                label="PSČ"
                                type='text'
                                name='psc'
                                value={user.psc ?? ""}
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
                                value={user.city ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label="Krajina"
                                type='text'
                                name='country'
                                value={user.country ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                        </div>
                    </GridRow>
                </Container>}
                {(user.admin === 0) && <Container>
                    <h2>Firemné údaje</h2>
                    <GridRow>
                        <ZeroMargin>
                            <CustomInput
                                label="IČO"
                                type='text'
                                name='ico'
                                value={user.company.ico ?? ""}
                                handleChange={(e) => handleCompanyChange(e)}
                            />
                        </ZeroMargin>
                        <ZeroMargin>
                            <CustomInput
                                label="DIČ"
                                type='text'
                                name='dic'
                                value={user.company.dic ?? ""}
                                handleChange={(e) => handleCompanyChange(e)}
                            />
                        </ZeroMargin>
                        <ZeroMargin>
                            <CustomInput
                                label="IČ DPH"
                                type='text'
                                name='icdph'
                                value={user.company.icdph ?? ""}
                                handleChange={(e) => handleCompanyChange(e)}
                            />
                        </ZeroMargin>
                        <ZeroMargin>
                            {/* <CustomInput
                                label="IČ DPH"
                                type='text'
                                name='icdph'
                                value={user.company.icdph ?? ""}
                                handleChange={(e) => handleCompanyChange(e)}
                            /> */}
                        </ZeroMargin>
                    </GridRow>
                    <GridRow>
                        <ZeroMargin>
                            <CustomInput
                                label="Ulica a čislo domu"
                                type='text'
                                name='address'
                                value={user.company.address ?? ""}
                                handleChange={(e) => handleCompanyChange(e)}
                            />
                        </ZeroMargin>
                        <ZeroMargin>
                            <CustomInput
                                label="PSČ"
                                type='text'
                                name='psc'
                                value={user.company.psc ?? ""}
                                handleChange={(e) => handleCompanyChange(e)}
                            />
                        </ZeroMargin>
                    </GridRow>
                    <GridRow>
                        <div>
                            <CustomInput
                                label="Mesto"
                                type='text'
                                name='city'
                                value={user.company.city ?? ""}
                                handleChange={(e) => handleCompanyChange(e)}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label="Krajina"
                                type='text'
                                name='country'
                                value={user.company.country ?? ""}
                                handleChange={(e) => handleCompanyChange(e)}
                            />
                        </div>
                    </GridRow>
                </Container>}

                {(user.admin === 0) && <Container>
                    <h2>Parametre</h2>

                    <ParametersTable
                        parameters={user.lenses}
                        handleChange={handleParameterChange}
                    />
                </Container>}


            </Profile>

            {
                (user.admin === 0) && !isOrder && isUpdating && <div>
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
                                handleUpdateClick={() => push(`/dashboard/objednavky/${user._id}/${order}`)}
                            />
                        )).reverse().slice(0, 5) : (
                            <p>Žiadné objednávky</p>
                        )}
                    </div>
                    {isOptometrist && <ExaminationsOverview />}
                </div>
            }
        </GridContainer >
    )
}

export default UserForm
