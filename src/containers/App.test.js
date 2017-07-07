import React from 'react'
import App from './App'

import initialState from '../constants/initialState'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
chai.use(dirtyChai)

it('renders without crashing', () => {
  shallow(<App />)
})

describe('Initial values', () => {
  const wrapper = shallow(<App />)

  it('has the correct initial state', () => {
    expect(wrapper.state()).to.deep.equal(initialState)
  })
})

describe('Output', () => {
  const wrapper = shallow(<App />)
  wrapper.instance().savingsAmountChange({ target: { value: 1200 } })
  wrapper.instance().interestRateChange({ target: { value: 10 } })
  wrapper.instance().currencyOptionChange({ target: { value: 'USD' } })

  it('renders a Setings component with the correct props', () => {
    let settings = wrapper.find('Settings')
    expect(settings).to.have.length(1)
    expect(settings.prop('selectedCurrency')).to.be.an('object')
    expect(settings.prop('selectedCurrency').id).to.equal('USD')
  })

  it('renders a Results component with the correct props', () => {
    let results = wrapper.find('Results')
    expect(results).to.have.length(1)
    expect(results.prop('earnedPA')).to.equal(120)
    expect(results.prop('selectedCurrency')).to.be.an('object')
    expect(results.prop('selectedCurrency').id).to.equal('USD')
  })
})

describe('Functions', () => {
  describe('isValid', () => {
    let wrapper = shallow(<App />)

    it('returns true if the value is numerical', () => {
      expect(wrapper.instance().isValid('12345')).to.be.true()
    })

    it('returns true if the value is an empty string', () => {
      expect(wrapper.instance().isValid('')).to.be.true()
    })

    it('returns false if the value contains letters', () => {
      expect(wrapper.instance().isValid('1234a')).to.be.false()
    })

    it('returns false if the value contains symbols', () => {
      expect(wrapper.instance().isValid('1234.1234')).to.be.false()
    })
  })

  describe('savingsAmountChange', () => {
    let wrapper, isValidStub

    beforeEach(() => {
      isValidStub = sinon.stub(App.prototype, 'isValid')
      wrapper = shallow(<App />)
    })

    afterEach(() => {
      isValidStub.restore()
    })

    describe('when the target value is numeric', () => {
      it('updates the savingsAmount state with the new value', () => {
        isValidStub.returns(true)
        let event = { target: { value: '180' } }
        wrapper.instance().savingsAmountChange(event)
        expect(wrapper.state('savingsAmount')).to.equal(180)
      })
    })

    describe('when the target value is an empty string', () => {
      it('updates the savingsAmount state with the new value', () => {
        isValidStub.returns(true)
        let event = { target: { value: '' } }
        wrapper.instance().savingsAmountChange(event)
        expect(wrapper.state('savingsAmount')).to.equal(0)
      })
    })

    describe('when the target value is invalid', () => {
      it('updates the savingsAmount state with the new value', () => {
        isValidStub.returns(false)
        let event = { target: { value: 'abcd' } }
        wrapper.instance().savingsAmountChange(event)
        expect(wrapper.state('savingsAmount')).to.equal(0)
      })
    })
  })

  describe('interestRateChange', () => {
    let wrapper, isValidStub

    beforeEach(() => {
      isValidStub = sinon.stub(App.prototype, 'isValid')
      wrapper = shallow(<App />)
    })

    afterEach(() => {
      isValidStub.restore()
    })

    describe('when the target value is numeric', () => {
      it('updates the interestRate state with the new value', () => {
        isValidStub.returns(true)
        let event = { target: { value: '180' } }
        wrapper.instance().interestRateChange(event)
        expect(wrapper.state('interestRate')).to.equal(180)
      })
    })

    describe('when the target value is an empty string', () => {
      it('updates the interestRate state with the new value', () => {
        isValidStub.returns(true)
        let event = { target: { value: '' } }
        wrapper.instance().interestRateChange(event)
        expect(wrapper.state('interestRate')).to.equal(0)
      })
    })

    describe('when the target value is invalid', () => {
      it('updates the interestRate state with the new value', () => {
        isValidStub.returns(false)
        let event = { target: { value: 'abcd' } }
        wrapper.instance().interestRateChange(event)
        expect(wrapper.state('interestRate')).to.equal(0)
      })
    })
  })

  describe('currencyOptionChange', () => {
    let wrapper = shallow(<App />)
    let event = { target: { value: 'USD' } }

    it('updates the selectedCurrencyId state with the new value', () => {
      wrapper.instance().currencyOptionChange(event)
      expect(wrapper.state('selectedCurrencyId')).to.equal('USD')
    })
  })
})
