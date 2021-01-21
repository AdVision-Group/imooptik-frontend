import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { CouponsContext } from '../../context/coupons/coupons.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'

import Popup from '../../components/popup/pop-up.component'

import {
    CouponOverviewContainer,
    DeleteButton,
    OpenButton
} from './coupons.styles'

const CouponsSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { push } = useHistory()

    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)

    const {
        coupons,
        getCoupons,
        deleteCoupon
    } = useContext(CouponsContext)

    useEffect(() => {
        if (!coupons) {
            getCoupons()
        }
    }, [coupons])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}

            <SectionHeader
                title='Kupóny'
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('kupony/novy-kupon')}
            />
            <ScrollContainer>

                {coupons && coupons.map((coupon, idx) => {
                    console.log(coupon)

                    return (
                        <CouponOverviewContainer key={idx}>
                            <div>
                                <h3>Kupón: {coupon.code}</h3>
                                <span>{coupon._id}</span>
                            </div>
                            <div>
                                <DeleteButton onClick={() => deleteCoupon(coupon._id)}>Ostrániť</DeleteButton>
                                <OpenButton onClick={() => push(`kupony/${coupon._id}`)}>Zobraziť</OpenButton>
                            </div>
                        </CouponOverviewContainer>
                    )
                })}
            </ScrollContainer>
        </section>
    )
}

export default CouponsSection
