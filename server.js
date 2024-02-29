require("dotenv").config()

const port = 3000
const express = require("express")
const app = express()
require("./config/database.js")
const MM7 = require("./models/MM7.js") 
const methodOverride = require("method-override")
const MM7Routes = require("./routes/MM7s")
const userController = require("./controllers/userController")
const session = require("express-session")
const sessionsController = require("./controllers/sessions.js")

//middleware--goes above the 7 restful routes
app.use(express.static("public"))
//express.json() allows our server to accept json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false, }))

    app.use("/users", userController)
    app.use("/sessions", sessionsController)

    //routes
app.use("/MM7", MM7Routes)
app.get("/", (req, res) => {
   res.redirect("/MM7s")})

app.get("/MM7", (req, res) => {
    res.render("index.ejs", {
        allMM7s: MM7s,
        tabTitle: "Index",
        currentUser: req.session.currentUser,
    })
})   
    app.listen(3000, () => {
        console.log("Server is working!!!")
    }) 