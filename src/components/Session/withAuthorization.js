import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { FirebaseContext } from "../../firebase";
import useAuthUser from "./useAuthUser";

const withAuthorization = condition => Component => {
  function WithAuthorization(props) {
    const firebase = useContext(FirebaseContext);
    const user = useAuthUser();
    const history = useHistory();

    useEffect(() => {
      const releaseAuthListener = firebase.onAuthUserListener(
        authUser => {
          console.log('authuser - withAuthorization: ' + authUser)
          if (!condition(authUser)) {
            history.push(ROUTES.LOGIN);
          }
        },
        () => {
          history.push(ROUTES.LOGIN);
        }
      );

      return () => releaseAuthListener();
    }, []);

    return condition(user) && <Component {...props} />;
  }

  return WithAuthorization;
};

export default withAuthorization;
