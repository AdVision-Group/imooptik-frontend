import React, { useState, useContext, useEffect } from 'react'
import { AnalyticsContext } from '../../context/analytics/analytics.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { AuthContext } from '../../context/auth/auth.context'

import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'

import { retailNamesTabs } from '../../utils/warehouse.utils'
import { analyticsTabItems } from '../../utils/analytics.utils'

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
    const { stats: storeData, isAdmin, currentUser } = useContext(AuthContext)
    const { stats, getAnalytics } = useContext(AnalyticsContext)
    const premisesTabs = isAdmin ? retailNamesTabs : retailNamesTabs.filter(tab => tab.id === currentUser.premises || tab.id === 0)

    const [activePremiseIndex, setActivePremiseIndex] = useState(0)
    const [activeIndex, setActiveIndex] = useState(2)

    const [activeTabStats, setActiveTabStats] = useState(null)

    useEffect(() => {
        getAnalytics(analyticsTabItems[activeIndex - 1].value)
    }, [activeIndex])

    console.log(stats)

    useEffect(() => {
        if (stats) {
            setActiveTabStats(stats?.find(tab => tab._id.premises === activePremiseIndex))
        }
    }, [stats, activePremiseIndex])

    console.log("ACTIVE TAB")
    console.log(activeTabStats)

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Header>
                <h1>Analytiká</h1>
            </Header>

            <SectionNavbar
                items={premisesTabs}
                activeIndex={activePremiseIndex}
                setActiveIndex={setActivePremiseIndex}
            />
            <SectionNavbar
                items={analyticsTabItems}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

            <ScrollContainer>
                <GridContainer>
                    <div>
                        <h3>Zákazníci</h3>
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
                        <h3>Zákazky</h3>
                        <p>{storeData?.orders}</p>
                    </div>
                    <div>
                        <h3>Vyšetrenia</h3>
                        <p>{storeData?.bookings}</p>
                    </div>
                </GridContainer>

                {stats && (
                    <StatsGrid>
                        {
                            activeTabStats ? (
                                <StatsContainer>
                                    <div>
                                        <h3>Hotovosť</h3>
                                        <p>{(activeTabStats?.cash / 100).toFixed(2)}€</p>
                                    </div>
                                    <div>
                                        <h3>Karta</h3>
                                        <p>{(activeTabStats?.card / 100).toFixed(2)}€</p>
                                    </div>
                                    <div>
                                        <h3>Kupóny</h3>
                                        <p>{activeTabStats?.coupons}</p>
                                    </div>
                                    <div>
                                        <h3>Objednávky</h3>
                                        <p>{activeTabStats?.orders}</p>
                                    </div>
                                </StatsContainer>
                            ) : (
                                    <div>
                                        <p>Žiadné štatistiky</p>
                                    </div>
                                )
                        }
                    </StatsGrid>
                )}
            </ScrollContainer>
        </section>
    )
}

export default AnalyticsSection
