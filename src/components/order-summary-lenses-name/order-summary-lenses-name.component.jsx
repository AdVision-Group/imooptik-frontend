import React from 'react'

import { useFetchById } from '../../hooks/useFetch'

const OrderSummaryLensesName = ({ lensesId }) => {
    const { isLoading, response } = useFetchById('api/store/lenses', lensesId, !lensesId)

    return (
        <span style={{ whiteSpace: "nowrap" }}>
            {isLoading ? "Hľadam..." : response.lenses.name.slice(0, 8).concat("...")}
        </span>
    )
}

export default OrderSummaryLensesName
