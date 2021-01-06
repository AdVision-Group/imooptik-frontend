import React from 'react'

import { PaginationContainer, PageNumber } from './pagination.styles'

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <PaginationContainer>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <PageNumber isActive={activePage === number} onClick={() => paginate(number)}>
                                {number}
                            </PageNumber>
                        </li>
                    ))
                }
            </ul>
        </PaginationContainer>
    )
}

export default Pagination
