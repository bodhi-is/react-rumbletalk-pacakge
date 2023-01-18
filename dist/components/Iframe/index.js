"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Iframe = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var style = _ref.style,
      src = _ref.src,
      onLoad = _ref.onLoad;
  return /*#__PURE__*/_react.default.createElement("iframe", {
    title: "iframe",
    frameBorder: "0",
    allow: "microphone; camera; fullscreen; autoplay",
    allowtransparency: "true",
    ref: ref,
    style: {
      width: !!style && style.width ? "".concat(style.width, "px") : '100%',
      height: !!style && style.height ? "".concat(style.height, "px") : '100%'
    },
    src: src,
    onLoad: onLoad
  });
});

Iframe.propTypes = {
  src: _propTypes.default.string.isRequired,
  onLoad: _propTypes.default.func.isRequired,
  style: _propTypes.default.shape({
    width: _propTypes.default.number,
    height: _propTypes.default.number
  })
};
var _default = Iframe;
exports.default = _default;