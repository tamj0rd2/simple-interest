import React from 'react'
import CurrencyGroup from './CurrencyGroup'

const Results = props => {
  return (
    <div>
      <CurrencyGroup scope="month" readOnly />
      <CurrencyGroup scope="year" readOnly />
    </div>
  )
}

export default Results
