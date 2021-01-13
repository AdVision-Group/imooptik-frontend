import React from 'react'

const LensesSubSection = ({ handleChangeStep }) => {
    return (
        <React.Fragment>
            <button onClick={() => handleChangeStep(0)}>Back</button>
            <h1>LENSES PRODUCTS</h1>
            <button onClick={() => handleChangeStep(2)}>Next</button>
        </React.Fragment>
    )
}

export default LensesSubSection
