import React, { useState, useEffect, useContext } from 'react'
import { OrderContext } from '../../context/order/order.context'

import CustomInput from '../custom-input/custom-input.component'

import {
    AiFillCaretDown
} from 'react-icons/ai'

import {
    CartTableRow,
    TableCol,
    IconContainer,
    OptionsContainer,
    ContactLensesParameterContainer,
    CustomSelect,
    EmptyTittle
} from './order-cart-row.styles'

const CartRow = ({ item, idx }) => {
    const { deleteProduct, addProductDiscount, addLensesParameters } = useContext(OrderContext)

    const [showRow, setShowRow] = useState(false)
    const [contactLenses, setContactLenses] = useState({})


    const handleClick = () => {
        setShowRow(prevValue => !prevValue)
    }

    const handleContactLensesParameterChange = (e, idx, originalArr) => {
        const { name, value } = e.target
        let arr = originalArr
        arr[idx] = value === '' ? 1001 : Number(value)

        setContactLenses({
            ...contactLenses,
            [name]: arr
        })
    }

    useEffect(() => {
        addLensesParameters(idx, contactLenses)
    }, [contactLenses])

    useEffect(() => {
        if (item.product.type) {
            if (item.product.type === 3) {
                setContactLenses({
                    curve: [item.product.contactLenses.allowedCurves[0], item.product.contactLenses.allowedCurves[0]],
                    diameter: [item.product.contactLenses.allowedDiameters[0], item.product.contactLenses.allowedDiameters[0]],
                    diopters: [0, 0]
                })
            }
        }
    }, [item.product])

    return (
        <CartTableRow >
            <TableCol onClick={() => deleteProduct(item)}>{idx + 1}</TableCol>
            <TableCol>
                {item?.product?.name ? item?.product?.name : "Šošovky"}
            </TableCol>
            <TableCol>
                {item?.product?.price ? `${(item?.product?.price / 100).toFixed(2)}€` : ""}
            </TableCol>
            <TableCol>
                <div>
                    <input
                        value={item?.discount?.product ? item?.discount.product.percent : ''}
                        onChange={(e) => addProductDiscount(idx, e.target.value)}
                    />
                </div>
            </TableCol>
            <TableCol>
                <IconContainer onClick={handleClick}>
                    <AiFillCaretDown />
                </IconContainer>
            </TableCol>
            {showRow && (
                <OptionsContainer>
                    {item.product.type !== 3 && (
                        <div>
                            <EmptyTittle>Žiadne možnosti</EmptyTittle>
                        </div>
                    )}
                    {item.product.type === 3 && (
                        <ContactLensesParameterContainer>
                            <div>
                                <h4>Ľave oko</h4>
                                <CustomSelect
                                    name='curve'
                                    value={contactLenses.curve[0]}
                                    onChange={(e) => handleContactLensesParameterChange(e, 0, contactLenses.curve)}
                                >
                                    {item.product.contactLenses.allowedCurves.map((value, idx) => (
                                        <option key={idx} value={value}>{value}</option>
                                    ))}
                                </CustomSelect>
                                <CustomSelect
                                    name='diameter'
                                    value={contactLenses.diameter[0]}
                                    onChange={(e) => handleContactLensesParameterChange(e, 0, contactLenses.diameter)}
                                >
                                    {item.product.contactLenses.allowedDiameters.map((value, idx) => (
                                        <option key={idx} value={value}>{value}</option>
                                    ))}
                                </CustomSelect>

                                <CustomInput
                                    name='diopters'

                                    type='number'
                                    value={contactLenses.diopters[0]}
                                    min={item.product.contactLenses.dioptersRange[0]}
                                    max={item.product.contactLenses.dioptersRange[1]}
                                    step={.25}
                                    onChange={(e) => handleContactLensesParameterChange(e, 0, contactLenses.diopters)}
                                />
                            </div>
                            <div>
                                <h4>Pravé oko</h4>
                                <CustomSelect
                                    name='curve'
                                    value={contactLenses.curve[1]}
                                    onChange={(e) => handleContactLensesParameterChange(e, 1, contactLenses.curve)}
                                >
                                    {item.product.contactLenses.allowedCurves.map((value, idx) => (
                                        <option key={idx} value={value}>{value}</option>
                                    ))}
                                </CustomSelect>
                                <CustomSelect
                                    name='diameter'
                                    value={contactLenses.diameter[1]}
                                    onChange={(e) => handleContactLensesParameterChange(e, 1, contactLenses.diameter)}
                                >
                                    {item.product.contactLenses.allowedDiameters.map((value, idx) => (
                                        <option key={idx} value={value}>{value}</option>
                                    ))}
                                </CustomSelect>
                                <CustomInput
                                    type='number'
                                    value={contactLenses.diopters[1]}
                                    min={item.product.contactLenses.dioptersRange[0]}
                                    max={item.product.contactLenses.dioptersRange[1]}
                                    step={.25}
                                    name='diopters'
                                    onChange={(e) => handleContactLensesParameterChange(e, 1, contactLenses.diopters)}
                                />
                            </div>
                        </ContactLensesParameterContainer>
                    )}
                </OptionsContainer>
            )}
        </CartTableRow>
    )
}

export default CartRow
