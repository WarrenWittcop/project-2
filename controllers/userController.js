const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")

//new user sign up
router.get("/new", (req, res) =>{
    res.render("users/new.ejs",{
    currentUser: req.session.currentUser})
})

//create user
router.post("/", async(req, res) => {
    try{
        console.log
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        console.log(req.body)
        const newUser = await User.create(req.body)
        console.log(newUser, "this is new user")
        res.redirect("/")
    }catch(err){
        console.log(err)
    }
})


module.exports = router