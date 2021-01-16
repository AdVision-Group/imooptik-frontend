import React from 'react'

import {
    FaLessThan
} from 'react-icons/fa'

import { BackButtonContainer } from './custom-back-button.styles'

const CustomBackButton = ({ ...props }) => {
    return (
        <BackButtonContainer {...props}>
            <FaLessThan />
        </BackButtonContainer>
    )
}

export default CustomBackButton
