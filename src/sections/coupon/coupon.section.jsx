import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CouponsContext } from '../../context/coupons/coupons.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import InputRow from '../../components/product-input-row/product-input-row.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Popup from "../../components/popup/pop-up.component"

import {
    Header,
    CustomSelect,
    SubmitButton,
    DeleteButton
} from './coupon.styles'

const CouponSection = () => {
    const { couponId } = useParams()
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)
    const {
        coupon,
        getCoupon,
        handleChange,
        createCoupon,
        isUpdating,
        deleteCoupon,
        resetCoupons
    } = useContext(CouponsContext)

    useEffect(() => {
        if (couponId !== 'novy-kupon') {
            getCoupon(couponId)
        }
    }, [couponId])

    useEffect(() => {
        return () => {
            resetCoupons()
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}

            <Header>
                <div>
                    <h1>Nový kupón</h1>
                </div>

                <div>
                    {isUpdating && <DeleteButton onClick={() => deleteCoupon(couponId)}>Odstrániť</DeleteButton>}
                    {!isUpdating && <SubmitButton onClick={() => createCoupon(coupon)}>Vytvoriť</SubmitButton>}
                </div>
            </Header>
            <ScrollContainer>
                <InputRow
                    label="Kód kupónu"
                    example="napr: 50off"
                >
                    <CustomInput
                        label="Kód"
                        type='text'
                        name='code'
                        value={coupon.code}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <InputRow
                    label="Typ kupónu"
                    example=""
                >
                    <CustomSelect name='type' value={coupon.type} onChange={(e) => handleChange(e)}>
                        <option value={"percentage"}>Percentá</option>
                        <option value={"flat"}>Fixná suma</option>
                    </CustomSelect>
                </InputRow>
                <InputRow
                    label="Hodnota"
                    example=""
                >
                    <CustomInput
                        label="Suma"
                        type='number'
                        name='value'
                        value={coupon.value.toString()}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <InputRow
                    label="Kolko maximalne krat moze tento kupon byt pouzity jednym clovek, default je nekonecne"
                    example=""
                >
                    <CustomInput
                        label="Suma"
                        type='number'
                        name='maxUses'
                        value={coupon.maxUses.toString()}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <InputRow
                    label="Minimalna hodnota objednavky v centoch, aby bol tento kupon aplikovatelny, default je 0"
                    example=""
                >
                    <CustomInput
                        label="Suma"
                        type='number'
                        name='minValue'
                        value={coupon.minValue.toString()}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
                <InputRow
                    label="Kolko maximalne krat moze tento kupon byt pouzity dohromady vsetkymi uzivatelmi, default je nekonecne"
                    example=""
                >
                    <CustomInput
                        label="Suma"
                        type='number'
                        name='maxUsesTotal'
                        value={coupon.maxUsesTotal.toString()}
                        handleChange={(e) => handleChange(e)}
                    />
                </InputRow>
            </ScrollContainer>
        </section>
    )
}

export default CouponSection
