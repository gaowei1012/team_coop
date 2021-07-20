const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const problemSchema = new Schema({
  problem_id: { type: String, unique: true },
})

problemSchema.plugin(uniqueValidator)
module.exports = mongoose.model('problems', problemSchema, 'problems')
