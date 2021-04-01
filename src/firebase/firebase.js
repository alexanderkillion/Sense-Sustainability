import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import axios from 'axios';

// CREATE ./config.js file to export your firebase configuration here.
import config from './config';

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.db = app.database();
        this.auth = app.auth();
        this.roles = {};
    }

    // *** Auth API ***
    createUserWithEmailAndPassword = (email, password, roles) => {
        this.roles = roles;
        return this.auth.createUserWithEmailAndPassword(email, password);
    };

    signInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    setCustomUserClaims = (uid) => {
        axios.post('/setAdmin', { uid }).then((res) => {
            console.log(res);
            // expected response:
            // { isAdmin: true }
        });
    };

    getCustomUserClaims = (uid) => {
        axios.post('/getMyClaims', { uid });
    };

    signOut = () => this.auth.signOut();

    sendPasswordResetEmail = (email) => this.auth.sendPasswordResetEmail(email);

    updatePassword = (password) =>
        this.auth.currentUser.updatePassword(password);

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged((user) => {
            if (user) {
                if (this.roles.hasOwnProperty('administrator')) {
                    this.setCustomUserClaims(user.uid);
                }
                axios
                    .post('/getMyClaims', { uid: user.uid })
                    .then((res) => {
                        return res;
                    })
                    .then((data) => {
                        next({
                            uid: user.uid,
                            email: user.email,
                            roles: data.data.customClaims
                                ? [data.data.customClaims.type]
                                : this.roles.administrator
                                ? [this.roles.administrator]
                                : [],
                        });
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***
    user = (uid) => this.db.ref(`/users/${uid}`);

    users = () => this.db.ref(`users`);
}

export default Firebase;
