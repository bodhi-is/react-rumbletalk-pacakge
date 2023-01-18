"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Iframe = _interopRequireDefault(require("./../Iframe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './style.css';
var cdn = 'https://d1pfint8izqszg.cloudfront.net';

var FloatingChat = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var side = _ref.side,
      isMobile = _ref.isMobile,
      openChat = _ref.openChat,
      toggleFloatingChat = _ref.toggleFloatingChat,
      chatBubble = _ref.chatBubble,
      image = _ref.image,
      onImageLoad = _ref.onImageLoad,
      onIframeLoad = _ref.onIframeLoad,
      counter = _ref.counter,
      counters = _ref.counters,
      userCount = _ref.userCount,
      floatingChat = _ref.floatingChat,
      width = _ref.width,
      height = _ref.height,
      src = _ref.src;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rumbletalk-floating rumbletalk-floating-".concat(side),
    onClick: isMobile ? openChat : toggleFloatingChat,
    style: {
      width: "".concat(chatBubble.width, "px"),
      height: "".concat(chatBubble.height, "px")
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Click to join the conversation",
    title: "Click to join the conversation",
    src: image,
    className: side,
    onLoad: onImageLoad
  }), counter && /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-div",
    style: {
      top: "".concat(counters.top, "px"),
      left: "".concat(counters.left, "px")
    }
  }, !isMobile && !userCount && /*#__PURE__*/_react.default.createElement("img", {
    alt: "loading",
    src: "".concat(cdn, "/images/toolbar/mini_wait.gif")
  }), !isMobile && userCount), !isMobile && /*#__PURE__*/_react.default.createElement("div", {
    className: "chat-div chat-div-".concat(floatingChat.className, " chat-div-").concat(side),
    style: floatingChat.style
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "close-button",
    alt: "close",
    src: "".concat(cdn, "/images/c.png"),
    style: {
      left: side === 'left' ? 'auto' : '-8px',
      right: side === 'right' ? 'auto' : '-8px'
    },
    onClick: function onClick(e) {
      return toggleFloatingChat(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_Iframe.default, {
    ref: ref,
    style: {
      width: width,
      height: height
    },
    src: src,
    onLoad: onIframeLoad
  })));
});

FloatingChat.propTypes = {
  side: _propTypes.default.string.isRequired,
  isMobile: _propTypes.default.bool.isRequired,
  openChat: _propTypes.default.func,
  toggleFloatingChat: _propTypes.default.func,
  chatBubble: _propTypes.default.shape({
    width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  }),
  image: _propTypes.default.string,
  onImageLoad: _propTypes.default.func,
  onIframeLoad: _propTypes.default.func.isRequired,
  counter: _propTypes.default.string,
  counters: _propTypes.default.shape({
    top: _propTypes.default.number,
    left: _propTypes.default.number
  }),
  userCount: _propTypes.default.string,
  floatingChat: _propTypes.default.shape({
    className: _propTypes.default.string,
    style: _propTypes.default.shape({
      overflow: _propTypes.default.string,
      bottom: _propTypes.default.string
    })
  }),
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  src: _propTypes.default.string.isRequired
};
var _default = FloatingChat;
exports.default = _default;