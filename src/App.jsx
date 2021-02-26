import React, { useContext, Suspense, lazy, useState } from 'react'
import { AuthContext } from './context/auth/auth.context'
import { GlobalStyles, DarkThemeColors, DefaultThemeColors, SwitchButton } from './global.styles'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Popup from './components/popup/pop-up.component'
import { CgDarkMode } from 'react-icons/cg'

const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'))
const DashboardPage = lazy(() => import('./pages/dashboard/dashboard'))
const ResetPasswordPage = lazy(() => import('./pages/reset-password/reset-password'))

const App = () => {
  const { currentUser } = useContext(AuthContext)
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <React.Fragment>
      {currentTheme === 'dark' ? <DarkThemeColors /> : <DefaultThemeColors />}
      <GlobalStyles />
      <Suspense fallback={<Popup loading={true} />}>
        <HashRouter basename='/'>
          <Switch>
            <Route path='/prihlasenie' render={() => currentUser ? <Redirect to='/dashboard' /> : <SignInAndSignUpPage />} />
            <Route path='/dashboard' render={() => currentUser ? <DashboardPage /> : <Redirect to='/prihlasenie' />} />
            <Route path='/reset/:token' component={ResetPasswordPage} />
            {/* {currentUser ? <Redirect to='/dashboard/zakaznici' /> : <Redirect to='/prihlasenie' />} */}
            {currentUser ? <Redirect to='/dashboard/rezervacie' /> : <Redirect to='/prihlasenie' />}
          </Switch>
        </HashRouter>
      </Suspense>
      <SwitchButton onClick={() => setCurrentTheme(prevValue => prevValue === "dark" ? "light" : "dark")}><CgDarkMode /></SwitchButton>
    </React.Fragment>
  );
}

export default App;
