"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OffshoreTextField;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function OffshoreTextField(props) {
  var label = props.label,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'outlined' : _props$variant,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$classes = props.classes,
      classes = _props$classes === void 0 ? '' : _props$classes,
      name = props.name,
      id = props.id,
      _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? '' : _props$autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'normal' : _props$margin,
      _props$require = props.require,
      require = _props$require === void 0 ? false : _props$require,
      _props$helperText = props.helperText,
      helperText = _props$helperText === void 0 ? null : _props$helperText,
      onChange = props.onChange,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;

  return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, props, {
    type: type,
    className: classes,
    variant: variant,
    margin: margin,
    required: require,
    fullWidth: true,
    id: id,
    name: name,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    error: error,
    helperText: helperText,
    onChange: onChange,
    disabled: disabled
  }));
}

OffshoreTextField.propTypes = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  autoFocus: _propTypes.default.bool
};