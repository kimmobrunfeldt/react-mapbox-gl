'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck = _interopRequireDefault(_classCallCheck2).default;

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn = _interopRequireDefault(_possibleConstructorReturn2).default;

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits = _interopRequireDefault(_inherits2).default;

var _class, _temp2;

var _mapboxGl = require('mapbox-gl/dist/mapbox-gl.js');

var MapboxGl = _interopRequireDefault(_mapboxGl).default;

var _react = require('react');

var React = _interopRequireDefault(_react).default;

var PropTypes = _react.PropTypes;

var _reactDom = require('react-dom');

var render = _reactDom.render;
var unmountComponentAtNode = _reactDom.unmountComponentAtNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(Popup, _React$PureComponent);

  function Popup() {
    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.div = document.createElement('div'), _this.popup = new MapboxGl.Popup({
      closeButton: _this.props.closeButton,
      closeOnClick: _this.props.closeOnClick,
      anchor: _this.props.anchor,
      offset: _this.props.offset
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Popup.prototype.componentWillMount = function componentWillMount() {
    var div = this.div,
        popup = this.popup;
    var map = this.context.map;
    var _props = this.props,
        coordinates = _props.coordinates,
        children = _props.children,
        dangerouslySetInnerHTML = _props.dangerouslySetInnerHTML,
        text = _props.text;


    if (children) {
      popup.setDOMContent(div);
    } else if (dangerouslySetInnerHTML) {
      popup.setHTML(dangerouslySetInnerHTML);
    } else {
      popup.setText(text || '');
    }

    popup.setLngLat(coordinates);

    render(children, div, function () {
      popup.addTo(map);
    });
  };

  Popup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var popup = this.popup,
        div = this.div;
    var children = nextProps.children,
        coordinates = nextProps.coordinates,
        dangerouslySetInnerHTML = nextProps.dangerouslySetInnerHTML,
        text = nextProps.text;


    if (!children) {
      if (this.props.dangerouslySetInnerHTML && dangerouslySetInnerHTML !== this.props.dangerouslySetInnerHTML) {
        popup.setHTML(dangerouslySetInnerHTML);
      } else if (text !== this.props.text) {
        popup.setText(text);
      }
    } else {
      render(children, div);
    }

    if (this.props.coordinates !== coordinates) {
      popup.setLngLat(coordinates);
    }
  };

  Popup.prototype.componentWillUnmount = function componentWillUnmount() {
    var popup = this.popup,
        div = this.div;

    popup.remove();
    unmountComponentAtNode(div);
  };

  Popup.prototype.render = function render() {
    return null;
  };

  return Popup;
}(React.PureComponent), _class.contextTypes = {
  map: PropTypes.object
}, _class.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  dangerouslySetInnerHTML: PropTypes.string,
  text: PropTypes.string,
  closeButton: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  anchor: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
}, _temp2);
exports.default = Popup;
module.exports = exports['default'];