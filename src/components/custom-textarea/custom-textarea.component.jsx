import React from 'react'

import { InputGroup } from './custom-textarea.styles'

const CustomTextarea = ({ handleChange, label, name, ...otherProps }) => {
    return (
        <InputGroup>
            <textarea
                className='form-input'
                name={name}
                onChange={handleChange}
                {...otherProps}
            />
            {label ? (
                <label htmlFor={name} className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
            }
        </InputGroup>
    )
}

export default CustomTextarea