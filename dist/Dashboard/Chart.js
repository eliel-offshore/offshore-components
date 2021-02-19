"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Chart;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _recharts = require("recharts");

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generate Sales Data
function createData(time, amount) {
  return {
    time: time,
    amount: amount
  };
}

var data = [createData('00:00', 0), createData('03:00', 300), createData('06:00', 600), createData('09:00', 800), createData('12:00', 1500), createData('15:00', 2000), createData('18:00', 2400), createData('21:00', 2400), createData('24:00', undefined)];

function Chart() {
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Title.default, null, "Today"), /*#__PURE__*/_react.default.createElement(_recharts.ResponsiveContainer, null, /*#__PURE__*/_react.default.createElement(_recharts.LineChart, {
    data: data,
    margin: {
      top: 16,
      right: 16,
      bottom: 0,
      left: 24
    }
  }, /*#__PURE__*/_react.default.createElement(_recharts.XAxis, {
    dataKey: "time",
    stroke: theme.palette.text.secondary
  }), /*#__PURE__*/_react.default.createElement(_recharts.YAxis, {
    stroke: theme.palette.text.secondary
  }, /*#__PURE__*/_react.default.createElement(_recharts.Label, {
    angle: 270,
    position: "left",
    style: {
      textAnchor: 'middle',
      fill: theme.palette.text.primary
    }
  }, "Sales ($)")), /*#__PURE__*/_react.default.createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "amount",
    stroke: theme.palette.primary.main,
    dot: false
  }))));
}