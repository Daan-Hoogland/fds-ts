import { HeadingUnit, getHeadingUnit } from '../../src/EHeadingUnit'

describe('SpeedUnit enum', () => {
    it('should return the right enum value for the input string RADIAN', () => {
        const radianString = 'RADIAN'
        expect(getHeadingUnit(radianString)).toBe(HeadingUnit.RADIAN)
    })
    it('should return the right enum value for the input string HEADING_TRUE', () => {
        const headingTrueString = 'HEADING_TRUE'
        expect(getHeadingUnit(headingTrueString)).toBe(HeadingUnit.HEADING_TRUE)
    })
    it('should return the right enum value for the input string DEGREE', () => {
        const degreeString = 'DEGREE'
        expect(getHeadingUnit(degreeString)).toBe(HeadingUnit.DEGREE)
    })
    it('should correctly return UNKNOWN when fed an invalid heading value', () => {
        const inputString = 'INVALID VALUE'
        const headingEnum = getHeadingUnit(inputString)
        expect(headingEnum).toBe(HeadingUnit.UNKNOWN)
    })
})
