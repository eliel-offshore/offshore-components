"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disabled = exports.Error = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'UI/OffshoreTextField'
};
exports.default = _default;

var Default = function Default(args) {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, args);
};

exports.Default = Default;
Default.args = {
  label: 'Default'
};

var Error = function Error(args) {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, args);
};

exports.Error = Error;
Error.args = {
  label: 'Error',
  error: true,
  value: 'test'
};

var Disabled = function Disabled(args) {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, args);
};

exports.Disabled = Disabled;
Disabled.args = {
  label: 'Disabled',
  disabled: true
};