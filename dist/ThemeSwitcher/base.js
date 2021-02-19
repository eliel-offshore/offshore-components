"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTheme;

var _normal = _interopRequireDefault(require("./normal"));

var _dark = _interopRequireDefault(require("./dark"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themes = {
  normal: _normal.default,
  dark: _dark.default
};

function getTheme(theme) {
  return themes[theme];
}