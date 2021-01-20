import React from 'react'

import CustomFormSwitch from '../custom-form-switch/custom-form-switch.component'
import InputRow from '../product-input-row/product-input-row.component'
import CustomInput from '../custom-input/custom-input.component'

import {
    retailNames
} from '../../context/warehouse/warehouse.utils'

import {
    CustomSelect
} from './new-user-form.styles'


const NewUserForm = ({ formToShow, switchFormButtons, toggleUserForm, user, handleChange, isAdmin }) => {
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
                    <div>
                        <div>
                            <h2>Informácie</h2>
                            <InputRow
                                label=""
                                example='napr: John'
                            >
                                <CustomInput
                                    label="Meno*"
                                    type='text'
                                    name='fName'
                                    value={user.fName}
                                    handleChange={(e) => handleChange(e)}
                                />
                            </InputRow>
                            <InputRow
                                label=""
                                example='napr: Doe'
                            >
                                <CustomInput
                                    label="Priezvisko*"
                                    type='text'
                                    name='lName'
                                    value={user.lName}
                                    handleChange={(e) => handleChange(e)}
                                />
                            </InputRow>
                            <InputRow
                                label=""
                                example='napr: priklad@email.com'
                            >
                                <CustomInput
                                    label="E-mail*"
                                    type='email'
                                    name='email'
                                    value={user.email}
                                    handleChange={(e) => handleChange(e)}
                                />
                            </InputRow>
                        </div>
                    </div>
                ) : (
                        <div>
                            <div>
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
                            </div>
                            <div>
                                <h2>Informácie</h2>
                                <InputRow
                                    label=""
                                    example='napr: John'
                                >
                                    <CustomInput
                                        label="Meno*"
                                        type='text'
                                        name='fName'
                                        value={user.fName}
                                        handleChange={(e) => handleChange(e)}
                                    />
                                </InputRow>
                                <InputRow
                                    label=""
                                    example='napr: Doe'
                                >
                                    <CustomInput
                                        label="Priezvisko*"
                                        type='text'
                                        name='lName'
                                        value={user.lName}
                                        handleChange={(e) => handleChange(e)}
                                    />
                                </InputRow>
                                <InputRow
                                    label=""
                                    example='napr: priklad@email.com'
                                >
                                    <CustomInput
                                        label="E-mail*"
                                        type='email'
                                        name='email'
                                        value={user.email}
                                        handleChange={(e) => handleChange(e)}
                                    />
                                </InputRow>
                                <InputRow
                                    label="Heslo použivatela, aspoň 1 velké pismeno, 1 malé pismeno a 1 číslo*"
                                    example=''
                                >
                                    <CustomInput
                                        label="Heslo*"
                                        type='password'
                                        name='password'
                                        value={user.password}
                                        handleChange={(e) => handleChange(e)}
                                    />
                                </InputRow>
                                <InputRow
                                    label=""
                                    example=''
                                >
                                    <CustomInput
                                        label="Potvrď heslo*"
                                        type='password'
                                        name='confirmPassword'
                                        value={user.confirmPassword}
                                        handleChange={(e) => handleChange(e)}
                                    />
                                </InputRow>


                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default NewUserForm
