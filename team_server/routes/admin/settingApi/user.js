const _ = require('lodash')
const express = require('express')
const router = express.Router()
const config = require('../../../config')
const utils = require('../../../utils/utils')
const mongoModal = require('../../../mongo/mongoInit/mongoModal')

/**
 * 用户注册
 */
router.post('/', function (req, res) {
  const data = req.body
  mongoModal.USERS.create(data).then((doc) => {
    res.send(utils.resSuccess('用户创建成功', doc))
  }).catch(err => {
    res.send(utils.resFail(config.DbInsertError, err._message))
  })
})

/**
 * 用户登录
 */
router.post('/login', function (req, res) {
  const data = req.body
  mongoModal.USERS.findOne(data).then(doc => {
    res.send(utils.resSuccess('用户登录成功', doc))
  }).catch(err => {
    res.send(utils.resFail(config.DbInsertError, err._message))
  })
})

/**
 * 查询用户
 */
router.get('/:user_id', function (req, res) {
  const query = { _id: req.params.user_id }
  mongoModal.USERS.findOne(query).sort({createAt: -1})
    .then(doc => {
      res.send(utils.resSuccess('获取用户信息成功!', doc))
    })
    .catch(err => {
      res.send(utils.resFail(config.DataIllegal, '获取用户信息失败!'))
    })
})

module.exports = router
