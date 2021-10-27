import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation'
import Landing from './Landing'
import SignUpPage from './SignUpPage'
import SignInPage from './SignInPage'
import PasswordForget from './PasswordForget'
import Home from './Home'
import Account from './Account'
import Admin from './Admin'
import About from './About'
import FAQ from './FAQ'
import Contact from './Contact'
import * as ROUTES from '../constants/routes'
import Footer from './Footer'

function App() {
    return (
        <Router>
            <>
                <Navigation />

                <main>
                <Route exact path={ROUTES.RESEARCHNEEDS} component={Landing} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.LOGIN} component={SignInPage} />
                <Route
                    path={ROUTES.PASSWORD_FORGET}
                    component={PasswordForget}
                />
                <Route path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.ACCOUNT} component={Account} />
                <Route path={ROUTES.ADMIN} component={Admin} />
                <Route path={ROUTES.ABOUT} component={About} />
                <Route path={ROUTES.CONTACT} component={Contact} />
                <Route path={ROUTES.FAQ} component={FAQ} />
                </main>
                <Footer />
            </>
        </Router>
    )
}

export default App
