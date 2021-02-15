"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OffshoreButton;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OffshoreButton(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick
  }, text);
}