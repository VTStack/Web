"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChannelStore = require("./ChannelStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

const tryToSelect = fn => store => {
  try {
    return fn(store);
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

const withChannel = ({
  EVENT_ID_INIT,
  EVENT_ID_DATA,
  EVENT_ID_BACK,
  ADDON_ID,
  initData,
  panel,
  parameters,
  storyId,
  storeSelectors = {},
  createActions = {}
}) => WrappedComponent => {
  var _class, _temp;

  return _temp = _class = class extends _react.default.Component {
    constructor(props, ...args) {
      super(props, ...args);

      _defineProperty(this, "isPanel", this.props.panel || panel);

      _defineProperty(this, "executeSelectors", store => {
        return Object.entries(storeSelectors).map(([name, selector]) => ({
          [name]: tryToSelect(selector)(store)
        })).reduce((akk, cur) => ({ ...akk,
          ...cur
        }), {});
      });

      _defineProperty(this, "prepareActions", () => {
        const {
          createGlobalAction: global,
          createLocalAction: local
        } = this.store;
        const isFn = typeof createActions === 'function';
        const actions = isFn ? createActions({
          global,
          local
        }) : Object.entries(createActions).map(([name, reducer]) => ({
          [name]: global(reducer)
        })).reduce((acc, cur) => ({ ...acc,
          ...cur
        }), {});
        return actions;
      });

      _defineProperty(this, "debug", false);

      _defineProperty(this, "debugLog", message => {
        if (!this.debug) {
          return;
        }

        console.log(this.store.isPanel ? 'Panel:\n' : 'Preview:\n', message, this.store.store);
      });

      _defineProperty(this, "onData", data => {
        this.setState({
          data,
          isReceived: true,
          selectors: this.executeSelectors(data)
        });
      });

      _defineProperty(this, "resetParameters", parameters => {
        const initStateData = { ...initData,
          ...this.props.initData,
          ...parameters
        };
        this.setState({
          data: initStateData,
          selectors: this.state.isReceived ? this.executeSelectors(initStateData) : {}
        });
        this.store.sendInit(initStateData);
      });

      const _initStateData = { ...initData,
        ...props.initData,
        ...parameters
      };
      const isReceived = false;
      this.state = {
        data: _initStateData,
        selectors: isReceived ? this.executeSelectors(_initStateData) : {},
        isReceived
      };
      this.store = (panel ? _ChannelStore.getSingleStore : _ChannelStore.getNewStore)({
        EVENT_ID_INIT,
        EVENT_ID_DATA,
        EVENT_ID_BACK,
        name: props.pointName,
        initData: this.state.data,
        isPanel: this.isPanel,
        storyId
      });
      this.actions = this.prepareActions();
    }

    componentDidMount() {
      this.debugLog('componentDidMount');
      this.store.onData(this.onData);

      if (this.state.data && !this.isPanel) {
        this.store.onConnected(() => this.store.sendInit(this.state.data));
      }

      this.store.connect();
    }

    componentWillUnmount() {
      this.debugLog('componentWillUnmount');
      this.store.disconnect();
    } // debug = true;


    render() {
      const {
        pointName,
        initData,
        active,
        onData,
        ...props
      } = this.props;
      const {
        data,
        isReceived
      } = this.state;
      if (active === false) return null;
      const initStateData = { ...initData,
        ...parameters,
        ...data
      };
      let selectors;

      try {
        selectors = this.executeSelectors(initStateData);
      } catch (err) {
        selectors = this.state.selectors;
      }

      return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({
        data: data,
        setData: this.store.send,
        store: this.store,
        active: active,
        parameters: parameters,
        selectors: selectors,
        actions: this.actions,
        isFirstDataReceived: isReceived,
        resetParameters: this.resetParameters
      }, props));
    }

  }, _defineProperty(_class, "displayName", `WithChannel(${getDisplayName(WrappedComponent)})`), _temp;
};

var _default = withChannel;
exports.default = _default;