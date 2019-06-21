const { fetchData, promiseFetchData } = require('../src/async')

test('the async function fetchData should return "Hello, world"', (done) => {
    const callback = data => {
        expect(data).toBe('Hello, world')
        // call 'done' is VERY IMPORTANT, because if we do not call it
        // the testing result will always pass
        done()
    }
    fetchData(callback)
})

test('the promise should be resolved with "Hello, world"', () => {
    // 'return' is important
    return promiseFetchData().then((data) => {
        expect(data).toBe('Hello, world')
    })
})

test('the promise should be rejected', () => {
    // Ensure the following statement are added
    expect.assertions(1)
    return promiseFetchData(false).catch(e => expect(e).toMatch('Failed'))
})

test('use .resolves to test a resolved promise', () => {
    return expect(promiseFetchData()).resolves.toBe('Hello, world')
})

test('use .rejects to test a rejected promise', () => {
    return expect(promiseFetchData(false)).rejects.toMatch('Failed')
})

test('use async/await to test a resolved promise', async () => {
    const data = await promiseFetchData()
    expect(data).toBe('Hello, world')
})

test('use async/await to test a rejected promise', async () => {
    expect.assertions(1)
    try {
        await promiseFetchData(false)
    } catch (e) {
        expect(e).toMatch('Failed')
    }
})
