"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorState = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/OffshoreSignIn',
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  }
};
exports.default = _default;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_SignIn.default, null);
};

exports.Default = Default;
Default.storyName = 'Initial State';

var ErrorState = function ErrorState() {
  return /*#__PURE__*/_react.default.createElement(_SignIn.default, {
    initialState: {
      email: 'test',
      password: ''
    }
  });
};

exports.ErrorState = ErrorState;