import React, { useContext, useState, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { UserContext } from '../../context/user/user.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { OrdersContext } from '../../context/orders/orders.context'
import { useParams } from 'react-router-dom'

import InputRow from '../../components/product-input-row/product-input-row.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import CustomFormSwitch from '../../components/custom-form-switch/custom-form-switch.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
// import OrderProductOverview from '../../components/order-product-overview/order-product-overview.component'
// import CustomCheckBox from '../../components/custom-checkbox/custom-checkbox.component'
import CombinedProductOverview from '../../components/combined-product-overview/combined-product-overview.component'
import OrderAddressForm from '../../components/order-address-form/order-address-form.component'

import Popup from "../../components/popup/pop-up.component"

import EshopSubSecton from './sub-sections/eshop/eshop.sub-section'
import LensesSubSection from './sub-sections/lenses/lenses.sub-section'
import DioptersSubSection from './sub-sections/diopters/diopters.seb-section'
import SummarySubSection from './sub-sections/summary/summary.sub-section'

import Fuse from 'fuse.js'

import { retailNames } from '../../context/warehouse/warehouse.utils'

import {
    Header,
    SubmitOrderButton,
    Container,
    ProductContainer,
    // AddProductButton,
    SearchContainer,
    // SearchButton,
    AddAddressButton,
    DifferentAddress,
    UserList
} from './order.styles'

const OrderSection = () => {
    const { userId, orderId } = useParams()
    const [searchQuery, setSearchQuery] = useState('')
    const [userSearchResult, setUserSearchResult] = useState([])
    const [showAddressForm, setShowAddressForm] = useState(false)
    const [productsSearchResult, setProductsSearchResult] = useState([])

    const {
        closeModal,
        isLoading,
        showModal,
        message
    } = useContext(LoadingModalContext)

    const {
        users,
        user,
        getUser,
        getUsers,
        // handleChange
    } = useContext(UserContext)

    const {
        getProducts,
        getLenses,
        products,
        lensesArr
    } = useContext(WarehouseContext)

    const {
        selectedUser,
        setSelectedUser,
        hasAddress,
        isDifferentAddress,
        setIsDifferentAddress,
        overwrite,
        coupon,
        setCoupon,
        handleOverwriteChange,
        handleChangeSelectedUser,
        handleSelectUser,
        isSearchingUser,
        paymentOptions,
        steps,
        activeStep,
        handleChangePayment,
        handleChangeStep,
        selectedPayment,
        deposit,
        setDeposit,
        handleSelectLenses,
        handleSelectProduct,
        combinedProduct,
        selectedLenses,
        selectedProduct,
        productsToOrder,
        handleRemoveProduct,
        handleParameterChange,
        createOrder,
        createCombinedProduct,
        getUserOrder,
        resetOrder,
        isUpdating,
        status,
        orderPremises
    } = useContext(OrdersContext)

    useEffect(() => {
        if (!users) {
            getUsers()
        }
    }, [users])

    useEffect(() => {
        if (userId !== 'nova-objednavka') {
            getUser(userId)
        }
        if (orderId) {
            getUserOrder(orderId)
        }
        if (!products) {
            getProducts()
        }
        if (!lensesArr) {
            getLenses()
        }
    }, [products, lensesArr])

    useEffect(() => {
        if (userId !== 'nova-objednavka') {
            if (user) {
                setSelectedUser({
                    ...user
                })
            }
        }
    }, [user])

    useEffect(() => {
        if (users) {
            const userFuse = new Fuse(users, {
                keys: [
                    'name',
                    'email',
                ]
            })
            setUserSearchResult(userFuse.search(selectedUser.name))
        }

    }, [selectedUser.name])

    useEffect(() => {
        if (users) {
            const userFuse = new Fuse(users, {
                keys: [
                    'name',
                    'email',
                ]
            })
            setUserSearchResult(userFuse.search(selectedUser.email))
        }

    }, [selectedUser.email])
    useEffect(() => {
        if (searchQuery.length) {
            const userFuse = new Fuse(products, {
                keys: [
                    'name',
                    'brand',
                    'eanCode',
                    'description'
                ]
            })

            const results = userFuse.search(searchQuery)

            console.log("result")
            console.log(results)
            console.log("result")
            setProductsSearchResult(results.map((result) => ({
                ...result.item
            })))
        }

    }, [searchQuery])

    console.log(productsSearchResult)

    useEffect(() => {
        return () => {
            resetOrder()
        }
    }, [])

    if (showModal || !products || !lensesArr) return <Popup loading={isLoading} title={message} close={closeModal} />

    return (
        <section>
            <Header>
                <div>
                    <h1>{isUpdating ? "Prehľad objednávky" : "Pridať objednávku"}</h1>

                </div>
                <div>
                    {!isUpdating && <SubmitOrderButton onClick={() => createOrder(selectedUser, productsToOrder)}>Pridať objednávku</SubmitOrderButton>}
                </div>
            </Header>
            <ScrollContainer>
                {isUpdating && <Container>
                    <h1>Informácie k objednávke</h1>
                    <p>Status: {status}</p>
                    <p>Vybavuje: {orderPremises === 0 ? "0 - neuvedené" : retailNames[orderPremises - 1]}</p>
                </Container>}
                <Container>
                    <h2>Informácie o zákazníkovi</h2>
                    <InputRow
                        label="Meno a priezvisko zákaznika"
                        example=''
                    >
                        <CustomInput
                            label="Meno priezvisko*"
                            type='text'
                            name='name'
                            value={selectedUser.name}
                            handleChange={(e) => handleChangeSelectedUser(e)}
                            required
                            autoComplete="off"
                        />
                    </InputRow>
                    <InputRow
                        label="E-mail zákaznika"
                        example=''
                    >
                        <CustomInput
                            label="email zákaznika*"
                            type='email'
                            name='email'
                            value={selectedUser.email}
                            handleChange={(e) => handleChangeSelectedUser(e)}
                            required
                            autoComplete="off"

                        />
                    </InputRow>
                    {isSearchingUser && <UserList>
                        {userSearchResult.map((user, idx) => (
                            <div key={idx} onClick={() => handleSelectUser(user.item)}>
                                <p>{user.item.name}</p>
                                <p>{user.item.email}</p>
                                <p>{user.item.phone}</p>
                            </div>
                        ))}
                    </UserList>}
                </Container>
                {selectedUser._id && (
                    <Container>
                        <h3>Doručovacia adresa</h3>
                        {hasAddress ? (<div>
                            <p>{selectedUser.name}</p>
                            <p>{selectedUser.address}</p>
                            {selectedUser.psc && selectedUser.city && <p>{`${selectedUser.psc} ${selectedUser.city}`}</p>}
                            <p>{selectedUser.country}</p>
                        </div>) : (
                                <div>
                                    <p>Nie je uvedená žiadna adresa.</p>
                                    <AddAddressButton onClick={() => setShowAddressForm(true)}>Pridať adresu</AddAddressButton>
                                    {showAddressForm && <OrderAddressForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} getUsers={getUsers} id={selectedUser._id} closeForm={() => setShowAddressForm(false)} />}
                                </div>
                            )}
                        <DifferentAddress
                            label="Iná adresa"
                            isActive={isDifferentAddress}
                            handleClick={() => setIsDifferentAddress(!isDifferentAddress)}
                        />

                        {isDifferentAddress && (
                            <div>
                                <InputRow
                                    label=""
                                    example=''
                                >
                                    <CustomInput
                                        label="Ulica a čislo domu"
                                        type='text'
                                        name='address'
                                        value={overwrite.address}
                                        handleChange={(e) => handleOverwriteChange(e)}
                                    />
                                </InputRow>
                                <InputRow
                                    label=""
                                    example=''
                                >
                                    <CustomInput
                                        label="PSČ"
                                        type='text'
                                        name='psc'
                                        value={overwrite.psc}
                                        handleChange={(e) => handleOverwriteChange(e)}
                                    />
                                </InputRow>
                                <InputRow
                                    label=""
                                    example=''
                                >
                                    <CustomInput
                                        label="Mesto"
                                        type='text'
                                        name='city'
                                        value={overwrite.city}
                                        handleChange={(e) => handleOverwriteChange(e)}
                                    />
                                </InputRow>
                                <InputRow
                                    label=""
                                    example=''
                                >
                                    <CustomInput
                                        label="Krajina"
                                        type='text'
                                        name='country'
                                        value={overwrite.country}
                                        handleChange={(e) => handleOverwriteChange(e)}
                                    />
                                </InputRow>
                            </div>
                        )}
                    </Container>
                )}
                <Container>
                    <h2>Zľavový kupón</h2>
                    <InputRow
                        label=""
                        example='napr: 50OFF'
                    >
                        <CustomInput
                            label="Kód"
                            type='text'
                            name='coupon'
                            value={coupon}
                            handleChange={(e) => setCoupon(e.target.value)}
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
                    {selectedPayment === 2 && <InputRow
                        label="Výška zálohy"
                        example=''
                    >
                        <CustomInput
                            label="Záloha*"
                            type='number'
                            name='deposit'
                            value={deposit.toString()}
                            handleChange={(e) => setDeposit(e.target.value)}
                            required
                        />
                    </InputRow>}
                </Container>
                <Container>
                    <SearchContainer>
                        <h2>Objednávka</h2>
                    </SearchContainer>
                    <ProductContainer>
                        {productsToOrder.length > 0 ? productsToOrder.map((product, idx) => (
                            <CombinedProductOverview key={idx} product={product} handleRemoveProduct={(e) => handleRemoveProduct(e, product)} />
                        )) : (
                                <div>Žiadné produkty</div>
                            )}
                    </ProductContainer>
                </Container>


                {!isUpdating && <Container>
                    {activeStep === steps[0] ? (
                        <EshopSubSecton
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            allProducts={productsSearchResult.length && searchQuery.length ? productsSearchResult : products}
                            handleClick={handleSelectProduct}
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
                            handleParameterChange={handleParameterChange}
                        />
                    ) : (
                                    <SummarySubSection
                                        handleRemoveProduct={handleRemoveProduct}
                                        handleChangeStep={handleChangeStep}
                                        selectedProduct={selectedProduct}
                                        selectedLenses={selectedLenses}
                                        combinedProduct={combinedProduct}
                                        createCombinedProduct={createCombinedProduct}
                                    />
                                )}

                </Container>}

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
