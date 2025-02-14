import { Distance } from '../src/Distance'
import { DistanceUnit } from '../src/EDistanceUnit'

describe('Distance class object creation', () => {
    it('should return a Distance object with the assigned meter value', () => {
        const meterString = '100;METER'
        const distanceMeters = Distance.fromJsonValue(meterString)

        expect(distanceMeters?.unit).toBe(DistanceUnit.METER)
        expect(distanceMeters?.value).toBe(100)
    })
    it('should return a Distance object with the assigned KM value', () => {
        const kmString = '0.1;KM'
        const distanceKm = Distance.fromJsonValue(kmString)
        expect(distanceKm?.unit).toBe(DistanceUnit.KM)
        expect(distanceKm?.value).toBe(0.1)
    })
    it('should return a Distance object with the assigned nautical miles value', () => {
        const nmString = '50;NM'
        const distanceNm = Distance.fromJsonValue(nmString)

        expect(distanceNm?.unit).toBe(DistanceUnit.NM)
        expect(distanceNm?.value).toBe(50)
    })
    it('should return a Distance object with the assigned feet value', () => {
        const footString = '160;FOOT'
        const distanceFoot = Distance.fromJsonValue(footString)
        expect(distanceFoot?.unit).toBe(DistanceUnit.FOOT)
        expect(distanceFoot?.value).toBe(160)
    })
    it('should throw an exception when an invalid number is passed', () => {
        const distanceString = 'INVALID;METER'
        expect(() => Distance.fromJsonValue(distanceString)).toThrow('Invalid number: INVALID')
    })
})

describe('distance class object transformation', () => {
    // Meters
    it('should correctly transform one from meter to itself.', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(1)
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly transform from meter to foot', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(3.28084, 2)
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly transform from meter to nm', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(0.00054, 5)
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })
    it('should correctly transform from meter to km', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(0.001, 2)
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })

    //Foot
    it('should correctly transform one from foot to itself.', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(1)
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly transform from foot to meters', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(0.3048, 2)
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly transform from foot to NM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(0.000164579, 5)
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })
    it('should correctly transform from foot to KM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(0.0003048, 5)
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })

    // Kilometers
    it('should correctly transform one from KM to itself.', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(1)
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly transform from KM to meter', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(1000)
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly transform from KM to foot', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(3280.84, 2)
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly transform from KM to NM', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(0.539957, 5)
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    // Nautical miles
    it('should correctly transform one from NM to itself.', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(1)
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })
    it('should correctly transform from NM to meter', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(1852)
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly transform from NM to foot', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(6076.115, 2)
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly transform from NM to km', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(1.852, 5)
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
})

describe('distance class object conversion', () => {
    // Meters
    it('should correctly convert one from meter to itself.', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(1)
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly convert from meter to foot', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(3.28084, 2)
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly convert from meter to nm', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(0.00054, 5)
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })
    it('should correctly convert from meter to km', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(0.001, 2)
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })

    //Foot
    it('should correctly convert one from foot to itself.', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(1)
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly convert from foot to meters', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(0.3048, 2)
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly convert from foot to KM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(0.0003048, 5)
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly convert from foot to NM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(0.000164579, 5)
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    // Kilometers
    it('should correctly convert one from KM to itself.', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(1)
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly convert from KM to meter', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(1000, 2)
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly convert from KM to foot', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(3280.84, 2)
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly convert from KM to NM', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(0.539957, 5)
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    // Nautical miles
    it('should correctly convert one from NM to itself.', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(1)
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })
    it('should correctly convert from NM to meter', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(1852, 2)
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly convert from NM to foot', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(6076.115, 2)
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly convert from NM to km', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(1.852, 5)
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
})

describe('tests the conversion function itself', () => {
    // Meter
    it('should convert from meter to meter', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.METER)).toBe(1)
    })
    it('should convert from meter to foot', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.FOOT)).toBeCloseTo(3.28084, 2)
    })
    it('should convert from meter to KM', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.KM)).toBeCloseTo(0.001, 2)
    })
    it('should convert from meter to NM', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.NM)).toBeCloseTo(0.00054, 5)
    })

    //Foot
    it('should convert from FOOT to FOOT', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.FOOT)).toBe(1)
    })
    it('should convert from FOOT to meter', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.METER)).toBeCloseTo(0.3048, 2)
    })
    it('should convert from FOOT to KM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.KM)).toBeCloseTo(0.0003048, 5)
    })
    it('should convert from FOOT to NM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.NM)).toBeCloseTo(0.000164579, 5)
    })

    // Kilometers
    it('should convert from KM to KM', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.KM)).toBe(1)
    })
    it('should convert from KM to meter', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.METER)).toBeCloseTo(1000, 2)
    })
    it('should convert from KM to foot', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.FOOT)).toBeCloseTo(3280.84, 2)
    })
    it('should convert from KM to NM', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.NM)).toBeCloseTo(0.539957, 5)
    })

    // Nautical Miles
    it('should convert from NM to NM', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.NM)).toBe(1)
    })
    it('should convert from NM to meter', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.METER)).toBeCloseTo(1852, 2)
    })
    it('should convert from NM to foot', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.FOOT)).toBeCloseTo(6076.115, 2)
    })
    it('should convert from NM to KM', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.KM)).toBeCloseTo(1.852, 5)
    })
})
