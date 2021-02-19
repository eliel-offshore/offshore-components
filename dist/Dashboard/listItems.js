"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondaryListItems = exports.mainListItems = void 0;

var _react = _interopRequireDefault(require("react"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _Dashboard = _interopRequireDefault(require("@material-ui/icons/Dashboard"));

var _ShoppingCart = _interopRequireDefault(require("@material-ui/icons/ShoppingCart"));

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

var _BarChart = _interopRequireDefault(require("@material-ui/icons/BarChart"));

var _Layers = _interopRequireDefault(require("@material-ui/icons/Layers"));

var _Assignment = _interopRequireDefault(require("@material-ui/icons/Assignment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainListItems = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
  button: true
}, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Dashboard.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
  primary: "Dashboard"
})), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
  button: true
}, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_ShoppingCart.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
  primary: "Orders"
})), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
  button: true
}, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_People.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
  primary: "Customers"
})), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
  button: true
}, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_BarChart.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
  primary: "Reports"
})), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
  button: true
}, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Layers.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
  primary: "Integrations"
})));

exports.mainListItems = mainListItems;

var secondaryListItems = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ListSubheader.default, {
  inset: true
}, "Saved reports"), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
  button: true
}, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Assignment.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
  primary: "Current month"
})), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
  button: true
}, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Assignment.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
  primary: "Last quarter"
})), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
  button: true
}, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Assignment.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
  primary: "Year-end sale"
})));

exports.secondaryListItems = secondaryListItems;