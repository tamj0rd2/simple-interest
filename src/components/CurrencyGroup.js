import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup,
  ControlLabel,
  InputGroup,
  Glyphicon,
  FormControl
} from 'react-bootstrap'

const CurrencyGroup = props => {
  return (
    <FormGroup>
      <ControlLabel>
        {props.labelText || `Amount earned per ${props.scope}:`}
      </ControlLabel>
      <InputGroup>
        <InputGroup.Addon>£</InputGroup.Addon>
        <FormControl
          type="text"
          value={props.value}
          onChange={props.onChange}
          readOnly={props.readOnly}
        />
        <InputGroup.Addon>
          <Glyphicon glyph="arrow-right" />
        </InputGroup.Addon>
        <FormControl
          type="text"
          value={`${props.currencySymbol} ${props.value * props.exchangeRate}`}
          readOnly
        />
      </InputGroup>
    </FormGroup>
  )
}

CurrencyGroup.propTypes = {
  value: PropTypes.number.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,
  scope: PropTypes.string,
  labelText: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func
}

export default CurrencyGroup
