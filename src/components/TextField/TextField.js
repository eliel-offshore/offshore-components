import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function OffshoreTextField(props) {
    const { 
        label, 
        type = 'text', 
        variant = 'outlined',
        error = false,
        classes = '',
        name,
        id,
        autoComplete = '',
        autoFocus = false,
        margin = 'normal',
        require = false,
        helperText = null,
        onChange, 
        disabled = false } = props

    return (
        <TextField
            {...props}
            type={type}
            className={classes}
            variant={variant}
            margin={margin}
            required={require}
            fullWidth
            id={id}
            name={name}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            error={error}
            helperText={helperText}
            onChange={onChange}
            disabled={disabled}
        />
  );
}

OffshoreTextField.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool
}