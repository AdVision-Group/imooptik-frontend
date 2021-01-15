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
import OrderProductOverview from '../../components/order-product-overview/order-product-overview.component'

import Popup from "../../components/popup/pop-up.component"

import EshopSubSecton from './sub-sections/eshop/eshop.sub-section'
import LensesSubSection from './sub-sections/lenses/lenses.sub-section'
import DioptersSubSection from './sub-sections/diopters/diopters.seb-section'
import SummarySubSection from './sub-sections/summary/summary.sub-section'

import Fuse from 'fuse.js'

import { initUserObj } from '../../context/user/user.utils'


import {
    Header,
    SubmitOrderButton,
    Container,
    ProductContainer,
    AddProductButton,
    SearchContainer,
    SearchButton,
    UserList
} from './order.styles'

const OrderSection = () => {
    const { userId } = useParams()
    const [searchQuery, setSearchQuery] = useState('')

    const [selectedUser, setSelectedUser] = useState(initUserObj)
    const [isSearchingUser, setIsSearchingUser] = useState(false)
    const [userSearchResult, setUserSearchResult] = useState([])

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
        handleParameterChange
    } = useContext(OrdersContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setSelectedUser({
            ...selectedUser,
            [name]: value
        })
    }

    const handleSelectUser = (user) => {
        setIsSearchingUser(false)
        setSelectedUser({
            ...selectedUser,
            ...user
        })
    }

    useEffect(() => {
        if (!users) {
            getUsers()
        }
    }, [users])

    useEffect(() => {
        if (userId !== 'nova-objednavka') {
            getUser(userId)
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
            if (selectedUser._id) {
                setSelectedUser({
                    ...selectedUser,
                    _id: null
                })
            }
            if (!selectedUser._id) {
                setIsSearchingUser(true)
                setUserSearchResult(userFuse.search(selectedUser.name))
            }
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
            if (selectedUser._id) {
                setSelectedUser({
                    ...selectedUser,
                    _id: null
                })
            }
            if (!selectedUser._id) {
                setIsSearchingUser(true)
                setUserSearchResult(userFuse.search(selectedUser.email))
            }
        }

    }, [selectedUser.email])



    if (showModal || !products || !lensesArr) return <Popup loading={isLoading} title={message} close={closeModal} />




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
                        label="Meno a priezvisko zákaznika"
                        example=''
                    >
                        <CustomInput
                            label="Meno priezvisko*"
                            type='text'
                            name='name'
                            value={selectedUser.name}
                            handleChange={(e) => handleChange(e)}
                            required
                            autocomplete="off"
                        />
                    </InputRow>
                    <InputRow
                        label="Identifikačné číslo zákaznika"
                        example=''
                    >
                        <CustomInput
                            label="email zákaznika*"
                            type='email'
                            name='email'
                            value={selectedUser.email}
                            handleChange={(e) => handleChange(e)}
                            required
                            autocomplete="off"

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
                            <OrderProductOverview key={idx} product={product} handleRemoveProduct={(e) => handleRemoveProduct(e, product, idx)} />
                        )) : (
                                <div>Žiadné produkty</div>
                            )}
                    </ProductContainer>
                </Container>


                <Container>
                    {activeStep === steps[0] ? (
                        <EshopSubSecton
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            allProducts={products}
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
                                    />
                                )}

                </Container>

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
