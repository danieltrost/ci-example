var Example = require('./example')

describe('Example Test', () => {
    describe('isString', () => {
        test('should return true if passed a string', () => {
            expect(Example.isString('test')).toBe(true)
        })

        test('should return true if passed a String object', () => {
            expect(Example.isString(new String('test'))).toBe(true)
        })

        test('should return false if passed a number', () => {
            expect(Example.isString(123)).toBe(false)
        })

        test('should return false if passed an object', () => {
            expect(Example.isString({ a: 'a' })).toBe(false)
        })

        test('should return false if passed a boolean', () => {
            expect(Example.isString(true)).toBe(false)
        })

        test('should return false if passed null', () => {
            expect(Example.isString(null)).toBe(false)
        })

        test('should return false if passed undefinedr', () => {
            expect(Example.isString(undefined)).toBe(false)
        })
    })

    describe('reverseString', () => {
        test('should correctly reverse a string', () => {
            expect(Example.reverseString('test')).toBe('tset')
        })

        test('should work with palindromes', () => {
            expect(Example.reverseString('racecar')).toBe('racecar')
        })

        test('should throw an error if string is not passed', () => {
            expect(() => {
                Example.reverseString(null)
            }).toThrow('reverseString may only be called with a String')
        })
    })
})