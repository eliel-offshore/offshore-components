"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CustomThemeProvider = require("./CustomThemeProvider.stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders a theme switcher', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CustomThemeProvider.ThemeSwitcher, null)),
      getByText = _render.getByText;

  getByText('Theme Switcher');
  getByText('Theme');
});