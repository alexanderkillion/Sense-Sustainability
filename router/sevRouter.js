// const express = require('express')
// // const User = require('../models/user.js')
// const jwt = require('jsonwebtoken')
// const app = express()


// // Signup
// authRouter.post("/signup", (req, res, next) => {
//   User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     if(user){
//       res.status(403)
//       return next(new Error("That username is already taken"))
//     }
//     const newUser = new User(req.body)
//     newUser.save((err, savedUser) => {
//       if(err){
//         res.status(500)
//         return next(err)
//       }
//       // payload, secret
//       const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
//       return res.status(201).send({ token, user: savedUser.withoutPassword() })
//     })
//   })
// })

// // Login
// authRouter.post("/login", (req, res, next) => {
//   User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     if(!user){
//       res.status(403)
//       return next(new Error("Username or Password are incorrect"))
//     }

//     user.checkPassword(req.body.password, (err, isMatch) => {
//       if(err) {
//         res.status(403)
//         return next(new Error("Username or Password are incorrect"))
//       }
//       if(!isMatch){
//         res.status(403)
//         return next(new Error(`Username or Password are incorrect`))
//       }
//       const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
//       return res.status(200).send({ token, user: user.withoutPassword() })
//     })
//   })
// })

const express = require("express");
const sevRouter = express.Router()
const admin = require('firebase-admin');

const app = express()


// app.all("*", (req, res, next) => {
//     // res.cookie("XSRF-TOKEN", req.csrfToken());
//     next();
//   });
  
sevRouter.get("/login", function (req, res) {
    res.render("login.html"); 
  });
  
  sevRouter.post("/signup", function (req, res) {
    res.render("signup.html");
  });
  
  sevRouter.get("/profile", function (req, res) {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true /** checkRevoked */)
      .then(() => {
        res.render("profile.html");
      })
      .catch((error) => {
        res.redirect("/login");
      });
  });
  
  sevRouter.get("/", function (req, res) {
    res.render("index.html");
  });
  
  sevRouter.post("/sessionLogin", (req, res) => {
    const idToken = req.body.idToken.toString();
  
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin
      .auth()
      .createSessionCookie(idToken, { expiresIn })
      .then(
        (sessionCookie) => {
          const options = { maxAge: expiresIn, httpOnly: true };
          res.cookie("session", sessionCookie, options);
          res.end(JSON.stringify({ status: "success" }));
        },
        (error) => {
          res.status(401).send("UNAUTHORIZED REQUEST!");
        }
      );
  });
  
  sevRouter.get("/sessionLogout", (req, res) => {
    res.clearCookie("session");
    res.redirect("/login");
  });

module.exports = sevRouter


