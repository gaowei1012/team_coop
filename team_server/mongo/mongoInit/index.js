const config = require('../../config')
const mongoose = require('mongoose')

const mongoUrl = `mongodb://${config.mongoLocalServer.host}:${config.mongoLocalServer.port}/${config.mongoLocalServer.dbname}`

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}, function (e, r) {
  if (!e) {
    console.log("\033[42;37mmongodb connected successful " + mongoUrl + "\033[0m")
  } else {
    console.log("mongodb connect error", e)
  }
})
