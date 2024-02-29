const mongoose = require("mongoose")

const MM7Schema = new mongoose.Schema({
  name: {type: String, required: true },
  race: {type: String, required: true },
  class: {type: String, required: true},
  spells: {type: String, required: true}
}, {timestamps: true})

const MM7 = mongoose.model("MM7", MM7Schema)

module.exports = MM7