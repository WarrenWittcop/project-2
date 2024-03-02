const mongoose = require("mongoose")

const MM7Schema = new mongoose.Schema({
  name: {type: String, required: true },
  Class: {type: String, enum: ["Knight", "Paladin", "Thief", "Ranger", "Archer", "Monk", "Sorceror", "Cleric", "Druid"], required: true },
  skill1: {type: String, required: true},
  skill2: {type: String, required: true},
  race: {type:String, enum: ["Goblin", "Human", "Elf", "Dwarf"], required: true},
}, {timestamps: true})

const MM7 = mongoose.model("MM7", MM7Schema)

module.exports = {MM7, MM7Schema}
