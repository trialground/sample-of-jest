const { init, destroy } = require('../src/beforeAndAfter')

// It will be called in the beginning
beforeAll(() => console.log('start'))

// It will be called in the end
afterAll(() => console.log('end'))

// It will be called before each test
beforeEach(() => init())

// It will be called after each test
afterEach(() => destroy())

test('1 + 1 = 2', () => {
    expect(1 + 1).toBe(2)
})

test('2 - 1 = 1', () => {
    expect(2 - 1).toBe(1)
})

// Scoped before & each
// But outside beforeEach & afterEach will also be applied to the scope
describe('This a scope', () => {
    beforeEach(() => console.log('start a test in the scope'))
    afterEach(() => console.log('start a test in the scope'))

    test('1 + 1 < 3', () => expect(1 + 1).toBeLessThan(3))
    test('1 + 1 > 0', () => expect(1 + 1).toBeGreaterThan(0))
})

// If you wanna run only a test to know whether it can pass the test, you can use test.only,
// this will ignore other test cases, but sill run beforeAll / beforeEach / afterEach / afterAll
// test.only('1 - 1 = 0', () => {
//     expect(1 - 1).toBe(0)
// })
