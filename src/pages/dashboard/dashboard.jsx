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
                    <Route path={`${match.path}/sklad`} component={WarehouseSection} />
                    <Route path={`${match.path}/zakaznici`} component={CustomersSection} />
                    <Route path={`${match.path}/objednavky`} component={OrdersSection} />
                    <Route path={`${match.path}/analytika`} component={AnalyticsSection} />
                    <Redirect to={`${match.path}/obchod`} />
                </Switch>
            </main>
        </DashboardContainer>
    )
}

export default Dashboard
