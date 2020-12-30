import React from 'react'

import { CheckboxContainer } from './custom-checkbox.styles'

const CustomCheckbox = ({ label, isActive, handleClick, ...otherprops }) => {
    return (
        <CheckboxContainer isActive={isActive} onClick={handleClick} {...otherprops}>
            {label}
        </CheckboxContainer>
    )
}

export default CustomCheckbox
