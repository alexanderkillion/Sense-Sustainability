import React from 'react'
import { FirebaseContext } from '../firebase';

function SignOut() {
    const firebase = React.useContext(FirebaseContext);

    return (
        <button type="button" className='styledButton' onClick={firebase.signOut}>
            Sign Out
        </button>
    )
}

export default SignOut;
