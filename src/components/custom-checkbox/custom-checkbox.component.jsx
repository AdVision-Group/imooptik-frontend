import React from 'react'

import { CheckboxContainer } from './custom-checkbox.styles'

const CustomCheckbox = ({ label, ...otherprops }) => {
    return (
        <CheckboxContainer>{label}
            <input type="checkbox" {...otherprops} />
            <span className="checkmark"></span>
        </CheckboxContainer>
    )
}

export default CustomCheckbox
