import React from 'react'

const SummarySubSection = ({ handleChangeStep }) => {
    return (
        <React.Fragment>
            <button onClick={() => handleChangeStep(2)}>Back</button>
            <h1>Summary</h1>
            <button>Next</button>
        </React.Fragment>
    )
}

export default SummarySubSection
