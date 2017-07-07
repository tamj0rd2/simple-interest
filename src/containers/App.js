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
        />
        <Results earnedPA={earnedPA} selectedCurrency={selectedCurrency} />
      </form>
    )
  }
}

export default App
