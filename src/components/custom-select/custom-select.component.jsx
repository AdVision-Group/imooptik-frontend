import React from 'react'

import { CustomSelectContainer } from './custom-select.styles'

const CustomRetailSelect = ({ name, value, handleChange, listItems, defaultOption = false, defaultValue, defaultLabel }) => {
    return (
        <CustomSelectContainer name={name} value={value} onChange={(e) => handleChange(e)}>
            {defaultOption && <option value={defaultValue}>{defaultLabel}</option>}
            {listItems.map((name, idx) => {
                if (idx === 4) return
                return (
                    <option key={idx} value={idx}>{name}</option>
                )
            })}
        </CustomSelectContainer>
    )
}

export default CustomRetailSelect
