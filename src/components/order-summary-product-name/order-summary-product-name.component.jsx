import React from 'react'
import styled from 'styled-components'

import { useFetchById } from '../../hooks/useFetch'

const SpanContainer = styled.span`
    /* width: 8rem; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const OrderSummaryProductName = ({ productId }) => {
    const { isLoading, response } = useFetchById('api/store/products', productId, !productId)

    if (response?.product?.name?.includes("Pseudo")) {
        return (
            <React.Fragment>
                <SpanContainer >
                    {" "}
                </SpanContainer>
                {/* <span>{" - "}</span> */}
                <SpanContainer >
                    {" "}
                </SpanContainer>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <SpanContainer >
                    {isLoading ? "Hľadam..." : response?.product?.eanCode}
                </SpanContainer>
                {/* <span>{" - "}</span> */}
                <SpanContainer >
                    {isLoading ? "Hľadam..." : response?.product?.name || "Produkt sa nenašiel"}
                </SpanContainer>
            </React.Fragment>
        )
    }

}

export default OrderSummaryProductName
