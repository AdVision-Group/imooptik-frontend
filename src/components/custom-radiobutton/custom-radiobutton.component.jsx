import React from 'react'

import { CheckboxContainer } from './custom-radiobutton.styles'

const CustomRadiobutton = ({ label, ...otherProps }) => {
    return (
        <CheckboxContainer className="container">{label}
            <input type="radio" {...otherProps} />
            <span className="checkmark"></span>
        </CheckboxContainer>
    )
}

export default CustomRadiobutton
