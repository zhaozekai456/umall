import axios from 'axios'
import qs from 'qs'
import { errorAlert } from './alert'
import store from "../store"
import router from "../router"
import Vue from "vue"


let baseUrl = '/aa'
Vue.prototype.$imgPre = "http://localhost:3000"
axios.interceptors.response.use(res => {
    console.log('本次请求地址是：' + res.config.url)
    console.log(res)
    if (res.data.code !== 200) {
        errorAlert(res.data.msg)
    }
    if (res.data.msg === '登录已过期或访问权限受限') {
        store.dispatch('changeUser', {})
        router.push('/login')
    }
    return res
})

axios.interceptors.request.use(req => {
    if (req.url != baseUrl + '/api/userlogin') {
        req.headers.authorization = store.state.userInfo.token;
    }
    return req
})

export const reqMenuAdd = (form) => {
    return axios({
        url: baseUrl + '/api/menuadd',
        method: 'post',
        data: qs.stringify(form)
    })
}

export const reqMenuList = () => {
    return axios({
        url: baseUrl + '/api/menulist',
        method: 'get',
        params: {
            istree: true
        }
    })
}
export const reqMenuDel = (id) => {
    return axios({
        url: baseUrl + "/api/menudelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}
export const reqMenuDetail = (id) => {
    return axios({
        url: baseUrl + "/api/menuinfo",
        method: "get",
        params: {
            id: id
        }
    })
}
export const reqMenuUpdate = (form) => {
    return axios({
        url: baseUrl + "/api/menuedit",
        method: "post",
        data: qs.stringify(form)
    })
}
export const reqRoleAdd = (user) => {
    return axios({
        url: baseUrl + "/api/roleadd",
        method: "post",
        data: qs.stringify(user)
    })
}
export const reqRoleList = () => {
    return axios({
        url: baseUrl + "/api/rolelist",
        method: "get",
    })
}
export const reqRoleDel = (id) => {
    return axios({
        url: baseUrl + "/api/roledelete",
        method: "post",
        data: qs.stringify({ id: id })
    })
}
export const reqRoleInfo = (id) => {
    return axios({
        url: baseUrl + "/api/roleinfo",
        method: "get",
        params: { id: id }
    })
}
export const reqRoleEdit = (id) => {
    return axios({
        url: baseUrl + "/api/roleedit",
        method: "post",
        data: qs.stringify(id)
    })
}
export const reqUseradd = (user) => {
    return axios({
        url: baseUrl + "/api/useradd",
        method: "post",
        data: qs.stringify(user)
    })
}
export const reqUserlist = (p) => {
    return axios({
        url: baseUrl + "/api/userlist",
        method: "get",
        params: p
    })
}
export const reqUserdel = (id) => {
    return axios({
        url: baseUrl + "/api/userdelete",
        method: "post",
        data: qs.stringify({ uid: id })
    })
}
export const reqUserinfo = (id) => {
    return axios({
        url: baseUrl + "/api/userinfo",
        method: "get",
        params: { uid: id }
    })
}
export const reqUseredit = (id) => {
    return axios({
        url: baseUrl + "/api/useredit",
        method: "post",
        data: qs.stringify(id)
    })
}
export const reqUserCount = () => {
    return axios({
        url: baseUrl + "/api/usercount",
        method: "get",
    })
}
export const reqLogin = (user) => {
    return axios({
        url: baseUrl + '/api/userlogin',
        method: 'post',
        data: qs.stringify(user)
    })
}
export const reqcateadd = (user) => {

    let d = new FormData()

    for (let i in user) {
        d.append(i, user[i])
    }
    return axios({
        url: baseUrl + "/api/cateadd",
        method: "post",
        data: d
    })
}
export const reqcatelist = (p) => {
    return axios({
        url: baseUrl + "/api/catelist",
        method: "get",
        params: p
    })
}
export const reqcatedelete = (id) => {
    return axios({
        url: baseUrl + "/api/catedelete",
        method: "post",
        data: qs.stringify({ id: id })
    })
}
export const reqcateinfo = (id) => {
    return axios({
        url: baseUrl + "/api/cateinfo",
        method: "get",
        params: { id: id }
    })
}
export const reqcateedit = (id) => {
    let d = new FormData()
    for (let i in id) {
        d.append(i, id[i])
    }
    return axios({
        url: baseUrl + "/api/cateedit",
        method: "post",
        data: d
    })
}
export const reqspecsadd = (user) => {
    return axios({
        url: baseUrl + "/api/specsadd",
        method: "post",
        data: user
    })
}
export const reqspecslist = (p) => {
    return axios({
        url: baseUrl + "/api/specslist",
        method: "get",
        params: p
    })
}
export const reqspecsdelete = (id) => {
    return axios({
        url: baseUrl + "/api/specsdelete",
        method: "post",
        data: qs.stringify({ id: id })
    })
}
export const reqspecsinfo = (id) => {
    return axios({
        url: baseUrl + "/api/specsinfo",
        method: "get",
        params: { id: id }
    })
}
export const reqspecsedit = (id) => {
    return axios({
        url: baseUrl + "/api/specsedit",
        method: "post",
        data: id
    })
}
export const reqspecscount = () => {
    return axios({
        url: baseUrl + "/api/specscount",
        method: "get",
    })
}
export const reqmemberlist = () => {
    return axios({
        url: baseUrl + "/api/memberlist",
        method: "get",
    })
}
export const reqmemberinfo = (p) => {
    return axios({
        url: baseUrl + "/api/memberinfo",
        method: "get",
        params: { uid: p }
    })
}
export const reqmemberedit = (id) => {
    return axios({
        url: baseUrl + "/api/memberedit",
        method: "post",
        data: id
    })
}
export const reqbanneradd = (user) => {
    let d = new FormData()

    for (let i in user) {
        d.append(i, user[i])
    }

    return axios({
        url: baseUrl + "/api/banneradd",
        method: "post",
        data: d
    })
}
export const reqbannerlist = () => {
    return axios({
        url: baseUrl + "/api/bannerlist",
        method: "get",
    })
}
export const reqbannerdelete = (id) => {
    return axios({
        url: baseUrl + "/api/bannerdelete",
        method: "post",
        data: qs.stringify({ id: id })
    })
}
export const reqbannerinfo = (id) => {
    return axios({
        url: baseUrl + "/api/bannerinfo",
        method: "get",
        params: { id: id }
    })
}
export const reqbanneredit = (user) => {
    let d = new FormData()

    for (let i in user) {
        d.append(i, user[i])
    }

    return axios({
        url: baseUrl + "/api/banneredit",
        method: "post",
        data: d
    })
}