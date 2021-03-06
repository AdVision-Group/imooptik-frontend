import React, { useContext, useState, useEffect } from 'react'
import { OrdersContext } from '../../../../context/orders/orders.context'
import { OrderContext } from '../../../../context/order/order.context'

import ParametersTable from '../../../../components/parameters-table/parameters-table.component'
import FinishOrderModal from '../../../../components/modal-finish-order/modal-finish-order.component'
import OrderSummaryProductName from '../../../../components/order-summary-product-name/order-summary-product-name.component'
import OrderSummaryLensesName from '../../../../components/order-summary-lenses-name/order-summary-lenses-name.component'
import OrderUpdateUserModal from '../../../../components/modal-order-update-user/modal-order-update-user.component'

import CustomTextarea from '../../../../components/custom-textarea/custom-textarea.component'


import { retailNames } from '../../../../utils/warehouse.utils'
import { translatePaymentMethod, translateStatus } from '../../../../utils/orders.utils'

import { AiOutlineEdit } from 'react-icons/ai'

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
    OrderDetailsContainer,
    EditButton,
    NoteContainer
} from './summary.styles'

const SummaryComponent = ({ addNextProduct, setHasChanged, isUpdating, refetchUser }) => {
    const { order, changeStep, addUser, handleChangeNote } = useContext(OrderContext)
    const { createOrder, updateOrder, getPDF } = useContext(OrdersContext)
    const [priceTotal, setPriceTotal] = useState(0)
    const date = new Date(order?.order?.date)

    const [showUpdateUserModal, setShowUpdateUserModal] = useState(false)

    const handleClose = () => {
        setShowUpdateUserModal(false)
    }

    useEffect(() => {
        if (order.combinedProducts) {
            setPriceTotal(order.combinedProducts.reduce((accumalatedQuantity, combinedProduct) => accumalatedQuantity + combinedProduct.discountedPrice, 0))
        }
    }, [order.combinedProducts])

    // console.log(order)

    return (
        <div>
            {showUpdateUserModal && <OrderUpdateUserModal close={handleClose} userId={order.user._id} refetchUser={refetchUser} addUser={addUser} />}
            <ProductsOverviewContainer>
                <SummaryTableTitle>Prehľad objednávky</SummaryTableTitle>
                <SummaryTableHead>
                    <TableCol>#</TableCol>
                    <TableCol>
                        <span>Eankód</span>
                        <span>Názov produktu</span>
                    </TableCol>
                    <TableCol>Cena</TableCol>
                    <TableCol>Po zľave</TableCol>
                    <TableCol>
                        <span>Eankód</span>
                        <span>Názov šošovky</span>
                    </TableCol>
                    <TableCol>Cena</TableCol>
                    <TableCol>Po zľave</TableCol>
                    <TableCol>Ks</TableCol>
                    <TableCol>Spolu</TableCol>
                    <TableCol>Po zľave</TableCol>
                </SummaryTableHead>

                {order.combinedProducts && order.combinedProducts.map((combinedProduct, idx) => (
                    <SummaryTableRow key={idx}>
                        <TableCol>{idx + 1}</TableCol>
                        <TableCol>{combinedProduct?.product ? <OrderSummaryProductName productId={combinedProduct?.product} /> : ""}</TableCol>
                        <TableCol>{combinedProduct?.productPrice?.full !== 0 ? `${(combinedProduct?.productPrice?.full / 100).toFixed(2)}€` : ''}</TableCol>
                        <TableCol>{combinedProduct?.productPrice?.discounted !== 0 ? `${(combinedProduct?.productPrice?.discounted / 100).toFixed(2)}€` : ""} {combinedProduct?.discount?.product?.percent && `(${combinedProduct?.discount?.product?.percent}%)`}</TableCol>
                        <TableCol>{combinedProduct?.lens ? <OrderSummaryLensesName lensesId={combinedProduct?.lens} /> : ""}</TableCol>
                        <TableCol>{combinedProduct?.lensPrice ? `${(combinedProduct?.lensPrice?.full / 100).toFixed(2)}€` : ''}</TableCol>
                        <TableCol>{combinedProduct?.lensPrice ? `${(combinedProduct?.lensPrice?.discounted / 100).toFixed(2)}€` : ""} {combinedProduct?.discount?.lenses?.percent && `(${combinedProduct?.discount?.lenses?.percent}%)`}</TableCol>
                        <TableCol>{combinedProduct?.lens && combinedProduct?.lensesQuant}</TableCol>
                        <TableCol>{combinedProduct?.price ? `${(combinedProduct?.price / 100).toFixed(2)}€` : ""}</TableCol>
                        <TableCol>{(combinedProduct?.discountedPrice / 100).toFixed(2)}€</TableCol>
                    </SummaryTableRow>

                ))}

                <TotalContainer>
                    <p>Spolu: {(priceTotal / 100).toFixed(2)}€</p>
                </TotalContainer>
            </ProductsOverviewContainer>
            <SummaryGridLayout>
                <NoteContainer>
                        <h3>Poznámka</h3>

                        <div>
                            <CustomTextarea
                                label="Poznámka"
                                type='text'
                                rows="5"
                                name='note'
                                value={order?.note || ""}
                                handleChange={(e) => handleChangeNote(e.target.value)}
                            />
                        </div>
                </NoteContainer>
                {/* <NoteContainer>
                </NoteContainer> */}
            </SummaryGridLayout>
            <SummaryGridLayout>

                <UserOverviewContainer>
                    <EditButton onClick={() => setShowUpdateUserModal(true)}>
                        <AiOutlineEdit />
                    </EditButton>
                    <h3>Zákaznik</h3>
                    <div>
                        <h4>Meno a priezvisko</h4>
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
                    {!isUpdating && <OptionsContainer>
                        <h3>Možnosti</h3>
                        <OptionButton onClick={() => changeStep('select-product')}>Pridať produkt</OptionButton>
                        <FinishOrderModal
                            order={order}
                            combinedProducts={order.combinedProducts}
                            createOrder={createOrder}
                            setHasChanged={setHasChanged}
                            isUpdating={isUpdating}
                            updateOrder={updateOrder}
                            note={order?.note}

                        />
                    </OptionsContainer>}

                    {isUpdating && (
                        <OptionsContainer>
                            <FinishOrderModal
                                order={order}
                                combinedProducts={order.combinedProducts}
                                createOrder={createOrder}
                                setHasChanged={setHasChanged}
                                isUpdating={isUpdating}
                                updateOrder={updateOrder}
                                note={order?.note}
                            />
                        </OptionsContainer>
                    )}

                    {isUpdating && order?.order?.overwrite && (
                        <OrderDetailsContainer>
                            <h3>Doručovacia adresa</h3>
                            <div>
                                <h4>Adresa</h4>
                                <StyledParagraph>{order?.order?.overwrite?.psc}</StyledParagraph>
                                <StyledParagraph>{order?.order?.overwrite?.address}</StyledParagraph>
                                <StyledParagraph>{order?.order?.overwrite?.city}</StyledParagraph>
                                <StyledParagraph>{order?.order?.overwrite?.country}</StyledParagraph>
                            </div>
                        </OrderDetailsContainer>
                    )}

                    {order.order && <OrderDetailsContainer>
                        <h3>Detaily objednávky</h3>
                        <div>
                            <h4>Dátum objednávky</h4>
                            <StyledParagraph>{date.toLocaleDateString("sk-SK", { weekday: 'long', month: 'long', day: 'numeric' })}</StyledParagraph>
                        </div>
                        <div>
                            <h4>Doručiť na adresu</h4>
                            <StyledParagraph>{order.order.shouldDeliver ? "Áno" : "Nie"}</StyledParagraph>
                        </div>
                        <div>
                            <h4>Nákup na firmu</h4>
                            <StyledParagraph>{order.order.buyingAsCompany ? "Áno" : "Nie"}</StyledParagraph>
                        </div>
                        <div>
                            <h4>Stav objednávky</h4>
                            <StyledParagraph>{translateStatus(order.order.status)}</StyledParagraph>
                        </div>
                        {order?.order?.advancePaymentType && <div>
                            <h4>Záloha</h4>
                            <StyledParagraph>{`Záloha: ${((order.order.paidAlready - order.order.couponValue1) / 100).toFixed(2)}€ (${translatePaymentMethod(order.order.advancePaymentType)})`}</StyledParagraph>
                        </div>}
                        {order?.order?.couponValue1 > 0 && <div>
                            <h4>Kupón</h4>
                            <StyledParagraph>{`Hodnota: ${(order.order.couponValue1 / 100).toFixed(2)}€`}</StyledParagraph>
                            {order?.order?.couponValue2 > 0 && <StyledParagraph>{`Hodnota: ${(order.order.couponValue2 / 100).toFixed(2)}€`}</StyledParagraph>}
                        </div>}
                        {order.order.status !== 'half-paid' && <div>
                            <h4>Spôsob úhrady doplatku</h4>
                            <StyledParagraph>{translatePaymentMethod(order.order.paymentType)}</StyledParagraph>
                        </div>}
                        <div>
                            <h4>Vybavuje prevádzka</h4>
                            <StyledParagraph>{order.order.premises === 0 ? "Neuvedené" : retailNames[order.order.premises]}</StyledParagraph>
                        </div>
                        <div>
                            <h4>PDF</h4>
                            <OptionButton onClick={() => getPDF(order.order._id, true)}>
                                Black
                            </OptionButton>
                            <OptionButton onClick={() => getPDF(order.order._id)}>
                                Zobraz PDF
                            </OptionButton>

                        </div>
                    </OrderDetailsContainer>}
                </div>
            </SummaryGridLayout>
        </div>
    )
}

export default SummaryComponent
