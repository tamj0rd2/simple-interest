import React, { Component } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup,
  InputGroup,
  Row,
  Col,
  Glyphicon
} from 'react-bootstrap'

class App extends Component {
  render () {
    return (
      <form className="container">
        <Row>
          <Col md={6} sm={6}>
            <FormGroup>
              <ControlLabel>Interest Rate *</ControlLabel>
              <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>%</InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={6} sm={6}>
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

        <FormGroup>
          <ControlLabel>Savings amount *</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>£</InputGroup.Addon>
            <FormControl type="text" />
            <InputGroup.Addon>
              <Glyphicon glyph="arrow-right" />
            </InputGroup.Addon>
            <FormControl type="text" value="$convertedValue" readOnly />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Amount earned per month:</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>£</InputGroup.Addon>
            <FormControl type="text" readOnly />
            <InputGroup.Addon>
              <Glyphicon glyph="arrow-right" />
            </InputGroup.Addon>
            <FormControl type="text" value="$convertedValue" readOnly />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Amount earned per year:</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>£</InputGroup.Addon>
            <FormControl type="text" readOnly />
            <InputGroup.Addon>
              <Glyphicon glyph="arrow-right" />
            </InputGroup.Addon>
            <FormControl type="text" value="$convertedValue" readOnly />
          </InputGroup>
        </FormGroup>
      </form>
    )
  }
}

export default App
