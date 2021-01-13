import React, { useContext, useState, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { UserContext } from '../../context/user/user.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { useParams } from 'react-router-dom'

import InputRow from '../../components/product-input-row/product-input-row.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import OrderProductOverview from '../../components/order-product-overview/order-product-overview.component'

import Popup from "../../components/popup/pop-up.component"

import {
    Container,
    ProductContainer,
    AddProductButton,
    SearchContainer,
    SearchButton,
} from './order.styles'

const OrderSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { userId } = useParams()

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


    useEffect(() => {
        getUser(userId)
        if (!products) {
            getProducts()
        }
        if (!lensesArr) {
            getLenses()
        }
    }, [])

    console.log(user)
    console.log(products)
    console.log(lensesArr)
    console.log(showModal)


    if (!user._id || showModal) return <Popup loading={isLoading} title={message} close={closeModal} />

    let allProducts = []

    if (products && lensesArr) {
        allProducts = [
            ...products,
            ...lensesArr
        ]
    }


    return (
        <section>
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
                    <h2>Objednávka</h2>
                    <ProductContainer>
                        Žiadné produkty
                    </ProductContainer>
                    <AddProductButton>Pridať produkt</AddProductButton>
                </Container>


                <Container>
                    <h2>E-shop</h2>

                    <SearchContainer>
                        <div>
                            <CustomInput
                                label="Vyhľadať produkt"
                                type='search'
                                name='search'
                                value={searchQuery}
                                handleChange={(e) => setSearchQuery(e.target.value)}
                                required
                            />
                        </div>
                        <SearchButton>Hľadať</SearchButton>

                    </SearchContainer>
                    <ProductContainer>
                        {
                            allProducts.map((product, idx) => (
                                <OrderProductOverview key={idx} product={product} />
                            ))
                        }
                    </ProductContainer>
                </Container>

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
