const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const service_period_date_obj = {
  start_time: { type: String, required: true },
  end_time: { type: String, required: true },
}

const customerSchema = new Schema({
  customer_id: { type: String, unique: true },
  customer_name: { type: String, required: true },
  service_period: { type: String, required: true },
  service_period_date: { type: [service_period_date_obj], required: true },
  skill: { type: Array, required: true },
  authority: { type: String, required: true }
}, {
  timestamps: true
})

customerSchema.plugin(uniqueValidator)
module.exports = mongoose.model('customer', customerSchema, 'customer')