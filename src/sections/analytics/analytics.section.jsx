import React, { useState, useContext, useEffect } from 'react'
import { AnalyticsContext } from '../../context/analytics/analytics.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { AuthContext } from '../../context/auth/auth.context'

import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'

import {
    Header,
    GridContainer,
    StatsContainer,
    StatsGrid
} from './analytics.styles'

const AnalyticsSection = () => {
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)
    const { stats: storeData } = useContext(AuthContext)
    const { stats, getAnalytics } = useContext(AnalyticsContext)

    const items = [
        {
            id: 1,
            name: "Všetko",
            value: "all"
        },
        {
            id: 2,
            name: "Deň",
            value: "day"
        },
        {
            id: 3,
            name: "Týžden",
            value: "week"
        },
        {
            id: 4,
            name: "Mesiac",
            value: "month"
        },
        {
            id: 5,
            name: "Rok",
            value: "year"
        },
    ]

    const [activeIndex, setActiveIndex] = useState(2)

    useEffect(() => {
        getAnalytics(items[activeIndex - 1].value)
    }, [activeIndex])

    console.log(stats)

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Header>
                <h1>Analytiká</h1>
            </Header>

            <SectionNavbar
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            <ScrollContainer>
                <GridContainer>
                    <div>
                        <h3>Uživatelia</h3>
                        <p>{storeData?.users}</p>
                    </div>
                    <div>
                        <h3>Produkty</h3>
                        <p>{storeData?.products}</p>
                    </div>
                    <div>
                        <h3>Šošovky</h3>
                        <p>{storeData?.lenses}</p>
                    </div>
                    <div>
                        <h3>Objednávky</h3>
                        <p>{storeData?.orders}</p>
                    </div>
                    <div>
                        <h3>Prehliadky</h3>
                        <p>{storeData?.bookings}</p>
                    </div>
                </GridContainer>

                {stats && (
                    <StatsGrid>
                        <StatsContainer>
                            <div>
                                <h3>Hotovosť</h3>
                                <p>{(stats[0]?.cash / 100).toFixed(2)}€</p>
                            </div>
                            <div>
                                <h3>Karta</h3>
                                <p>{(stats[0]?.card / 100).toFixed(2)}€</p>
                            </div>
                            <div>
                                <h3>Kupóny</h3>
                                <p>{stats[0]?.coupons}</p>
                            </div>
                            <div>
                                <h3>Objednávky</h3>
                                <p>{stats[0]?.orders}</p>
                            </div>
                        </StatsContainer>
                        <StatsContainer>
                            <div>
                                <h3>Hotovosť</h3>
                                <p>{(stats[1]?.cash / 100).toFixed(2)}€</p>
                            </div>
                            <div>
                                <h3>Karta</h3>
                                <p>{(stats[1]?.card / 100).toFixed(2)}€</p>
                            </div>
                            <div>
                                <h3>Kupóny</h3>
                                <p>{stats[1]?.coupons}</p>
                            </div>
                            <div>
                                <h3>Objednávky</h3>
                                <p>{stats[1]?.orders}</p>
                            </div>
                        </StatsContainer>
                    </StatsGrid>
                )}
            </ScrollContainer>
        </section>
    )
}

export default AnalyticsSection
