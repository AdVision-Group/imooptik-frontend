import React from 'react'

import { useFetchById } from '../../hooks/useFetch'

const OrderSummaryProductName = ({ productId }) => {
    const { isLoading, response } = useFetchById('api/store/products', productId, !productId)

    return (
        <span style={{ whiteSpace: "nowrap" }}>
            {isLoading ? "Hľadam..." : response.product.name.slice(0, 6).concat("...")}
        </span>
    )
}

export default OrderSummaryProductName
