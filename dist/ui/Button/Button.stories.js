"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disabled = exports.Secondary = exports.Primary = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'UI/OffshoreButton',
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
};
exports.default = _default;

var Default = function Default(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args, "Default");
};

exports.Default = Default;
Default.args = {
  color: 'default'
};

var Primary = function Primary(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args, "Primary");
};

exports.Primary = Primary;
Primary.args = {};

var Secondary = function Secondary(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args, "Secondary");
};

exports.Secondary = Secondary;
Secondary.args = {
  color: 'secondary'
};

var Disabled = function Disabled(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args, "Disabled");
};

exports.Disabled = Disabled;
Disabled.args = {
  disabled: true
};