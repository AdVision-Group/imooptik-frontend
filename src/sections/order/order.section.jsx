import React, { useContext, useState, useEffect } from 'react'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
// import { UserContext } from '../../context/user/user.context'
// import { WarehouseContext } from '../../context/warehouse/warehouse.context'
// import { OrdersContext } from '../../context/orders/orders.context'
import { useParams, Prompt } from 'react-router-dom'

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
import SelectLensesComponent from './steps/select-lenses.component'
import SummaryComponent from './steps/summary.component'

import {
    Header,
} from './order.styles'

const OrderSection = () => {
    const { userId, orderId } = useParams()
    const [step, setStep] = useState('selectUser')
    const [order, setOrder] = useState({

    })

    const handleOrderChange = valueToAdd => {
        const { name, value } = valueToAdd
        setOrder({
            ...order,
            [name]: value
        })
    }

    console.log("order")
    console.log(order)
    console.log("order")

    const {
        closeModal,
        isLoading,
        showModal,
        message
    } = useContext(LoadingModalContext)


    useEffect(() => {
        return () => {
            setStep('selectUser')
        }
    }, [])

    return (

        <section>
            <Prompt
                when={order.user}
                message={"Máte nedokončenú objednávku, skutočne chcete odísť?"}
            />
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Header>
                <div>
                    <h1>Nová objednávka</h1>
                </div>
            </Header>
            <ScrollContainer>
                <div>
                    {step === 'selectUser' && (
                        <SelectUserComponent
                            next={() => setStep('findProduct')}
                            addToOrder={handleOrderChange}
                        />
                    )}
                    {step === 'findProduct' && (
                        <FindProductComponent
                            back={() => setStep("selectUser")}
                            next={setStep}
                            addToOrder={handleOrderChange}
                        />
                    )}
                    {step === 'selectLenses' && (
                        <SelectLensesComponent
                            back={() => setStep("findProduct")}
                            next={() => setStep('summary')}
                            addToOrder={handleOrderChange}
                            order={order}
                        />
                    )}
                    {step === 'summary' && (
                        <SummaryComponent
                            back={() => setStep("selectLenses")}
                            order={order}
                        />
                    )}
                </div>

            </ScrollContainer>
        </section>
    )
}

export default OrderSection
