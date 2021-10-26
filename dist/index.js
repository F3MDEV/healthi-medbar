

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

require('typeface-roboto-condensed');
require('@fontsource/open-sans');
var React = require('react');
var Toolbar = require('@material-ui/core/Toolbar');
var Button = require('@material-ui/core/Button');
var core = require('@material-ui/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Toolbar__default = /*#__PURE__*/_interopDefaultLegacy(Toolbar);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

var img = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 24 24' width='18' height='18'%3e%3cg%3e%3cpath xmlns:default='http://www.w3.org/2000/svg' d='M16%2c1H4C2.9%2c1%2c2%2c1.9%2c2%2c3v14h2V3h12V1z M19%2c5H8C6.9%2c5%2c6%2c5.9%2c6%2c7v14c0%2c1.1%2c0.9%2c2%2c2%2c2h11c1.1%2c0%2c2-0.9%2c2-2V7 C21%2c5.9%2c20.1%2c5%2c19%2c5z M19%2c21H8V7h11V21z' style='fill: rgb(255%2c 255%2c 255)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3c/svg%3e";

var HealthiMedBar = function (_a) {
    var _b = _a.majorButtons, majorButtons = _b === void 0 ? React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(Button__default["default"], { color: "primary", style: { paddingRight: '1.5rem', paddingLeft: '1.5rem', marginRight: '0.5rem', textTransform: 'uppercase' } }, "Delete"),
        React__namespace.createElement(Button__default["default"], { color: "primary", variant: "contained", style: { paddingRight: '1.5rem', paddingLeft: '1.5rem', marginRight: '0.5rem', textTransform: 'uppercase' } },
            React__namespace.createElement("img", { src: img, style: { marginRight: '0.5rem' } }),
            "Duplicate")) : _b, _c = _a.keyArea, keyArea = _c === void 0 ? "Chave 16" : _c, _d = _a.costArea, costArea = _d === void 0 ? "5€" : _d, toolbarClasses = _a.toolbarClasses;
    var useStyles = core.makeStyles(function () { return ({
        root: {
            "&.MuiToolbar-root": {
                background: "#f2f2f2",
                bottom: 0,
                position: 'absolute',
                width: '100%',
                height: 43,
                minHeight: 43,
                display: 'flex',
                justifyContent: 'space-between',
                zIndex: 1
            },
            "&.MuiFormControlLabel-root": {
                marginBottom: 0,
                "& .MuiTypography-body1": {
                    fontSize: 14
                },
            }
        },
        costText: {
            fontFamily: 'Open Sans',
            fontSize: 16,
            display: 'flex',
            marginLeft: '0.5rem'
        },
        digitalKey: {
            fontFamily: 'Roboto Condensed',
            fontSize: 12,
            display: 'flex'
        },
        dFlex: {
            display: 'flex'
        },
        textUppercase: {
            textTransform: 'uppercase',
        },
        px4: {
            paddingRight: '1.5rem',
            paddingLeft: '1.5rem'
        },
        mr2: {
            marginRight: '0.5rem'
        }
    }); });
    var classes = useStyles();
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(Toolbar__default["default"], { disableGutters: true, className: classes.root + " " + toolbarClasses },
            React__namespace.createElement("div", { className: "" + classes.costText }, costArea),
            React__namespace.createElement("div", { className: "" + classes.digitalKey }, keyArea),
            React__namespace.createElement("div", { className: "" + classes.dFlex }, majorButtons))));
};

exports["default"] = HealthiMedBar;
//# sourceMappingURL=index.js.map
