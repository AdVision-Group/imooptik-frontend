import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import SideNav from '../../components/sidenav/sidenav.component'

import EshopSection from '../../sections/e-shop/e-shop.section'
import WarehouseSection from '../../sections/warehouse/warehouse.section'
import CustomersSection from '../../sections/customers/customers.section'
import OrdersSection from '../../sections/orders/orders.section'
import AnalyticsSection from '../../sections/analytics/analytics.section'

import { DashboardContainer } from './dashboard.styles'

const Dashboard = () => {
    const match = useRouteMatch()
    const routes = [
        {
            name: 'E-shop',
            path: '/e-shop'
        },
        {
            name: 'Sklad',
            path: '/warehouse'
        },
        {
            name: 'Zákazníci',
            path: '/customers'
        },
        {
            name: 'Objednávky',
            path: '/orders'
        },
        {
            name: 'Analytika',
            path: '/analytics'
        },
    ]


    return (
        <DashboardContainer>
            <SideNav routes={routes} match={match} />
            <main>
                <Switch>
                    <Route path={`${match.path}/e-shop`} component={EshopSection} />
                    <Route path={`${match.path}/warehouse`} component={WarehouseSection} />
                    <Route path={`${match.path}/customers`} component={CustomersSection} />
                    <Route path={`${match.path}/orders`} component={OrdersSection} />
                    <Route path={`${match.path}/analytics`} component={AnalyticsSection} />
                    <Route path={`${match.path}/*`} render={() => <Redirect to={`${match.path}/e-shop`} />} />
                </Switch>
            </main>
        </DashboardContainer>
    )
}

export default Dashboard
