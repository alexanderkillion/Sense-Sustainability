import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../../firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";


function useAuthUser() {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    console.log("useAuthUser loaded");
    console.log('firebase',firebase)
    const releaseAuthListener = firebase.onAuthUserListener(
      authUser => {
        console.log('authuser: ' + authUser)
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setAuthUser(authUser);
      },
      () => {
        console.log('authuser: ' + authUser)
        localStorage.removeItem("authUser");
        setAuthUser(null);
      }
    );

    return () => releaseAuthListener();
  }, []);
  return authUser;
}

export default useAuthUser;
