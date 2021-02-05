import React, { useState, useContext, useEffect } from 'react'
import { Prompt } from 'react-router-dom'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import CustomInput from '../custom-input/custom-input.component'

import { formatPrice } from '../../utils/warehouse.utils'

import {
    ModalContainer,
    Modal,
    CloseButton,
    ProductContainer,
    AddButton,
    DiscountCheckboxContainer,
    DiscountCheckbox,
    CustomSelect,
    ContactLensesParameterContainer,
    LensesContainer,
    LensesImg
} from './modal-finish-combined-product.styles'

const FinishCombinedProductModal = ({ close, order, addCombineProduct, next }) => {
    const { setIsLoading, getMessage, setShowModal, closeModal } = useContext(LoadingModalContext)
    const { isAdmin, token } = useContext(AuthContext)
    const { product, lenses } = order
    const { contactLenses } = product

    const [combinedProductDetails, setCombinedProductDetails] = useState({})
    const [productDiscount, setProductDiscount] = useState({})
    const [lensesDiscount, setLensesDiscount] = useState({})

    const [discountType, setDiscountType] = useState("flat")
    const [lensDiscountType, setLensDiscountType] = useState("flat")
    const [includeDiscount, setIncludeDiscount] = useState(false)
    const [includeLensDiscount, setIncludeLensDiscount] = useState(false)
    const [hasChanged, setHasChanged] = useState(false)

    console.log(order)
    console.log(productDiscount)
    console.log(lenses)

    const handleChangeDiscount = (type) => {
        setProductDiscount({})
        setDiscountType(type)
    }
    const handleChangeLensesDiscount = (type) => {
        setLensesDiscount({})
        setLensDiscountType(type)
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

    const handleLensesDiscountChange = (e) => {
        const { name, value } = e.target


        if (value === '') {
            delete lensesDiscount[name]

            setLensesDiscount({
                ...lensesDiscount,
            })
            return
        }

        setLensesDiscount({
            ...lensesDiscount,
            [name]: value
        })
    }

    const handleContactLensesParameterChange = (e, idx, originalArr) => {
        const { name, value } = e.target
        let arr = originalArr
        arr[idx] = value === '' ? 1001 : Number(value)

        setCombinedProductDetails({
            ...combinedProductDetails,
            contactLenses: {
                ...combinedProductDetails.contactLenses,
                [name]: arr
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setShowModal(true)

        let combinedProduct = {}

        if (product.type) {
            if (product.type === 5) {
                combinedProduct = {
                    product: order.product._id,
                }
            }

            if (product.type === 3) {
                combinedProduct = {
                    product: order.product._id,
                    contactLenses: combinedProductDetails.contactLenses
                }
            }

            else {
                combinedProduct = {
                    product: order.product._id,
                    // lenses: 
                }
                if (order.lenses) {
                    combinedProduct = {
                        product: order.product._id,
                        lens: order.lenses._id,
                    }
                }
            }

            if (includeDiscount) {
                if (discountType === "flat") {
                    combinedProduct = {
                        ...combinedProduct,
                        discount: {
                            product: {
                                flat: formatPrice(productDiscount.flat)
                            }
                        }
                    }
                } else {
                    combinedProduct = {
                        ...combinedProduct,
                        discount: {
                            product: {
                                ...productDiscount
                            }
                        }
                    }
                }
                if (includeLensDiscount) {
                    if (lensDiscountType === "flat") {
                        combinedProduct = {
                            ...combinedProduct,
                            discount: {
                                product: {
                                    flat: formatPrice(productDiscount.flat)
                                },
                                lenses: {
                                    flat: formatPrice(lensesDiscount.flat)
                                }
                            }
                        }
                    } else {
                        combinedProduct = {
                            ...combinedProduct,
                            discount: {
                                product: {
                                    ...productDiscount
                                },
                                lenses: {
                                    ...lensesDiscount
                                }
                            }
                        }
                    }
                }
            } else {
                if (includeLensDiscount) {
                    if (lensDiscountType === "flat") {
                        combinedProduct = {
                            ...combinedProduct,
                            discount: {
                                lenses: {
                                    flat: formatPrice(lensesDiscount.flat)
                                }
                            }
                        }
                    } else {
                        combinedProduct = {
                            ...combinedProduct,
                            discount: {
                                lenses: {
                                    ...lensesDiscount
                                }
                            }
                        }
                    }
                }
            }
        }

        console.log("COMBINED PRODUCT BEFORE SEND")
        console.log(combinedProduct)


        const raw = JSON.stringify(combinedProduct)

        const myHeaders = new Headers();
        myHeaders.append("auth-token", token);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            // /api/store/combinedProducts
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/combinedProducts`, requestOptions)
            const data = await response.json()

            console.log(data)
            if (data.combinedProduct) {
                addCombineProduct(data.combinedProduct)
                closeModal()
                next()
            }

            setIsLoading(false)
            getMessage(data.message)

        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }

    }

    useEffect(() => {
        if (product.type) {
            if (product.type === 3) {
                setCombinedProductDetails({
                    contactLenses: {
                        curve: [product.contactLenses.allowedCurves[0], product.contactLenses.allowedCurves[0]],
                        diameter: [product.contactLenses.allowedDiameters[0], product.contactLenses.allowedDiameters[0]],
                        diopters: [0, 0]
                    }
                })
            }
        }
    }, [product])

    // unmout reset
    useEffect(() => {
        return () => {
            setCombinedProductDetails({})
            setProductDiscount({})
            // setLensesDiscount({})

            setDiscountType("flat")
            setIncludeDiscount(false)
            setHasChanged(false)
        }
    }, [])


    return (
        <ModalContainer>
            <Prompt
                when={hasChanged}
                message={"Chcete opustiť túto stránku?"}
            />
            <CloseButton onClick={close} />
            <Modal>
                <h2>Produkt ktory chcete pridať</h2>
                <ProductContainer>
                    <div>
                        {product.image && <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${product.image.imagePath}`} alt={product.image.alt} />}
                    </div>

                    <div>
                        <h4>{product.name}</h4>
                        <span>{product.eanCode}</span>
                    </div>

                    <div>
                        <p>{(product.price / 100).toFixed(2)}€</p>
                    </div>
                </ProductContainer>
                {lenses && <LensesContainer >
                    <h4>{lenses.name}</h4>
                    <LensesImg>
                        {/* <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/uploads/${lenses.image.imagePath}`} alt={lenses.image.alt} /> */}
                    </LensesImg>
                    <p>{lenses.description}</p>
                    {lenses.dioptersRange && <p>{`Dioptrie od ${lenses.dioptersRange[0]} do ${lenses.dioptersRange[1]}`}</p>}
                    {lenses.cylinderRange && <p>{`Cylinder  od ${lenses.cylinderRange[0]} do ${lenses.cylinderRange[1]}`}</p>}
                    <h5>{(lenses.price / 100).toFixed(2)}€</h5>
                </LensesContainer>}



                {/* CONTACT LENSES FORM */}
                {combinedProductDetails.contactLenses && product.type === 3 && (
                    <ContactLensesParameterContainer>
                        <div>
                            <h4>Ľave oko</h4>
                            <CustomSelect
                                name='curve'
                                value={combinedProductDetails.contactLenses.curve[0]}
                                onChange={(e) => handleContactLensesParameterChange(e, 0, combinedProductDetails.contactLenses.curve)}
                            >
                                {product.contactLenses.allowedCurves.map((value, idx) => (
                                    <option key={idx} value={value}>{value}</option>
                                ))}
                            </CustomSelect>
                            <CustomSelect
                                name='diameter'
                                value={combinedProductDetails.contactLenses.diameter[0]}
                                onChange={(e) => handleContactLensesParameterChange(e, 0, combinedProductDetails.contactLenses.diameter)}
                            >
                                {product.contactLenses.allowedDiameters.map((value, idx) => (
                                    <option key={idx} value={value}>{value}</option>
                                ))}
                            </CustomSelect>

                            <CustomInput
                                name='diopters'

                                type='number'
                                value={combinedProductDetails.contactLenses.diopters[0]}
                                min={contactLenses.dioptersRange[0]}
                                max={contactLenses.dioptersRange[1]}
                                step={.25}
                                onChange={(e) => handleContactLensesParameterChange(e, 0, combinedProductDetails.contactLenses.diopters)}
                            />
                        </div>
                        <div>
                            <h4>Pravé oko</h4>
                            <CustomSelect
                                name='curve'
                                value={combinedProductDetails.contactLenses.curve[1]}
                                onChange={(e) => handleContactLensesParameterChange(e, 1, combinedProductDetails.contactLenses.curve)}
                            >
                                {product.contactLenses.allowedCurves.map((value, idx) => (
                                    <option key={idx} value={value}>{value}</option>
                                ))}
                            </CustomSelect>
                            <CustomSelect
                                name='diameter'
                                value={combinedProductDetails.contactLenses.diameter[1]}
                                onChange={(e) => handleContactLensesParameterChange(e, 1, combinedProductDetails.contactLenses.diameter)}
                            >
                                {product.contactLenses.allowedDiameters.map((value, idx) => (
                                    <option key={idx} value={value}>{value}</option>
                                ))}
                            </CustomSelect>
                            <CustomInput
                                type='number'
                                value={combinedProductDetails.contactLenses.diopters[1]}
                                min={contactLenses.dioptersRange[0]}
                                max={contactLenses.dioptersRange[1]}
                                step={.25}
                                name='diopters'
                                onChange={(e) => handleContactLensesParameterChange(e, 1, combinedProductDetails.contactLenses.diopters)}
                            />
                        </div>
                    </ContactLensesParameterContainer>
                )}

                {/* DISCOUNT FORM */}
                {isAdmin && <div>
                    <DiscountCheckboxContainer>
                        <input id="discount" name='discount' type='checkbox' value={includeDiscount} onChange={() => setIncludeDiscount(!includeDiscount)} />
                        <label htmlFor='discount'>Pridať zlavu pre produkt</label>
                    </DiscountCheckboxContainer>
                    {includeDiscount && <div>
                        <h4>Zlava pre produkt</h4>
                        <div>
                            <DiscountCheckbox
                                label={"Fixná suma"}
                                value={"flat"}
                                name='flat'
                                isActive={discountType === 'flat'}
                                handleClick={() => handleChangeDiscount('flat')}
                            />
                            <DiscountCheckbox
                                label={"Percertá"}
                                value={"percent"}
                                name='percent'
                                isActive={discountType === 'percent'}
                                handleClick={() => handleChangeDiscount('percent')}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label='Hodnota'
                                value={discountType === 'flat' ? productDiscount.flat ?? "" : productDiscount.percent ?? ""}
                                onChange={(e) => {
                                    handleDiscountChange({
                                        target: {
                                            name: discountType,
                                            value: e.target.value
                                        }
                                    }, product.type)
                                }}
                            />
                        </div>
                    </div>}
                </div>}
                {isAdmin && order?.lenses && <div>
                    <DiscountCheckboxContainer>
                        <input id="lensdiscount" name='lensdiscount' type='checkbox' value={includeLensDiscount} onChange={() => setIncludeLensDiscount(!includeLensDiscount)} />
                        <label htmlFor='lensdiscount'>Pridať zlavu pre šošovky</label>
                    </DiscountCheckboxContainer>
                    {includeLensDiscount && <div>
                        <h4>Zlava pre šošovky</h4>
                        <div>
                            <DiscountCheckbox
                                label={"Fixná suma"}
                                value={"flat"}
                                name='flat'
                                isActive={lensDiscountType === 'flat'}
                                handleClick={() => handleChangeLensesDiscount('flat')}
                            />
                            <DiscountCheckbox
                                label={"Percertá"}
                                value={"percent"}
                                name='percent'
                                isActive={lensDiscountType === 'percent'}
                                handleClick={() => handleChangeLensesDiscount('percent')}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label='Hodnota'
                                value={lensDiscountType === 'flat' ? lensesDiscount.flat ?? "" : lensesDiscount.percent ?? ""}
                                onChange={(e) => {
                                    handleLensesDiscountChange({
                                        target: {
                                            name: lensDiscountType,
                                            value: e.target.value
                                        }
                                    })
                                }}
                            />
                        </div>
                    </div>}
                </div>}

                <AddButton onClick={handleSubmit}>Pridať do objednávky</AddButton>
            </Modal>
        </ModalContainer>
    )
}

export default FinishCombinedProductModal
