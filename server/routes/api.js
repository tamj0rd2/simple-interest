var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send('<a href="/api/currencies">/currencies</a>')
})

router.get('/currencies', function (req, res, next) {
  let Currency = (id, symbol, rate) => {
    return {
      type: 'currency',
      id,
      symbol,
      rate
    }
  }

  res.json({
    data: [
      Currency('GBP', '£', 1),
      Currency('USD', '$', 1.293),
      Currency('EUR', '€', 1.135),
      Currency('CAD', '$', 1.674),
      Currency('AUD', '$', 1.705)
    ]
  })
})

module.exports = router
