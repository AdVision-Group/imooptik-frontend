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
        addLensesDiscount
    } = useContext(OrderContext)

    const [discountType] = useState('percent')
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
            <TableCol>{idx + 1}</TableCol>
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
                    value={item?.discount?.lenses ? item?.discount.lenses : ''}
                    onChange={(e) => addLensesDiscount(idx, e.target.value)}
                />
            </TableCol>
            {/* <TableCol>
                <IconContainer onClick={() => handleClick(showRow)}>
                    <AiFillCaretDown />
                </IconContainer>
            </TableCol>
            {showRow && (
                <OptionsContainer>
                    <DiscountContainer>
                        <div>
                            <h4>Zľava</h4>
                            <DiscountCheckbox
                                label={"Fixná suma"}
                                value={"flat"}
                                name='flat'
                                isActive={discountType === 'flat'}
                                handleClick={() => handleChangeDiscount(discountType === 'flat' ? "" : "flat")}
                            />
                            <DiscountCheckbox
                                label={"Percertá"}
                                value={"percent"}
                                name='percent'
                                isActive={discountType === 'percent'}
                                handleClick={() => handleChangeDiscount(discountType === 'percent' ? "" : "percent")}
                            />
                        </div>
                        <div>

                        </div>
                    </DiscountContainer>
                </OptionsContainer>
            )} */}
        </CartTableRow>
    )
}

export default CartLensesRow
