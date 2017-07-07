import React from 'react'
import Settings from './Settings'
import { currenciesMock } from '../constants/initialState'

import sinon from 'sinon'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
chai.use(dirtyChai)

const props = {
  interestRate: '10',
  savingsAmount: '1000',
  currencies: [].concat(currenciesMock),
  selectedCurrency: currenciesMock[0],
  interestRateChange: sinon.spy(),
  currencyOptionChange: sinon.spy(),
  savingsAmountChange: sinon.spy()
}

describe('Output', () => {
  const wrapper = shallow(<Settings {...props} />)

  it('renders a FormGroup for Interest Rate', () => {
    let controlLabels = wrapper.find('FormGroup').find('ControlLabel')
    expect(controlLabels.contains('Interest Rate *')).to.be.true()
  })

  it('renders a select FormControl for currency selection', () => {
    let selector = 'FormControl[componentClass="select"]'
    expect(wrapper.find(selector)).to.have.length(1)
  })

  it('renders a CurrencyGroup', () => {
    expect(wrapper.find('CurrencyGroup')).to.have.length(1)
  })

  describe('Currency selection form control', () => {
    it('contains options for each available currency', () => {
      let options = wrapper.find('option')
      expect(options).to.have.length(2)

      let option = options.at(0)
      expect(option.prop('value')).to.equal('GBP')
      expect(option.contains('GBP ( £ )')).to.be.true()

      option = options.at(1)
      expect(option.prop('value')).to.equal('USD')
      expect(option.contains('USD ( $ )')).to.be.true()
    })
  })
})
