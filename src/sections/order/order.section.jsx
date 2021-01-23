import React, { useContext, useState, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { UserContext } from '../../context/user/user.context'
import { WarehouseContext } from '../../context/warehouse/warehouse.context'
import { OrdersContext } from '../../context/orders/orders.context'
import { useParams } from 'react-router-dom'

// import InputRow from '../../components/product-input-row/product-input-row.component'
// import CustomInput from '../../components/custom-input/custom-input.component'
// import CustomFormSwitch from '../../components/custom-form-switch/custom-form-switch.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
// import OrderProductOverview from '../../components/order-product-overview/order-product-overview.component'
// import CustomCheckBox from '../../components/custom-checkbox/custom-checkbox.component'
// import CombinedProductOverview from '../../components/combined-product-overview/combined-product-overview.component'
// import OrderAddressForm from '../../components/order-address-form/order-address-form.component'

import Popup from "../../components/popup/pop-up.component"

// import EshopSubSecton from './sub-sections/eshop/eshop.sub-section'
// import LensesSubSection from './sub-sections/lenses/lenses.sub-section'
// import DioptersSubSection from './sub-sections/diopters/diopters.seb-section'
// import SummarySubSection from './sub-sections/summary/summary.sub-section'

// import Fuse from 'fuse.js'

// import { retailNames } from '../../context/warehouse/warehouse.utils'

import SelectUserComponent from './steps/select-user.component'
import FindProductComponent from "./steps/find-product.component"

import {
    Header,
} from './order.styles'

const OrderSection = () => {
    const { userId, orderId } = useParams()
    const [searchQuery, setSearchQuery] = useState('')
    const [userSearchResult, setUserSearchResult] = useState([])
    const [showAddressForm, setShowAddressForm] = useState(false)
    const [productsSearchResult, setProductsSearchResult] = useState([])

    const [step, setStep] = useState('selectUser')

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


    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Header>
                <div>
                    <h1>Pridať objednávku</h1>
                </div>
            </Header>
            <ScrollContainer>
                {step === 'selectUser' && (
                    <SelectUserComponent
                        next={() => setStep('findProduct')}
                    />
                )}
                {step === 'findProduct' && (
                    <FindProductComponent
                        next={() => setStep('findProduct')}
                    />
                )}

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
