export function login(user) {
    let data = user
    delete data.password
    window.document.title = 'Finder-主页'
    window.localStorage.setItem('finder-user', JSON.stringify(data))
}

export function getUser() {
    const user = window.localStorage.getItem('finder-user')
    return JSON.parse(user) || {}
}

export function logout() {
    window.document.title = 'Finder-遇见'
    return window.localStorage.removeItem('finder-user')
}

export function isLogin() {
    return !!getUser().userNumber
}