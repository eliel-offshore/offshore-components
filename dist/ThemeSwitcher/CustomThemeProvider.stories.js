"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeSwitcher = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _CustomThemeProvider = _interopRequireWildcard(require("./CustomThemeProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Components/CustomThemeProvider'
};
exports.default = _default;
var drawerWidth = 240;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    title: {
      flexGrow: 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerContainer: {
      overflow: 'auto'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  };
});

function DummyApp() {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_CustomThemeProvider.CustomThemeContext),
      currentTheme = _useContext.currentTheme,
      setTheme = _useContext.setTheme;

  var isDark = Boolean(currentTheme === 'dark');

  var handleThemeChange = function handleThemeChange(event) {
    var checked = event.target.checked;

    if (checked) {
      setTheme('dark');
    } else {
      setTheme('normal');
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    position: "fixed",
    className: classes.appBar
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: classes.title
  }, "Theme Switcher"), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Switch.default, {
      checked: isDark,
      onChange: handleThemeChange
    }),
    label: "Theme"
  }))));
}

var ThemeSwitcher = function ThemeSwitcher() {
  return /*#__PURE__*/_react.default.createElement(_CustomThemeProvider.default, null, /*#__PURE__*/_react.default.createElement(DummyApp, null));
};

exports.ThemeSwitcher = ThemeSwitcher;
ThemeSwitcher.parameters = {
  jest: ['CustomThemeProvider.test.js']
};