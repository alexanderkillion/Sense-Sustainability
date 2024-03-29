import React from 'react';
import { withRouter } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    isOrganization: false,
    roles: '',
    error: null,
}

function SignUpForm({ history }) {
    const firebase = React.useContext(FirebaseContext)

    const [
        { username, email, passwordOne, passwordTwo, error, isAdmin, isOrganization },
        setSignUpFormState,
    ] = React.useState(INITIAL_STATE);

    const onSubmit = event => {
        var roles = {};
        console.log(isAdmin)
        console.log(isOrganization)

        if(isAdmin) {
            roles = ROLES.administrator;
        } else if (isOrganization) {
            roles = ROLES.organization;
        } else {
            roles =ROLES.user
        }

        firebase
            .createUserWithEmailAndPassword(email, passwordOne, roles)
            .then(async authUser => {
                console.log('authuser1', authUser)
                setSignUpFormState(INITIAL_STATE)
                    history.push(ROUTES.HOME)
                return firebase.user(authUser.user.uid).set({
                    username,
                    email,
                    roles,
                })
                
            })
            .then(() => {
                    
                })
            .catch(error =>
                setSignUpFormState(prev => ({ ...prev, error: error }))
            )

        event.preventDefault()
    }

    const onChange = event => {
        const { name, value } = event.target
        setSignUpFormState(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const onChangeCheckbox = event => {
        const { name, checked } = event.target;
        setSignUpFormState(prev => ({
            ...prev,
            [name]: checked
        }));
    }

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === ''

    return (
        <form onSubmit={onSubmit}>
            <input
                name="username"
                value={username}
                onChange={onChange}
                type="text"
                placeholder="Full Name"
            />
            <input
                name="email"
                value={email}
                onChange={onChange}
                type="text"
                placeholder="Email Address"
            />
            <input
                name="passwordOne"
                value={passwordOne}
                onChange={onChange}
                type="password"
                placeholder="Password"
            />
            <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={onChange}
                type="password"
                placeholder="Confirm Password"
            />
            {/* <label>
                Admin:
                <input
                    name="isAdmin"
                    type="checkbox"
                    checked={isAdmin}
                    onChange={onChangeCheckbox}
                />
            </label> */}
            <label>
                Organization:
                <input
                    name="isOrganization"
                    type="checkbox"
                    checked={isOrganization}
                    onChange={onChangeCheckbox}
                />
            </label>
            <button type="submit" disabled={isInvalid}>
                Sign Up
            </button>

            {error && <p>{error.message}</p>}
        </form>
    )
}

export default withRouter(SignUpForm)
