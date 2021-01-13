import React from 'react'

const DioptersSubSection = ({ handleChangeStep }) => {
    return (
        <React.Fragment>
            <button onClick={() => handleChangeStep(1)}>Back</button>
            <h1>DIOPTERS</h1>
            <button onClick={() => handleChangeStep(3)}>Next</button>
        </React.Fragment>
    )
}

export default DioptersSubSection
