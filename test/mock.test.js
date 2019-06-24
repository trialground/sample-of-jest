const axios = require('axios')
const { forEach, getSuggestedGoods } = require('../src/mock')
const foo = require('../src/foo')

const mockCallback = jest.fn(x => x + 1)
forEach([0, 1], mockCallback)

test('Expect the mock function called twice', () => {
    expect(mockCallback.mock.calls.length).toBe(2)
})

test('The first argument of the first call should be 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0)
})

test('The first argument of the second call should be 1', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1)
})

test('The return value of the first call should be 1', () => {
    expect(mockCallback.mock.results[0].value).toBe(1)
})

// The .mock property will keep some called & returned information

// We can know the ever created instances by '.mock.instances'
const MockClass = jest.fn()
const a = new MockClass()
const b = new MockClass()
console.log(MockClass.mock.instances)

// We can have these information from '.mock':
// - `.mocks.calls[x][y]` To get the 'y'th argument of the 'x'th call
// - `.mocks.results[x].value` To get the returned value of 'x'th call
// - `.mocks.instances` To get the initialized records

// We can mock the returned values
const MockReturnedValues = jest.fn()

console.log('MockReturnedValues() -> ', MockReturnedValues())

MockReturnedValues
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true)

console.log('MockReturnedValues() -> ', MockReturnedValues())
console.log('MockReturnedValues() -> ', MockReturnedValues())
console.log('MockReturnedValues() -> ', MockReturnedValues())
console.log('MockReturnedValues() -> ', MockReturnedValues())

// Mock modules
jest.mock('axios')
test('mock axios get suggested goods', () => {
    const result = [['switch游戏卡', '8634.032289390629']]
    const resp = { data: result }
    axios.get.mockResolvedValue(resp)
    // We can also mock modules in the following way
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return getSuggestedGoods().then(data => expect(data).toEqual(result))
})

// Mock implementation
jest.mock('../src/foo')
foo.mockImplementation(() => 'FOO')
test('mock foo implementation', () => {
    expect(foo()).toBe('FOO')
})

// Mock once
const myfn = jest.fn(() => 0)
    .mockImplementationOnce(() => 1)
    .mockImplementationOnce(() => 2)
test('mock implementation once', () => {
    expect(myfn()).toBe(1)
    expect(myfn()).toBe(2)
    expect(myfn()).toBe(0)
    expect(myfn()).toBe(0)
})

// Mock chained call
const myObj = {
    foo: jest.fn().mockReturnThis()
}
test('mock chained call', () => {
    const obj = myObj.foo()
    expect(obj).toBe(obj.foo())
})

// A name can be optionally provided for mock, which will be used when display errors
const aMockWithName = jest
    .fn()
    .mockImplementation(x => x + 1)
    .mockName('increase')
console.log(aMockWithName.getMockName())

// We can define some expectation for a mock function
const expectedFunction = jest.fn()
test('This is a function that is expected', () => {
    // Expect it's called at least once
    expectedFunction()
    expect(expectedFunction).toBeCalled()
    // It's equivalent to the following statement
    expect(expectedFunction.mock.calls.length).toBeGreaterThan(0)
    
    // Expect it's called at least once with specified arguments
    expectedFunction(1, 2)
    expect(expectedFunction).toBeCalledWith(1, 2)
    // It's equivalent to the following statement
    expect(expectedFunction.mock.calls).toContainEqual([1, 2])
    
    // Expect the last call with specified arguments
    expectedFunction(100)
    expect(expectedFunction).lastCalledWith(100)
    // It's equivalent to the following statement
    expect(expectedFunction.mock.calls[expectedFunction.mock.calls.length - 1]).toEqual([100])
})
