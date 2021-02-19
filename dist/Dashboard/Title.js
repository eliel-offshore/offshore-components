"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Title;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Title(props) {
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h2",
    variant: "h6",
    color: "primary",
    gutterBottom: true
  }, props.children);
}

Title.propTypes = {
  children: _propTypes.default.node
};