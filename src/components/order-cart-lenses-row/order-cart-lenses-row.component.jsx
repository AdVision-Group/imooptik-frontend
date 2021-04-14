import React, { useContext, useState } from 'react'
import { OrderContext } from '../../context/order/order.context'
import CustomInput from '../custom-input/custom-input.component'

import {
    AiOutlineLeft,
    AiOutlineRight
} from 'react-icons/ai'

import {
    AiFillCaretDown
} from 'react-icons/ai'

import {
    CartTableRow,
    // DiscountCheckbox,
    // DiscountContainer,
    // IconContainer,
    // OptionsContainer,
    DiscountCheckbox,
    DiscountCheckboxContainer,
    DiscountContainer,
    TableCol,
    QuantityContainer,
    IconContainer,
    OptionsContainer
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

    
    const [showRow, setShowRow] = useState(false)
    const [discountType, setDiscountType] = useState(item?.discount?.lenses?.flat ? "flat" : "percent")
    const [includeDiscount, setIncludeDiscount] = useState(true)

    const handleChangeDiscount = (type, e) => {
        e.stopPropagation()

        // setProductDiscount({})
        setDiscountType(type)
        addLensesDiscount(idx, type, "0")

    }

    const handleClick = (e) => {
        e.stopPropagation()
        setShowRow(prevValue => !prevValue)
    }



    const handleSelectProduct = (itemIdx, e) => {
        if (item.product.type === 3 || item.product.type === 4 || item.product.type === 5 || item.product.isPseudo) return
        selectProduct(itemIdx, e)
    }

    const handleDeleteProduct = (item) => {

        deleteProduct(item, handleSelectProduct)
    }

    return (
        <CartTableRow isSelected={selectedProduct === idx} onClick={(e) => handleSelectProduct(idx, e)}>
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
                    <button onClick={(e) => decrementQuantity(item?.lensesQuant, idx, e)}><AiOutlineLeft /></button>
                    <p>{item?.lensesQuant}</p>
                    <button onClick={(e) => incrementQuantity(item?.lensesQuant, idx, e)}><AiOutlineRight /></button>
                </QuantityContainer>}
            </TableCol>
            <TableCol>
                {/* <input
                    // placeholder='%'
                    value={item?.discount?.lenses ? item?.discount.lenses.percent : ''}
                    onChange={(e) => addLensesDiscount(idx, e.target.value)}
                /> */}
                <IconContainer onClick={handleClick}>
                    <AiFillCaretDown />
                </IconContainer>
            </TableCol>
            {showRow && (
                <OptionsContainer>
                
                         <DiscountContainer>
                            {/* <DiscountCheckboxContainer>
                                <input id="discount" name='discount' type='checkbox' value={includeDiscount} onChange={(e) => {
                                    e.stopPropagation()
                                    setIncludeDiscount(!includeDiscount)
                                }} />
                                <label htmlFor='discount'>Pridať zlavu pre šosovky</label>
                            </DiscountCheckboxContainer> */}
                            {includeDiscount && <div>
                                <h4>Zlava pre šosovky</h4>
                                <div>
                                    <DiscountCheckbox
                                        label={"Fixná suma"}
                                        value={"flat"}
                                        name='flat'
                                        isActive={discountType === 'flat'}
                                        handleClick={(e) => handleChangeDiscount('flat', e)}
                                    />
                                    <DiscountCheckbox
                                        label={"Percertá"}
                                        value={"percent"}
                                        name='percent'
                                        isActive={discountType === 'percent'}
                                        handleClick={(e) => handleChangeDiscount('percent', e)}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        label='Hodnota'
                                        value={item?.discount?.lenses ? item?.discount.lenses[discountType] : ''}
                                        onChange={(e) => {
                                            addLensesDiscount(idx, discountType, e.target.value)
                                        }}
                                    />
                                </div>
                            </div>}
                        </DiscountContainer>
                </OptionsContainer>
            )}
        </CartTableRow>
    )
}

export default CartLensesRow
