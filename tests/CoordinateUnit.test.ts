import { CoordinateUnit, getCoordinateUnit } from '../src/ECoordinateUnit'

describe('CoordinateUnit enum', () => {
    it('should return the right enum value for the input string RD', () => {
        const rdString = 'RD'
        expect(getCoordinateUnit(rdString)).toBe(CoordinateUnit.RD)
    })
    it('should return the right enum value for the input string WGS84', () => {
        const wgs84String = 'WGS84'
        expect(getCoordinateUnit(wgs84String)).toBe(CoordinateUnit.WGS84)
    })
    it('should return the right enum value for the input string WGS84_MINUTES', () => {
        const wgs84MinuteString = 'WGS84_MINUTES'
        expect(getCoordinateUnit(wgs84MinuteString)).toBe(CoordinateUnit.WGS84_MINUTES)
    })
    it('should return the right enum value for the input string WGS84_SECONDS', () => {
        const wgs84SecondsString = 'WGS84_SECONDS'
        expect(getCoordinateUnit(wgs84SecondsString)).toBe(CoordinateUnit.WGS84_SECONDS)
    })
    it('should return the right enum value for the input string WEB_MERCATOR', () => {
        const webMercatorString = 'WEB_MERCATOR'
        expect(getCoordinateUnit(webMercatorString)).toBe(CoordinateUnit.WEB_MERCATOR)
    })
    it('should return the right enum value for the input string EPSG3857', () => {
        const epsg3857String = 'EPSG3857'
        expect(getCoordinateUnit(epsg3857String)).toBe(CoordinateUnit.EPSG3857)
    })
    it('should correctly return UNKNOWN when fed an invalid heading value', () => {
        const inputString = 'INVALID VALUE'
        const headingEnum = getCoordinateUnit(inputString)
        expect(headingEnum).toBe(CoordinateUnit.UNKNOWN)
    })
})
