import React from 'react'

import {
    Title,
    ToggleFormButton,
    ToggleOptionsContainer
} from './custom-form-switch.styles'

const CustomFormSwitch = ({ title, activeIndex, handleClick, items }) => {
    return (
        <React.Fragment>
            <Title>{title}</Title>
            <ToggleOptionsContainer>
                {
                    items.map((item, idx) => (
                        <ToggleFormButton key={idx} isActive={activeIndex === idx} onClick={(e) => handleClick(e, idx)}>{item.name}</ToggleFormButton>
                    ))
                }
            </ToggleOptionsContainer>
        </React.Fragment>
    )
}

export default CustomFormSwitch
