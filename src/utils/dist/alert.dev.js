"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorAlert = exports.successAlert = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var vm = new _vue["default"]();

var successAlert = function successAlert(msg) {
  vm.$message({
    message: msg,
    type: 'success'
  });
};

exports.successAlert = successAlert;

var errorAlert = function errorAlert(msg) {
  vm.$message({
    message: msg,
    type: 'warning'
  });
};

exports.errorAlert = errorAlert;