import { Coordinate } from '../../../src/models/coordinates/Coordinate'
import { CoordinateUnit } from '../../../src/models/coordinates/ECoordinateUnit'

describe('Coordinate class object creation', () => {
    it('should return a Coordinate object with the assigned coordinate value', () => {
        const xString = '52.30'
        const yString = '5.25'
        const coordinate = Coordinate.fromJsonValue(xString, yString)

        expect(coordinate?.unit).toBe(CoordinateUnit.WGS84)
        expect(coordinate?.x).toBe(52.3)
        expect(coordinate?.y).toBe(5.25)
    })
    it('should return a Coordinate object with the assigned coordinate value', () => {
        const xString = '52.30;WGS84'
        const yString = '5.25;WGS84'
        const coordinate = Coordinate.fromJsonValue(xString, yString)

        expect(coordinate?.unit).toBe(CoordinateUnit.WGS84)
        expect(coordinate?.x).toBe(52.3)
        expect(coordinate?.y).toBe(5.25)
    })
    it('should return a Coordinate object with the assigned coordinate value', () => {
        const xString = '145878;RD'
        const yString = '478762;RD'
        const coordinate = Coordinate.fromJsonValue(xString, yString)

        expect(coordinate?.unit).toBe(CoordinateUnit.RD)
        expect(coordinate?.x).toBe(145878)
        expect(coordinate?.y).toBe(478762)
    })
})
