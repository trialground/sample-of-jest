const axios = require('axios')

module.exports.forEach = function forEach(items, callback) {
    for (let i = 0; i < items.length; ++i) {
        callback(items[i])
    }
}

module.exports.getSuggestedGoods = function getSuggestedGoods() {
    return axios.get('https://suggest.taobao.com/sug?code=utf-8&q=switch').then(resp => resp.data)
}