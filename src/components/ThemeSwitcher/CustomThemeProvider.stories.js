import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SwitchUI from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import CustomThemeProvider, { CustomThemeContext } from './CustomThemeProvider';

export default {
    title: 'Components/CustomThemeProvider'
}

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function DummyApp() {
    const classes = useStyles()
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    const isDark = Boolean(currentTheme === 'dark')

    const handleThemeChange = (event) => {
        const { checked } = event.target
        if (checked) {
            setTheme('dark')
        } else {
            setTheme('normal')
        }
    }

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Theme Switcher
                </Typography>
                <FormControlLabel
                    control={<SwitchUI checked={isDark} onChange={handleThemeChange} />}
                    label="Theme"
                />
                </Toolbar>
            </AppBar>
        </div>
    )
}


export const ThemeSwitcher = () => <CustomThemeProvider><DummyApp /></CustomThemeProvider>;

ThemeSwitcher.parameters = {
    jest: ['CustomThemeProvider.test.js']
};