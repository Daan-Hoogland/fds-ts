import { Altitude } from '../src/Altitude'
import { AltitudeUnit } from '../src/EAltitudeUnit'

const meterToMeter = { expected: 1 }
const meterToFoot = { expected: 3.28084, numDigits: 2 }

const footToMeter = { expected: 0.3048, numDigits: 2 }
const footToFoot = { expected: 1 }

describe('Altitude class object creation', () => {
    it('should return a Altitude object with the assigned meter value', () => {
        const meterString = '100;METER'
        const altitudeMeters = Altitude.fromJsonValue(meterString)

        expect(altitudeMeters?.unit).toBe(AltitudeUnit.METER)
        expect(altitudeMeters?.value).toBe(100)
    })
    it('should return a Altitude object with the assigned feet value', () => {
        const footString = '160;FOOT'
        const altitudeFoot = Altitude.fromJsonValue(footString)
        expect(altitudeFoot?.unit).toBe(AltitudeUnit.FOOT)
        expect(altitudeFoot?.value).toBe(160)
    })
    it('should throw an exception when an invalid number is passed', () => {
        const altitudeString = 'INVALID;METER'
        expect(() => Altitude.fromJsonValue(altitudeString)).toThrow('Invalid number: INVALID')
    })
    it('should update the altitude value when passed a new value', () => {
        const footString = '160;FOOT'
        const altitudeFoot = Altitude.fromJsonValue(footString)
        altitudeFoot.value = 100
        expect(altitudeFoot?.value).toBe(100)
    })
})

describe('altitude class object transformation', () => {
    // Meters
    it('should correctly transform one from meter to itself.', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.to(AltitudeUnit.METER)
        expect(newAltitude.value).toBeCloseTo(...(Object.values(meterToMeter) as [number, number]))
        expect(newAltitude.unit).toBe(AltitudeUnit.METER)
    })
    it('should correctly transform from meter to foot', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.to(AltitudeUnit.FOOT)
        expect(newAltitude.value).toBeCloseTo(...(Object.values(meterToFoot) as [number, number]))
        expect(newAltitude.unit).toBe(AltitudeUnit.FOOT)
    })

    //Foot
    it('should correctly transform one from foot to itself.', () => {
        const altitudeString = '1;FOOT'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.to(AltitudeUnit.FOOT)
        expect(newAltitude.value).toBeCloseTo(...(Object.values(footToFoot) as [number, number]))
        expect(newAltitude.unit).toBe(AltitudeUnit.FOOT)
    })
    it('should correctly transform from foot to meters', () => {
        const altitudeString = '1;FOOT'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.to(AltitudeUnit.METER)
        expect(newAltitude.value).toBeCloseTo(...(Object.values(footToMeter) as [number, number]))
        expect(newAltitude.unit).toBe(AltitudeUnit.METER)
    })
})

describe('altitude class object conversion', () => {
    // Meters
    it('should correctly convert one from meter to itself.', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.convert(AltitudeUnit.METER)
        expect(newAltitude.value).toBeCloseTo(...(Object.values(meterToMeter) as [number, number]))
        expect(newAltitude.unit).toBe(AltitudeUnit.METER)
    })
    it('should correctly convert from meter to foot', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.convert(AltitudeUnit.FOOT)
        expect(newAltitude.value).toBeCloseTo(...(Object.values(meterToFoot) as [number, number]))
        expect(newAltitude.unit).toBe(AltitudeUnit.FOOT)
    })

    //Foot
    it('should correctly convert one from foot to itself.', () => {
        const altitudeString = '1;FOOT'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.convert(AltitudeUnit.FOOT)
        expect(newAltitude.value).toBeCloseTo(...(Object.values(footToFoot) as [number, number]))
        expect(newAltitude.unit).toBe(AltitudeUnit.FOOT)
    })
    it('should correctly convert from foot to meters', () => {
        const altitudeString = '1;FOOT'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.convert(AltitudeUnit.METER)
        expect(newAltitude.value).toBeCloseTo(...(Object.values(footToMeter) as [number, number]))
        expect(newAltitude.unit).toBe(AltitudeUnit.METER)
    })
})

describe('tests the conversion function itself', () => {
    // Meter
    it('should convert from meter to meter', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(altitude), 'convertTo')?.value

        expect(convertToFunc.call(altitude, AltitudeUnit.METER)).toBe(...(Object.values(meterToMeter) as [number]))
    })
    it('should convert from meter to foot', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(altitude), 'convertTo')?.value

        expect(convertToFunc.call(altitude, AltitudeUnit.FOOT)).toBeCloseTo(
            ...(Object.values(meterToFoot) as [number, number])
        )
    })

    //Foot
    it('should convert from FOOT to FOOT', () => {
        const altitudeString = '1;FOOT'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(altitude), 'convertTo')?.value

        expect(convertToFunc.call(altitude, AltitudeUnit.FOOT)).toBe(...(Object.values(footToFoot) as [number]))
    })
    it('should convert from FOOT to meter', () => {
        const altitudeString = '1;FOOT'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(altitude), 'convertTo')?.value

        expect(convertToFunc.call(altitude, AltitudeUnit.METER)).toBeCloseTo(
            ...(Object.values(footToMeter) as [number, number])
        )
    })
})

describe('tests the original value property', () => {
    it('should have the original JSON string as originalValue property', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        expect(altitude.originalValue).toBe(altitudeString)
    })
    it('should keep the original value regardless of any changes made to the altitude unit', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.convert(AltitudeUnit.FOOT)
        expect(newAltitude.originalValue).toBe(altitudeString)
    })
    it('should keep the original value regardless of any changes made to the altitude value', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        altitude.value = 10
        expect(altitude.originalValue).toBe(altitudeString)
    })
    it('should keep the original value even if its converted into a new object with different values.', () => {
        const altitudeString = '1;METER'
        const altitude = Altitude.fromJsonValue(altitudeString)
        const newAltitude = altitude?.to(AltitudeUnit.FOOT)
        expect(newAltitude.originalValue).toBe(altitudeString)
    })
})
