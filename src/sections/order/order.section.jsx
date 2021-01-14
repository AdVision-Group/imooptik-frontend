import React, { useContext, useState, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { UserContext } from '../../context/user/user.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { useParams } from 'react-router-dom'

import InputRow from '../../components/product-input-row/product-input-row.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import CustomFormSwitch from '../../components/custom-form-switch/custom-form-switch.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import OrderProductOverview from '../../components/order-product-overview/order-product-overview.component'

import Popup from "../../components/popup/pop-up.component"

import EshopSubSecton from './sub-sections/eshop/eshop.sub-section'
import LensesSubSection from './sub-sections/lenses/lenses.sub-section'
import DioptersSubSection from './sub-sections/diopters/diopters.seb-section'
import SummarySubSection from './sub-sections/summary/summary.sub-section'

import Fuse from 'fuse.js'


import {
    Header,
    SubmitOrderButton,
    Container,
    ProductContainer,
    AddProductButton,
    SearchContainer,
    SearchButton,
} from './order.styles'

const OrderSection = () => {
    const { userId } = useParams()
    const [searchQuery, setSearchQuery] = useState('')
    const [productsToOrder, setProductsToOrder] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [selectedLenses, setSelectedLenses] = useState(null)
    const [combinedProduct, setCombinedProduct] = useState({
        lenses: {
            diopters: [
                2,
                2
            ],
            distance: [
                0,
                0
            ],
            cylinder: [
                0,
                0
            ],
            cylinderAxes: [
                0,
                0
            ]
        },
        // "_id": "5ff46112adf1801b447ff3cd",
        product: "",
        lens: "",
        price: 2220,
        // "__v": 0
    })

    const steps = [
        'eshop',
        'lenses',
        'diopters',
        'summary'
    ]

    const paymentOptions = [
        {
            name: "Hotovosť"
        },
        {
            name: "Karta"
        },
        {
            name: "Záloha"
        }
    ]
    const [selectedPayment, setSelectedPayment] = useState(0)

    const [activeStep, setActiveStep] = useState('eshop')

    const {
        closeModal,
        isLoading,
        showModal,
        message
    } = useContext(LoadingModalContext)

    const {
        user,
        getUser,
        handleChange
    } = useContext(UserContext)

    const {
        getProducts,
        getLenses,
        products,
        lensesArr
    } = useContext(WarehouseContext)

    const handleChangeStep = (idx) => {
        setActiveStep(steps[idx])
    }

    const handleChangePayment = (e, idx) => {
        e.preventDefault()
        setSelectedPayment(idx)
    }

    const handleClick = (e, productToAdd) => {
        e.preventDefault()
        // setProductsToOrder([
        //     ...productsToOrder,
        //     productToAdd
        // ])
        setSelectedProduct(productToAdd)
        setCombinedProduct({
            ...combinedProduct,
            product: productToAdd._id
        })
        setActiveStep(steps[1])
    }

    const handleSelectLenses = (e, lensesToAdd) => {
        console.log(lensesToAdd)
        e.preventDefault()
        setSelectedLenses(lensesToAdd)
        setCombinedProduct({
            ...combinedProduct,
            lens: lensesToAdd._id
        })
        setActiveStep(steps[2])
    }

    const handleRemoveProduct = (e, productToRemove, idx) => {
        e.preventDefault()
        setProductsToOrder(productsToOrder.filter((product, index) => index !== idx))
    }

    useEffect(() => {
        getUser(userId)
        if (!products) {
            getProducts()
        }
        if (!lensesArr) {
            getLenses()
        }
    }, [])

    useEffect(() => {
        if (products) {
            setAllProducts([
                ...products,
            ])
        }
    }, [products])

    const fuse = new Fuse(allProducts, {
        keys: [
            'name',
            'brand',
            'description'
        ]
    })

    useEffect(() => {
        const results = fuse.search(searchQuery)
        if (results.length > 0) {
            setAllProducts(results.map(result => result.item))
        }
        if (!searchQuery) {
            if (products) {
                setAllProducts([
                    ...products,
                ])
            }

        }
    }, [searchQuery])

    if (!user._id || showModal) return <Popup loading={isLoading} title={message} close={closeModal} />

    return (
        <section>
            <Header>
                <div>
                    <h1>Pridať objednávku</h1>
                </div>
                <div>
                    <SubmitOrderButton>Pridať objednávku</SubmitOrderButton>
                </div>
            </Header>
            <ScrollContainer>
                <Container>
                    <h2>Informácie o zákazníkovovi</h2>
                    <InputRow
                        label="Identifikačné číslo zákaznika"
                        example=''
                    >
                        <CustomInput
                            label="ID zákaznika*"
                            type='text'
                            name='id'
                            value={user._id}
                            handleChange={(e) => handleChange(e)}
                            required
                        />
                    </InputRow>
                    <InputRow
                        label="Meno a priezvisko zákaznika"
                        example=''
                    >
                        <CustomInput
                            label="Meno priezvisko*"
                            type='text'
                            name='name'
                            value={user.name}
                            handleChange={(e) => handleChange(e)}
                            required
                        />
                    </InputRow>
                </Container>
                <Container>
                    <h2>Spôsob platby</h2>
                    <CustomFormSwitch
                        items={paymentOptions}
                        title=""
                        activeIndex={selectedPayment}
                        handleClick={handleChangePayment}
                    />
                </Container>
                <Container>
                    <SearchContainer>
                        <h2>Objednávka</h2>
                    </SearchContainer>
                    <ProductContainer>
                        {productsToOrder.length > 0 ? productsToOrder.map((product, idx) => (
                            <OrderProductOverview key={idx} product={product} handleRemoveProduct={(e) => handleRemoveProduct(e, product, idx)} />
                        )) : (
                                <div>Žiadné produkty</div>
                            )}
                    </ProductContainer>
                    <AddProductButton>Pridať produkt</AddProductButton>
                </Container>


                <Container>
                    {activeStep === steps[0] ? (
                        <EshopSubSecton
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            allProducts={allProducts}
                            handleClick={handleClick}
                        />
                    ) : activeStep === steps[1] ? (
                        <LensesSubSection
                            lenses={lensesArr}
                            handleChangeStep={handleChangeStep}
                            handleSelectLenses={handleSelectLenses}
                        />
                    ) : activeStep === steps[2] ? (
                        <DioptersSubSection
                            handleChangeStep={handleChangeStep}
                            combinedProduct={combinedProduct}
                        />
                    ) : (
                                    <SummarySubSection
                                        handleRemoveProduct={handleRemoveProduct}
                                        handleChangeStep={handleChangeStep}
                                        selectedProduct={selectedProduct}
                                        selectedLenses={selectedLenses}
                                        combinedProduct={combinedProduct}
                                    />
                                )}

                </Container>

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
