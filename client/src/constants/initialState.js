export default {
  interestRate: 0,
  savingsAmount: 0,
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
