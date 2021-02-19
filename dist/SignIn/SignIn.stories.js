"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorState = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _storybookAddonDesigns = require("storybook-addon-designs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/OffshoreSignIn',
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  },
  decorators: [_storybookAddonDesigns.withDesign]
};
exports.default = _default;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_SignIn.default, null);
};

exports.Default = Default;
Default.parameters = {
  jest: ['SignIn.test.js'],
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
  }
};
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