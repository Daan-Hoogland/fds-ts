import { Heading } from '../../../src/models/heading/Heading'
import { HeadingUnit } from '../../../src/models/heading/EHeadingUnit'

const degreeToDegree = { expected: 1 }
const degreeToHeadingTrue = { expected: 1 }
const degreeToRadian = { expected: 0.0174533, numDigits: 5 }

const headingTrueToDegree = { expected: 1 }
const headingTrueToHeadingTrue = { expected: 1 }
const headingTrueToRadian = { expected: 0.0174533, numDigits: 5 }

const radianToDegree = { expected: 57.2958, numDigits: 4 }
const radianToHeadingTrue = { expected: 57.2958, numDigits: 4 }
const radianToRadian = { expected: 1 }

describe('Heading class object creation', () => {
    it('should return a Heading object with the assigned degree value', () => {
        const degreeString = '90;DEGREE'
        const headingDegree = Heading.fromJsonValue(degreeString)

        expect(headingDegree?.unit).toBe(HeadingUnit.DEGREE)
        expect(headingDegree?.value).toBe(90)
    })
    it('should return a Heading object with the assigned heading_true value', () => {
        const headingTrueString = '45;HEADING_TRUE'
        const headingTrue = Heading.fromJsonValue(headingTrueString)
        expect(headingTrue?.unit).toBe(HeadingUnit.HEADING_TRUE)
        expect(headingTrue?.value).toBe(45)
    })
    it('should return a Heading object with the assigned radian value', () => {
        const radianString = '1.5708;RADIAN'
        const headingRadian = Heading.fromJsonValue(radianString)

        expect(headingRadian?.unit).toBe(HeadingUnit.RADIAN)
        expect(headingRadian?.value).toBeCloseTo(1.5708, 3)
    })
    it('should throw an exception when an invalid number is passed', () => {
        const headingString = 'INVALID;DEGREE'
        expect(() => Heading.fromJsonValue(headingString)).toThrow('Invalid number: INVALID')
    })
    it('should update the heading value when passed a new value', () => {
        const degreeString = '90;DEGREE'
        const headingDegree = Heading.fromJsonValue(degreeString)
        headingDegree.value = 180
        expect(headingDegree?.value).toBe(180)
    })
})

describe('Heading class object transformation', () => {
    // Degrees
    it('should correctly transform one from degree to itself.', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.DEGREE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(degreeToDegree) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.DEGREE)
    })
    it('should correctly transform from degree to heading_true', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.HEADING_TRUE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(degreeToHeadingTrue) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })
    it('should correctly transform from degree to radian', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.RADIAN)
        expect(newHeading.value).toBeCloseTo(...(Object.values(degreeToRadian) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.RADIAN)
    })

    // Heading True
    it('should correctly transform one from heading_true to itself.', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.HEADING_TRUE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(headingTrueToHeadingTrue) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })
    it('should correctly transform from heading_true to degree', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.DEGREE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(headingTrueToDegree) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.DEGREE)
    })
    it('should correctly transform from heading_true to radian', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.RADIAN)
        expect(newHeading.value).toBeCloseTo(...(Object.values(headingTrueToRadian) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.RADIAN)
    })

    // Radians
    it('should correctly transform one from radian to itself.', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.RADIAN)
        expect(newHeading.value).toBeCloseTo(...(Object.values(radianToRadian) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.RADIAN)
    })
    it('should correctly transform from radian to degree', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.DEGREE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(radianToDegree) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.DEGREE)
    })
    it('should correctly transform from radian to heading_true', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.HEADING_TRUE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(radianToHeadingTrue) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })
})

describe('Heading class object conversion', () => {
    // Degrees
    it('should correctly convert one from degree to itself.', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.DEGREE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(degreeToDegree) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.DEGREE)
    })
    it('should correctly convert from degree to heading_true', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.HEADING_TRUE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(degreeToHeadingTrue) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })
    it('should correctly convert from degree to radian', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.RADIAN)
        expect(newHeading.value).toBeCloseTo(...(Object.values(degreeToRadian) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.RADIAN)
    })

    // Heading True
    it('should correctly convert one from heading_true to itself.', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.HEADING_TRUE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(headingTrueToHeadingTrue) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })
    it('should correctly convert from heading_true to degree', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.DEGREE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(headingTrueToDegree) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.DEGREE)
    })
    it('should correctly convert from heading_true to radian', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.RADIAN)
        expect(newHeading.value).toBeCloseTo(...(Object.values(headingTrueToRadian) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.RADIAN)
    })

    // Radians
    it('should correctly convert one from radian to itself.', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.RADIAN)
        expect(newHeading.value).toBeCloseTo(...(Object.values(radianToRadian) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.RADIAN)
    })
    it('should correctly convert from radian to degree', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.DEGREE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(radianToDegree) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.DEGREE)
    })
    it('should correctly convert from radian to heading_true', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.HEADING_TRUE)
        expect(newHeading.value).toBeCloseTo(...(Object.values(radianToHeadingTrue) as [number, number]))
        expect(newHeading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })
})

describe('tests the conversion function itself', () => {
    // Degrees
    it('should convert from degree to degree', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.DEGREE)).toBe(...(Object.values(degreeToDegree) as [number]))
    })
    it('should convert from degree to heading_true', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.HEADING_TRUE)).toBeCloseTo(
            ...(Object.values(degreeToHeadingTrue) as [number, number])
        )
    })
    it('should convert from degree to radian', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.RADIAN)).toBeCloseTo(
            ...(Object.values(degreeToRadian) as [number, number])
        )
    })

    // Heading True
    it('should convert from heading_true to heading_true', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.HEADING_TRUE)).toBe(
            ...(Object.values(headingTrueToHeadingTrue) as [number])
        )
    })
    it('should convert from heading_true to degree', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.DEGREE)).toBeCloseTo(
            ...(Object.values(headingTrueToDegree) as [number, number])
        )
    })
    it('should convert from heading_true to radian', () => {
        const headingString = '1;HEADING_TRUE'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.RADIAN)).toBeCloseTo(
            ...(Object.values(headingTrueToRadian) as [number, number])
        )
    })

    // Radians
    it('should convert from radian to radian', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.RADIAN)).toBe(...(Object.values(radianToRadian) as [number]))
    })
    it('should convert from radian to degree', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.DEGREE)).toBeCloseTo(
            ...(Object.values(radianToDegree) as [number, number])
        )
    })
    it('should convert from radian to heading_true', () => {
        const headingString = '1;RADIAN'
        const heading = Heading.fromJsonValue(headingString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(heading), 'convertTo')?.value

        expect(convertToFunc.call(heading, HeadingUnit.HEADING_TRUE)).toBeCloseTo(
            ...(Object.values(radianToHeadingTrue) as [number, number])
        )
    })
})

describe('tests the original value property', () => {
    it('should have the original JSON string as originalValue property', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        expect(heading.originalValue).toBe(headingString)
    })
    it('should keep the original value regardless of any changes made to the heading unit', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.convert(HeadingUnit.RADIAN)
        expect(newHeading.originalValue).toBe(headingString)
    })
    it('should keep the original value regardless of any changes made to the heading value', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        heading.value = 10
        expect(heading.originalValue).toBe(headingString)
    })
    it('should keep the original value even if its converted into a new object with different values.', () => {
        const headingString = '1;DEGREE'
        const heading = Heading.fromJsonValue(headingString)
        const newHeading = heading?.to(HeadingUnit.RADIAN)
        expect(newHeading.originalValue).toBe(headingString)
    })
})

describe('Heading class normalization', () => {
    // Degrees
    it('should normalize degrees to the range [0, 360)', () => {
        const heading = new Heading(370, 'DEGREE')
        expect(heading.value).toBeCloseTo(10)
        expect(heading.unit).toBe(HeadingUnit.DEGREE)
    })

    it('should normalize negative degrees to the range [0, 360)', () => {
        const heading = new Heading(-90, 'DEGREE')
        expect(heading.value).toBeCloseTo(270)
        expect(heading.unit).toBe(HeadingUnit.DEGREE)
    })

    it('should normalize degrees when setting the value property', () => {
        const heading = new Heading(0, 'DEGREE')
        heading.value = 450
        expect(heading.value).toBeCloseTo(90)
        expect(heading.unit).toBe(HeadingUnit.DEGREE)
    })

    // Radians
    it('should normalize radians to the range [0, 2π)', () => {
        const heading = new Heading(3 * Math.PI, 'RADIAN')
        expect(heading.value).toBeCloseTo(Math.PI)
        expect(heading.unit).toBe(HeadingUnit.RADIAN)
    })

    it('should normalize negative radians to the range [0, 2π)', () => {
        const heading = new Heading(-Math.PI / 2, 'RADIAN')
        expect(heading.value).toBeCloseTo((3 * Math.PI) / 2)
        expect(heading.unit).toBe(HeadingUnit.RADIAN)
    })

    it('should normalize radians when setting the value property', () => {
        const heading = new Heading(0, 'RADIAN')
        heading.value = 4 * Math.PI
        expect(heading.value).toBeCloseTo(0)
        expect(heading.unit).toBe(HeadingUnit.RADIAN)
    })

    // Heading True (same as degrees)
    it('should normalize heading_true to the range [0, 360)', () => {
        const heading = new Heading(400, 'HEADING_TRUE')
        expect(heading.value).toBeCloseTo(40)
        expect(heading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })

    it('should normalize negative heading_true to the range [0, 360)', () => {
        const heading = new Heading(-180, 'HEADING_TRUE')
        expect(heading.value).toBeCloseTo(180)
        expect(heading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })

    it('should normalize heading_true when setting the value property', () => {
        const heading = new Heading(0, 'HEADING_TRUE')
        heading.value = 720
        expect(heading.value).toBeCloseTo(0)
        expect(heading.unit).toBe(HeadingUnit.HEADING_TRUE)
    })
})
