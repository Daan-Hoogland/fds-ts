import { Distance } from '../../../src/models/distance/Distance'
import { DistanceUnit } from '../../../src/models/distance/EDistanceUnit'

const meterToMeter = { expected: 1 }
const meterToFoot = { expected: 3.28084, numDigits: 2 }
const meterToKm = { expected: 0.001, numDigits: 2 }
const meterToNm = { expected: 0.00054, numDigits: 5 }

const footToMeter = { expected: 0.3048, numDigits: 2 }
const footToFoot = { expected: 1 }
const footToKm = { expected: 0.0003048, numDigits: 5 }
const footToNm = { expected: 0.000164579, numDigits: 5 }

const kmToMeter = { expected: 1000 }
const kmToFoot = { expected: 3280.84, numDigits: 2 }
const kmToKm = { expected: 1 }
const kmToNm = { expected: 0.539957, numDigits: 5 }

const nmToMeter = { expected: 1852 }
const nmToFoot = { expected: 6076.115, numDigits: 2 }
const nmToKm = { expected: 1.852, numDigits: 2 }
const nmToNm = { expected: 1 }

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
    it('should update the distance value when passed a new value', () => {
        const footString = '160;FOOT'
        const distanceFoot = Distance.fromJsonValue(footString)
        distanceFoot.value = 100
        expect(distanceFoot?.value).toBe(100)
    })
})

describe('distance class object transformation', () => {
    // Meters
    it('should correctly transform one from meter to itself.', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(...(Object.values(meterToMeter) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly transform from meter to foot', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(...(Object.values(meterToFoot) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly transform from meter to km', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(meterToKm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly transform from meter to nm', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(meterToNm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    //Foot
    it('should correctly transform one from foot to itself.', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(...(Object.values(footToFoot) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly transform from foot to meters', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(...(Object.values(footToMeter) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly transform from foot to KM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(footToKm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly transform from foot to NM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(footToNm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    // Kilometers
    it('should correctly transform one from KM to itself.', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(kmToKm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly transform from KM to meter', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(...(Object.values(kmToMeter) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly transform from KM to foot', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(...(Object.values(kmToFoot) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly transform from KM to NM', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(kmToNm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    // Nautical miles
    it('should correctly transform one from NM to itself.', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(nmToNm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })
    it('should correctly transform from NM to meter', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(...(Object.values(nmToMeter) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly transform from NM to foot', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(...(Object.values(nmToFoot) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly transform from NM to km', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(nmToKm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
})

describe('distance class object conversion', () => {
    // Meters
    it('should correctly convert one from meter to itself.', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(...(Object.values(meterToMeter) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly convert from meter to foot', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(...(Object.values(meterToFoot) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly convert from meter to km', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(meterToKm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly convert from meter to nm', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(meterToNm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    //Foot
    it('should correctly convert one from foot to itself.', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(...(Object.values(footToFoot) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly convert from foot to meters', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(...(Object.values(footToMeter) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly convert from foot to KM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(footToKm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly convert from foot to NM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(footToNm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    // Kilometers
    it('should correctly convert one from KM to itself.', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(kmToKm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
    it('should correctly convert from KM to meter', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(...(Object.values(kmToMeter) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly convert from KM to foot', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(...(Object.values(kmToFoot) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly convert from KM to NM', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(kmToNm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })

    // Nautical miles
    it('should correctly convert one from NM to itself.', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.NM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(nmToNm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.NM)
    })
    it('should correctly convert from NM to meter', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.METER)
        expect(newDistance.value).toBeCloseTo(...(Object.values(nmToMeter) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.METER)
    })
    it('should correctly convert from NM to foot', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.value).toBeCloseTo(...(Object.values(nmToFoot) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.FOOT)
    })
    it('should correctly convert from NM to km', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.KM)
        expect(newDistance.value).toBeCloseTo(...(Object.values(nmToKm) as [number, number]))
        expect(newDistance.unit).toBe(DistanceUnit.KM)
    })
})

describe('tests the conversion function itself', () => {
    // Meter
    it('should convert from meter to meter', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.METER)).toBe(...(Object.values(meterToMeter) as [number]))
    })
    it('should convert from meter to foot', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.FOOT)).toBeCloseTo(
            ...(Object.values(meterToFoot) as [number, number])
        )
    })
    it('should convert from meter to KM', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.KM)).toBeCloseTo(
            ...(Object.values(meterToKm) as [number, number])
        )
    })
    it('should convert from meter to NM', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.NM)).toBeCloseTo(
            ...(Object.values(meterToNm) as [number, number])
        )
    })

    //Foot
    it('should convert from FOOT to FOOT', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.FOOT)).toBe(...(Object.values(footToFoot) as [number]))
    })
    it('should convert from FOOT to meter', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.METER)).toBeCloseTo(
            ...(Object.values(footToMeter) as [number, number])
        )
    })
    it('should convert from FOOT to KM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.KM)).toBeCloseTo(
            ...(Object.values(footToKm) as [number, number])
        )
    })
    it('should convert from FOOT to NM', () => {
        const distanceString = '1;FOOT'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.NM)).toBeCloseTo(
            ...(Object.values(footToNm) as [number, number])
        )
    })

    // Kilometers
    it('should convert from KM to KM', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.KM)).toBe(...(Object.values(kmToKm) as [number]))
    })
    it('should convert from KM to meter', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.METER)).toBeCloseTo(
            ...(Object.values(kmToMeter) as [number, number])
        )
    })
    it('should convert from KM to foot', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.FOOT)).toBeCloseTo(
            ...(Object.values(kmToFoot) as [number, number])
        )
    })
    it('should convert from KM to NM', () => {
        const distanceString = '1;KM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.NM)).toBeCloseTo(
            ...(Object.values(kmToNm) as [number, number])
        )
    })

    // Nautical Miles
    it('should convert from NM to NM', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.NM)).toBe(...(Object.values(nmToNm) as [number]))
    })
    it('should convert from NM to meter', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.METER)).toBeCloseTo(
            ...(Object.values(nmToMeter) as [number, number])
        )
    })
    it('should convert from NM to foot', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.FOOT)).toBeCloseTo(
            ...(Object.values(nmToFoot) as [number, number])
        )
    })
    it('should convert from NM to KM', () => {
        const distanceString = '1;NM'
        const distance = Distance.fromJsonValue(distanceString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(distance), 'convertTo')?.value

        expect(convertToFunc.call(distance, DistanceUnit.KM)).toBeCloseTo(
            ...(Object.values(nmToKm) as [number, number])
        )
    })
})

describe('tests the original value property', () => {
    it('should have the original JSON string as originalValue property', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        expect(distance.originalValue).toBe(distanceString)
    })
    it('should keep the original value regardless of any changes made to the distance unit', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.convert(DistanceUnit.FOOT)
        expect(newDistance.originalValue).toBe(distanceString)
    })
    it('should keep the original value regardless of any changes made to the distance value', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        distance.value = 10
        expect(distance.originalValue).toBe(distanceString)
    })
    it('should keep the original value even if its converted into a new object with different values.', () => {
        const distanceString = '1;METER'
        const distance = Distance.fromJsonValue(distanceString)
        const newDistance = distance?.to(DistanceUnit.FOOT)
        expect(newDistance.originalValue).toBe(distanceString)
    })
})
