import React, { useState, useContext, useEffect } from 'react'
import { AnalyticsContext } from '../../context/analytics/analytics.context'
import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'
import { AuthContext } from '../../context/auth/auth.context'

import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import Popup from '../../components/popup/pop-up.component'
import CustomInput from '../../components/custom-input/custom-input.component'

import { retailNamesTabs } from '../../utils/warehouse.utils'
import { analyticsTabItems } from '../../utils/analytics.utils'

import {
    FixedContainer,
    FlexContainer
} from '../../global.styles'

import {
    Header,
    GridContainer,
    StatsContainer,
    StatsGrid,
    ReportContainer,
    SubmitButton,
    TypeCheckbox,
    TwoColContainer,
    CheckboxContainer,
    Container
} from './analytics.styles'

const AnalyticsSection = () => {
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)
    const { stats: storeData, isAdmin, currentUser } = useContext(AuthContext)
    const { stats, getAnalytics, generateReport } = useContext(AnalyticsContext)
    const premisesTabs = isAdmin ? retailNamesTabs : retailNamesTabs.filter(tab => tab.id === currentUser.premises || tab.id === 0)

    const [activePremiseIndex, setActivePremiseIndex] = useState(currentUser.premises || 0)
    const [activeIndex, setActiveIndex] = useState(2)

    const [activeTabStats, setActiveTabStats] = useState(null)

    const [reportObj, setReportObj] = useState({})
    const [activeReportType, setActiveReportType] = useState(reportTypes[0].value)
    const [activeRetailType, setActiveRetailType] = useState(retailTypes[0].value)

    const [fitlterQuery, setFilterQuery] = useState({})

    const handleChangeActiveIndex = idx => {
        setActiveIndex(idx)
        setFilterQuery({})
    }

    const handleChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete reportObj[name]
            setReportObj({
                ...reportObj,
            })
            return
        }

        setReportObj({
            ...reportObj,
            [name]: value
        })
    }
    const handleFitlterQueryChange = e => {
        const { name, value } = e.target

        if (value === '') {
            delete fitlterQuery[name]
            setFilterQuery({
                ...fitlterQuery,
            })
            return
        }

        setFilterQuery({
            ...fitlterQuery,
            [name]: value
        })
    }

    const handleSubmitReport = () => {
        if (!reportObj?.from && !reportObj?.to) {
            const reportQueryObj = {
                type: activeReportType,
                timespan: "all",
                ...(activeRetailType !== null) && {
                    filters: {
                        premises: activeRetailType
                    }
                }
            }

            generateReport(reportQueryObj)
        } else {
            const formatedFrom = reportObj?.from.split("-").reverse().join("/")
            const formatedto = reportObj?.to.split("-").reverse().join("/")

            const reportQueryObj = {
                type: activeReportType,
                timespan: activeReportType === 'users' ? "all" : `${formatedFrom}:${formatedto}`,
                ...(activeRetailType !== null) && {
                    filters: {
                        premises: activeRetailType
                    }
                }
            }
            generateReport(reportQueryObj)
        }

    }

    useEffect(() => {
        if (!fitlterQuery?.from || !fitlterQuery?.to) return
        const formatedFrom = fitlterQuery?.from.split("-").reverse().join("/")
        const formatedto = fitlterQuery?.to.split("-").reverse().join("/")
        getAnalytics(`${formatedFrom}:${formatedto}`)


    }, [fitlterQuery])

    useEffect(() => {
        setActiveRetailType(retailTypes[0].value)
    }, [activeReportType])

    useEffect(() => {
        getAnalytics(analyticsTabItems[activeIndex - 1].value)
    }, [activeIndex])

    useEffect(() => {
        if (stats) {
            setActiveTabStats(stats?.find(tab => tab._id.premises === activePremiseIndex))
        }
    }, [stats, activePremiseIndex])

    useEffect(() => {
        return () => {
            setActivePremiseIndex(0)
            setActiveIndex(2)
            setActiveTabStats(null)
            setReportObj({})
            setActiveReportType(reportTypes[0].value)
            setActiveRetailType(retailTypes[0].value)
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <Header>
                <h1>Analytiká</h1>
            </Header>

            <FlexContainer>
                <FixedContainer>
                    <SectionNavbar
                        items={premisesTabs}
                        activeIndex={activePremiseIndex}
                        setActiveIndex={setActivePremiseIndex}
                    />
                </FixedContainer>
            </FlexContainer>
            <FlexContainer>
                <FixedContainer>
                    <SectionNavbar
                        items={analyticsTabItems}
                        activeIndex={activeIndex}
                        setActiveIndex={handleChangeActiveIndex}
                    />
                </FixedContainer>
            </FlexContainer>


            <ScrollContainer>
                <Container>
                    <h3>Dátum:</h3>

                    <TwoColContainer>
                        <div>
                            <h5>Od:</h5>
                            <CustomInput
                                label={''}
                                value={fitlterQuery?.from || ""}
                                type="date"
                                name="from"
                                handleChange={handleFitlterQueryChange}
                            />
                        </div>
                        <div>
                            <h5>Do:</h5>
                            <CustomInput
                                label={''}
                                value={fitlterQuery?.to || ""}
                                type="date"
                                name="to"
                                handleChange={handleFitlterQueryChange}
                            />
                        </div>
                    </TwoColContainer>

                </Container>
                {isAdmin && <GridContainer>
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
                </GridContainer>}

                {stats && (
                    <StatsGrid>
                        {
                            activeTabStats ? (
                                <StatsContainer>
                                    <div>
                                        <h3>Dohromady</h3>
                                        <p>{((activeTabStats?.cash + activeTabStats?.card) / 100).toFixed(2)}€</p>
                                    </div>
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
                                <StatsContainer>
                                    <p>Žiadné štatistiky</p>
                                </StatsContainer>
                            )
                        }
                    </StatsGrid>
                )}

                {isAdmin && <ReportContainer>
                    <h2>Vytvoriť report</h2>
                    <CheckboxContainer>
                        <h5>Typ reportu</h5>
                        {reportTypes.map((type, idx) => (
                            <TypeCheckbox
                                key={idx}
                                label={type.name}
                                isActive={activeReportType === type.value}
                                handleClick={() => setActiveReportType(type.value)}
                            />
                        ))}
                    </CheckboxContainer>

                    {activeReportType !== 'users' && <CheckboxContainer>
                        <h5>Prevádzka</h5>
                        {retailTypes.map((type, idx) => (
                            <TypeCheckbox
                                key={idx}
                                label={type.name}
                                isActive={activeRetailType === type.value}
                                handleClick={() => setActiveRetailType(type.value)}
                            />
                        ))}
                    </CheckboxContainer>}

                    {activeReportType !== 'users' ? <TwoColContainer>
                        <div>
                            <h5>Od:</h5>
                            <CustomInput
                                label={''}
                                value={reportObj?.from || ""}
                                type="date"
                                name="from"
                                handleChange={handleChange}
                            />
                        </div>
                        <div>
                            <h5>Do:</h5>
                            <CustomInput
                                label={''}
                                value={reportObj?.to || ""}
                                type="date"
                                name="to"
                                handleChange={handleChange}
                            />
                        </div>
                    </TwoColContainer> : <div style={{ marginBottom: "2rem" }}><p>Žiadne možnosti</p></div>}

                    <SubmitButton onClick={handleSubmitReport}>Generovať</SubmitButton>
                </ReportContainer>}
            </ScrollContainer>
        </section>
    )
}

export default AnalyticsSection

const reportTypes = [
    {
        name: "Zákazníci",
        value: "users",
    },
    {
        name: "Produkty",
        value: "products",
    },
    {
        name: "Zákázky",
        value: "orders",
    },
]

const retailTypes = [
    {
        name: "Všetko",
        value: null,
    },
    {
        name: "Obchodná 57, Bratislava",
        value: 1,
    },
    {
        name: "Miletičova 38, Bratislava",
        value: 2,
    },
    {
        name: "Vajnory, Bratislava",
        value: 3,
    },
    {
        name: "Senica, OC Branč",
        value: 4,
    },
]