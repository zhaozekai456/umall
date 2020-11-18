"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = require("@/utils/http");

var state = {
  list: []
};
var mutations = {
  changelist: function changelist(state, obj) {
    state.list = obj;
  }
};
var actions = {
  reqlist: function reqlist(context) {
    (0, _http.reqcatelist)({
      istree: true
    }).then(function (res) {
      context.commit('changelist', res.data.list);
    });
  }
};
var getters = {
  list: function list(state) {
    return state.list;
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  namespaced: true
};
exports["default"] = _default;