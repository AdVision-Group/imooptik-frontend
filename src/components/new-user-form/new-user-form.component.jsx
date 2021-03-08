import React from 'react'

import CustomFormSwitch from '../custom-form-switch/custom-form-switch.component'
import InputRow from '../product-input-row/product-input-row.component'
import CustomInput from '../custom-input/custom-input.component'
import ParametersTable from '../parameters-table/parameters-table.component'
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component"

import {
    retailNames
} from '../../context/warehouse/warehouse.utils'

import {
    CustomSelect,
    Container,
    GridRow,
    ZeroMargin,
    ColContainer,
    CustomerForm,
    SectionTitle
} from './new-user-form.styles'


const NewUserForm = ({
    formToShow,
    switchFormButtons,
    toggleUserForm,
    user,
    handleChange,
    isAdmin,
    handleParameterChange,
    handleCompanyChange
}) => {

    return (
        <div>
            {/* Akého uživatela chcete vytvoriť? */}
            {isAdmin && <CustomFormSwitch
                items={switchFormButtons}
                title="Akého uživatela chcete vytvoriť?"
                activeIndex={formToShow}
                handleClick={toggleUserForm}
            />}

            {
                formToShow === 0 ? (
                    <CustomerForm>
                        <ColContainer>
                            <h2>Informácie</h2>
                            <CustomInput
                                label="Meno*"
                                type='text'
                                name='fName'
                                value={user.fName ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                            <CustomInput
                                label="Priezvisko*"
                                type='text'
                                name='lName'
                                value={user.lName ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                            <CustomInput
                                label="E-mail*"
                                type='email'
                                name='email'
                                value={user.email ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                            <CustomInput
                                label="Telefónne číslo"
                                type='text'
                                name='phone'
                                value={user.phone ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                            <InputRow
                                label="Dátum narodenia"
                                example=''
                            >
                                <CustomInput
                                    // label="Priezvisko*"
                                    type='date'
                                    name='birthDate'
                                    value={user.birthDate}
                                    handleChange={(e) => handleChange(e)}
                                />
                            </InputRow>

                            <Container>
                                <h2>Parametre</h2>

                                <ParametersTable
                                    parameters={user.lenses}
                                    handleChange={handleParameterChange}
                                />
                            </Container>
                        </ColContainer>

                        <ColContainer>
                            <div>
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
                            </div>

                            <Container>
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
                            </Container>
                        </ColContainer>

                    </CustomerForm>
                ) : (
                    <CustomerForm>

                        <ColContainer>
                            <h2>Informácie</h2>
                            <CustomInput
                                label="Meno*"
                                type='text'
                                name='fName'
                                value={user.fName ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                            <CustomInput
                                label="Priezvisko*"
                                type='text'
                                name='lName'
                                value={user.lName ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                            <CustomInput
                                label="E-mail*"
                                type='email'
                                name='email'
                                value={user.email ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                            <CustomInput
                                label="Heslo*"
                                type='password'
                                name='password'
                                value={user.password ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                            <CustomInput
                                label="Potvrď heslo*"
                                type='password'
                                name='confirmPassword'
                                value={user.confirmPassword ?? ""}
                                handleChange={(e) => handleChange(e)}
                            />
                        </ColContainer>

                        <ColContainer>
                            <SectionTitle>Admin privilégia</SectionTitle>
                            <div>
                                <h4>Predajňa na ktorej uživatel pracuje</h4>
                                <CustomSelect name='premises' value={user.premises} onChange={(e) => handleChange(e)}>
                                    <option value={0}>Nezadané</option>
                                    {retailNames.map((name, idx) => {
                                        if (idx === 0) return
                                        return (
                                            <option key={idx} value={idx}>{name}</option>

                                        )
                                    })}
                                </CustomSelect>

                            </div>
                            <div>
                                <h4>Výška administrativných práv</h4>
                                <CustomSelect name='admin' value={user.admin} onChange={(e) => handleChange(e)}>
                                    <option value={0}>Zákaznik</option>
                                    <option value={1}>Predavač</option>
                                    <option value={2}>Vedúci</option>
                                </CustomSelect>

                            </div>
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
                        </ColContainer>
                    </CustomerForm>
                )
            }
        </div>
    )
}

export default NewUserForm
