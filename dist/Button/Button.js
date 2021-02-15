"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OffshoreButton;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OffshoreButton(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: type,
    variant: variant,
    color: color,
    className: classes,
    disabled: disabled,
    onClick: onClick
  }, label);
}

OffshoreButton.propTypes = {
  label: _propTypes.default.string.isRequired
};