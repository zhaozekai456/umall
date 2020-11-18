"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = require("@/utils/http");

var state = {
  list: [],
  size: 2,
  page: 1,
  total: 0
};
var mutations = {
  changelist: function changelist(state, obj) {
    state.list = obj;
  },
  changepage: function changepage(state, obj) {
    state.page = obj;
  },
  changetotal: function changetotal(state, obj) {
    state.total = obj;
  }
};
var actions = {
  reqlist: function reqlist(context) {
    (0, _http.reqspecslist)({
      page: context.state.page,
      size: context.state.size
    }).then(function (res) {
      var list = res.data.list ? res.data.list : [];

      if (list.length == 0 && context.state.page > 1) {
        context.commit('changepage', context.state.page - 1);
        context.dispatch('reqlist');
        return;
      }

      list.forEach(function (item) {
        item.attrs = JSON.parse(item.attrs);
      });
      context.commit('changelist', list);
    });
  },
  reqcount: function reqcount(context) {
    (0, _http.reqspecscount)().then(function (res) {
      context.commit('changetotal', res.data.list[0].total);
    });
  },
  changePage: function changePage(context, obj) {
    context.commit('changepage', obj);
    context.dispatch('reqlist');
  }
};
var getters = {
  list: function list(state) {
    return state.list;
  },
  total: function total(state) {
    return state.total;
  },
  size: function size(state) {
    return state.size;
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