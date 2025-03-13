import { Duration } from '../../../src/models/duration/Duration'
import { DurationUnit } from '../../../src/models/duration/EDurationUnit'

// Conversion expectations for Duration
const millisToMillis = { expected: 1000 }
const millisToSeconds = { expected: 1, numDigits: 0 }
const millisToHours = { expected: 0.00027778, numDigits: 4 }
const millisToDays = { expected: 0.000011574, numDigits: 5 }

const secondsToMillis = { expected: 1000 }
const secondsToSeconds = { expected: 1 }
const secondsToHours = { expected: 0.00027778, numDigits: 4 }
const secondsToDays = { expected: 0.000011574, numDigits: 5 }

const hoursToMillis = { expected: 3600000 }
const hoursToSeconds = { expected: 3600 }
const hoursToHours = { expected: 1 }
const hoursToDays = { expected: 0.04166667, numDigits: 3 }

const daysToMillis = { expected: 86400000 }
const daysToSeconds = { expected: 86400 }
const daysToHours = { expected: 24 }
const daysToDays = { expected: 1 }

describe('Duration class object creation', () => {
    it('should return a Duration object with the assigned MILLIS value', () => {
        const millisString = '1000;MILLIS'
        const durationMillis = Duration.fromJsonValue(millisString)

        expect(durationMillis?.unit).toBe(DurationUnit.MILLIS)
        expect(durationMillis?.value).toBe(1000)
    })

    it('should return a Duration object with the assigned SECONDS value', () => {
        const secondsString = '100;SECONDS'
        const durationSeconds = Duration.fromJsonValue(secondsString)
        expect(durationSeconds?.unit).toBe(DurationUnit.SECONDS)
        expect(durationSeconds?.value).toBe(100)
    })

    it('should return a Duration object with the assigned HOURS value', () => {
        const hoursString = '10;HOURS'
        const durationHours = Duration.fromJsonValue(hoursString)
        expect(durationHours?.unit).toBe(DurationUnit.HOURS)
        expect(durationHours?.value).toBe(10)
    })

    it('should return a Duration object with the assigned DAYS value', () => {
        const daysString = '5;DAYS'
        const durationDays = Duration.fromJsonValue(daysString)
        expect(durationDays?.unit).toBe(DurationUnit.DAYS)
        expect(durationDays?.value).toBe(5)
    })

    it('should throw an exception when an invalid number is passed', () => {
        const durationString = 'INVALID;MILLIS'
        expect(() => Duration.fromJsonValue(durationString)).toThrow('Invalid number: INVALID')
    })

    it('should update the duration value when passed a new value', () => {
        const millisString = '1000;MILLIS'
        const durationMillis = Duration.fromJsonValue(millisString)
        durationMillis.value = 2000
        expect(durationMillis?.value).toBe(2000)
    })
})

describe('Duration class object transformation', () => {
    // MILLIS
    it('should correctly transform one from MILLIS to itself.', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.MILLIS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(millisToMillis) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.MILLIS)
    })

    it('should correctly transform from MILLIS to SECONDS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.SECONDS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(millisToSeconds) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.SECONDS)
    })

    it('should correctly transform from MILLIS to HOURS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.HOURS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(millisToHours) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.HOURS)
    })

    it('should correctly transform from MILLIS to DAYS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.DAYS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(millisToDays) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.DAYS)
    })

    // SECONDS
    it('should correctly transform one from SECONDS to itself.', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.SECONDS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(secondsToSeconds) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.SECONDS)
    })

    it('should correctly transform from SECONDS to MILLIS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.MILLIS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(secondsToMillis) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.MILLIS)
    })

    it('should correctly transform from SECONDS to HOURS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.HOURS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(secondsToHours) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.HOURS)
    })

    it('should correctly transform from SECONDS to DAYS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.DAYS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(secondsToDays) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.DAYS)
    })

    // HOURS
    it('should correctly transform one from HOURS to itself.', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.HOURS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(hoursToHours) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.HOURS)
    })

    it('should correctly transform from HOURS to MILLIS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.MILLIS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(hoursToMillis) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.MILLIS)
    })

    it('should correctly transform from HOURS to SECONDS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.SECONDS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(hoursToSeconds) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.SECONDS)
    })

    it('should correctly transform from HOURS to DAYS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.DAYS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(hoursToDays) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.DAYS)
    })

    // DAYS
    it('should correctly transform one from DAYS to itself.', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.DAYS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(daysToDays) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.DAYS)
    })

    it('should correctly transform from DAYS to MILLIS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.MILLIS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(daysToMillis) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.MILLIS)
    })

    it('should correctly transform from DAYS to SECONDS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.SECONDS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(daysToSeconds) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.SECONDS)
    })

    it('should correctly transform from DAYS to HOURS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.HOURS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(daysToHours) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.HOURS)
    })
})

describe('Duration class object conversion', () => {
    // MILLIS
    it('should correctly convert one from MILLIS to itself.', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.MILLIS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(millisToMillis) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.MILLIS)
    })

    it('should correctly convert from MILLIS to SECONDS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.SECONDS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(millisToSeconds) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.SECONDS)
    })

    it('should correctly convert from MILLIS to HOURS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.HOURS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(millisToHours) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.HOURS)
    })

    it('should correctly convert from MILLIS to DAYS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.DAYS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(millisToDays) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.DAYS)
    })

    // SECONDS
    it('should correctly convert one from SECONDS to itself.', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.SECONDS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(secondsToSeconds) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.SECONDS)
    })

    it('should correctly convert from SECONDS to MILLIS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.MILLIS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(secondsToMillis) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.MILLIS)
    })

    it('should correctly convert from SECONDS to HOURS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.HOURS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(secondsToHours) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.HOURS)
    })

    it('should correctly convert from SECONDS to DAYS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.DAYS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(secondsToDays) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.DAYS)
    })

    // HOURS
    it('should correctly convert one from HOURS to itself.', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.HOURS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(hoursToHours) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.HOURS)
    })

    it('should correctly convert from HOURS to MILLIS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.MILLIS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(hoursToMillis) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.MILLIS)
    })

    it('should correctly convert from HOURS to SECONDS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.SECONDS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(hoursToSeconds) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.SECONDS)
    })

    it('should correctly convert from HOURS to DAYS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.DAYS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(hoursToDays) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.DAYS)
    })

    // DAYS
    it('should correctly convert one from DAYS to itself.', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.DAYS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(daysToDays) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.DAYS)
    })

    it('should correctly convert from DAYS to MILLIS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.MILLIS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(daysToMillis) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.MILLIS)
    })

    it('should correctly convert from DAYS to SECONDS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.SECONDS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(daysToSeconds) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.SECONDS)
    })

    it('should correctly convert from DAYS to HOURS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.HOURS)
        expect(newDuration.value).toBeCloseTo(...(Object.values(daysToHours) as [number, number]))
        expect(newDuration.unit).toBe(DurationUnit.HOURS)
    })
})

describe('tests the conversion function itself', () => {
    // MILLIS
    it('should convert from MILLIS to itself', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.MILLIS)).toBe(...(Object.values(millisToMillis) as [number]))
    })

    it('should convert from MILLIS to SECONDS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.SECONDS)).toBeCloseTo(
            ...(Object.values(millisToSeconds) as [number, number])
        )
    })

    it('should convert from MILLIS to HOURS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.HOURS)).toBeCloseTo(
            ...(Object.values(millisToHours) as [number, number])
        )
    })

    it('should convert from MILLIS to DAYS', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.DAYS)).toBeCloseTo(
            ...(Object.values(millisToDays) as [number, number])
        )
    })

    // SECONDS
    it('should convert from SECONDS to itself', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.SECONDS)).toBe(
            ...(Object.values(secondsToSeconds) as [number])
        )
    })

    it('should convert from SECONDS to MILLIS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.MILLIS)).toBeCloseTo(
            ...(Object.values(secondsToMillis) as [number, number])
        )
    })

    it('should convert from SECONDS to HOURS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.HOURS)).toBeCloseTo(
            ...(Object.values(secondsToHours) as [number, number])
        )
    })

    it('should convert from SECONDS to DAYS', () => {
        const durationString = '1;SECONDS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.DAYS)).toBeCloseTo(
            ...(Object.values(secondsToDays) as [number, number])
        )
    })

    // HOURS
    it('should convert from HOURS to itself', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.HOURS)).toBe(...(Object.values(hoursToHours) as [number]))
    })

    it('should convert from HOURS to MILLIS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.MILLIS)).toBeCloseTo(
            ...(Object.values(hoursToMillis) as [number, number])
        )
    })

    it('should convert from HOURS to SECONDS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.SECONDS)).toBeCloseTo(
            ...(Object.values(hoursToSeconds) as [number, number])
        )
    })

    it('should convert from HOURS to DAYS', () => {
        const durationString = '1;HOURS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.DAYS)).toBeCloseTo(
            ...(Object.values(hoursToDays) as [number, number])
        )
    })

    // DAYS
    it('should convert from DAYS to itself', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.DAYS)).toBe(...(Object.values(daysToDays) as [number]))
    })

    it('should convert from DAYS to MILLIS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.MILLIS)).toBeCloseTo(
            ...(Object.values(daysToMillis) as [number, number])
        )
    })

    it('should convert from DAYS to SECONDS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.SECONDS)).toBeCloseTo(
            ...(Object.values(daysToSeconds) as [number, number])
        )
    })

    it('should convert from DAYS to HOURS', () => {
        const durationString = '1;DAYS'
        const duration = Duration.fromJsonValue(durationString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(duration), 'convertTo')?.value

        expect(convertToFunc.call(duration, DurationUnit.HOURS)).toBeCloseTo(
            ...(Object.values(daysToHours) as [number, number])
        )
    })
})

describe('tests the original value property', () => {
    it('should have the original JSON string as originalValue property', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        expect(duration.originalValue).toBe(durationString)
    })

    it('should keep the original value regardless of any changes made to the duration unit', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.convert(DurationUnit.SECONDS)
        expect(newDuration.originalValue).toBe(durationString)
    })

    it('should keep the original value regardless of any changes made to the duration value', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        duration.value = 2000
        expect(duration.originalValue).toBe(durationString)
    })

    it('should keep the original value even if its converted into a new object with different values.', () => {
        const durationString = '1000;MILLIS'
        const duration = Duration.fromJsonValue(durationString)
        const newDuration = duration?.to(DurationUnit.SECONDS)
        expect(newDuration.originalValue).toBe(durationString)
    })
})
