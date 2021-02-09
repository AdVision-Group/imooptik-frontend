import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { LoadingModalContext } from '../../context/loading-modal/loading-modal.contenxt'

import SectionHeader from '../../components/section-header/section-header.component'
import SectionNavbar from '../../components/section-navbar/section-navbar.component'
import ScrollContainer from '../../components/scroll-container/scroll-container.component'
import OrderOverview from '../../components/order-overview/order-overview.component'
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
    TableHead,
    OrdersTable,
    TableCol,
    IconContainer
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
                }
            })
        } else {
            setFetchQueryObj({
                limit: 10,
                skip: 0,
                sortBy: {
                    date: -1
                },
                filters: {
                    status: "fulfilled"
                }
            })
        }
        handleRefetch()
    }

    useEffect(() => {
        if (!isFetching) {
            if (response) {
                if (activeIndex === 1) {
                    setOrders(response?.orders.filter(order => order.status !== 'fulfilled'))
                } else {
                    setOrders(response?.orders)
                }
            }
        }
    }, [isFetching, response, activeIndex])



    console.log(activeIndex)
    console.log(response)

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
                }
            })
        }
    }, [])

    return (
        <section>
            {showModal && <Popup loading={isLoading} title={message} close={closeModal} />}
            <SectionHeader
                searchQuery={searchQuery}
                // handleSearch={handleSearch}

                handleChange={e => setSearchQuery(e.target.value)}
                handleAddButton={() => push("/dashboard/objednavky/nova-objednavka")}
                title="Objednávky"
            />

            <SectionNavbar
                items={tabItems}
                activeIndex={activeIndex}
                setActiveIndex={handleIndexChange}
            />

            <ScrollContainer>
                <OrdersTable>
                    <TableHead>
                        <TableCol>ID</TableCol>
                        <TableCol clickable onClick={() => {
                            setFetchQueryObj((prevObj) => ({
                                ...fetchQueryObj,
                                sortBy: {
                                    date: prevObj.sortBy.date === 1 ? -1 : 1
                                }
                            }))
                            handleRefetch()
                        }}>
                            Dátum {fetchQueryObj.sortBy.date === 1 ? <IconContainer>
                                <GoArrowSmallDown />
                            </IconContainer> : <IconContainer>
                                    <GoArrowSmallUp />
                                </IconContainer>
                            }
                        </TableCol>
                        <TableCol>Prevádzka</TableCol>
                        <TableCol>Status</TableCol>
                        <TableCol>Možnosti</TableCol>
                    </TableHead>
                    {orders.map((order, idx) => (
                        <OrderOverview key={idx} order={order} refetch={handleRefetch} />
                    ))}
                </OrdersTable>

                <ListArrows
                    listItems={orders}
                />
            </ScrollContainer>
        </section>
    )
}



export default OrdersSection
