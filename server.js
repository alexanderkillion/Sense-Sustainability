const app = require("express")();
const admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");
app.use(require("body-parser").json());
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://server-auth-41acc.firebaseio.com"
});
app.post("/setAdmin", async (req, res) => {
    admin.auth()
        .setCustomUserClaims(req.body.uid, {
            type: 'administrator',
        })
        .then((userRecord) => {
        return res.status(200).send({admin: true})})
})

app.post("/getMyClaims", async (req, res) => {
    admin.auth()
          .getUser(req.body.uid)
          .then((userRecord) => {
            const {uid, email, customClaims} = userRecord
            return res.status(200).send({uid, email, customClaims})})
 

  })

  app.get("/login", function (req, res) {
    // res.render("login.html"); 
  });
  
  app.post("/signup", function (req, res) {
    // res.render("signup.html");
    return res.status(200).send(userRecord);
  });
  
  app.get("/profile", function (req, res) {
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
  
  app.get("/", function (req, res) {
    res.render("index.html");
  });
  
  app.post("/sessionLogin", (req, res) => {
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
  
  app.get("/sessionLogout", (req, res) => {
    res.clearCookie("session");
    res.redirect("/login");
  });


app.listen(3000, () => console.log("Listening on port 3000"));