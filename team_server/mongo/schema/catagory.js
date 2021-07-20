const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catagorySchema = new Schema({
  catagory_id: { type: String, unique: true },
  catagory_name: { type: String, required: true }
}, {
  timestamps: true
})

catagorySchema.plugin(uniqueValidator)
module.exports = mongoose.model('catagory', catagorySchema, 'catagory')
