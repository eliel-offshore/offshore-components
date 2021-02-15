"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OffshoreButton;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function OffshoreButton(props) {
  var label = props.label,
      onClick = props.onClick,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'contained' : _props$variant,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({}, props, {
    type: type,
    variant: variant,
    color: color,
    className: classes,
    disabled: disabled,
    onClick: onClick
  }), label);
}

OffshoreButton.propTypes = {
  label: _propTypes.default.string.isRequired
};