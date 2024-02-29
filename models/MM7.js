const mongoose = require("mongoose")

const MM7Schema = new mongoose.Schema({
  name: {type: String, required: true },
  Class: {type: String, enum: ["Knight", "Paladin", "Thief", "Ranger", "Archer", "Monk", "Sorceror", "Cleric", "Druid"], required: true },
  skill1: {type: String, required: true},
  skill2: {type: String, required: true},
}, {timestamps: true})

const MM7 = mongoose.model("MM7", MM7Schema)

module.exports = MM7