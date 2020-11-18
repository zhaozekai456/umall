"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqbanneredit = exports.reqbannerinfo = exports.reqbannerdelete = exports.reqbannerlist = exports.reqbanneradd = exports.reqmemberedit = exports.reqmemberinfo = exports.reqmemberlist = exports.reqspecscount = exports.reqspecsedit = exports.reqspecsinfo = exports.reqspecsdelete = exports.reqspecslist = exports.reqspecsadd = exports.reqcateedit = exports.reqcateinfo = exports.reqcatedelete = exports.reqcatelist = exports.reqcateadd = exports.reqLogin = exports.reqUserCount = exports.reqUseredit = exports.reqUserinfo = exports.reqUserdel = exports.reqUserlist = exports.reqUseradd = exports.reqRoleEdit = exports.reqRoleInfo = exports.reqRoleDel = exports.reqRoleList = exports.reqRoleAdd = exports.reqMenuUpdate = exports.reqMenuDetail = exports.reqMenuDel = exports.reqMenuList = exports.reqMenuAdd = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

var _alert = require("./alert");

var _store = _interopRequireDefault(require("../store"));

var _router = _interopRequireDefault(require("../router"));

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseUrl = '/aa';
_vue["default"].prototype.$imgPre = "http://localhost:3000";

_axios["default"].interceptors.response.use(function (res) {
  console.log('本次请求地址是：' + res.config.url);
  console.log(res);

  if (res.data.code !== 200) {
    (0, _alert.errorAlert)(res.data.msg);
  }

  if (res.data.msg === '登录已过期或访问权限受限') {
    _store["default"].dispatch('changeUser', {});

    _router["default"].push('/login');
  }

  return res;
});

_axios["default"].interceptors.request.use(function (req) {
  if (req.url != baseUrl + '/api/userlogin') {
    req.headers.authorization = _store["default"].state.userInfo.token;
  }

  return req;
});

var reqMenuAdd = function reqMenuAdd(form) {
  return (0, _axios["default"])({
    url: baseUrl + '/api/menuadd',
    method: 'post',
    data: _qs["default"].stringify(form)
  });
};

exports.reqMenuAdd = reqMenuAdd;

var reqMenuList = function reqMenuList() {
  return (0, _axios["default"])({
    url: baseUrl + '/api/menulist',
    method: 'get',
    params: {
      istree: true
    }
  });
};

exports.reqMenuList = reqMenuList;

var reqMenuDel = function reqMenuDel(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/menudelete",
    method: "post",
    data: _qs["default"].stringify({
      id: id
    })
  });
};

exports.reqMenuDel = reqMenuDel;

var reqMenuDetail = function reqMenuDetail(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/menuinfo",
    method: "get",
    params: {
      id: id
    }
  });
};

exports.reqMenuDetail = reqMenuDetail;

var reqMenuUpdate = function reqMenuUpdate(form) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/menuedit",
    method: "post",
    data: _qs["default"].stringify(form)
  });
};

exports.reqMenuUpdate = reqMenuUpdate;

var reqRoleAdd = function reqRoleAdd(user) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleadd",
    method: "post",
    data: _qs["default"].stringify(user)
  });
};

exports.reqRoleAdd = reqRoleAdd;

var reqRoleList = function reqRoleList() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/rolelist",
    method: "get"
  });
};

exports.reqRoleList = reqRoleList;

var reqRoleDel = function reqRoleDel(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roledelete",
    method: "post",
    data: _qs["default"].stringify({
      id: id
    })
  });
};

exports.reqRoleDel = reqRoleDel;

var reqRoleInfo = function reqRoleInfo(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleinfo",
    method: "get",
    params: {
      id: id
    }
  });
};

exports.reqRoleInfo = reqRoleInfo;

var reqRoleEdit = function reqRoleEdit(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/roleedit",
    method: "post",
    data: _qs["default"].stringify(id)
  });
};

exports.reqRoleEdit = reqRoleEdit;

var reqUseradd = function reqUseradd(user) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/useradd",
    method: "post",
    data: _qs["default"].stringify(user)
  });
};

exports.reqUseradd = reqUseradd;

var reqUserlist = function reqUserlist(p) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userlist",
    method: "get",
    params: p
  });
};

exports.reqUserlist = reqUserlist;

var reqUserdel = function reqUserdel(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userdelete",
    method: "post",
    data: _qs["default"].stringify({
      uid: id
    })
  });
};

exports.reqUserdel = reqUserdel;

var reqUserinfo = function reqUserinfo(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/userinfo",
    method: "get",
    params: {
      uid: id
    }
  });
};

exports.reqUserinfo = reqUserinfo;

var reqUseredit = function reqUseredit(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/useredit",
    method: "post",
    data: _qs["default"].stringify(id)
  });
};

exports.reqUseredit = reqUseredit;

var reqUserCount = function reqUserCount() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/usercount",
    method: "get"
  });
};

exports.reqUserCount = reqUserCount;

var reqLogin = function reqLogin(user) {
  return (0, _axios["default"])({
    url: baseUrl + '/api/userlogin',
    method: 'post',
    data: _qs["default"].stringify(user)
  });
};

exports.reqLogin = reqLogin;

var reqcateadd = function reqcateadd(user) {
  var d = new FormData();

  for (var i in user) {
    d.append(i, user[i]);
  }

  return (0, _axios["default"])({
    url: baseUrl + "/api/cateadd",
    method: "post",
    data: d
  });
};

exports.reqcateadd = reqcateadd;

var reqcatelist = function reqcatelist(p) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/catelist",
    method: "get",
    params: p
  });
};

exports.reqcatelist = reqcatelist;

var reqcatedelete = function reqcatedelete(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/catedelete",
    method: "post",
    data: _qs["default"].stringify({
      id: id
    })
  });
};

exports.reqcatedelete = reqcatedelete;

var reqcateinfo = function reqcateinfo(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/cateinfo",
    method: "get",
    params: {
      id: id
    }
  });
};

exports.reqcateinfo = reqcateinfo;

var reqcateedit = function reqcateedit(id) {
  var d = new FormData();

  for (var i in id) {
    d.append(i, id[i]);
  }

  return (0, _axios["default"])({
    url: baseUrl + "/api/cateedit",
    method: "post",
    data: d
  });
};

exports.reqcateedit = reqcateedit;

var reqspecsadd = function reqspecsadd(user) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specsadd",
    method: "post",
    data: user
  });
};

exports.reqspecsadd = reqspecsadd;

var reqspecslist = function reqspecslist(p) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specslist",
    method: "get",
    params: p
  });
};

exports.reqspecslist = reqspecslist;

var reqspecsdelete = function reqspecsdelete(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specsdelete",
    method: "post",
    data: _qs["default"].stringify({
      id: id
    })
  });
};

exports.reqspecsdelete = reqspecsdelete;

var reqspecsinfo = function reqspecsinfo(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specsinfo",
    method: "get",
    params: {
      id: id
    }
  });
};

exports.reqspecsinfo = reqspecsinfo;

var reqspecsedit = function reqspecsedit(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specsedit",
    method: "post",
    data: id
  });
};

exports.reqspecsedit = reqspecsedit;

var reqspecscount = function reqspecscount() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/specscount",
    method: "get"
  });
};

exports.reqspecscount = reqspecscount;

var reqmemberlist = function reqmemberlist() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/memberlist",
    method: "get"
  });
};

exports.reqmemberlist = reqmemberlist;

var reqmemberinfo = function reqmemberinfo(p) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/memberinfo",
    method: "get",
    params: {
      uid: p
    }
  });
};

exports.reqmemberinfo = reqmemberinfo;

var reqmemberedit = function reqmemberedit(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/memberedit",
    method: "post",
    data: id
  });
};

exports.reqmemberedit = reqmemberedit;

var reqbanneradd = function reqbanneradd(user) {
  var d = new FormData();

  for (var i in user) {
    d.append(i, user[i]);
  }

  return (0, _axios["default"])({
    url: baseUrl + "/api/banneradd",
    method: "post",
    data: d
  });
};

exports.reqbanneradd = reqbanneradd;

var reqbannerlist = function reqbannerlist() {
  return (0, _axios["default"])({
    url: baseUrl + "/api/bannerlist",
    method: "get"
  });
};

exports.reqbannerlist = reqbannerlist;

var reqbannerdelete = function reqbannerdelete(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/bannerdelete",
    method: "post",
    data: _qs["default"].stringify({
      id: id
    })
  });
};

exports.reqbannerdelete = reqbannerdelete;

var reqbannerinfo = function reqbannerinfo(id) {
  return (0, _axios["default"])({
    url: baseUrl + "/api/bannerinfo",
    method: "get",
    params: {
      id: id
    }
  });
};

exports.reqbannerinfo = reqbannerinfo;

var reqbanneredit = function reqbanneredit(user) {
  var d = new FormData();

  for (var i in user) {
    d.append(i, user[i]);
  }

  return (0, _axios["default"])({
    url: baseUrl + "/api/banneredit",
    method: "post",
    data: d
  });
};

exports.reqbanneredit = reqbanneredit;