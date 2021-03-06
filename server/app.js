var express = require('express')
var path = require('path')
var logger = require('morgan')
var routes = require('./routes')
var app = express()

app.use(logger('dev'))
app.use('/', express.static(path.join(__dirname, '../', 'build')))
app.use('/api', routes.api)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.send('404 not found')
})

module.exports = app
