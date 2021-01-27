import React from 'react'

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

const SummaryComponent = ({ order }) => {
    console.log(order)

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

                <SummaryTableRow>
                    <TableCol>#</TableCol>
                    <TableCol>EAN</TableCol>
                    <TableCol>Produkt</TableCol>
                    <TableCol>Šosovky</TableCol>
                    <TableCol>Zľava</TableCol>
                    <TableCol>Spolu</TableCol>
                </SummaryTableRow>
                <SummaryTableRow>
                    <TableCol>#</TableCol>
                    <TableCol>EAN</TableCol>
                    <TableCol>Produkt</TableCol>
                    <TableCol>Šosovky</TableCol>
                    <TableCol>Zľava</TableCol>
                    <TableCol>Spolu</TableCol>
                </SummaryTableRow>
                <SummaryTableRow>
                    <TableCol>#</TableCol>
                    <TableCol>EAN</TableCol>
                    <TableCol>Produkt</TableCol>
                    <TableCol>Šosovky</TableCol>
                    <TableCol>Zľava</TableCol>
                    <TableCol>Spolu</TableCol>
                </SummaryTableRow>
                <TotalContainer>
                    <p>Spolu: 999.99€</p>
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
                    <OptionButton>Pridať produkt</OptionButton>
                    <OptionButton>Vytvoriť objednavku</OptionButton>
                </OptionsContainer>
            </SummaryGridLayout>
        </div>
    )
}

export default SummaryComponent
