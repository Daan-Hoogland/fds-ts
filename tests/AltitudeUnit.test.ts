import { AltitudeUnit, getAltitudeUnit } from '../src/EAltitudeUnit'

describe('SpeedUnit enum', () => {
    it('should return the right enum value for the input string METER', () => {
        const radianString = 'METER'
        expect(getAltitudeUnit(radianString)).toBe(AltitudeUnit.METER)
    })
    it('should return the right enum value for the input string FEET', () => {
        const headingTrueString = 'FOOT'
        expect(getAltitudeUnit(headingTrueString)).toBe(AltitudeUnit.FOOT)
    })
    it('should correctly return UNKNOWN when fed an invalid heading value', () => {
        const inputString = 'INVALID VALUE'
        const headingEnum = getAltitudeUnit(inputString)
        expect(headingEnum).toBe(AltitudeUnit.UNKNOWN)
    })
})
