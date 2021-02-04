import React, { useContext, useState, useEffect } from 'react'
import { OrdersContext } from '../../../../context/orders/orders.context'

import ParametersTable from '../../../../components/parameters-table/parameters-table.component'
import FinishOrderModal from '../../../../components/modal-finish-order/modal-finish-order.component'

import { retailNames } from '../../../../context/warehouse/warehouse.utils'
// import { useFetchById } from '../../../hooks/useFetch'

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
    OptionButton,
    OrderDetailsContainer
} from './summary.styles'

const SummaryComponent = ({ order, combinedProducts, addNextProduct, setHasChanged }) => {
    const { createOrder } = useContext(OrdersContext)
    const [showModal, setShowModal] = useState(false)
    const [priceTotal, setPriceTotal] = useState(0)
    const date = new Date(order?.order?.date)

    console.log(order)

    console.log(combinedProducts)

    useEffect(() => {
        if (combinedProducts) {
            setPriceTotal(combinedProducts.reduce((accumalatedQuantity, combinedProduct) => accumalatedQuantity + combinedProduct.discountedPrice, 0))

        }
    }, [combinedProducts])

    return (
        <div>
            {showModal && (
                <FinishOrderModal
                    close={() => setShowModal(false)}
                    order={order}
                    combinedProducts={combinedProducts}
                    createOrder={createOrder}
                    setHasChanged={setHasChanged}
                />
            )}
            <ProductsOverviewContainer>
                <SummaryTableTitle>Prehĺad objednávky</SummaryTableTitle>
                <SummaryTableHead>
                    <TableCol>#</TableCol>
                    <TableCol>ProduktID</TableCol>
                    <TableCol>Cena</TableCol>
                    <TableCol>Po zlave</TableCol>
                    <TableCol>ŠosovkyID</TableCol>
                    <TableCol>Cena</TableCol>
                    <TableCol>Po zlave</TableCol>
                    <TableCol>Dohromady</TableCol>
                    <TableCol>Po zlave</TableCol>
                </SummaryTableHead>

                {combinedProducts.map((combinedProduct, idx) => (
                    <SummaryTableRow key={idx}>
                        <TableCol>{idx + 1}</TableCol>
                        <TableCol>{combinedProduct?.product ? combinedProduct?.product.slice(0, 8).concat("...") : ""}</TableCol>
                        <TableCol>{combinedProduct?.productPrice ? `${(combinedProduct?.productPrice?.full / 100).toFixed(2)}€` : ''}</TableCol>
                        <TableCol>{combinedProduct?.productPrice ? `${(combinedProduct?.productPrice?.discounted / 100).toFixed(2)}€` : ""}</TableCol>

                        <TableCol>{combinedProduct?.lens ? combinedProduct?.lens.slice(0, 8).concat("...") : ""}</TableCol>
                        <TableCol>{combinedProduct?.lensPrice ? `${(combinedProduct?.lensPrice?.full / 100).toFixed(2)}€` : ''}</TableCol>
                        <TableCol>{combinedProduct?.lensPrice ? `${(combinedProduct?.lensPrice?.discounted / 100).toFixed(2)}€` : ""}</TableCol>

                        <TableCol>{combinedProduct?.price ? `${(combinedProduct?.price / 100).toFixed(2)}€` : ""}</TableCol>
                        <TableCol>{(combinedProduct?.discountedPrice / 100).toFixed(2)}€</TableCol>
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
                        <StyledParagraph>{order?.user?.name}</StyledParagraph>
                    </div>
                    <div>
                        <h4>Adresa</h4>
                        <StyledParagraph>{order?.user?.psc}</StyledParagraph>
                        <StyledParagraph>{order?.user?.address}</StyledParagraph>
                        <StyledParagraph>{order?.user?.city}</StyledParagraph>
                        <StyledParagraph>{order?.user?.country}</StyledParagraph>
                    </div>
                    <div>
                        <h4>Kontakt</h4>
                        <StyledParagraph>{order?.user?.email}</StyledParagraph>
                        <StyledParagraph>{order?.user?.phone}</StyledParagraph>
                    </div>
                    <div>
                        <h4>Parametre</h4>
                        {order && order.user && <ParametersTable
                            parameters={order?.user?.lenses}
                            disabledInputs={true}

                        />}
                    </div>
                </UserOverviewContainer>
                <div>
                    {order.order && <OrderDetailsContainer>
                        <h3>Detaily objednávky</h3>
                        <div>
                            <h4>Dátum objednávky</h4>
                            <p>{date.toLocaleDateString("sk-SK", { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div>
                            <h4>Doručiť na adresu</h4>
                            <p>{order.order.shouldDeliver ? "Áno" : "Nie"}</p>
                        </div>
                        <div>
                            <h4>Nákup na firmu</h4>
                            <p>{order.order.buyingAsCompany ? "Áno" : "Nie"}</p>
                        </div>
                        <div>
                            <h4>Spôsob úhrady</h4>
                            <p>{order.order.paymentType}</p>
                        </div>
                        <div>
                            <h4>Vybavuje prevádzka</h4>
                            <p>{retailNames[order.order.premises - 1]}</p>
                        </div>
                        <div>
                            <h4>PDF</h4>
                            <a href={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/pdf/${order.order.pdfPath}`} target="_blank" rel="noreferrer noopener">
                                Zobraz PDF
                            </a>
                        </div>
                    </OrderDetailsContainer>}

                    <OptionsContainer>
                        <h3>Možnosti</h3>
                        <OptionButton onClick={addNextProduct}>Pridať produkt</OptionButton>
                        <OptionButton onClick={() => setShowModal(true)}>Dokončiť objednavku</OptionButton>
                    </OptionsContainer>
                </div>
            </SummaryGridLayout>
        </div>
    )
}

export default SummaryComponent
