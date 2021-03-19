import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
// import OrderDeligateModal from '../../components/order-deligate-modal/order-deligate-modal.component'
import Popup from '../../components/popup/pop-up.component'
import ListArrows from '../../components/list-arrows/list-arrows.component'

import {
    GoArrowSmallDown,
    GoArrowSmallUp
} from 'react-icons/go'

import { useFetchByQuery } from '../../hooks/useFetch'

import {
    tabItems
} from '../../context/orders/orders.utils'

import {
    FixedContainer,
    FlexContainer
} from '../../global.styles'

import {
    TableHead,
    OrdersTable,
    TableCol,
    IconContainer,
    OrderOverviewRow
} from './orders.styles'

const OrdersSection = () => {
    const { push } = useHistory()
    const {
        closeModal,
        isLoading,
        message,
        showModal
    } = useContext(LoadingModalContext)

    const [searchQuery, setSearchQuery] = useState('')
    const [activeIndex, setActiveIndex] = useState(1)
    const [orders, setOrders] = useState([])
    const [fetchQueryObj, setFetchQueryObj] = useState({
        limit: 10,
        skip: 0,
        sortBy: {
            date: -1
        },
        filters: {
            finished: false
        }
    })

    const { isLoading: isFetching, response, refetch } = useFetchByQuery('api/admin/orders/filter', fetchQueryObj)

    const handleRefetch = () => {
        refetch()
    }

    const handleIndexChange = (idx) => {
        setActiveIndex(idx)
        if (idx === 1) {
            setFetchQueryObj({
                limit: 10,
                skip: 0,
                sortBy: {
                    date: -1
                },
                filters: {
                    finished: false
                }
            })
        } else if (idx === 2) {
            setFetchQueryObj({
                limit: 10,
                skip: 0,
                sortBy: {
                    date: -1
                },
                filters: {
                    finished: true
                }
            })
        } else if (idx === 3) {
            setFetchQueryObj({
                limit: 10,
                skip: 0,
                sortBy: {
                    date: -1
                },
                filters: {
                    status: "cancelled"
                }
            })
        }
        handleRefetch()
    }

    const handleSearch = () => {
        if (searchQuery !== '') {
            setFetchQueryObj(prevValue => ({
                // ...prevValue,
                // sortBy: {
                //     date: -1
                // },
                filters: {
                    customId: Number(searchQuery)
                },
            }))
        }
        refetch()
    }

    const getNextPage = () => {
        if (orders.length < 10) return
        setFetchQueryObj(prevValue => ({
            ...prevValue,
            skip: prevValue.skip + 10,
        }))
        refetch()
    }

    const getPrevPage = () => {
        if (fetchQueryObj.skip === 0) return
        setFetchQueryObj(prevValue => ({
            ...prevValue,
            skip: prevValue.skip - 10,
        }))
        refetch()
    }

    useEffect(() => {
        if (searchQuery === '') {
            if (activeIndex === 1) {
                setFetchQueryObj({
                    limit: 10,
                    skip: 0,
                    sortBy: {
                        date: -1
                    },
                    filters: {
                        finished: false
                    }
                })
            } else if (activeIndex === 2) {
                setFetchQueryObj({
                    limit: 10,
                    skip: 0,
                    sortBy: {
                        date: -1
                    },
                    filters: {
                        finished: true
                    }
                })
            } else if (activeIndex === 3) {
                setFetchQueryObj({
                    limit: 10,
                    skip: 0,
                    sortBy: {
                        date: -1
                    },
                    filters: {
                        status: "cancelled"
                    }
                })
            }
            handleRefetch()
        }
    }, [searchQuery])

    useEffect(() => {
        if (!isFetching) {
            if (response) {
                if (activeIndex === 1) {
                    setOrders(response?.orders)
                } else {
                    setOrders(response?.orders)
                }
                closeModal()
            }
        }
    }, [isFetching, response, activeIndex])


    useEffect(() => {
        return () => {
            setActiveIndex(1)
            setSearchQuery('')
            setOrders([])
            setFetchQueryObj({
                limit: 10,
                skip: 0,
                sortBy: {
                    date: -1
                },
                filters: {
                    finished: false
                }
            })
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <SectionHeader
                searchQuery={searchQuery}
                handleSearch={handleSearch}

                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push("/dashboard/objednavky/nova-objednavka")}
                title="Zákazky"
            />

            <FlexContainer>
                <FixedContainer>

                    <SectionNavbar
                        items={tabItems}
                        activeIndex={activeIndex}
                        setActiveIndex={handleIndexChange}
                    />
                </FixedContainer>

            </FlexContainer>

            <ScrollContainer>
                <OrdersTable>
                    <TableHead>
                        <TableCol>ID</TableCol>
                        <TableCol clickable onClick={() => {
                            setFetchQueryObj((prevObj) => ({
                                ...fetchQueryObj,
                                sortBy: {
                                    date: prevObj?.sortBy?.date === 1 ? -1 : 1
                                }
                            }))
                            handleRefetch()
                        }}>
                            <p>
                                Dátum {fetchQueryObj?.sortBy?.date === 1 ? <IconContainer>
                                    <GoArrowSmallDown />
                                </IconContainer> : <IconContainer>
                                    <GoArrowSmallUp />
                                </IconContainer>
                                }
                            </p>
                        </TableCol>
                        <TableCol>Prevádzka</TableCol>
                        <TableCol>Meno</TableCol>
                        <TableCol>Tel. číslo</TableCol>
                        <TableCol>Status</TableCol>
                        <TableCol>Možnosti</TableCol>
                    </TableHead>
                    {orders?.map((order, idx) => (
                        <OrderOverviewRow key={idx} order={order} refetch={handleRefetch} />
                    ))}
                </OrdersTable>

                <ListArrows
                    listItems={orders}
                    handleClickNext={getNextPage}
                    handleClickPrev={getPrevPage}
                />
            </ScrollContainer>
        </section>
    )
}



export default OrdersSection
