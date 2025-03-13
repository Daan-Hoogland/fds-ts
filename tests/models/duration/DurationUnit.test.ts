import { DurationUnit, getDurationUnit } from '../../../src/models/duration//EDurationUnit'

describe('DurationUnit enum', () => {
    it('should return the right enum value for the input string MILLIS', () => {
        const millisString = 'MILLIS'
        expect(getDurationUnit(millisString)).toBe(DurationUnit.MILLIS)
    })
    it('should return the right enum value for the input string SECONDS', () => {
        const secondsString = 'SECONDS'
        expect(getDurationUnit(secondsString)).toBe(DurationUnit.SECONDS)
    })
    it('should return the right enum value for the input string HOURS', () => {
        const hoursString = 'HOURS'
        expect(getDurationUnit(hoursString)).toBe(DurationUnit.HOURS)
    })
    it('should return the right enum value for the input string DAYS', () => {
        const daysString = 'DAYS'
        expect(getDurationUnit(daysString)).toBe(DurationUnit.DAYS)
    })
    it('should correctly return UNKNOWN when fed an invalid duration value', () => {
        const inputString = 'INVALID VALUE'
        const durationEnum = getDurationUnit(inputString)
        expect(durationEnum).toBe(DurationUnit.UNKNOWN)
    })
})
