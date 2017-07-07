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
        <FormControl type="text" readOnly={props.readOnly} />
        <InputGroup.Addon>
          <Glyphicon glyph="arrow-right" />
        </InputGroup.Addon>
        <FormControl type="text" value="$convertedValue" readOnly />
      </InputGroup>
    </FormGroup>
  )
}

CurrencyGroup.propTypes = {
  scope: PropTypes.string,
  labelText: PropTypes.string,
  readOnly: PropTypes.bool
}

export default CurrencyGroup
