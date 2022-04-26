"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewStore = exports.getSingleStore = exports.default = void 0;

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const GLOBAL = 'global';

class ChannelStore {
  constructor({
    EVENT_ID_INIT,
    EVENT_ID_DATA,
    EVENT_ID_BACK,
    name = 'store',
    initData: _initData = {},
    isPanel = false,
    storyId
  }) {
    _defineProperty(this, "selectorId", null);

    _defineProperty(this, "subscriber", () => {});

    _defineProperty(this, "onConnectedFn", () => {});

    _defineProperty(this, "channel", _addons.default.getChannel());

    _defineProperty(this, "connect", () => {
      if (this.isPanel) {
        this.channel.on(this.EVENT_ID_INIT, this.onInitChannel);
        this.channel.on(this.EVENT_ID_DATA, this.onDataChannel);
      } else {
        this.channel.on(this.EVENT_ID_BACK, this.onDataChannel);
      }

      this.onConnectedFn();
    });

    _defineProperty(this, "emit", data => this.channel.emit(this.isPanel ? this.EVENT_ID_BACK : this.EVENT_ID_DATA, {
      data,
      id: this.id
    }));

    _defineProperty(this, "init", data => this.channel.emit(this.EVENT_ID_INIT, {
      data,
      id: this.id
    }));

    _defineProperty(this, "removeInit", () => this.channel.removeListener(this.EVENT_ID_INIT, this.onInitChannel));

    _defineProperty(this, "removeData", () => this.channel.removeListener(this.isPanel ? this.EVENT_ID_DATA : this.EVENT_ID_BACK, this.onDataChannel));

    _defineProperty(this, "onInitChannel", initData => {
      const {
        data,
        id
      } = initData;
      const selectorId = id || GLOBAL;
      const selectedData = { ...(this.store[selectorId] || {})
      };
      /**
       * Previous behavior didn't reset state on init event
       * it caused that we didn't see changes after
       * updating story parameters
       * So i'm removing this, but if we need to make it optional
       * this is how to revert it:
       * selectedData.over = selectedData.over || {};
       *
       * Update:
       * Now we check if coming initial data the same as we already have in the store
       * this allow us to not reset changes while switching stories
       *
       * it works if stories don't contain parameters or changing data any other way
       *
       * Additional it's better if actions don't return whole store
       * compare:
       *
       * // right way:
       * store => ({
       *   currentTheme: store.currentTheme + 1,
       * })
       *
       * vs
       *
       * // wrong way:
       * store => ({
       *   ...store, // this cause an overriding of whole store
       *   currentTheme: store.currentTheme + 1,
       * })
       *
       * the better solution would be to granularly commit updates and store only changed values
       *
       */

      if ((0, _deepEqual.default)(selectedData.init, data)) {
        selectedData.over = selectedData.over || {};
      } else {
        selectedData.init = data;
        selectedData.over = {};
      }

      this.store[selectorId] = selectedData;
      this.selectorId = selectorId;
      this.subscriber();
      this.send();
    });

    _defineProperty(this, "onDataChannel", updData => {
      const {
        data,
        id
      } = updData;

      if (this.isPanel) {
        const selectorId = id || GLOBAL;
        const selectedData = this.store[selectorId];
        selectedData.over = data;
        this.selectorId = selectorId;
      } else {
        this.store = data;
      }

      this.subscriber();
    });

    _defineProperty(this, "selectData", () => {
      const id = this.isPanel ? this.selectorId : this.id;
      const {
        global = {}
      } = this.store;
      const local = this.store[id] || {};
      const finalData = { ...global.init,
        ...local.init,
        ...global.over,
        ...local.over
      };
      return finalData;
    });

    _defineProperty(this, "onData", subscriberFn => {
      this.subscriber = () => {
        const data = this.selectData();
        subscriberFn(data);
      };
    });

    _defineProperty(this, "onConnected", onConnectedFn => {
      this.onConnectedFn = onConnectedFn;
    });

    _defineProperty(this, "send", () => {
      this.emit(this.store);
    });

    _defineProperty(this, "defaultReducer", (store, payload) => ({ ...store,
      ...payload
    }));

    _defineProperty(this, "_createAction", (reducer, getSubId) => {
      return async payload => {
        const subId = getSubId();
        const subData = this.store[subId];
        const current = { ...subData.init,
          ...subData.over
        };
        const over = await (reducer || this.defaultReducer)(current, payload);
        subData.over = over;
        this.send();
        this.subscriber();
      };
    });

    _defineProperty(this, "createGlobalAction", reducer => this._createAction(reducer, () => GLOBAL));

    _defineProperty(this, "createLocalAction", reducer => this._createAction(reducer, () => this.selectorId || this.id));

    _defineProperty(this, "sendInit", data => {
      this.init(data);
    });

    _defineProperty(this, "disconnect", () => {
      this.removeInit();
      this.removeData();
    });

    this.EVENT_ID_INIT = EVENT_ID_INIT;
    this.EVENT_ID_DATA = EVENT_ID_DATA;
    this.EVENT_ID_BACK = EVENT_ID_BACK;
    this.name = name;
    this.initData = _initData;
    this.isPanel = isPanel;
    this.id = storyId;
    this.store = {
      [GLOBAL]: {
        init: this.initData || {},
        over: {}
      }
    };
  }

}

exports.default = ChannelStore;
let singleStore;

const getSingleStore = (...args) => {
  singleStore = singleStore || new ChannelStore(...args);
  return singleStore;
};

exports.getSingleStore = getSingleStore;

const getNewStore = (...args) => {
  return new ChannelStore(...args);
};

exports.getNewStore = getNewStore;