import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { CouponsContext } from '../../context/coupons/coupons.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'

import Popup from '../../components/popup/pop-up.component'
import ListArrows from '../../components/list-arrows/list-arrows.component'

import {
    // CouponOverviewContainer,
    DeleteButton,
    OpenButton,
    TableContainer,
    TableHead,
    TableRow,
    TableCol
} from './coupons.styles'

const CouponsSection = () => {
    // const [searchQuery, setSearchQuery] = useState('')
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
                // searchQuery={searchQuery}
                // handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push('kupony/novy-kupon')}
            />
            <ScrollContainer>

                <TableContainer>
                    <TableHead>
                        <TableCol>#</TableCol>
                        <TableCol>Kód</TableCol>
                        <TableCol>Typ</TableCol>
                        <TableCol>Hodnota</TableCol>
                        <TableCol>Možnosti</TableCol>
                    </TableHead>
                    {coupons && coupons.map((coupon, idx) => (
                        <TableRow key={idx}>
                            <TableCol>{idx + 1}</TableCol>
                            <TableCol>{coupon.code}</TableCol>
                            <TableCol>{coupon.type === "percentage" ? "Percentá" : "Fixná suma"}</TableCol>
                            <TableCol>{coupon.value}</TableCol>
                            <TableCol>
                                <OpenButton onClick={() => push(`kupony/${coupon._id}`)}>Zobraziť</OpenButton>
                                <DeleteButton onClick={() => deleteCoupon(coupon._id)}>Ostrániť</DeleteButton>
                            </TableCol>
                        </TableRow>
                    ))}
                </TableContainer>
                <ListArrows
                    listItems={coupons}
                />
            </ScrollContainer>
        </section>
    )
}

export default CouponsSection
