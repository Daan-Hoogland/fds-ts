import { SpeedUnit, getSpeedUnit } from '../src/ESpeedUnit'

describe('SpeedUnit enum', () => {
    it('should return the right enum value for the input string MH', () => {
        const meterString = 'MH'
        expect(getSpeedUnit(meterString)).toBe(SpeedUnit.MH)
    })
    it('should return the right enum value for the input string FPH', () => {
        const feetString = 'FPH'
        expect(getSpeedUnit(feetString)).toBe(SpeedUnit.FPH)
    })
    it('should return the right enum value for the input string KPH', () => {
        const kmString = 'KPH'
        expect(getSpeedUnit(kmString)).toBe(SpeedUnit.KPH)
    })
    it('should return the right enum value for the input string MPH', () => {
        const mString = 'MPH'
        expect(getSpeedUnit(mString)).toBe(SpeedUnit.MPH)
    })
    it('should return the right enum value for the input string MS', () => {
        const msString = 'MS'
        expect(getSpeedUnit(msString)).toBe(SpeedUnit.MS)
    })
    it('should return the right enum value for the input string FPS', () => {
        const fpsString = 'FPS'
        expect(getSpeedUnit(fpsString)).toBe(SpeedUnit.FPS)
    })
    it('should correctly return UNKNOWN when fed an invalid speed value', () => {
        const inputString = 'INVALID VALUE'
        const speedEnum = getSpeedUnit(inputString)
        expect(speedEnum).toBe(SpeedUnit.UNKNOWN)
    })
})
