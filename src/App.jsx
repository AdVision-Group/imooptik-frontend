import React from 'react'
import { GlobalStyles } from './global.styles'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import DashboardPage from './pages/dashboard/dashboard'

const App = () => {
  console.log("RENDER APP")
  // const currentUser = null
  const currentUser = {
    id: "5fd4cae9f9432022689dd227",
    admin: 1, //permission level (1: admin na kamennej prevadzke,2: admin eshopu,3:superadmin)
    name: "Andrej Turcer",
    email: "andrej.turcer@mail.com",
    phone: "0902522355",
    address: "Ulica 1",
    psc: "81029",
    city: "Bratislava",
    country: "Slovensko",
    password: "$$hashedpassword$$",
    //vlastnosti okuliarov
    glasses: {
      size: [47, 21, 140],
      // prve hodnoty lave oko, druhe hodnoty prave oko
      lenses: {
        diopters: [1, 1.5],
        distance: [3, 2],
        cylinder: [1, 2],
        cylinderAxes: [4, 8]
      }
    },

    // idcka objednavok urobenych danym userom
    orders: ['order id c1, order id c2']

  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <HashRouter basename='/'>
        <Switch>
          <Route path='/prihlasenie' render={() => currentUser ? <Redirect to='/dashboard' /> : <SignInAndSignUpPage />} />
          <Route path='/dashboard' render={() => currentUser ? <DashboardPage /> : <Redirect to='prihlasenie' />} />
          {currentUser ? <Redirect to='/dashboard/obchod' /> : <Redirect to='/prihlasenie' />}
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
