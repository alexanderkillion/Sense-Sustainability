import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import * as ROLES from '../constants/roles'
import SignOut from './SignOut'
import { useAuthUser } from './Session'


function NavigationAuth({ authUser }) {
    return (
        <>
            <ul className='Navbar'>
                <li>
                    <Link to={ROUTES.RESEARCHNEEDS}>ResearchNeeds.org</Link>
                </li>
                <li>Search Opportunities</li>
                <li>About Us</li>
                <li>
                    <Link to={ROUTES.SIGN_UP}>Create An Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.LOGIN}>Login</Link>
                </li>
                <li>icon</li>
            </ul>
            <ul>
                <li>
                    <Link to={ROUTES.HOME}>Search Opportunities</Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </li>
                {
                    !!authUser.roles.includes(ROLES.administrator) && (
                        <li>
                            <Link to={ROUTES.ADMIN}>Admin</Link>
                        </li>
                    )
                }
                <li>
                    <SignOut />
                </li>
            </ul>
        </>
    )
}

const NavigationNonAuth = () => (
    <>
        <ul className='Navbar'>
            <li>
                <Link to={ROUTES.RESEARCHNEEDS}>ResearchNeeds.org</Link>
            </li>
            <li>Search Opportunities</li>
            <li>About Us</li>
            <li>
                    <Link to={ROUTES.SIGN_UP}>Create An Account</Link>
            </li>
            <li>
                <Link to={ROUTES.LOGIN}>Login</Link>
            </li>
            <li>icon</li>
        </ul>
        <ul>
            <li>
                <SignOut/>
            </li>
        </ul>
    </>
)

function Navigation() {
    const authUser = useAuthUser()
    console.log('in Nav',authUser)

    return <div>{authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />}</div>
}
export default Navigation