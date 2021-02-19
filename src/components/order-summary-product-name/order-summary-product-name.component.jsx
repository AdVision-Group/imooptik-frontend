import React from 'react'

import { useFetchById } from '../../hooks/useFetch'

const OrderSummaryProductName = ({ productId }) => {
    const { isLoading, response } = useFetchById('api/store/products', productId, !productId)

    if (response?.product?.name?.includes("Pseudo")) {
        return (
            <React.Fragment>
                <span style={{ whiteSpace: "nowrap" }}>
                    {" "}
                </span>
                {/* <span>{" - "}</span> */}
                <span style={{ whiteSpace: "nowrap" }}>
                    {" "}
                </span>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <span style={{ whiteSpace: "nowrap" }}>
                    {isLoading ? "Hľadam..." : response.product.eanCode}
                </span>
                {/* <span>{" - "}</span> */}
                <span style={{ whiteSpace: "nowrap" }}>
                    {isLoading ? "Hľadam..." : response.product.name.slice(0, 6).concat("...")}
                </span>
            </React.Fragment>
        )
    }

}

export default OrderSummaryProductName
