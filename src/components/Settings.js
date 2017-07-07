import React from 'react'
import CurrencyGroup from './CurrencyGroup'
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
              <FormControl type="text" />
              <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <ControlLabel>Currency to convert amounts to:</ControlLabel>
            <FormControl componentClass="select">
              <option value="£">GBP ( £ )</option>
              <option value="$">USD ( $ )</option>
              <option value="...">... ( ... )</option>
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
      <CurrencyGroup labelText="Savings Amount *" />
    </div>
  )
}

export default Settings
