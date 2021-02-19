"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Orders = require("./Orders.stories");

var _Orders2 = require("./Orders");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rows = [(0, _Orders2.createData)(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44), (0, _Orders2.createData)(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99)];
it('renders an orders list', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Orders.Default, {
    initialState: rows
  })),
      getByText = _render.getByText,
      getAllByTestId = _render.getAllByTestId;

  getByText('Date');
  getByText('Name');
  getByText('Ship To');
  getByText('Payment Method');
  getByText('Sale Amount');
  var listItems = getAllByTestId('list-row');
  expect(listItems).toHaveLength(2);
});