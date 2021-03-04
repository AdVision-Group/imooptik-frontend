import React, { createContext, useState, useContext } from 'react'
import { LoadingModalContext } from '../loading-modal/loading-modal.contenxt'
import { AuthContext } from '../auth/auth.context'

export const OrderContext = createContext({
    step: "",
    order: {},
    cart: [],
    selectedProduct: null,
    setOrder: () => { },
    addUser: () => { },
    addProduct: () => { },
    addProductDiscount: () => { },
    addLensesParameters: () => { },
    deleteProduct: () => { },
    addLenses: () => { },
    addLensesDiscount: () => { },
    resetOrder: () => { },
    changeStep: () => { },
    selectProduct: () => { },
    createCombinedProducts: () => { },
    incrementQuantity: () => { },
    decrementQuantity: () => { },
})

const OrderProvider = ({ children }) => {
    const { token } = useContext(AuthContext)
    const { closeModal, getMessage, setIsLoading, setShowModal } = useContext(LoadingModalContext)
    const [step, setStep] = useState('select-user')
    const [order, setOrder] = useState({})
    const [cart, setCart] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)

    const addUser = (user) => {
        setOrder({
            ...order,
            user: user
        })
    }

    const addCombinedProducts = (combinedProductsArr) => {

        setOrder({
            ...order,
            combinedProducts: [
                // ...(order?.combinedProducts) && { ...order?.combinedProducts },
                ...combinedProductsArr
            ]
        })
    }

    const selectProduct = (productIdx, event) => {
        if (selectedProduct === productIdx) {
            setSelectedProduct(null)
        } else {
            setSelectedProduct(productIdx)
        }
    }

    const addProduct = (productObj) => {
        setCart(prevValue => [
            ...prevValue,
            { product: productObj, }
        ])
    }

    const addProductDiscount = (idx, value) => {
        if (value === "") {
            const newCart = cart.map((item, index) => {
                if (idx === index) {
                    if (Object.keys(item.discount).length > 1) {
                        delete item.discount["product"]
                        return item
                    } else {
                        delete item["discount"]
                        return item
                    }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            const newCart = cart.map((item, index) => {
                if (idx === index) {
                    return {
                        ...item,
                        discount: {
                            product: {
                                percent: value
                            }
                        }
                    }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
    }

    const addLensesParameters = (idx, lensesObj) => {
        const newCart = cart.map((item, index) => {
            if (idx === index) {
                if (Object.keys(lensesObj).length > 0) {
                    return {
                        ...item,
                        lenses: {
                            ...lensesObj
                        }
                    }
                } else {
                    return item
                }
            } else {
                return item
            }
        })
        setCart(newCart)
    }

    const deleteProduct = (productIdx, handleSelectProduct) => {
        const newCart = cart.filter((item, idx) => idx !== productIdx)
        setCart(newCart)
        if (!handleSelectProduct) return
        setTimeout(() => {
            handleSelectProduct(null)

        }, 100)
    }

    const addLenses = (lensesObj) => {
        if (lensesObj === null && selectedProduct === null) return
        if (selectedProduct !== null) {
            const newCart = cart.map((item, idx) => {
                if (idx === selectedProduct) {
                    if (lensesObj === null) {
                        delete item["lensesQuant"]
                        delete item["lens"]
                        return item
                    } else {
                        return ({
                            ...item,
                            lens: lensesObj,
                            lensesQuant: 2
                        })
                    }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart(prevValue => [
                ...prevValue,
                {
                    product: {
                        _id: Math.floor(Math.random() * 10),
                        isPseudo: true
                    },
                    lens: lensesObj,
                    lensesQuant: 1
                }
            ])
        }

        setSelectedProduct(null)
    }

    const incrementQuantity = (prevValue, idx, event) => {
        event.stopPropagation()
        const newCart = cart.map((item, index) => {
            if (idx === index) {
                return ({
                    ...item,
                    lensesQuant: prevValue + 1
                })
            } else {
                return item
            }
        })
        setCart(newCart)
    }


    const decrementQuantity = (prevValue, idx, event) => {
        event.stopPropagation()

        if (prevValue === 1) return
        const newCart = cart.map((item, index) => {
            if (idx === index) {
                return ({
                    ...item,
                    lensesQuant: prevValue - 1
                })
            } else {
                return item
            }
        })
        setCart(newCart)
    }


    const addLensesDiscount = (idx, value) => {
        if (value === "") {
            const newCart = cart.map((item, index) => {
                if (idx === index) {
                    if (Object.keys(item.discount).length > 1) {
                        delete item.discount["lenses"]
                        return item
                    } else {
                        delete item["discount"]
                        return item
                    }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            const newCart = cart.map((item, index) => {
                if (idx === index) {
                    return {
                        ...item,
                        discount: {
                            ...item.discount,
                            lenses: {
                                percent: value
                            }
                        }
                    }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
    }

    const resetOrder = () => {
        setOrder({})
    }

    const changeStep = (newStepString) => {
        setStep(newStepString)
    }

    const createCombinedProducts = async () => {
        if (cart.length === 0) return
        setIsLoading(true)
        setShowModal(true)

        const combinedProductsArr = cart.map(item => ({
            product: item.product.isPseudo ? "pseudo" : item.product._id,
            ...(item.discount) && { discount: { ...item.discount } },
            ...(item.lens) && { lens: item.lens._id },
            ...(item.lensesQuant) && { lensesQuant: item.lensesQuant },
            // ...(item.lens && order.user) && { lenses: order.user.lenses },
            ...(item.lenses) && { contactLenses: item.lenses }
        }))

        const myHeaders = new Headers();
        myHeaders.append("auth-token", token);
        myHeaders.append("Content-Type", "application/json");


        const raw = JSON.stringify({
            combinedProducts: combinedProductsArr
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            // /api/store/combinedProducts/createMany
            const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/store/combinedProducts/createMany`, requestOptions)
            const data = await response.json()

            if (data.combinedProducts) {
                addCombinedProducts(data.combinedProducts)
                closeModal()
                changeStep("summary")
                return
            }

            setIsLoading(false)
            getMessage(data.messageSK)
        } catch (err) {
            console.log(err)
            getMessage("Nieco sa pokazilo")
            setIsLoading(false)
        }
    }

    return (
        <OrderContext.Provider
            value={{
                step,
                order,
                cart,
                selectedProduct,
                setOrder,
                addUser,
                addProduct,
                addProductDiscount,
                addLensesParameters,
                deleteProduct,
                addLenses,
                addLensesDiscount,
                resetOrder,
                changeStep,
                selectProduct,
                createCombinedProducts,
                incrementQuantity,
                decrementQuantity,
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider