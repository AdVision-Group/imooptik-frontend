import React from 'react'

import CustomInput from '../../../components/custom-input/custom-input.component'

import {
    SelectUserContainer
} from '../order.styles'

const SelectUserComponent = () => {
    return (
        <div>
            <SelectUserContainer>
                <h3>Vyhľadať zákaznika</h3>
                <div>
                    <div>
                        <CustomInput
                            label={"Meno, priezvisko, email alebo tel. číslo"}
                            value={''}
                        />
                    </div>

                </div>
            </SelectUserContainer>
        </div>
    )
}

export default SelectUserComponent
