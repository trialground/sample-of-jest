// toBe
test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4)
})

// toEqual (check a object)
test('object equality', () => {
    const data = { a: 1 }
    data.b = 2
    expect(data).toEqual({ a: 1, b: 2 })
})

// not
test('1 + 1 != 3', () => {
    expect(1 + 1).not.toBe(3)
})

/**
 * @Truthiness
 */
// toBeNull (only match null)
test('null is null', () => {
    expect(null).toBeNull()
})

// toBeUndefined (only match undefined)
test('undefined is undefined', () => {
    expect(undefined).toBeUndefined()
})

// toBeDefined (contrary to toBeUndefined)
test('defined values', () => {
    expect(0).toBeDefined()
    expect(1).toBeDefined()
    expect('').toBeDefined()
    expect('Hello').toBeDefined()
    expect(null).toBeDefined()
    expect([]).toBeDefined()
    expect({}).toBeDefined()
    expect(true).toBeDefined()
    expect(false).toBeDefined()
})

// toBeTruthy
test('truthy values', () => {
    expect(true).toBeTruthy()
    expect(1).toBeTruthy()
    expect({}).toBeTruthy()
    expect([]).toBeTruthy()
    expect('Hello').toBeTruthy()
})

// toBeFalsy
test('falsy values', () => {
    expect(0).toBeFalsy()
    expect(false).toBeFalsy()
    expect('').toBeFalsy()
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()
})

/**
 * @Number
 */
test('number comparison', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4)
    expect(value).toBe(4)
    expect(value).toEqual(4)
    // It's better to use toBeCloseTo to test floating numbers
    // This will throw an error
    // expect(0.1 + 0.2).toBe(0.3) 
    // This is OK
    expect(0.1 + 0.2).toBeCloseTo(0.3)
})

/**
 * @String
 */
test('strings', () => {
    expect('hello').not.toMatch(/H/)
    expect('world').toMatch(/w/)
})

/**
 * @ArrayAndInterables
 */
test('Test array', () => {
    const list = [ 'a', 'b', 'c', 'd', 'a' ]
    expect(list).toContain('d')
    expect(new Set(list)).toContain('a')
})

/**
 * @ThrowError
 */
function foo() {
    throw new Error('Some errors')
}
test('A function may throw an error', () => {
    expect(foo).toThrow()
    // Expect it should be some specified type
    expect(foo).toThrow(Error)
    // Expect its error message should be the specified string
    expect(foo).toThrow('Some errors')
    // Expect its error message should match some patterns
    expect(foo).toThrow(/Some/)
})