import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../../context/auth/auth.context'
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
    const { stats } = useContext(AuthContext)
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
        // filters: {
        //     status: "paid"
        // }
    })

    const [currentPage, setCurrentPage] = useState(1)
    const paginate = (currentPage) => {
        setFetchQueryObj({
            ...fetchQueryObj,
            skip: (currentPage - 1) * 10
        })
        setCurrentPage(currentPage)
        refetch()
        // ordersHalfPaidData.refetch()
    }

    const { isLoading: isFetching, response, refetch } = useFetchByQuery('api/admin/orders/filter', fetchQueryObj)
    // const ordersHalfPaidData = useFetchByQuery('api/admin/orders/filter', {
    //     limit: 10,
    //     skip: 0,
    //     sortBy: {
    //         date: -1
    //     },
    //     filters: {
    //         status: "half-paid"
    //     }
    // })

    const handleRefetch = () => {
        refetch()
        // ordersHalfPaidData.refetch()
    }

    useEffect(() => {
        if (!isFetching) {
            if (response) {
                setOrders(response?.orders)
            }
        }
    }, [isFetching, response])

    console.log(response)
    // useEffect(() => {
    //     if (!ordersHalfPaidData.isLoading) {
    //         if (ordersHalfPaidData.response) {
    //             setOrders([
    //                 ...ordersHalfPaidData.response.orders,
    //                 ...orders,
    //             ])
    //         }
    //     }
    // }, [ordersHalfPaidData.isLoading])

    useEffect(() => {
        if (orders.length > 0) {
            if (activeIndex === 1) {
                setFetchQueryObj(() => ({
                    ...fetchQueryObj,
                    // filters: {
                    //     status: "paid"
                    // }
                }))
                handleRefetch()
            } else {
                setFetchQueryObj(() => ({
                    ...fetchQueryObj,
                    // filters: {
                    //     status: "fulfilled"
                    // }
                }))
                refetch()
            }
        }
    }, [activeIndex])

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
                setActiveIndex={setActiveIndex}
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
