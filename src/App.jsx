import React, { Suspense, lazy, useState } from 'react'
import { GlobalStyles, DarkThemeColors, DefaultThemeColors, SwitchButton, theme } from './global.styles'
import {ThemeProvider} from 'styled-components'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Popup from './components/popup/pop-up.component'
import ProtectedRoute from './components/protected-route/protected-route.component'
import { CgDarkMode } from 'react-icons/cg'

const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'))
const DashboardPage = lazy(() => import('./pages/dashboard/dashboard'))

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {currentTheme === 'dark' ? <DarkThemeColors /> : <DefaultThemeColors />}
        <GlobalStyles />
        <Suspense fallback={<Popup loading={true} />}>
          <HashRouter basename='/'>
            <Switch>
              <Route exact path='/' render={({...props}) => <SignInAndSignUpPage {...props}/>} />
              <ProtectedRoute path='/dashboard' component={DashboardPage}/>
              {/* <Route path='*' render={() => <Redirect to="/"/>} /> */}
            </Switch>
          </HashRouter>
        </Suspense>
        <SwitchButton onClick={() => setCurrentTheme(prevValue => prevValue === "dark" ? "light" : "dark")}><CgDarkMode /></SwitchButton>
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
