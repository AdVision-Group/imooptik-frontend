import React from 'react'

import OrderProductOverview from '../../../../components/order-product-overview/order-product-overview.component'
import CustomInput from '../../../../components/custom-input/custom-input.component'

import {
    SearchContainer,
    SearchButton,
    ProductContainer,

} from '../../order.styles'

const EshopSubSection = ({ searchQuery, setSearchQuery, allProducts, handleClick }) => {
    return (
        <React.Fragment>
            <h2>E-shop</h2>

            <SearchContainer>
                <div>
                    <CustomInput
                        label="Vyhľadať produkt"
                        type='search'
                        name='search'
                        value={searchQuery}
                        handleChange={(e) => setSearchQuery(e.target.value)}
                        required
                    />
                </div>
                <SearchButton>Hľadať</SearchButton>

            </SearchContainer>
            <ProductContainer>
                {
                    allProducts.map((product, idx) => (
                        <OrderProductOverview key={idx} product={product} handleClick={(e) => handleClick(e, product)} />
                    ))
                }
            </ProductContainer>
        </React.Fragment>
    )
}

export default EshopSubSection
