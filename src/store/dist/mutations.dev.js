"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getters = exports.mutations = exports.state = void 0;
var state = {
  userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}
};
exports.state = state;
var mutations = {
  changeUserInfo: function changeUserInfo(state, obj) {
    state.userInfo = obj;

    if (obj.token) {
      sessionStorage.setItem('userInfo', JSON.stringify(obj));
    } else {
      sessionStorage.removeItem('userInfo');
    }
  }
};
exports.mutations = mutations;
var getters = {
  userInfo: function userInfo(state) {
    return state.userInfo;
  }
};
exports.getters = getters;