"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _SignIn = require("./SignIn.stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders a sign in component', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_SignIn.Default, null)),
      getByText = _render.getByText,
      getByLabelText = _render.getByLabelText;

  getByLabelText('Email Address');
  getByLabelText('Password');
  getByText('Sign in');
});
it('should not have an error for valid email and password', function () {
  var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_SignIn.Default, null)),
      getByTestId = _render2.getByTestId,
      getByRole = _render2.getByRole;

  var emailInput = getByTestId('email-input');
  var passwordInput = getByTestId('password-input');

  _react2.fireEvent.change(emailInput, {
    target: {
      value: 'test@web.com'
    }
  });

  _react2.fireEvent.change(passwordInput, {
    target: {
      value: '123456'
    }
  });

  expect(emailInput.value).toBe('test@web.com');
  expect(passwordInput.value).toBe('123456');

  _react2.fireEvent.click(getByRole('button', {
    name: /Submit/i
  }));

  var emailError = _react2.screen.queryByText('Not a valid email.');

  var passwordError = _react2.screen.queryByText('Password is required.');

  expect(emailError).toBe(null);
  expect(passwordError).toBe(null);
});
it('should have an error for invalid email and no password input', function () {
  var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_SignIn.Default, null)),
      getByText = _render3.getByText,
      getByTestId = _render3.getByTestId,
      getByRole = _render3.getByRole;

  var emailInput = getByTestId('email-input');

  _react2.fireEvent.change(emailInput, {
    target: {
      value: 'test'
    }
  });

  expect(emailInput.value).toBe('test');

  _react2.fireEvent.click(getByRole('button', {
    name: /Submit/i
  }));

  getByText('Not a valid email.');
  getByText('Password is required.');
});