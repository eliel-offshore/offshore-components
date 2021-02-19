"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

// Dark theme
var theme = (0, _styles.createMuiTheme)({
  palette: {
    type: 'dark',
    primary: {
      main: '#26292C',
      light: 'rgb(81, 91, 95)',
      dark: 'rgb(26, 35, 39)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FFB74D',
      light: 'rgb(255, 197, 112)',
      dark: 'rgb(200, 147, 89)',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    titleBar: {
      main: '#555555',
      contrastText: '#ffffff'
    },
    error: {
      main: _colors.red.A400
    }
  }
});
var _default = theme;
exports.default = _default;