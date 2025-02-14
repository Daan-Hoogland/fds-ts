import { DistanceUnit, getDistanceUnit } from '../src/EDistanceUnit'

describe('DistanceUnit enum', () => {
    it('should return the right enum value for the input value METER', () => {
        const meterString = 'METER'
        expect(getDistanceUnit(meterString)).toBe(DistanceUnit.METER)
    })
    it('should return the right enum value for the input value FOOT', () => {
        const feetString = 'FOOT'
        expect(getDistanceUnit(feetString)).toBe(DistanceUnit.FOOT)
    })
    it('should return the right enum value for the input value KM', () => {
        const kmString = 'KM'
        expect(getDistanceUnit(kmString)).toBe(DistanceUnit.KM)
    })
    it('should return the right enum value for the input value NM', () => {
        const nmString = 'NM'
        expect(getDistanceUnit(nmString)).toBe(DistanceUnit.NM)
    })
    it('should correctly return UNKNOWN when fed an invalid distance value', () => {
        const inputString = 'INVALID VALUE'
        const distanceEnum = getDistanceUnit(inputString)
        expect(distanceEnum).toBe(DistanceUnit.UNKNOWN)
    })
})
