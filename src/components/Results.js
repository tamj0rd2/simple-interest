import React from 'react'
import PropTypes from 'prop-types'
import CurrencyGroup from './CurrencyGroup'

const Results = props => {
  return (
    <div>
      <CurrencyGroup scope="month" value={props.earnedPA / 12} readOnly />
      <CurrencyGroup scope="year" value={props.earnedPA} readOnly />
    </div>
  )
}

Results.propTypes = {
  earnedPA: PropTypes.number.isRequired
}

export default Results
