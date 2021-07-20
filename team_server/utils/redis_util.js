const config = require('../config')
const redis = require('redis')
global.redis_status = 0

let redis_client = redis.createClient(config.redisLocalServer.redisHost, config.redisLocalServer.redisPort)

redis_client.on('error', function (err) {
  global.redis_status = 0
  console.log('Error=====>>>', err)
})

redis_client.on('connect', function (err, r) {
  if (err) {
    console.log('redis disconnected', err)
  } else {
    global.redis_status = 1
    console.log('\033[42;37mredis connect ' + redis_client.address + "\033[0m")
    redis_client.select(1, function (e, r) {
      console.log('\033[42;37mredis select db 1\033[0m')
    })
  }
})

redis = {}

/**
 * 新增 key-value
 * @param {*} key 
 * @param {*} value 
 * @returns 
 */
redis.set = function (key, value) {
  return new Promise((resolve, reject) => {
    redis_client.set(key, value, function(err, res) {
      !err ? resolve(res) : reject(err)
    })
  })
}

/**
 * 获取 key - value
 * @param {*} key 
 * @returns 
 */
redis.get = function (key) {
  return new Promise((resolve, reject) => {
    redis_client.get(key, function (err, res) {
      !err ? resolve(res) : reject(err)
    })
  })
}

/**
 * 设置过期时间
 * @param {*} key 
 * @param {*} value 
 */
redis.expire = function (key, value) {
  return new Promise((resolve, reject) => {
    redis_client.expire(key, value, function (err, res) {
      !err ? resolve(res) : reject(err)
    })
  })
}

/**
 * 持久化key
 * @param {*} key 
 * @returns 
 */
redis.persist  = function (key) {
  return new Promise((resolve, reject) => {
    redis_client.persist(key, value, function(err, res) {
      !err ? resolve(res) : reject(err)
    })
  })
}

// module.exports = redis
