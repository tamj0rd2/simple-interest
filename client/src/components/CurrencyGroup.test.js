import React from 'react'
import CurrencyGroup from './CurrencyGroup'

import sinon from 'sinon'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
chai.use(dirtyChai)

const props = {
  value: 100,
  currencySymbol: '$',
  exchangeRate: 2
}

describe('Output', () => {
  it('renders a ControlLabel', () => {
    let wrapper = shallow(<CurrencyGroup {...props} />)
    expect(wrapper.find('ControlLabel')).to.have.length(1)
  })

  it('renders a FormControl with the currency symbol and the amount', () => {
    let wrapper = shallow(<CurrencyGroup {...props} />)
    expect(wrapper.find('FormControl[value=100]')).to.have.length(1)
  })

  it('renders a FormControl with the currency symbol and converted amount', () => {
    let wrapper = shallow(<CurrencyGroup {...props} />)
    expect(wrapper.find('FormControl[value="$ 200.00"]')).to.have.length(1)
  })

  describe('when the labelText prop is provided', () => {
    it('changes the text of the ControlLabel to the value provided', () => {
      let wrapper = shallow(<CurrencyGroup {...props} labelText="Hello!" />)
      expect(wrapper.find('ControlLabel').contains('Hello!')).to.be.true()
    })
  })

  describe('when the labelText prop is not provided', () => {
    it('uses the text "Amount earned per" followed by the scope', () => {
      let wrapper = shallow(<CurrencyGroup {...props} scope="century" />)
      let expected = 'Amount earned per century:'
      expect(wrapper.find('ControlLabel').contains(expected)).to.be.true()
    })
  })

  describe('when the readOnly prop is true', () => {
    it('sets the first FormControl to readOnly', () => {
      let wrapper = shallow(<CurrencyGroup {...props} readOnly={true} />)
      expect(wrapper.find('FormControl').first().prop('readOnly')).to.be.true()
    })
  })

  describe('when the readOnly prop is false', () => {
    it('does not set the first FormControl to readOnly', () => {
      let wrapper = shallow(<CurrencyGroup {...props} readOnly={false} />)
      expect(wrapper.find('FormControl').first().prop('readOnly')).to.be.false()
    })
  })

  describe('when the readOnly prop is not provided', () => {
    it('does not set a readOnly prop on the first FormControl', () => {
      let wrapper = shallow(<CurrencyGroup {...props} />)
      let firstFormControl = wrapper.find('FormControl').first()
      expect(firstFormControl.prop('readOnly')).to.be.undefined()
    })
  })
})

describe('Events', () => {
  describe('when the first FormControl triggers a change event', () => {
    it('calls the function defined as the onChange prop', () => {
      let onChange = sinon.spy()
      let wrapper = shallow(<CurrencyGroup {...props} onChange={onChange} />)
      wrapper.find('FormControl').first().simulate('change')
      expect(onChange.calledOnce).to.be.true()
    })
  })
})
