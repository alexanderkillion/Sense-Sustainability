const express = require('express');
const sevRouter = express.Router();
const admin = require('firebase-admin');

const app = express();

sevRouter.get('/login', function (req, res) {
    res.render('login.html');
});

sevRouter.post('/signup', function (req, res) {
    res.render('signup.html');
});

sevRouter.get('/profile', function (req, res) {
    const sessionCookie = req.cookies.session || '';
    admin
        .auth()
        .verifySessionCookie(sessionCookie, true /** checkRevoked */)
        .then(() => {
            res.render('profile.html');
        })
        .catch((error) => {
            res.redirect('/login');
        });
});

sevRouter.get('/', function (req, res) {
    res.render('index.html');
});

sevRouter.post('/sessionLogin', (req, res) => {
    const idToken = req.body.idToken.toString();

    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin
        .auth()
        .createSessionCookie(idToken, { expiresIn })
        .then(
            (sessionCookie) => {
                const options = { maxAge: expiresIn, httpOnly: true };
                res.cookie('session', sessionCookie, options);
                res.end(JSON.stringify({ status: 'success' }));
            },
            (error) => {
                res.status(401).send('UNAUTHORIZED REQUEST!');
            }
        );
});

sevRouter.get('/sessionLogout', (req, res) => {
    res.clearCookie('session');
    res.redirect('/login');
});

module.exports = sevRouter;
