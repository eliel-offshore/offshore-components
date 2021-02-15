import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function OffshoreButton({ label, onClick, type = 'button', variant = 'contained', color = 'primary', classes = {}, disabled = false }) {
  return (
    <Button 
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