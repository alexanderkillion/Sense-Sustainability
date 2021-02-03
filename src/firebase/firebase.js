// import React, {useState} from 'React';
import app from "firebase/app";
import "firebase/database";
import "firebase/auth";
import axios from 'axios'


// CREATE ./config.js file to export your firebase configuration here.
import config from "./config";

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.database();
    this.auth = app.auth();
    // this.userAxios = axios.create();
 
  }

  // *** Auth API ***
  createUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password)
    

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  setCustomUserClaims = (uid) => {
    // console.log('set custom user claims')
    axios.post('/setAdmin', {uid})
    .then((res) => {
      console.log(res);
      // expected response:
      // { isAdmin: true }
      }
    )
  }

  getCustomUserClaims = (uid) => {
    axios.post('/getMyClaims', {uid})
  }
    
 

  signOut = () => this.auth.signOut();

  sendPasswordResetEmail = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password => this.auth.currentUser.updatePassword(password);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(user => {
      // console.log('user.uid',user.uid)
      console.log('user',user)
      if (user) {
        // console.log('user found');
        // this.auth.currentUser.getIdTokenResult()
        //   .then(idTokenResult => {

        //     console.log(idTokenResult)
        //     // console.log(idTokenResult.claims.admin)
        //   })
        // console.log(this.auth.currentUser.getIdTokenResult())

        // this.user(user.uid)
        //   .once("value")
        //   .then(snapshot => {
        //     console.log('snapshot',snapshot)
        //     const dbUser = snapshot.val();
        //     console.log(dbUser)

            // if (!dbUser.roles) {
            //   dbUser.roles = {};
            // }
            
            axios.post('/getMyClaims', {uid: user.uid}).then((res) => {
              console.log(res);
              return res
              // expected response:
              // userRecord (should not receive the entire record.  Destructure in the backend)
              }
            ).then(data => {
              
              next({
                uid: user.uid,
                email: user.email,
                roles: [data.data.customClaims.type]
  
              });
        
        
        
                // history.goBack();
                // history.push(ROUTES.HOME);
        
            });

            
          // }).catch(error => {
          //   console.error(error)
          // });
      } else {
        fallback();
      }
    });

  // *** User API ***
  user = uid => this.db.ref(`/users/${uid}`);

  users = () => this.db.ref(`users`);
}

export default Firebase;
