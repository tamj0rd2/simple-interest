import React from 'react'
import PropTypes from 'prop-types'
import CurrencyGroup from './CurrencyGroup'

const Results = props => {
  return (
    <div>
      <CurrencyGroup
        scope="month"
        value={(props.earnedPA / 12).toFixed(2).toString()}
        exchangeRate={props.selectedCurrency.rate}
        currencySymbol={props.selectedCurrency.symbol}
        readOnly
      />
      <CurrencyGroup
        scope="year"
        value={props.earnedPA.toFixed(2).toString()}
        exchangeRate={props.selectedCurrency.rate}
        currencySymbol={props.selectedCurrency.symbol}
        readOnly
      />
    </div>
  )
}

Results.propTypes = {
  earnedPA: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.object.isRequired
}

export default Results
