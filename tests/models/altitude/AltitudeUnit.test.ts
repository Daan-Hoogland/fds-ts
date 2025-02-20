import { AltitudeUnit, getAltitudeUnit } from '../../../src/models/altitude/EAltitudeUnit'

describe('Altitude enum', () => {
    it('should return the right enum value for the input string METER', () => {
        const meterString = 'METER'
        expect(getAltitudeUnit(meterString)).toBe(AltitudeUnit.METER)
    })
    it('should return the right enum value for the input string FEET', () => {
        const footString = 'FOOT'
        expect(getAltitudeUnit(footString)).toBe(AltitudeUnit.FOOT)
    })
    it('should correctly return UNKNOWN when fed an invalid heading value', () => {
        const inputString = 'INVALID VALUE'
        const headingEnum = getAltitudeUnit(inputString)
        expect(headingEnum).toBe(AltitudeUnit.UNKNOWN)
    })
})
