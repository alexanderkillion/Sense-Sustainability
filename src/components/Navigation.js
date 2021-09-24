import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import * as ROLES from '../constants/roles'
import SignOut from './SignOut'
import { useAuthUser } from './Session'


function NavigationAuth({ authUser }) {

    const [toggle, setToggle] = useState(false)


    return (
        <>
            <ul className='Navbar'>
                <li>
                    <Link to={ROUTES.RESEARCHNEEDS}>ResearchNeeds.org</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Search Opportunities</Link>
                </li>
                <li className='dropdown'>
                    <button className="dropbtn">About Us &#8964;<i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                        <a href=''>About</a>
                        <a href=''>FAQ</a>
                        <a href=''>Contact Us</a>
                    </div>
                </li>
                <li>
                    {
                    !!authUser ? 
                    <Link to={ROUTES.LOGIN}>Create An Account / Login</Link>
                 :
                <SignOut/>
                    }
                </li>
                {
                    !!authUser.roles.includes(ROLES.administrator) && (
                        <li>
                            <Link to={ROUTES.ADMIN}>Admin</Link>
                        </li>
                    )
                }
                <li> {authUser.rolles ? 
                    <Link to={ROUTES.ACCOUNT}>&#128100;</Link> : <SignOut></SignOut>
                }
                </li>
            </ul>
            <ul>
                {/* <li>
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
                } */}
                <li>
                    {/* <SignOut /> */}
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
            <li>
                <Link to={ROUTES.HOME}>Search Opportunities</Link>
            </li>
            <li className='dropdown'>
                    <button className="dropbtn">About Us &#8964;<i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                        <a href='/about'>About</a>
                        <a href='/faq'>FAQ</a>
                        <a href='/contact'>Contact Us</a>
                    </div>
                </li>
            <li>
                <Link to={ROUTES.LOGIN}>Create / Login</Link>
            </li>
            <li><Link to={ROUTES.SIGN_UP}>&#128100;</Link></li>
        </ul>
        <ul>
            <li>
                {/* <SignOut/> */}
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
