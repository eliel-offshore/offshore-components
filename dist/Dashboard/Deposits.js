"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Deposits;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventDefault(event) {
  event.preventDefault();
}

var useStyles = (0, _styles.makeStyles)({
  depositContext: {
    flex: 1
  }
});

function Deposits() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Title.default, null, "Recent Deposits"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "p",
    variant: "h4"
  }, "$3,024.00"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    color: "textSecondary",
    className: classes.depositContext
  }, "on 15 March, 2019"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Link.default, {
    color: "primary",
    href: "#",
    onClick: preventDefault
  }, "View balance")));
}