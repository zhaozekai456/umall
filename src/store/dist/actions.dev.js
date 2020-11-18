"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  changeUser: function changeUser(context, obj) {
    context.commit('changeUserInfo', obj);
  }
};
exports["default"] = _default;