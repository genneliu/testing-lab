const { test, expect } = require('@jest/globals')

const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions') 

test("should return 2", () => {
    expect(returnTwo(2)).toEqual(2)
})

test("should return Hello, {name}", () => {
    expect(greeting("James")).toEqual("Hello, James.")
    expect(greeting("Jill")).toEqual("Hello, Jill.")
})

// test("should return Hello, Jill and", () => {
//     expect(greeting("Jill")).toEqual("Hello, Jill.")
// })

test("Should return sum {num}", () => {
    expect(add(1,2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})

// test("Should return 14", () => {
//     expect(add(5, 9)).toEqual(14)
// })

test("Should return multiplied {num}", () => {
    expect(multiply(5,7)).toEqual(35)
    expect(multiply(2,8)).toEqual(16)
})

test("Should return divded {num}", () => {
    expect(divide(100,10)).toEqual(10)
    expect(divide(9,3)).toEqual(3)
})

test("Should return subtracted {num}", () => {
    expect(subtract(10,5)).toEqual(5)
    expect(subtract(12,4)).toEqual(8)
})

describe("all math functions should return a {num}", () => {
    expect(add(1,2)).toEqual(3)
    expect(multiply(5,7)).toEqual(35)
    expect(divide(100,10)).toEqual(10)
    expect(subtract(10,5)).toEqual(5)
}
)

test("this should be an integer", () => {
    expect(multiply(2,3)).toBeInstanceOf("number")
})