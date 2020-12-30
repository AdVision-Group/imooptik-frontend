import React from 'react'

import { InputRow } from './product-input-row.styles'

const ProductInputRow = ({ children, label, example, ...otherprops }) => {
    return (
        <InputRow {...otherprops}>
            <div>
                {children}
            </div>
            <div>
                <p>{label + " "}<span>{example}</span></p>
            </div>
        </InputRow>
    )
}

export default ProductInputRow
