import React from 'react';
import Button from '@material-ui/core/Button';

export default function OffshoreButton(props) {
    const { label, onClick, type = 'button', variant = 'contained', color = 'primary', classes = '', disabled = false, children } = props
    return (
      <Button
          {...props} 
          type={type}
          variant={variant}
          color={color}
          className={classes}
          disabled={disabled}
          onClick={onClick}>
          {children}
      </Button>
    );
  }
