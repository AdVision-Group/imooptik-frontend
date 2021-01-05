import React, { useContext } from 'react'
import { AuthContext } from './context/auth/auth.context'
import { GlobalStyles } from './global.styles'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import DashboardPage from './pages/dashboard/dashboard'
import ResetPasswordPage from './pages/reset-password/reset-password'

const App = () => {
  console.log("RENDER APP")
  const { currentUser } = useContext(AuthContext)

  return (
    <React.Fragment>
      <GlobalStyles />
      <HashRouter basename='/'>
        <Switch>
          <Route path='/prihlasenie' render={() => currentUser ? <Redirect to='/dashboard' /> : <SignInAndSignUpPage />} />
          <Route path='/dashboard' render={() => currentUser ? <DashboardPage /> : <Redirect to='/prihlasenie' />} />
          <Route path='/reset/:token' component={ResetPasswordPage} />
          {currentUser ? <Redirect to='/dashboard/obchod' /> : <Redirect to='/prihlasenie' />}
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
