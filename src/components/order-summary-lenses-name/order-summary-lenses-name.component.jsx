import React from 'react'
import styled from 'styled-components'

import { useFetchById } from '../../hooks/useFetch'

const SpanContainer = styled.span`
    /* width: 8rem; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const OrderSummaryLensesName = ({ lensesId }) => {
    const { isLoading, response } = useFetchById('api/store/lenses', lensesId, !lensesId)

    return (
        <React.Fragment>
            <SpanContainer >
                {isLoading ? "Hľadam..." : response?.lenses?.eanCode || ""}
            </SpanContainer>
            <SpanContainer >
                {isLoading ? "Hľadam..." : response?.lenses?.name || ""}
            </SpanContainer>
        </React.Fragment>
    )
}

export default OrderSummaryLensesName
