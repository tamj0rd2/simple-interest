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
              <FormControl type="text" value={props.interestRate} />
              <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <ControlLabel>Currency to convert amounts to:</ControlLabel>
            <FormControl componentClass="select" value={props.exchangeRate}>
              {props.currencies.map(currency => {
                let text = `${currency.id} ( ${currency.symbol} )`
                return (
                  <option value={currency.rate} key={currency.id}>
                    {text}
                  </option>
                )
              })}
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <CurrencyGroup labelText="Savings Amount *" value={props.savingsAmount} />
    </div>
  )
}

Settings.propTypes = {
  interestRate: PropTypes.number.isRequired,
  savingsAmount: PropTypes.number.isRequired,
  currencies: PropTypes.array.isRequired,
  exchangeRate: PropTypes.number.isRequired
}

export default Settings
