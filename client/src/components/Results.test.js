import React from 'react'
import Results from './Results'

import { currenciesMock } from '../constants/initialState'
import { shallow } from 'enzyme'
import { expect } from 'chai'

const props = {
  earnedPA: 240,
  selectedCurrency: Object.assign({}, currenciesMock[0])
}

describe('Output', () => {
  const wrapper = shallow(<Results {...props} />)

  it('contains a CurrencyGroup that shows the amount earned per month', () => {
    let group = wrapper.find('CurrencyGroup[scope="month"]')
    expect(group).to.have.length(1)
    expect(group.prop('value')).to.equal('20.00')
    expect(group.prop('exchangeRate')).to.equal(1)
    expect(group.prop('currencySymbol')).to.equal('£')
  })

  it('contains a CurrencyGroup that shows the amount earned per year', () => {
    let group = wrapper.find('CurrencyGroup[scope="year"]')
    expect(group).to.have.length(1)
    expect(group.prop('value')).to.equal('240.00')
    expect(group.prop('exchangeRate')).to.equal(1)
    expect(group.prop('currencySymbol')).to.equal('£')
  })
})
