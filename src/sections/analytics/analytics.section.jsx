import React, { useState, useContext, useEffect } from 'react'
import { AnalyticsContext } from '../../context/analytics/analytics.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'

import {
    Header,
    GridContainer
} from './analytics.styles'

const AnalyticsSection = () => {
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)
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
                    <div className='first' />
                    <div className='second' />
                    <div className='third' />
                    <div className='fourth' />
                </GridContainer>

            </ScrollContainer>
        </section>
    )
}

export default AnalyticsSection
