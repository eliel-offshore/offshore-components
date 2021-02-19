"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidAmount = exports.NegativeAmount = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Orders = _interopRequireWildcard(require("./Orders"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Orders'
};
exports.default = _default;
var rows = [(0, _Orders.createData)(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44), (0, _Orders.createData)(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99)];
var rowsNegative = [(0, _Orders.createData)(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', -312.44), (0, _Orders.createData)(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', -866.99)];
var rowsString = [(0, _Orders.createData)(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', '312.44'), (0, _Orders.createData)(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', '')];

var Default = function Default(args) {
  return /*#__PURE__*/_react.default.createElement(_Orders.default, args);
};

exports.Default = Default;
Default.args = {
  initialState: rows
};
Default.parameters = {
  jest: ['Orders.test.js']
};

var NegativeAmount = function NegativeAmount(args) {
  return /*#__PURE__*/_react.default.createElement(_Orders.default, args);
};

exports.NegativeAmount = NegativeAmount;
NegativeAmount.args = {
  initialState: rowsNegative
};

var invalidAmount = function invalidAmount(args) {
  return /*#__PURE__*/_react.default.createElement(_Orders.default, args);
};

exports.invalidAmount = invalidAmount;
invalidAmount.args = {
  initialState: rowsString
};