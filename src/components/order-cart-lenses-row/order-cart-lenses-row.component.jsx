import React, { useState, useEffect, useContext } from 'react'
import { OrderContext } from '../../context/order/order.context'

import {
    AiOutlineLeft,
    AiOutlineRight
} from 'react-icons/ai'

import {
    CartTableRow,
    // DiscountCheckbox,
    // DiscountContainer,
    // IconContainer,
    // OptionsContainer,
    TableCol,
    QuantityContainer
} from './order-cart-lenses-row.styles'

const CartLensesRow = ({ idx, item }) => {
    const {
        selectProduct,
        selectedProduct,
        addLensesDiscount,
        deleteProduct,
        incrementQuantity,
        decrementQuantity,
    } = useContext(OrderContext)


    const handleSelectProduct = itemIdx => {
        if (item.product.type === 3 || item.product.type === 4 || item.product.type === 5) return
        selectProduct(itemIdx)
    }

    const handleDeleteProduct = (item) => {
        deleteProduct(item, handleSelectProduct)
    }

    return (
        <CartTableRow isSelected={selectedProduct === idx} onClick={() => handleSelectProduct(idx)}>
            <TableCol onClick={() => handleDeleteProduct(idx)} >{idx + 1}</TableCol>
            <TableCol>{item?.product?.name}</TableCol>
            <TableCol>{item?.lens?.name}</TableCol>
            <TableCol>
                {item?.lens?.price ? (
                    `${(item?.lens?.price / 100).toFixed(2)}€`
                ) : (
                        ""
                    )}
                { }
            </TableCol>
            <TableCol>
                {item?.lensesQuant && <QuantityContainer>
                    <button onClick={() => decrementQuantity(item?.lensesQuant, idx)}><AiOutlineLeft /></button>
                    <p>{item?.lensesQuant}</p>
                    <button onClick={() => incrementQuantity(item?.lensesQuant, idx)}><AiOutlineRight /></button>
                </QuantityContainer>}
            </TableCol>
            <TableCol>
                <input
                    // placeholder='%'
                    value={item?.discount?.lenses ? item?.discount.lenses.percent : ''}
                    onChange={(e) => addLensesDiscount(idx, e.target.value)}
                />
            </TableCol>
        </CartTableRow>
    )
}

export default CartLensesRow
