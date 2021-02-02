import React, { useContext } from 'react'
import { OrdersContext } from '../../../context/orders/orders.context'

import ParametersTable from '../../../components/parameters-table/parameters-table.component'

import {
    TableCol,
    ProductsOverviewContainer,
    SummaryTableHead,
    SummaryTableTitle,
    SummaryTableRow,
    TotalContainer,
    SummaryGridLayout,
    UserOverviewContainer,
    OptionsContainer,
    StyledParagraph,
    OptionButton
} from '../order.styles'

const SummaryComponent = ({ order, combinedProducts, addNextProduct }) => {
    const { createOrder } = useContext(OrdersContext)
    console.log(order)

    const priceTotal = combinedProducts.reduce((accumalatedQuantity, combinedProduct) => accumalatedQuantity + combinedProduct.combinedProduct.discountedPrice, 0)

    const handleSubmit = e => {
        e.preventDefault()

        let orderObj = {
            user: order.user._id,
            combinedProducts: combinedProducts.map(product => product.combinedProduct._id),
        }

        console.log(orderObj)

        createOrder(orderObj)
    }

    return (
        <div>
            <ProductsOverviewContainer>
                <SummaryTableTitle>Prehĺad objednávky</SummaryTableTitle>
                <SummaryTableHead>
                    <TableCol>#</TableCol>
                    <TableCol>EAN</TableCol>
                    <TableCol>Produkt</TableCol>
                    <TableCol>Šosovky</TableCol>
                    <TableCol>Zľava</TableCol>
                    <TableCol>Spolu</TableCol>
                </SummaryTableHead>

                {combinedProducts.map((combinedProduct, idx) => (
                    <SummaryTableRow key={idx}>
                        <TableCol>{idx + 1}</TableCol>
                        <TableCol>{combinedProduct.product ? combinedProduct.product.eanCode : "neuvedené"}</TableCol>
                        <TableCol>{combinedProduct.product ? combinedProduct.product.name : combinedProduct.combinedProduct.product}</TableCol>
                        <TableCol>{combinedProduct.lenses ? combinedProduct.lenses.name : ""}</TableCol>
                        <TableCol>{0}</TableCol>
                        <TableCol>{(combinedProduct.combinedProduct.discountedPrice / 100).toFixed(2)}€</TableCol>
                    </SummaryTableRow>

                ))}

                <TotalContainer>
                    <p>Spolu: {(priceTotal / 100).toFixed(2)}€</p>
                </TotalContainer>
            </ProductsOverviewContainer>
            <SummaryGridLayout>
                <UserOverviewContainer>
                    <h3>Zákaznik</h3>
                    <div>
                        <h4>Meno a prizvisko</h4>
                        <StyledParagraph>{order.user.name}</StyledParagraph>
                    </div>
                    <div>
                        <h4>Adresa</h4>
                        <StyledParagraph>{order.user.psc}</StyledParagraph>
                        <StyledParagraph>{order.user.address}</StyledParagraph>
                        <StyledParagraph>{order.user.city}</StyledParagraph>
                        <StyledParagraph>{order.user.country}</StyledParagraph>
                    </div>
                    <div>
                        <h4>Kontakt</h4>
                        <StyledParagraph>{order.user.email}</StyledParagraph>
                        <StyledParagraph>{order.user.phone}</StyledParagraph>
                    </div>
                    <div>
                        <h4>Parametre</h4>
                        <ParametersTable
                            parameters={order.user.lenses}
                            disabledInputs={true}

                        />
                    </div>
                </UserOverviewContainer>
                <OptionsContainer>
                    <h3>Možnosti</h3>
                    <OptionButton onClick={addNextProduct}>Pridať produkt</OptionButton>
                    <OptionButton onClick={handleSubmit}>Vytvoriť objednavku</OptionButton>
                </OptionsContainer>
            </SummaryGridLayout>
        </div>
    )
}

export default SummaryComponent
