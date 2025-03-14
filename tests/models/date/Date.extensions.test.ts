import '../../../src/models/plot/Date.extensions'

describe('Test the Date creation using custom function', () => {
    it('should create a valid date', () => {
        const date = Date.fromPotentialRelative(808762500000)
        expect(date.toISOString()).toBe('1995-08-18T16:15:00.000Z')
    })
    it('should create a valid date using an offset', () => {
        const absoluteDate = new Date(808762500000)
        const date = Date.fromPotentialRelative(1000, absoluteDate)
        expect(absoluteDate.toISOString()).toBe('1995-08-18T16:15:00.000Z')
        expect(date.toISOString()).toBe('1995-08-18T16:15:01.000Z')
    })
})
