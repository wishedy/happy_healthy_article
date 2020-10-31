// 判断一个字符串是无效的字符串
export const cleanArray = function (actual) {
    const newArray = []
    for (let i = 0; i < actual.length; i++) {
        if (actual[i]) {
            newArray.push(actual[i])
        }
    }
    return newArray
}
export const json2Query = function (json) {
    if (!json) return ''
    return cleanArray(Object.keys(json).map(key => {
        if (json[key] === undefined) return ''
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key])
    })).join('&')
}
export const getBasicAuth = (token) => {
    return token ? 'login_tokens:' + token : ''
}
