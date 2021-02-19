import React from 'react'

import { useFetchById } from '../../hooks/useFetch'

const OrderSummaryLensesName = ({ lensesId }) => {
    const { isLoading, response } = useFetchById('api/store/lenses', lensesId, !lensesId)

    return (
        <React.Fragment>
            <span style={{ whiteSpace: "nowrap" }}>
                {isLoading ? "Hľadam..." : response?.lenses?.eanCode || ""}
            </span>
            <span style={{ whiteSpace: "nowrap" }}>
                {isLoading ? "Hľadam..." : response.lenses.name.slice(0, 8).concat("...")}
            </span>
        </React.Fragment>
    )
}

export default OrderSummaryLensesName
