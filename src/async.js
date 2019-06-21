module.exports.fetchData = function fetchData(callback) {
    setTimeout(() => {
        callback('Hello, world')
    }, 1e3)
}

module.exports.promiseFetchData = function promiseFetchData(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('Hello, world')
            } else {
                reject('Failed')
            }
        })
    })
}