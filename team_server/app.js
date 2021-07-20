const createError = require('http-errors')
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./mongo/mongoInit')

const app = express()

app.set('port', process.env.PORT || 5080)

// logger
app.use(morgan('dev'))
app.use(cookieParser())

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// cors
app.use(cors())

console.log("\033[41;37m Server start:" + new Date() + "\033[0m");
// Register all the APIs in the directory
require('./routes/registerRouter')(app)
// require('./routes/registerClientRouter')(app)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

const http = require('http').Server(app)

http.listen(app.get('port'), '0.0.0.0', function() {
  console.log('Express server listening on port ' + app.get('port'))
})

module.exports = app
