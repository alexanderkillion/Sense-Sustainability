import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { FirebaseContext } from "../../firebase";
import axios from 'axios'


const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  roles: []
};

function SignInForm() {
  const [{ email, password, error }, setSignInFormState] = React.useState(
    INITIAL_STATE
  );
  const firebase = React.useContext(FirebaseContext);
  console.log('firebase', firebase)
  const history = useHistory();

  const isInvalid = password === "" || email === "";

  const onChange = event => {
    const { name, value } = event.target;
    setSignInFormState(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = event => {
    firebase
      .signInWithEmailAndPassword(email, password)
      .then(async (a) => {
        console.log('hmm:', a.user.uid);
        history.push(ROUTES.HOME)
        
      })
      .catch(error => {
        console.log('error:', error);
        setSignInFormState(prev => ({ ...prev, error: error }));
      });

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
}

export default withRouter(SignInForm);
