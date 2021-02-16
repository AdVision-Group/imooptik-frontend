import React, { useState, useEffect } from 'react'

import CustomInput from '../custom-input/custom-input.component'

import {
    AiFillCaretDown
} from 'react-icons/ai'

import {
    CartTableRow,
    TableCol,
    IconContainer,
    DiscountContainer,
    DiscountCheckbox,
    OptionsContainer,
    ContactLensesParameterContainer,
    CustomSelect
} from './order-cart-row.styles'

const CartRow = ({ item, idx, addProperties }) => {
    const [showRow, setShowRow] = useState(false)
    const [discountType, setDiscountType] = useState('')
    const [productDiscount, setProductDiscount] = useState(null)
    const [contactLenses, setContactLenses] = useState({})


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

    useEffect(() => {
        addProperties(idx, {
            ...(productDiscount) && { discount: { ...productDiscount } },
            ...(item.product.type === 3) && { contactLenses: { ...contactLenses } }
        })
    }, [productDiscount, contactLenses])

    console.log("COMBINED PRODUCT DETAILS")
    console.log(contactLenses)
    console.log("PRODUCT DISCOUNT")
    console.log(productDiscount)

    return (
        <CartTableRow >
            <TableCol>{idx + 1}</TableCol>
            <TableCol>{item.product.name}</TableCol>
            <TableCol>{(item.product.price / 100).toFixed(2)}€</TableCol>
            <TableCol>
                <IconContainer onClick={() => handleClick(showRow)}>
                    <AiFillCaretDown />
                </IconContainer>
            </TableCol>
            {showRow && (
                <OptionsContainer>

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

export default CartRow
