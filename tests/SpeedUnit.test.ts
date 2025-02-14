import { SpeedUnit, getSpeedUnit } from '../src/ESpeedUnit'

describe('SpeedUnit enum', () => {
    it('should return the right enum value for the input string options', () => {
        const meterString = 'MH'
        const feetString = 'FPH'
        const kmString = 'KPH'
        const mString = 'MPH'
        const msString = 'MS'
        const fpsString = 'FPS'
        expect(getSpeedUnit(meterString)).toBe(SpeedUnit.MH)
        expect(getSpeedUnit(feetString)).toBe(SpeedUnit.FPH)
        expect(getSpeedUnit(kmString)).toBe(SpeedUnit.KPH)
        expect(getSpeedUnit(mString)).toBe(SpeedUnit.MPH)
        expect(getSpeedUnit(msString)).toBe(SpeedUnit.MS)
        expect(getSpeedUnit(fpsString)).toBe(SpeedUnit.FPS)
    })
    it('should correctly return UNKNOWN when fed an invalid distance value', () => {
        const inputString = 'INVALID VALUE'
        const distanceEnum = getSpeedUnit(inputString)
        expect(distanceEnum).toBe(SpeedUnit.UNKNOWN)
    })
})
