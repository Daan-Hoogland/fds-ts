import { assertValidNumber } from '../src/utils/Utils'

describe('Utils functions', () => {
    it('does not throw for valid numbers', () => {
        expect(() => assertValidNumber('123')).not.toThrow()
        expect(() => assertValidNumber('-456')).not.toThrow()
        expect(() => assertValidNumber('0')).not.toThrow()
        expect(() => assertValidNumber('12.34')).not.toThrow()
    })
    it('throws an error for invalid numbers', () => {
        expect(() => assertValidNumber('abc')).toThrow()
        expect(() => assertValidNumber('12a')).toThrow()
        expect(() => assertValidNumber(' ')).toThrow()
        expect(() => assertValidNumber('')).toThrow()
        expect(() => assertValidNumber('..123')).toThrow()
    })
    it('throws an error with the correct message', () => {
        expect(() => assertValidNumber('xyz')).toThrow('Invalid number: xyz')
        expect(() => assertValidNumber('1.2.3')).toThrow('Invalid number: 1.2.3')
    })
})
