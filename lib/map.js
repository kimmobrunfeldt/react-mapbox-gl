'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends = _interopRequireDefault(_extends2).default;

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

var Component = _react.Component;
var PropTypes = _react.PropTypes;

var _deepEqual = require('deep-equal');

var isEqual = _interopRequireDefault(_deepEqual).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactMapboxGl = (_temp2 = _class = function (_Component) {
  _inherits(ReactMapboxGl, _Component);

  function ReactMapboxGl() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReactMapboxGl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.getChildContext = function () {
      return {
        map: _this.state.map
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReactMapboxGl.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _props = this.props,
        style = _props.style,
        hash = _props.hash,
        preserveDrawingBuffer = _props.preserveDrawingBuffer,
        accessToken = _props.accessToken,
        center = _props.center,
        pitch = _props.pitch,
        zoom = _props.zoom,
        minZoom = _props.minZoom,
        maxZoom = _props.maxZoom,
        maxBounds = _props.maxBounds,
        bearing = _props.bearing,
        onStyleLoad = _props.onStyleLoad,
        onResize = _props.onResize,
        onDblClick = _props.onDblClick,
        onClick = _props.onClick,
        onMouseMove = _props.onMouseMove,
        onDragStart = _props.onDragStart,
        onDrag = _props.onDrag,
        onDragEnd = _props.onDragEnd,
        onMouseUp = _props.onMouseUp,
        onMove = _props.onMove,
        onMoveStart = _props.onMoveStart,
        onMoveEnd = _props.onMoveEnd,
        onZoomStart = _props.onZoomStart,
        onZoom = _props.onZoom,
        onZoomEnd = _props.onZoomEnd,
        scrollZoom = _props.scrollZoom,
        attributionPosition = _props.attributionPosition,
        interactive = _props.interactive,
        showNavigationControl = _props.showNavigationControl,
        containerScale = _props.containerScale;


    MapboxGl.accessToken = accessToken;

    // Ugly hack very very ugly, to fix:
    // We are using our fork of mapbox-gl-js which implements this
    // https://github.com/Leaflet/Leaflet/issues/2795
    MapboxGl.Dom.setContainerScale(containerScale);

    var map = new MapboxGl.Map({
      preserveDrawingBuffer: preserveDrawingBuffer,
      hash: hash,
      zoom: zoom[0],
      minZoom: minZoom,
      maxZoom: maxZoom,
      maxBounds: maxBounds,
      bearing: bearing,
      container: this.container,
      center: center,
      pitch: pitch,
      style: style,
      scrollZoom: scrollZoom,
      attributionControl: {
        position: attributionPosition
      },
      interactive: interactive
    });

    map.on('style.load', function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (onStyleLoad) {
        onStyleLoad.apply(undefined, [map].concat(args));
      }

      _this2.setState({ map: map });
    });

    map.on('resize', function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      if (onResize) {
        onResize.apply(undefined, [map].concat(args));
      }
    });

    map.on('dblclick', function () {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      if (onDblClick) {
        onDblClick.apply(undefined, [map].concat(args));
      }
    });

    map.on('click', function () {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      if (onClick) {
        onClick.apply(undefined, [map].concat(args));
      }
    });

    map.on('mousemove', function () {
      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      if (onMouseMove) {
        onMouseMove.apply(undefined, [map].concat(args));
      }
    });

    map.on('dragstart', function () {
      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      if (onDragStart) {
        onDragStart.apply(undefined, [map].concat(args));
      }
    });

    map.on('drag', function () {
      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      if (onDrag) {
        onDrag.apply(undefined, [map].concat(args));
      }
    });

    map.on('dragend', function () {
      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      if (onDragEnd) {
        onDragEnd.apply(undefined, [map].concat(args));
      }
    });

    map.on('mouseup', function () {
      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      if (onMouseUp) {
        onMouseUp.apply(undefined, [map].concat(args));
      }
    });

    map.on('movestart', function () {
      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      if (onMoveStart) {
        onMoveStart.apply(undefined, [map].concat(args));
      }
    });

    map.on('move', function () {
      for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      if (onMove) {
        onMove.apply(undefined, [map].concat(args));
      }
    });

    map.on('moveend', function () {
      for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }

      if (onMoveEnd) {
        onMoveEnd.apply(undefined, [map].concat(args));
      }
    });

    map.on('zoomstart', function () {
      for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }

      if (onZoomStart) {
        onZoomStart.apply(undefined, [map].concat(args));
      }
    });

    map.on('zoom', function () {
      for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }

      if (onZoom) {
        onZoom.apply(undefined, [map].concat(args));
      }
    });

    map.on('zoomend', function () {
      for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }

      if (onZoomEnd) {
        onZoomEnd.apply(undefined, [map].concat(args));
      }
    });

    if (showNavigationControl) {
      map.addControl(new MapboxGl.NavigationControl());
    }
  };

  ReactMapboxGl.prototype.componentWillUnmount = function componentWillUnmount() {
    var map = this.state.map;


    if (map) {
      map.off();

      // NOTE: We need to defer removing the map to after all children have unmounted
      setTimeout(function () {
        map.remove();
      });
    }
  };

  ReactMapboxGl.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextProps.children !== this.props.children || nextProps.containerStyle !== this.props.containerStyle || nextState.map !== this.state.map || nextProps.style !== this.props.style;
  };

  ReactMapboxGl.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var map = this.state.map;

    if (!map) {
      return null;
    }

    var center = map.getCenter();
    var zoom = map.getZoom();
    var bearing = map.getBearing();

    var didZoomUpdate = this.props.zoom !== nextProps.zoom && nextProps.zoom[0] !== map.getZoom();

    var didCenterUpdate = this.props.center !== nextProps.center && (nextProps.center[0] !== map.getCenter().lng || nextProps.center[1] !== map.getCenter().lat);

    var didBearingUpdate = this.props.bearing !== nextProps.bearing && nextProps.bearing !== map.getBearing();

    if (didZoomUpdate || didCenterUpdate || didBearingUpdate) {
      var movingMethodOptions = this.props.movingMethodOptions || {};
      map[this.props.movingMethod](_extends({}, movingMethodOptions, {
        zoom: didZoomUpdate ? nextProps.zoom[0] : zoom,
        center: didCenterUpdate ? nextProps.center : center,
        bearing: didBearingUpdate ? nextProps.bearing : bearing
      }));
    }

    if (this.props.containerScale !== nextProps.containerScale) {
      // Ugly hack very very ugly, to fix:
      // We are using our fork of mapbox-gl-js which implements this
      // https://github.com/Leaflet/Leaflet/issues/2795
      MapboxGl.Dom.setContainerScale(nextProps.containerScale);
    }

    if (!isEqual(this.props.style, nextProps.style)) {
      map.setStyle(nextProps.style);
    }

    return null;
  };

  ReactMapboxGl.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        containerStyle = _props2.containerStyle,
        children = _props2.children;
    var map = this.state.map;


    return React.createElement(
      'div',
      { ref: function ref(x) {
          _this3.container = x;
        }, style: containerStyle },
      map && children
    );
  };

  return ReactMapboxGl;
}(Component), _class.propTypes = {
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  accessToken: PropTypes.string.isRequired,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.arrayOf(PropTypes.number),
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  maxBounds: PropTypes.array,
  bearing: PropTypes.number,
  pitch: PropTypes.number,
  containerStyle: PropTypes.object,
  hash: PropTypes.bool,
  preserveDrawingBuffer: PropTypes.bool,
  onResize: PropTypes.func,
  onDblClick: PropTypes.func,
  onClick: PropTypes.func,
  onStyleLoad: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMoveStart: PropTypes.func,
  onMove: PropTypes.func,
  onMoveEnd: PropTypes.func,
  onMouseUp: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onZoomStart: PropTypes.func,
  onZoom: PropTypes.func,
  onZoomEnd: PropTypes.func,
  scrollZoom: PropTypes.bool,
  movingMethod: PropTypes.oneOf(['jumpTo', 'easeTo', 'flyTo']),
  containerScale: PropTypes.number,
  movingMethodOptions: PropTypes.object,
  attributionPosition: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  interactive: PropTypes.bool
}, _class.defaultProps = {
  hash: false,
  preserveDrawingBuffer: false,
  center: [-0.2416815, 51.5285582],
  zoom: [11],
  minZoom: 0,
  maxZoom: 20,
  bearing: 0,
  scrollZoom: true,
  movingMethod: 'flyTo',
  containerScale: 1,
  pitch: 0,
  attributionPosition: 'bottom-right',
  interactive: true,
  showNavigationControl: true
}, _class.childContextTypes = {
  map: React.PropTypes.object
}, _temp2);
exports.default = ReactMapboxGl;
module.exports = exports['default'];