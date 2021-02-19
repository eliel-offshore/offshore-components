"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createData = createData;
exports.default = Orders;
exports.rows = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _styles = require("@material-ui/core/styles");

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return {
    id: id,
    date: date,
    name: name,
    shipTo: shipTo,
    paymentMethod: paymentMethod,
    amount: amount
  };
}

var rows = [createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44), createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99), createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81), createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39), createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79)];
exports.rows = rows;

function preventDefault(event) {
  event.preventDefault();
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    seeMore: {
      marginTop: theme.spacing(3)
    },
    invalid: {
      background: 'lightgray'
    },
    negative: {
      color: 'red'
    }
  };
});

function Orders(_ref) {
  var _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? rows : _ref$initialState;
  var classes = useStyles();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  (0, _react.useEffect)(function () {
    setData(initialState);
  }, [initialState]);

  function isValidAmount(num) {
    return typeof num == 'number';
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Title.default, null, "Recent Orders"), /*#__PURE__*/_react.default.createElement(_Table.default, {
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Date"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Name"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Ship To"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Payment Method"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "right"
  }, "Sale Amount"))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, data.map(function (row) {
    var numClass = !isValidAmount(row.amount) ? classes.invalid : row.amount < 0 ? classes.negative : "";
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: row.id,
      "data-testid": "list-row"
    }, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      "data-testid": "list-date"
    }, row.date), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      "data-testid": "list-name"
    }, row.name), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      "data-testid": "list-shipTo"
    }, row.shipTo), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      "data-testid": "list-paymentMethod"
    }, row.paymentMethod), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      "data-testid": "list-amount",
      align: "right",
      className: "amount ".concat(numClass)
    }, !isValidAmount(row.amount) ? '--' : row.amount));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.seeMore
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    color: "primary",
    href: "#",
    onClick: preventDefault
  }, "See more orders")));
}