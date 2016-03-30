'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStyles = exports.Body = exports.Header = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalView = function (_Component) {
  _inherits(ModalView, _Component);

  function ModalView(props) {
    _classCallCheck(this, ModalView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalView).call(this, props));

    _this.state = { isVisible: props.isVisible || false };
    return _this;
  }

  _createClass(ModalView, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var isVisible = this.state.isVisible;
      var _props = this.props;
      var beforeOpen = _props.beforeOpen;
      var beforeClose = _props.beforeClose;


      if (nextState.isVisible && !isVisible && beforeOpen) {
        beforeOpen();
      }

      if (!nextState.isVisible && isVisible && beforeClose) {
        beforeClose();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var isVisible = this.state.isVisible;
      var _props2 = this.props;
      var afterOpen = _props2.afterOpen;
      var afterClose = _props2.afterClose;


      if (!prevState.isVisible && isVisible && afterOpen) {
        afterOpen();
      }

      if (prevState.isVisible && !isVisible && afterClose) {
        afterClose();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({ isVisible: true });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ isVisible: false });
    }
  }, {
    key: 'onOverlayClicked',
    value: function onOverlayClicked() {
      var _props3 = this.props;
      var hideOnOverlayClicked = _props3.hideOnOverlayClicked;
      var onOverlayClicked = _props3.onOverlayClicked;


      if (hideOnOverlayClicked) {
        this.hide();
      }

      if (onOverlayClicked) {
        onOverlayClicked();
      }
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var styleArray = ['dialogStyles', 'overlayStyles', 'closeButtonStyle', 'titleStyle', 'headerStyle', 'contentStyle'];
      var _props$styles = this.props.styles;
      var styles = _props$styles === undefined ? {} : _props$styles;

      var noStyle = !styles;

      var returnObject = {};

      styleArray.map(function (item) {
        returnObject[item] = !noStyle ? Object.assign({}, _styles2.default[item], styles[item]) : {};
      });

      return returnObject;
    }
  }, {
    key: 'getParts',
    value: function getParts(children, part) {
      return _react2.default.Children.map(children, function (child) {
        if (child.type instanceof Function && child.type.name === part) {
          return child;
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isVisible = this.state.isVisible;
      //early out

      if (!isVisible) {
        return null;
      }

      var overlay = void 0;

      var _getStyles = this.getStyles();

      var dialogStyles = _getStyles.dialogStyles;
      var overlayStyles = _getStyles.overlayStyles;
      var closeButtonStyle = _getStyles.closeButtonStyle;
      var titleStyle = _getStyles.titleStyle;
      var contentStyle = _getStyles.contentStyle;
      var headerStyle = _getStyles.headerStyle;
      var _props4 = this.props;
      var children = _props4.children;

      var rest = _objectWithoutProperties(_props4, ['children']);

      var head = this.getParts(children, 'Header');
      var body = this.getParts(children, 'Body');

      if (rest.showOverlay) {
        overlay = _react2.default.createElement('div', {
          className: 'overlayStyles',
          onClick: function onClick() {
            return _this2.onOverlayClicked();
          },
          style: overlayStyles
        });
      }

      return _react2.default.createElement(
        'section',
        { className: 'modalview' },
        overlay,
        _react2.default.createElement(
          'div',
          { className: 'dialog', style: dialogStyles },
          _react2.default.createElement(
            'div',
            { className: 'header', style: headerStyle },
            _react2.default.createElement(
              'a',
              { onClick: function onClick() {
                  return _this2.hide();
                },
                role: 'button',
                style: closeButtonStyle },
              '×'
            ),
            head && head[0] ? head : _react2.default.createElement(_header2.default, _extends({}, titleStyle, rest))
          ),
          _react2.default.createElement(
            'div',
            { className: 'content', style: contentStyle },
            body ? body[0] : _react2.default.createElement(
              _body2.default,
              rest,
              children
            )
          )
        )
      );
    }
  }]);

  return ModalView;
}(_react.Component);

ModalView.displayName = 'ModalView';

ModalView.propTypes = {
  afterClose: _react.PropTypes.func,
  afterOpen: _react.PropTypes.func,
  beforeClose: _react.PropTypes.func,
  beforeOpen: _react.PropTypes.func,
  body: _react.PropTypes.string,
  children: _react.PropTypes.object,
  hideOnOverlayClicked: _react.PropTypes.bool,
  isVisible: _react.PropTypes.bool,
  onOverlayClicked: _react.PropTypes.func,
  showOverlay: _react.PropTypes.bool,
  styles: _react2.default.PropTypes.oneOfType([_react.PropTypes.shape({
    closeButtonStyle: _react.PropTypes.object,
    dialogStyles: _react.PropTypes.object,
    overlayStyles: _react.PropTypes.object,
    titleStyle: _react.PropTypes.object
  }), _react.PropTypes.bool]),
  title: _react.PropTypes.string

};

ModalView.defaultProps = {
  showOverlay: true,
  hideOnOverlayClicked: false
};

exports.default = ModalView;
exports.Header = _header2.default;
exports.Body = _body2.default;
exports.defaultStyles = _styles2.default;