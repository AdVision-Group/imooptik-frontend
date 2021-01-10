import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/auth/auth.context'

import SideNav from '../../components/sidenav/sidenav.component'
import Popup from '../../components/popup/pop-up.component'

import { DashboardContainer } from './dashboard.styles'

const ImageProvider = lazy(() => import('../../context/image/image.context'))

const BlogProvider = lazy(() => import('../../context/blog/blog.context'))
const UserProvider = lazy(() => import('../../context/user/user.context'))
const WarehouseProvider = lazy(() => import('../../context/warehouse/warehouse.context'))
const BookingProvider = lazy(() => import('../../context/booking/booking.context'))


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

const Dashboard = () => {
    const match = useRouteMatch()
    const routes = [
        {
            name: 'E-shop',
            path: '/obchod',
            permission: 1
        },
        {
            name: 'Uživatelia',
            path: '/zakaznici',
            permission: 1
        },
        {
            name: 'Objednávky',
            path: '/objednavky',
            permission: 0
        },
        {
            name: 'Rezervácie',
            path: '/rezervacie',
            permission: 0
        },
        {
            name: 'Blog',
            path: '/blog',
            permission: 0
        },
        {
            name: 'Analytika',
            path: '/analytika',
            permission: 1
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


                            <Route path={`${match.path}/objednavky`} component={OrdersSection} />
                            <Route path={`${match.path}/analytika`} component={AnalyticsSection} />

                            <Route path={`${match.path}/rezervacie`} render={() => (
                                <BookingProvider>
                                    <BookingSection />
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
                        <Redirect to={`${match.path}/obchod`} />
                    </ImageProvider>
                </Suspense>
            </main>
        </DashboardContainer>
    )
}

export default Dashboard
