import React from 'react'

import { ButtonContainer } from './custom-button.styles'

const CustomButton = ({ children, ...otherprops }) => {
    return (
        <ButtonContainer {...otherprops}>
            {children}
        </ButtonContainer>
    )
}

export default CustomButton
