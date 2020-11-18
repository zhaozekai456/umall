"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _actions = _interopRequireDefault(require("./actions"));

var _mutations = require("./mutations");

var _order = _interopRequireDefault(require("./modules/order"));

var _cate = _interopRequireDefault(require("./modules/cate"));

var _specs = _interopRequireDefault(require("./modules/specs"));

var _vip = _interopRequireDefault(require("./modules/vip"));

var _banner = _interopRequireDefault(require("./modules/banner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: _mutations.state,
  mutations: _mutations.mutations,
  getters: _mutations.getters,
  actions: _actions["default"],
  modules: {
    order: _order["default"],
    cate: _cate["default"],
    specs: _specs["default"],
    vip: _vip["default"],
    banner: _banner["default"]
  }
});

exports["default"] = _default;