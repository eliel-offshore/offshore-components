"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

// Normal or default theme
var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#cc4444'
    },
    error: {
      main: _colors.red.A400
    },
    background: {
      default: '#f5f5f5'
    },
    titleBar: {
      main: '#eeeeee',
      contrastText: '#222222'
    }
  }
});
var _default = theme;
exports.default = _default;