const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("shuffleArray returns an array",() => {
        expect(shuffleArray([1,2,3])).toBe(Array.isArray)
    }),
    test("shuffleArraycheck returns an array of the same length as the argument sent in",() => {
        expect(shuffleArray([0,4,3,4,5]).length).toBe(5)
    })
})