import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import { useFetchById } from '../../hooks/useFetch'

const SpanContainer = styled.span`
    /* width: 8rem; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const LinkContainer = styled(Link)`
    /* width: 8rem; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const OrderSummaryProductName = ({ productId, name = "", eanCode = ""}) => {
    const { isLoading, response } = useFetchById('api/store/products', productId, !productId)

    if(!productId) {
        return (
            <React.Fragment>
                <SpanContainer >
                    {eanCode}
                </SpanContainer>
                {/* <span>{" - "}</span> */}
                <SpanContainer >
                    {name}
                </SpanContainer>
            </React.Fragment>
        )
    }

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
                <LinkContainer to={`/dashboard/sklad/${productId}`} >
                    {isLoading ? "Hľadam..." : response?.product?.name || "Produkt sa nenašiel"}
                </LinkContainer>
            </React.Fragment>
        )
    }

}

export default OrderSummaryProductName
