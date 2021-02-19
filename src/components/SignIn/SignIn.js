import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { OffshoreButton, OffshoreTextField } from '../ui';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const initialValue = {
    email: '',
    password: ''
  }

export default function OffshoreSignIn({ initialState = initialValue }) {
    const classes = useStyles();
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values,
          [event.target.name]: event.target.value
        }));
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            setErrors({})
        }
    }, [errors]);

    useEffect(() => {
        if (values.email) {
            const isValidEmail = validateEmail(values.email)
            const isValidPassword = values.password !== ''
            setErrors({
            email: isValidEmail,
            password: isValidPassword
            });
            setIsSubmitting(true);
        }
    }, [values]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
          const isValidEmail = validateEmail(values.email)
          const isValidPassword = values.password !== ''
          setErrors({
            email: isValidEmail,
            password: isValidPassword
          });
          setIsSubmitting(true);
      };
    

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <OffshoreTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                error={errors && !errors.email && isSubmitting}
                helperText={errors && !errors.email && isSubmitting ? 'Not a valid email.' : null}
                onChange={handleChange}
                inputProps={{ "data-testid": "email-input" }}
              />
              <OffshoreTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errors && !errors.password && isSubmitting}
                helperText={errors && !errors.password && isSubmitting ? 'Password is required.' : null}
                value={values.password}
                onChange={handleChange}
                inputProps={{ "data-testid": "password-input" }}
              />
              <OffshoreButton
                type="submit"
                fullWidth={true}
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
                label="Submit"
              >Submit</OffshoreButton>
            </form>
          </div>
        </Container>
      );
}