"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dashboard;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _listItems = require("./listItems");

var _Chart = _interopRequireDefault(require("./Chart"));

var _Deposits = _interopRequireDefault(require("./Deposits"));

var _Orders = _interopRequireDefault(require("./Orders"));

var _ExitToApp = _interopRequireDefault(require("@material-ui/icons/ExitToApp"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Copyright() {
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, 'Copyright © ', /*#__PURE__*/_react.default.createElement(_Link.default, {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Your Website"), ' ', new Date().getFullYear(), '.');
}

var drawerWidth = 240;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    toolbar: {
      paddingRight: 24 // keep right padding when drawer closed

    },
    toolbarIcon: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    menuButtonHidden: {
      display: 'none'
    },
    title: {
      flexGrow: 1
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: _defineProperty({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7)
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing(9)
    }),
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    fixedHeight: {
      height: 240
    }
  };
});

function Dashboard() {
  var classes = useStyles();
  var history = (0, _reactRouterDom.useHistory)();

  var _React$useState = _react.default.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
  };

  var handleLogout = function handleLogout() {
    localStorage.clear();
    window.location.reload();
  };

  var fixedHeightPaper = (0, _clsx.default)(classes.paper, classes.fixedHeight);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    position: "absolute",
    className: (0, _clsx.default)(classes.appBar, open && classes.appBarShift)
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: classes.toolbar
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    className: (0, _clsx.default)(classes.menuButton, open && classes.menuButtonHidden)
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.title
  }, "Dashboard"), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    color: "inherit"
  }, /*#__PURE__*/_react.default.createElement(_Badge.default, {
    badgeContent: 4,
    color: "secondary"
  }, /*#__PURE__*/_react.default.createElement(_Notifications.default, null))), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/_react.default.createElement(_ExitToApp.default, null)))), /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    variant: "permanent",
    classes: {
      paper: (0, _clsx.default)(classes.drawerPaper, !open && classes.drawerPaperClose)
    },
    open: open
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.toolbarIcon
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: handleDrawerClose
  }, /*#__PURE__*/_react.default.createElement(_ChevronLeft.default, null))), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_List.default, null, _listItems.mainListItems), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_List.default, null, _listItems.secondaryListItems)), /*#__PURE__*/_react.default.createElement("main", {
    className: classes.content
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appBarSpacer
  }), /*#__PURE__*/_react.default.createElement(_Container.default, {
    maxWidth: "lg",
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    md: 8,
    lg: 9
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: fixedHeightPaper
  }, /*#__PURE__*/_react.default.createElement(_Chart.default, null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: fixedHeightPaper
  }, /*#__PURE__*/_react.default.createElement(_Deposits.default, null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_Orders.default, null)))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    pt: 4
  }, /*#__PURE__*/_react.default.createElement(Copyright, null)))));
}