import React, { Component } from 'react'
import { Results, Settings } from '../components'

class App extends Component {
  state = {
    interestRate: 0,
    savingsAmount: 0,
    currencies: [
      {
        id: 'GBP',
        symbol: '£',
        rate: 1
      },
      {
        id: 'USD',
        symbol: '$',
        rate: 1.293
      }
    ],
    selectedCurrencyId: 'GBP'
  }

  isValid (newValue) {
    // returns true if the value is a number/float
    return /^\d+$/.test(newValue) || newValue === ''
  }

  savingsAmountChange = e => {
    if (this.isValid(e.target.value)) {
      this.setState({ savingsAmount: parseFloat(e.target.value) || 0 })
    }
  }

  interestRateChange = e => {
    if (this.isValid(e.target.value)) {
      this.setState({ interestRate: parseFloat(e.target.value) || 0 })
    }
  }

  render () {
    let earnedPA = this.state.savingsAmount * (this.state.interestRate / 100)
    let selectedCurrency = this.state.currencies.find(
      currency => currency.id === this.state.selectedCurrencyId
    )

    return (
      <form className="container">
        <Settings
          interestRate={this.state.interestRate}
          savingsAmount={this.state.savingsAmount}
          currencies={this.state.currencies}
          selectedCurrency={selectedCurrency}
          savingsAmountChange={this.savingsAmountChange}
          interestRateChange={this.interestRateChange}
        />
        <Results earnedPA={earnedPA} selectedCurrency={selectedCurrency} />
      </form>
    )
  }
}

export default App
