import React, { useState, useEffect, useContext } from 'react'
import { OrderContext } from '../../context/order/order.context'


import {
    CartTableRow,
    // DiscountCheckbox,
    // DiscountContainer,
    // IconContainer,
    // OptionsContainer,
    TableCol
} from './order-cart-lenses-row.styles'

const CartLensesRow = ({ idx, item }) => {
    const {
        selectProduct,
        selectedProduct,
        addLensesDiscount,
        deleteProduct
    } = useContext(OrderContext)

    const [productDiscount, setProductDiscount] = useState(null)

    const handleDiscountChange = (e) => {
        const { name, value } = e.target


        if (value === '') {
            delete productDiscount[name]

            setProductDiscount(null)
            return
        }

        setProductDiscount({
            ...productDiscount,
            [name]: value
        })
    }

    const handleSelectProduct = itemIdx => {
        if (item.product.type === 3 || item.product.type === 4 || item.product.type === 5) return
        selectProduct(itemIdx)
    }

    return (
        <CartTableRow isSelected={selectedProduct === idx} onClick={() => handleSelectProduct(idx)}>
            <TableCol onClick={() => deleteProduct(item)} >{idx + 1}</TableCol>
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
