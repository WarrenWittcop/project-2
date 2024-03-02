const {MM7, MM7Schema} = require("../models/MM7")

//create
const create = async (req, res) => {
    try{
        console.log(req.body)
        const newMM7s = await MM7.create(req.body)
        res.redirect("/MM7")
    }catch(err){
        console.log(err)
    }
}

//index

const index = async (req, res)=>{
    try{
        const MM7s = await MM7.find()
        res.render('index.ejs', { 
            MM7s, 
            tabTitle: 'Index',
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }

}

// Show function
const show = async (req, res) => {
        const index = req.params.id
        const MM7s = await MM7.findById(index)
        res.render("show.ejs", 
            {   
                MM7Schema,
                MM7s, 
                tabTitle: MM7s.name,
                currentUser: req.session.currentUser
            })
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
        const MM7s = await MM7.findById(req.params.id)    
        res.render("edit.ejs", { 
            MM7s,
            tabTitle: "Edit Character",
            currentUser: req.session.currentUser
        })
    }


//put = update
const update =  async (req, res)=>{
    try{
        console.log(req.body)
        const index = req.params.id
        const MM7s = await MM7.findByIdAndUpdate(index, req.body, {new: true})
        res.redirect("/MM7")
    }catch(err){
        console.log(err)
    }
}

//destroy
const destroy = async (req, res) => {
    try {
        await MM7.findByIdAndDelete(req.params.id)
        res.redirect("/MM7")
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    show,
    index,
    create,
    newForm,
    edit: editForm,
    destroy,
    update,
}