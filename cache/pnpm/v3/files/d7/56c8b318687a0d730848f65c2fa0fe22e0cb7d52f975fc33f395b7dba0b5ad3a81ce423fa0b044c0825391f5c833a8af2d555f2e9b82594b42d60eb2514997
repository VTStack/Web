"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setParameters = exports.createDecorator = void 0;

var _react = _interopRequireDefault(require("react"));

var _withChannel = _interopRequireDefault(require("./withChannel"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const createHOC = paramSelectors => {
  const DecoratorWrapper = ({
    actions,
    selectors,
    Component,
    parameters,
    resetParameters,
    ...props
  }) => {
    let params = {};

    if (paramSelectors) {
      try {
        const entries = Object.entries(paramSelectors);
        const paramResults = entries.map(([name, fn]) => {
          try {
            return {
              [name]: fn(parameters, selectors)
            };
          } catch (err) {
            console.error(err);
            return null;
          }
        }).filter(Boolean);
        params = paramResults.reduce((obj, item) => ({ ...obj,
          ...item
        }), {});
      } catch (err) {
        console.error(err);
      }
    }

    return /*#__PURE__*/_react.default.createElement(Component, _extends({}, actions, selectors, params, props));
  };

  return DecoratorWrapper;
};

const createDecorator = (storeSelectors, createActions, paramSelectors) => (Component, {
  isGlobal = true
} = {}) => initData => (getStory, context) => {
  const {
    ADDON_ID,
    EVENT_ID_INIT,
    EVENT_ID_DATA,
    EVENT_ID_BACK,
    PARAM_Key
  } = (0, _config.getConfig)();
  const parameters = context.parameters && context.parameters[PARAM_Key];
  const storyId = isGlobal ? null : context.id;
  const WithChannel = (0, _withChannel.default)({
    EVENT_ID_INIT,
    EVENT_ID_DATA,
    EVENT_ID_BACK,
    ADDON_ID,
    initData,
    panel: false,
    parameters,
    storyId,
    storeSelectors,
    createActions
  })(createHOC(paramSelectors));

  const getStoryAndInjectParams = ctx => {
    const {
      argTypes,
      args,
      globals,
      hooks,
      id,
      kind,
      loaded,
      name,
      parameters,
      story,
      viewMode,
      ...additionalArgs
    } = ctx || {};

    try {
      if (!context.args) {
        context.args = {};
      }

      Object.assign(context.args, additionalArgs);
    } catch (err) {
      console.error(err);
    }

    return getStory(additionalArgs);
  };

  return /*#__PURE__*/_react.default.createElement(WithChannel, {
    getStory: getStoryAndInjectParams,
    context: context,
    Component: Component
  });
};

exports.createDecorator = createDecorator;

const setParameters = () => {
  const {
    PARAM_Key
  } = (0, _config.getConfig)();
  return params => ({
    [PARAM_Key]: params
  });
};

exports.setParameters = setParameters;