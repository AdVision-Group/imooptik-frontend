import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import SideNav from '../../components/sidenav/sidenav.component'

import EshopSection from '../../sections/e-shop/e-shop.section'
import WarehouseSection from '../../sections/warehouse/warehouse.section'
import CustomersSection from '../../sections/customers/customers.section'
import OrdersSection from '../../sections/orders/orders.section'
import AnalyticsSection from '../../sections/analytics/analytics.section'
import CustomerProfileSection from '../../sections/customer-profile/customer-profile.section'
import ProductSection from '../../sections/product/product.section'
import BlogSection from "../../sections/blog-posts/blog-posts.section"
import BookingSection from '../../sections/booking/booking.section'
import PostSection from '../../sections/post/post.section'

import BlogProvider from '../../context/blog/blog.context'
import UserProvider from '../../context/user/user.context'

import { DashboardContainer } from './dashboard.styles'

const Dashboard = () => {
    const match = useRouteMatch()
    const routes = [
        {
            name: 'E-shop',
            path: '/obchod'
        },
        {
            name: 'Sklad',
            path: '/sklad'
        },
        {
            name: 'Zákazníci',
            path: '/zakaznici'
        },
        {
            name: 'Objednávky',
            path: '/objednavky'
        },
        {
            name: 'Rezervácie',
            path: '/rezervacie'
        },
        {
            name: 'Blog',
            path: '/blog'
        },
        {
            name: 'Analytika',
            path: '/analytika'
        },
    ]


    return (
        <DashboardContainer>
            <SideNav routes={routes} match={match} />
            <main>
                <Switch>
                    <Route path={`${match.path}/obchod`} component={EshopSection} />
                    <Route exact path={`${match.path}/sklad`} component={WarehouseSection} />
                    <Route path={`${match.path}/sklad/:productId`} component={ProductSection} />
                    <Route path={`${match.path}/objednavky`} component={OrdersSection} />
                    <Route path={`${match.path}/analytika`} component={AnalyticsSection} />

                    <Route path={`${match.path}/rezervacie`} component={BookingSection} />
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
                <Redirect to={`${match.path}/obchod`} />
            </main>
        </DashboardContainer>
    )
}

export default Dashboard
