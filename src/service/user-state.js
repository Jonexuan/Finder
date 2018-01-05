import * as util from './util'

export function login(user) {
    let data = user
    delete data.password
    util.setTitle('Finder-主页')
    window.localStorage.setItem('finder-user', JSON.stringify(data))
}

export function getUser() {
    const user = window.localStorage.getItem('finder-user')
    return JSON.parse(user) || {}
}

export function logout() {
    util.setTitle('Finder-遇见')
    return window.localStorage.removeItem('finder-user')
}

export function isLogin() {
    return !!getUser().userNumber
}