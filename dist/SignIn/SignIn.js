"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OffshoreSignIn;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _LockOutlined = _interopRequireDefault(require("@material-ui/icons/LockOutlined"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _Button = _interopRequireDefault(require("../Button"));

var _TextField = _interopRequireDefault(require("../TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function loginUser(_x) {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(credentials) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", fetch('http://localhost:8080/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(credentials)
            }).then(function (data) {
              return data.json();
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loginUser.apply(this, arguments);
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});
var initialValue = {
  email: '',
  password: ''
};

function OffshoreSignIn(_ref) {
  var setToken = _ref.setToken,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? initialValue : _ref$initialState;
  var classes = useStyles();

  var _useState = (0, _react.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSubmitting = _useState6[0],
      setIsSubmitting = _useState6[1];

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  var handleChange = function handleChange(event) {
    event.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, event.target.name, event.target.value));
    });
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setErrors({});
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (values.email) {
      var isValidEmail = validateEmail(values.email);
      var isValidPassword = values.password !== '';
      setErrors({
        email: isValidEmail,
        password: isValidPassword
      });
      setIsSubmitting(true);
    }
  }, [values]);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var isValidEmail, isValidPassword;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (event) event.preventDefault();
              isValidEmail = validateEmail(values.email);
              isValidPassword = values.password !== '';
              setErrors({
                email: isValidEmail,
                password: isValidPassword
              });
              setIsSubmitting(true); // if (isValidEmail && isValidPassword) {
              //   const token = await loginUser({
              //     values
              //   });
              //   setToken && setToken(token);
              // }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_Container.default, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    className: classes.avatar
  }, /*#__PURE__*/_react.default.createElement(_LockOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h1",
    variant: "h5"
  }, "Sign in"), /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form,
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true,
    value: values.email,
    error: errors && !errors.email && isSubmitting,
    helperText: errors && !errors.email && isSubmitting ? 'Not a valid email.' : null,
    onChange: handleChange,
    inputProps: {
      "data-testid": "email-input"
    }
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    error: errors && !errors.password && isSubmitting,
    helperText: errors && !errors.password && isSubmitting ? 'Password is required.' : null,
    value: values.password,
    onChange: handleChange,
    inputProps: {
      "data-testid": "password-input"
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: handleSubmit,
    label: "Submit"
  }))));
} // OffshoreSignIn.propTypes = {
//   setToken: PropTypes.func.isRequired
// }