import React, { useState } from 'react'

import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'

import {
    Header,
    GridContainer
} from './analytics.styles'

const AnalyticsSection = () => {
    const items = [
        {
            id: 1,
            name: "Všetko"
        },
        {
            id: 2,
            name: "Deň"
        },
        {
            id: 3,
            name: "Týžden"
        },
        {
            id: 4,
            name: "Mesiac"
        },
        {
            id: 5,
            name: "Rok"
        },
    ]

    const [activeIndex, setActiveIndex] = useState(2)

    return (
        <section>
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
