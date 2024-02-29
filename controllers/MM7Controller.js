const MM7 = require("../models/MM7")

// const create = async (req, res) => {
//     try{
//         const newCharacter = await character.create(req.body)
//         console.log(newCharacter)
//         res.redirect('/MM7s')
//     }catch(err){
//         console.log(err)
//     }
// }
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





module.exports = {
    // create,
    newForm,
}