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
    it('should return a Coordinate object with the assigned coordinate value', () => {
        const xString = "52°17.799';WGS84_MINUTES"
        const yString = "5°15.092';WGS84_MINUTES"
        const coordinate = Coordinate.fromJsonValue(xString, yString)

        expect(coordinate?.unit).toBe(CoordinateUnit.WGS84_MINUTES)
        expect(coordinate?.x).toBe("52°17.799'")
        expect(coordinate?.y).toBe("5°15.092'")
    })
    it('should return a Coordinate object with the assigned coordinate value', () => {
        const xString = '52°17\'47.926";WGS84_SECONDS'
        const yString = '5°15\'5.39";WGS84_SECONDS'
        const coordinate = Coordinate.fromJsonValue(xString, yString)

        expect(coordinate?.unit).toBe(CoordinateUnit.WGS84_SECONDS)
        expect(coordinate?.x).toBe('52°17\'47.926"')
        expect(coordinate?.y).toBe('5°15\'5.39"')
    })
})

describe('Coordinate class conversion', () => {
    // it('should convert from RD to WGS84_MINUTES', () => {
    //     const xString = '155000;RD'
    //     const yString = '463000;RD'
    //     const coordinate = Coordinate.fromJsonValue(xString, yString)
    //     const converted = coordinate.convert(CoordinateUnit.WGS84_MINUTES)
    //     console.log(converted)

    //     expect(converted.x).toBe("52°9.310'")
    //     expect(converted.y).toBe("5°23.232'")
    // })

    it('should convert from WGS84_MINUTES to RD', () => {
        const xString = "52°9.310';WGS84_MINUTES"
        const yString = "5°23.232';WGS84_MINUTES"
        const coordinate = Coordinate.fromJsonValue(xString, yString)
        const converted = coordinate.convert(CoordinateUnit.RD)
        console.log(converted)

        expect(converted.x).toBe(155000)
        expect(converted.y).toBe(463000)
    })

    it('should convert from RD to WGS84', () => {
        const xString = '155000;RD'
        const yString = '463000;RD'
        const coordinate = Coordinate.fromJsonValue(xString, yString)
        const converted = coordinate.convert(CoordinateUnit.WGS84)
        console.log(converted)

        expect(converted.x).toBeCloseTo(52.155174)
        expect(converted.y).toBeCloseTo(5.387206)
    })
})
