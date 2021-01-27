import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/auth/auth.context'

import SideNav from '../../components/sidenav/sidenav.component'
import Popup from '../../components/popup/pop-up.component'

import { DashboardContainer } from './dashboard.styles'

import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineInbox,
    AiOutlineCalendar,
    AiOutlineFileDone,
    AiOutlineLineChart,
    AiOutlineTag
} from 'react-icons/ai'

const ImageProvider = lazy(() => import('../../context/image/image.context'))

const BlogProvider = lazy(() => import('../../context/blog/blog.context'))
const UserProvider = lazy(() => import('../../context/user/user.context'))
const WarehouseProvider = lazy(() => import('../../context/warehouse/warehouse.context'))
const BookingProvider = lazy(() => import('../../context/booking/booking.context'))
const OrdersProvider = lazy(() => import("../../context/orders/orders.context"))
const CouponsProvider = lazy(() => import('../../context/coupons/coupons.context'))
const AnalyticsProvider = lazy(() => import('../../context/analytics/analytics.context'))

const EshopSection = lazy(() => import('../../sections/e-shop/e-shop.section'))
const CustomersSection = lazy(() => import('../../sections/customers/customers.section'))
const OrdersSection = lazy(() => import('../../sections/orders/orders.section'))
const AnalyticsSection = lazy(() => import('../../sections/analytics/analytics.section'))
const CustomerProfileSection = lazy(() => import('../../sections/customer-profile/customer-profile.section'))
const ProductSection = lazy(() => import('../../sections/product/product.section'))
const BlogSection = lazy(() => import("../../sections/blog-posts/blog-posts.section"))
const BookingSection = lazy(() => import('../../sections/booking/booking.section'))
const PostSection = lazy(() => import('../../sections/post/post.section'))
const NoPermisionSection = lazy(() => import('../../sections/no-permission/no-permission.section'))
const OrderSection = lazy(() => import('../../sections/order/order.section'))
const CalendarSection = lazy(() => import('../../sections/calendar/calendar.section'))
const CouponsSection = lazy(() => import('../../sections/coupons/coupons.section'))
const CouponSection = lazy(() => import('../../sections/coupon/coupon.section'))

const Dashboard = () => {
    const match = useRouteMatch()
    const routes = [
        {
            name: 'Zákazníci',
            path: '/zakaznici',
            permission: 1,
            icon: AiOutlineUser
        },
        {
            name: 'Zákazky',
            path: '/objednavky',
            permission: 0,
            icon: AiOutlineInbox

        },
        {
            name: 'Sklad',
            path: '/obchod',
            permission: 1,
            icon: AiOutlineHome
        },
        {
            name: 'Kupóny',
            path: '/kupony',
            permission: 1,
            icon: AiOutlineTag
        },
        {
            name: 'Rezervácie',
            path: '/rezervacie',
            permission: 0,
            icon: AiOutlineCalendar

        },
        {
            name: 'Blog',
            path: '/blog',
            permission: 0,
            icon: AiOutlineFileDone

        },
        {
            name: 'Analytika',
            path: '/analytika',
            permission: 1,
            icon: AiOutlineLineChart

        },
    ]

    const { currentUser } = useContext(AuthContext)

    if (currentUser.admin === 0) return (
        <Suspense fallback={<Popup loading={true} />}>
            <NoPermisionSection />
        </Suspense>
    )

    return (
        <DashboardContainer>
            <SideNav routes={routes} match={match} />
            <main>
                <Suspense fallback={<Popup loading={true} />}>
                    <ImageProvider>
                        <Switch>
                            <Route path={`${match.path}/obchod`} render={() => (
                                <WarehouseProvider>
                                    <EshopSection />
                                </WarehouseProvider>
                            )} />

                            <Route path={`${match.path}/sklad/:id`} render={() => (
                                <WarehouseProvider>
                                    <ProductSection />
                                </WarehouseProvider>
                            )} />


                            <Route exact path={`${match.path}/objednavky`} render={() => (
                                <OrdersProvider>
                                    <OrdersSection />
                                </OrdersProvider>
                            )} />
                            <Route exact path={`${match.path}/objednavky/:userId`} render={() => (
                                <UserProvider>
                                    <WarehouseProvider>
                                        <OrdersProvider>
                                            <OrderSection />
                                        </OrdersProvider>
                                    </WarehouseProvider>
                                </UserProvider>
                            )
                            } />
                            <Route path={`${match.path}/objednavky/:userId/:orderId`} render={() => (
                                <UserProvider>
                                    <WarehouseProvider>
                                        <OrdersProvider>
                                            <OrderSection />
                                        </OrdersProvider>
                                    </WarehouseProvider>
                                </UserProvider>
                            )
                            } />

                            <Route exact path={`${match.path}/kupony`} render={() => (
                                <CouponsProvider>
                                    <CouponsSection />
                                </CouponsProvider>
                            )} />
                            <Route path={`${match.path}/kupony/:couponId`} render={() => (
                                <CouponsProvider>
                                    <CouponSection />
                                </CouponsProvider>
                            )} />


                            <Route path={`${match.path}/analytika`} render={() => (
                                <AnalyticsProvider>
                                    <AnalyticsSection />
                                </AnalyticsProvider>
                            )} />

                            <Route exact path={`${match.path}/rezervacie`} render={() => (
                                <BookingProvider>
                                    <BookingSection />
                                </BookingProvider>
                            )} />
                            <Route path={`${match.path}/rezervacie/:calendarId`} render={() => (
                                <BookingProvider>
                                    <CalendarSection />
                                </BookingProvider>
                            )} />

                            <Route exact path={`${match.path}/blog`} render={() => (
                                <BlogProvider>
                                    <BlogSection />
                                </BlogProvider>
                            )} />
                            <Route path={`${match.path}/blog/:id`} render={() => (
                                <BlogProvider>
                                    <PostSection />
                                </BlogProvider>
                            )} />

                            <UserProvider>
                                <Route exact path={`${match.path}/zakaznici`} component={CustomersSection} />
                                <Route path={`${match.path}/zakaznici/:id`} component={CustomerProfileSection} />
                            </UserProvider>

                        </Switch>
                        {/* {currentUser.admin === 0 ? <Redirect to={`${match.path}/objednavky`} /> : <Redirect to={`${match.path}/obchod`} />} */}
                        <Redirect to={`${match.path}/zakaznici`} />
                    </ImageProvider>
                </Suspense>
            </main>
        </DashboardContainer>
    )
}

export default Dashboard
