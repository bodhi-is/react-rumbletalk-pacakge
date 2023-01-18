"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _Iframe = _interopRequireDefault(require("./components/Iframe"));

var _FloatingChat = _interopRequireDefault(require("./components/FloatingChat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var protocol = 'https://';
var baseWebUrl = 'https://rumbletalk.com';
var serviceRelativeUrl = 'client/service.php?hash=';
var postMessageEvents = {
  LOGOUT_CB: 'pm.1',
  LOGOUT_CB_RECEIVED: 'pm.2',
  LOGIN: 'pm.3',
  LOGIN_SUCCESS: 'pm.4',
  LOGIN_ALREADY_LOGGED_IN: 'pm.5',
  LOGOUT: 'pm.6',
  OPEN_PRIVATE_CHAT: 'pm.7'
};

var RumbleTalk = /*#__PURE__*/function (_React$Component) {
  _inherits(RumbleTalk, _React$Component);

  var _super = _createSuper(RumbleTalk);

  function RumbleTalk(props) {
    var _this;

    _classCallCheck(this, RumbleTalk);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "loadIframe", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var hash, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              hash = _this.props.hash;
              _context.next = 3;
              return _axios.default.get("".concat(baseWebUrl, "/").concat(serviceRelativeUrl).concat(hash));

            case 3:
              res = _context.sent;
              _this.server = res.data.address;

              _this.setState({
                src: "https://".concat(_this.server, "/").concat(hash, "/#").concat(window.location.href)
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "addListeners", function () {
      window.addEventListener('message', _this.info, false);

      if (!_this.mobile && _this.props.floating) {
        window.addEventListener('keyup', _this.escClose, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "escClose", function (event) {
      if (event.key === 'Escape') {
        _this.toggleFloatingChat(null, true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "info", function (event) {
      if (isFinite(event.data)) {
        clearInterval(_this.messageInterval);

        if (_this.props.counter) {
          _this.setState({
            userCount: event.data.toString()
          });
        }
      } else if (_typeof(event.data) === 'object') {
        if (event.data.reload) {
          _this.reload();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "reload", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _axios.default.get("".concat(baseWebUrl, "/").concat(serviceRelativeUrl).concat(_this.props.hash, "}"));

            case 3:
              res = _context2.sent;
              _this.server = res.data.address;

              if (_this.iframeRef.current instanceof HTMLIFrameElement) {
                _this.setState({
                  src: "".concat(protocol).concat(_this.server, "/").concat(_this.hash, "/#").concat(window.location.href)
                });
              } else {
                _this.iframeRef.current.location.href = _this.server;
              }

              _context2.next = 10;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "iframeHasLoaded", function () {
      _this.messageInterval = setInterval(_this.query, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "query", function () {
      try {
        var target;
        var origin;

        if (_this.iframeRef.current.nativeElement instanceof HTMLIFrameElement) {
          target = _this.iframeRef.current.contentWindow;
          origin = protocol + _this.server;
        } else {
          target = _this.iframeRef.current;
          origin = baseWebUrl;
        }

        target.postMessage('toolbar', origin);
      } catch (ignore) {}
    });

    _defineProperty(_assertThisInitialized(_this), "toggleFloatingChat", function (event, esc) {
      if (event) {
        event.stopPropagation();
      }

      var floatingChat = _this.state.floatingChat;

      if (floatingChat.className === 'out') {
        if (esc) {
          return;
        }

        floatingChat.className = 'in';
        floatingChat.style = _objectSpread(_objectSpread({}, floatingChat), {}, {
          overflow: 'visible'
        });
      } else {
        floatingChat.className = 'out';
        floatingChat.style = _objectSpread(_objectSpread({}, floatingChat), {}, {
          overflow: 'hidden'
        });
      }

      _this.setState({
        floatingChat: floatingChat
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openChat", function () {
      var link = "".concat(baseWebUrl, "client/chat.php?").concat(_this.hash, "/#").concat(window.location.href);
      var iframe = _this.iframeRef.current;
      var iframeInterval;

      if (iframe) {
        iframe.nativeElement.focus();
      } else {
        var tempIframe = window.open(link);
        iframeInterval = setInterval(function () {
          if (tempIframe.closed) {
            clearInterval(iframeInterval);
          }
        }, 100);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function (event) {
      var _this$state = _this.state,
          floatingChat = _this$state.floatingChat,
          chatBubble = _this$state.chatBubble;
      chatBubble.height = event.target.height;
      chatBubble.width = event.target.width;
      floatingChat.style = _objectSpread(_objectSpread({}, floatingChat.style), {}, {
        bottom: "".concat(event.target.height, "px")
      });

      _this.setState({
        floatingChat: floatingChat,
        chatBubble: chatBubble
      });
    });

    _defineProperty(_assertThisInitialized(_this), "login", function (data) {
      var message = {};
      /* handle username value */

      message.username = _this.trim(data.username);

      if (!_this.validateUsername(message.username)) {
        throw new Error('Error: invalid username in "login" function');
      }
      /* handle, if set, password value */


      if (data.password) {
        if (!_this.validatePassword(data.password)) {
          throw new Error('Error: invalid password in "login" function');
        }

        message.password = data.password;
      }
      /* handle, if set, image URL */


      if (data.image) {
        if (!_this.validateUrl(data.image)) {
          throw new Error('Error: invalid image in "login" function');
        }

        message.image = data.image;
      }

      message.type = postMessageEvents.LOGIN;
      message.hash = data.hash;
      message.forceLogin = data.forceLogin;
      /* keep sending the data to the chat until the chat responds */

      var intervalHandle = setInterval(function () {
        _this.postMessage(message);
      }, 1000);
      window.addEventListener('message', function handlePostMessage(event) {
        /* validates the origin to be from a chat */
        if (!this.validateChatOrigin(event.origin)) {
          console.log('Error: invalid origin in "login" function');
        }

        if (_typeof(event.data) !== 'object') {
          console.log("Error: invalid data received in RumbleTalk SDK: ".concat(event.data));
        }
        /* different chat callback */


        if (event.data.hash !== data.hash) {
          throw new Error('Error: chat hash mismatch');
        }
        /* validate that the message is of a successful login of the specific chat */


        if (event.data.type === postMessageEvents.LOGIN_SUCCESS || event.data.type === postMessageEvents.LOGIN_ALREADY_LOGGED_IN) {
          clearInterval(intervalHandle);
          window.removeEventListener('message', handlePostMessage);
          data.callback({
            status: event.data.type,
            message: event.data.type === postMessageEvents.LOGIN_SUCCESS ? 'success' : 'already logged in'
          });
        }
      }.bind(_assertThisInitialized(_this)), false);
    });

    _defineProperty(_assertThisInitialized(_this), "logout", function (data) {
      var message = {
        type: postMessageEvents.LOGOUT,
        hash: data.hash
      };

      if (data.userId) {
        message.userId = data.userId;
      }

      if (data.username) {
        message.username = data.username;
      }

      _this.postMessage(message);
    });

    _defineProperty(_assertThisInitialized(_this), "logoutCB", function (data) {
      var intervalHandle = setInterval(function () {
        _this.postMessage({
          type: postMessageEvents.LOGOUT_CB
        });
      }, 1000);
      window.addEventListener('message', function (event) {
        /* validates the origin to be from a chat */
        if (!_this.validateChatOrigin(event.origin)) {
          return;
        }
        /* expecting an object */


        if (_typeof(event.data) !== 'object') {
          return;
        }
        /* different chat callback */


        if (event.data.hash !== data.hash) {
          return;
        }
        /* callback registered */


        if (event.data.type === postMessageEvents.LOGOUT_CB_RECEIVED) {
          clearInterval(intervalHandle);
          return;
        }
        /* validate event type */


        if (event.data.type !== postMessageEvents.LOGOUT_CB) {
          return;
        }

        data.callback(event.data.reason);
      }, false);
    });

    _defineProperty(_assertThisInitialized(_this), "openPrivateChat", function (data) {
      var message = {
        type: postMessageEvents.OPEN_PRIVATE_CHAT,
        hash: data.hash
      };

      if (data.userId) {
        message.userId = data.userId;
      }

      if (data.username) {
        message.username = data.username;
      }

      _this.postMessage(message);
    });

    _defineProperty(_assertThisInitialized(_this), "postMessage", function (data) {
      try {
        var target = _this.iframeRef.current instanceof HTMLIFrameElement ? _this.iframeRef.current.contentWindow : _this.iframeRef.current;
        target.postMessage(data, "".concat(protocol).concat(_this.server));
      } catch (error) {
        console.log(error.name, error.message);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "trim", function (str) {
      return str.replace(/^\s+|\s+$/g, '');
    });

    _defineProperty(_assertThisInitialized(_this), "validateUsername", function (username) {
      return !/^-?\d+$/.test(username) && username.length < 64;
    });

    _defineProperty(_assertThisInitialized(_this), "validatePassword", function (password) {
      return 0 < password.length && password.length < 51;
    });

    _defineProperty(_assertThisInitialized(_this), "validateUrl", function (url) {
      return /(https?:)?\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(url);
    });

    _defineProperty(_assertThisInitialized(_this), "validateChatOrigin", function (origin) {
      return /^https:\/\/.+\.rumbletalk\.(net|com)(:4433)?$/.test(origin);
    });

    _this.state = {
      counters: {
        top: 14,
        left: 23
      },
      src: null,
      userCount: null,
      floatingChat: {
        className: 'out',
        style: {
          overflow: 'hidden',
          bottom: 'auto'
        }
      },
      chatBubble: {
        height: 'auto',
        width: 'auto'
      }
    };
    _this.server = null;
    _this.messageInterval = null;
    _this.iframeRef = /*#__PURE__*/_react.default.createRef();
    var ua = navigator.userAgent.toUpperCase();
    _this.mobile = ua.indexOf('MOBILE') !== -1 || ua.indexOf('ANDROID') !== -1 || ua.indexOf('IOS') !== -1;
    return _this;
  }

  _createClass(RumbleTalk, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          floating = _this$props.floating,
          counter = _this$props.counter;
      var counters = this.state.counters;

      if (floating && counter) {
        var counterArr = counter.split(':');

        if (counterArr.length === 2) {
          var counterTop = Number(counterArr[0]);
          var counterLeft = Number(counterArr[1]);

          if (!isNaN(counterTop)) {
            counters.top = counterTop;
          }

          if (!isNaN(counterLeft)) {
            counters.left = counterLeft;
          }
        }
      }

      this.addListeners();
      this.setState({
        counters: counters
      }, this.loadIframe);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          floating = _this$props2.floating;
      var src = this.state.src;

      if (!src) {
        return null;
      }

      return floating ? /*#__PURE__*/_react.default.createElement(_FloatingChat.default, _extends({}, this.props, this.state, {
        ref: this.iframeRef,
        isMobile: this.mobile,
        openChat: this.openChat,
        toggleFloatingChat: this.toggleFloatingChat,
        onIframeLoad: this.iframeHasLoaded,
        onImageLoad: this.handleImageLoad
      })) : /*#__PURE__*/_react.default.createElement("div", {
        className: "rumbletalk-embed",
        style: {
          width: "".concat(width, "px"),
          height: "".concat(height, "px")
        }
      }, /*#__PURE__*/_react.default.createElement(_Iframe.default, {
        src: src,
        onLoad: this.iframeHasLoaded,
        ref: this.iframeRef
      }));
    }
  }]);

  return RumbleTalk;
}(_react.default.Component);

RumbleTalk.propTypes = {
  hash: _propTypes.default.string.isRequired,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  floating: _propTypes.default.bool,
  side: _propTypes.default.oneOf(['left', 'right']),
  image: _propTypes.default.string,
  counter: _propTypes.default.string
};
RumbleTalk.defaultProps = {
  width: 700,
  height: 500,
  floating: false,
  side: 'right',
  image: 'https://d1pfint8izqszg.cloudfront.net/images/toolbar/toolbar.png'
};
var _default = RumbleTalk;
exports.default = _default;