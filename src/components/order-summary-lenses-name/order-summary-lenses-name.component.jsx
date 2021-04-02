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

const OrderSummaryLensesName = ({ lensesId }) => {
    const { isLoading, response } = useFetchById('api/store/lenses', lensesId, !lensesId)

    return (
        <React.Fragment>
            <SpanContainer >
                {isLoading ? "Hľadam..." : response?.lenses?.eanCode || ""}
            </SpanContainer>
            <LinkContainer to={`/dashboard/sklad/${lensesId}`}>
                {isLoading ? "Hľadam..." : response?.lenses?.name || ""}
            </LinkContainer>
        </React.Fragment>
    )
}

export default OrderSummaryLensesName
