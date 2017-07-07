export default {
  interestRate: '',
  savingsAmount: '',
  currencies: [],
  selectedCurrency: {
    id: 'default',
    symbol: '',
    rate: 1
  }
}

export const currenciesMock = [
  {
    type: 'currency',
    id: 'GBP',
    symbol: '£',
    rate: 1
  },
  {
    type: 'currency',
    id: 'USD',
    symbol: '$',
    rate: 1.293
  }
]
