import React from 'react'
import CurrencyGroup from './CurrencyGroup'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  InputGroup,
  FormControl
} from 'react-bootstrap'

const Settings = props => {
  return (
    <div>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <ControlLabel>Interest Rate *</ControlLabel>
            <InputGroup>
              <FormControl
                type="text"
                value={props.interestRate}
                onChange={props.interestRateChange}
              />
              <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <ControlLabel>Currency to convert amounts to:</ControlLabel>
            <FormControl
              componentClass="select"
              value={props.selectedCurrency.id}
              onChange={props.currencyOptionChange}
            >
              {props.currencies.map(currency => {
                let text = `${currency.id} ( ${currency.symbol} )`
                return (
                  <option value={currency.id} key={currency.id}>
                    {text}
                  </option>
                )
              })}
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <CurrencyGroup
        labelText="Savings Amount *"
        value={props.savingsAmount}
        exchangeRate={props.selectedCurrency.rate}
        currencySymbol={props.selectedCurrency.symbol}
        onChange={props.savingsAmountChange}
      />
    </div>
  )
}

Settings.propTypes = {
  interestRate: PropTypes.string.isRequired,
  savingsAmount: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  selectedCurrency: PropTypes.object.isRequired,
  interestRateChange: PropTypes.func.isRequired,
  currencyOptionChange: PropTypes.func.isRequired,
  savingsAmountChange: PropTypes.func.isRequired
}

export default Settings
