"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.routes = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

function checkedEnter(path, next) {
  if (_store["default"].state.userInfo.menus_url.includes(path)) {
    next();
  } else {
    next('/');
  }
}

var routes = [{
  path: 'menu',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../pages/menu/menu'));
    });
  },
  name: "菜单管理",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/menu', next);
  }
}, {
  path: "role",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../pages/role/role"));
    });
  },
  name: "角色管理",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/role', next);
  }
}, {
  path: "manage",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../pages/manage/manage"));
    });
  },
  name: "管理员管理",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/manage', next);
  }
}, {
  path: "cate",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../pages/cate/cate"));
    });
  },
  name: "商品分类",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/cate', next);
  }
}, {
  path: "specs",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../pages/specs/specs"));
    });
  },
  name: "商品规格",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/specs', next);
  }
}, {
  path: "goods",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../pages/goods/goods"));
    });
  },
  name: "商品管理",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/goods', next);
  }
}, {
  path: "vip",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../pages/vip/vip"));
    });
  },
  name: "会员管理",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/vip', next);
  }
}, {
  path: "banner",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../pages/banner/banner"));
    });
  },
  name: "轮播图管理",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/banner', next);
  }
}, {
  path: "seckill",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../pages/seckill/seckill"));
    });
  },
  name: "秒杀活动",
  beforeEnter: function beforeEnter(to, from, next) {
    checkedEnter('/seckill', next);
  }
}];
exports.routes = routes;
var router = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/login',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../pages/login/login'));
      });
    }
  }, {
    path: '/',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../pages/index/index'));
      });
    },
    children: [{
      path: '',
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('../pages/home/home'));
        });
      }
    }].concat(routes)
  }]
});
router.beforeEach(function (to, from, next) {
  if (to.path == '/login') {
    next();
    return;
  }

  if (_store["default"].state.userInfo.token) {
    next();
    return;
  }

  next('/login');
});
var _default = router;
exports["default"] = _default;