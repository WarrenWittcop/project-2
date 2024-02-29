const MM7 = require("../models/MM7")

//create
const create = async (req, res) => {
    try{
        const newMM7 = await MM7.create(req.body)
        console.log(newMM7)
        res.redirect("/MM7")
    }catch(err){
        console.log(err)
    }
}

//index

const index = async (req, res)=>{
    try{
        const MM7 = await MM7.find()
        res.render('index.ejs', { 
            MM7, 
            tabTitle: 'Index',
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }

}

// Show function
const show = async (req, res) => {
    try{
        console.log(req.params.id)
        const index = req.params.id
        // .find({_id: index})
        const character = await character.findById(index)
        res.render('show.ejs', 
            {   
                character, 
                tabTitle: character.class,
                currentUser: req.session.currentUser
            })
    }catch(err){
        console.log(err)
    }
}

//new
const newForm = (req, res)=>{
    try{
        res.render('new.ejs', {
            tabTitle: 'New Character',
            currentUser: req.session.currentUser,
        })
    }catch(err){
        console.log(err)
    }
}

//edit
const editForm = async(req, res) => {
    try{
        const mm7 = await MM7.findById(req.params.id)    
        res.render("edit.ejs", { 
            mm7,
            tabTitle: "Edit Character",
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    index,
    create,
    newForm,
    edit: editForm,
}