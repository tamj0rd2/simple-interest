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
    exchangeRate: 1
  }

  render () {
    let earnedPA = this.state.savingsAmount * (this.state.interestRate / 100)
    return (
      <form className="container">
        <Settings
          interestRate={this.state.interestRate}
          savingsAmount={this.state.savingsAmount}
          currencies={this.state.currencies}
          exchangeRate={this.state.exchangeRate}
        />
        <Results earnedPA={earnedPA} />
      </form>
    )
  }
}

export default App
