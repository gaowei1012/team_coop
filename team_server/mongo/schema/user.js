const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  user_id: { type: String, unique: true }, // 用户id
  username: {
    type: String,
    unique: true,
    trim: true,
    maxLength: 8
  }, // 用户名
  password: { type: String, required: true }, // 用户密码
  description: { type: String }, // 用户简介 
  license_expired: { type: Date, default: Date.now } // token 过期时间
}, {
  timestamps: true
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('users', userSchema, 'users')
