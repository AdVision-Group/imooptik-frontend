import React, { useState, useContext, useEffect } from 'react'
import { Prompt } from 'react-router-dom'
import { AuthContext } from '../../context/auth/auth.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import CustomInput from '../custom-input/custom-input.component'

import {
    ModalContainer,
    Modal,
    CloseButton,
    ProductContainer,
    AddButton,
    DiscountCheckboxContainer,
    DiscountCheckbox
} from './modal-finish-combined-product.styles'

const FinishCombinedProductModal = ({ close, order, addCombineProduct, next }) => {
    const { setIsLoading, getMessage, setShowModal } = useContext(LoadingModalContext)
    const { isAdmin, token } = useContext(AuthContext)
    const { product } = order

    const [combinedProductDetails, setCombinedProductDetails] = useState({})
    const [productDiscount, setProductDiscount] = useState({})

    const [discountType, setDiscountType] = useState("flat")
    const [includeDiscount, setIncludeDiscount] = useState(false)
    const [hasChanged, setHasChanged] = useState(false)

    console.log(order)
    console.log(productDiscount)

    const handleChangeDiscount = (type) => {
        setProductDiscount({})
        setDiscountType(type)
    }

    const handleDiscountChange = (e, type) => {
        const { name, value } = e.target


        if (value === '') {
            delete productDiscount[name]

            setProductDiscount({
                ...productDiscount,
            })
            return
        }

        if (type) {
            setProductDiscount({
                ...productDiscount,
                [name]: value
            })
        } else {
            setProductDiscount({
                ...productDiscount,
                [name]: value
            })
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        let combinedProduct = {}

        console.log("COMBINED PRODUCT BEFORE SEND")
        if (product.type) {
            if (product.type === 5) {
                combinedProduct = {
                    product: order.product._id,
                }
            }

            if (includeDiscount) {
                if (discountType === 'flat') {
                    combinedProduct = {
                        ...combinedProduct,
                        discount: {
                            product: {
                                ...productDiscount
                            }
                        }
                    }
                } else {
                    if (discountType === 'percent') {
                        combinedProduct = {
                            ...combinedProduct,
                            discount: {
                                product: {
                                    ...productDiscount
                                }
                            }
                        }
                    }
                }
            }
        }

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
                addCombineProduct({
                    product: order.product,
                    combinedProduct: data.combinedProduct
                })
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
                <h3>Produkt ktory chcete pridať</h3>
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

                {isAdmin && <div>
                    <DiscountCheckboxContainer>
                        <input id="discount" name='discount' type='checkbox' value={includeDiscount} onChange={() => setIncludeDiscount(!includeDiscount)} />
                        <label htmlFor='discount'>Pridať zlavu</label>
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

                <AddButton onClick={handleSubmit}>Pridať do objednávky</AddButton>
            </Modal>
        </ModalContainer>
    )
}

export default FinishCombinedProductModal
