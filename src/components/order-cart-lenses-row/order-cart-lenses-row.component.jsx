import React, { useState, useEffect } from 'react'

import CustomInput from '../custom-input/custom-input.component'

import {
    AiFillCaretDown
} from 'react-icons/ai'

import {
    CartTableRow,
    DiscountCheckbox,
    DiscountContainer,
    IconContainer,
    OptionsContainer,
    TableCol
} from './order-cart-lenses-row.styles'

const CartLensesRow = ({ idx, item }) => {
    const [showRow, setShowRow] = useState(false)

    const [discountType, setDiscountType] = useState('')
    const [productDiscount, setProductDiscount] = useState(null)

    const handleClick = (hasDiscount) => {
        setShowRow(prevValue => !prevValue)
        // handleAddDiscount(idx, hasDiscount)
    }

    const handleChangeDiscount = (type) => {
        if (type === '') {
            setProductDiscount(null)
        } else {
            setProductDiscount({})
        }

        setDiscountType(type)
    }

    const handleDiscountChange = (e) => {
        const { name, value } = e.target


        if (value === '') {
            delete productDiscount[name]

            setProductDiscount({
                ...productDiscount,
            })
            return
        }

        setProductDiscount({
            ...productDiscount,
            [name]: value
        })
    }

    return (
        <CartTableRow >
            <TableCol>{idx + 1}</TableCol>
            <TableCol>{item.lens.name}</TableCol>
            <TableCol>{(item.lens.price / 100).toFixed(2)}€</TableCol>
            <TableCol>
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
                            <CustomInput
                                label='Hodnota'
                                value={discountType === 'flat' ? productDiscount?.flat || "" : productDiscount?.percent || ""}
                                onChange={(e) => {
                                    handleDiscountChange({
                                        target: {
                                            name: discountType,
                                            value: e.target.value
                                        }
                                    })
                                }}
                            />
                        </div>
                    </DiscountContainer>
                </OptionsContainer>
            )}
        </CartTableRow>
    )
}

export default CartLensesRow
