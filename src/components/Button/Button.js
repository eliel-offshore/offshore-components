import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function OffshoreButton(props) {
  const { label, onClick, type = 'button', variant = 'contained', color = 'primary', classes = '', disabled = false } = props
  return (
    <Button
        {...props} 
        type={type}
        variant={variant}
        color={color}
        className={classes}
        disabled={disabled}
        onClick={onClick}>
        {label}
    </Button>
  );
}

OffshoreButton.propTypes = {
  label: PropTypes.string.isRequired
}