import { Speed } from '../src/Speed'
import { SpeedUnit } from '../src/ESpeedUnit'

const mhToMh = { expected: 1 }
const mhToMs = { expected: 0.00027778, numDigits: 5 }
const mhToKph = { expected: 0.001, numDigits: 5 }
const mhToMph = { expected: 0.00062137, numDigits: 5 }
const mhToFph = { expected: 3.28084, numDigits: 5 }
const mhToFps = { expected: 0.00091134, numDigits: 5 }

const msToMh = { expected: 3600 }
const msToMs = { expected: 1 }
const msToKph = { expected: 3.6, numDigits: 2 }
const msToMph = { expected: 2.23694, numDigits: 5 }
const msToFph = { expected: 11811.02, numDigits: 2 }
const msToFps = { expected: 3.28084, numDigits: 5 }

const kphToMh = { expected: 1000 }
const kphToMs = { expected: 0.27778, numDigits: 5 }
const kphToKph = { expected: 1 }
const kphToMph = { expected: 0.62137, numDigits: 5 }
const kphToFph = { expected: 3280.84, numDigits: 2 }
const kphToFps = { expected: 0.91134, numDigits: 5 }

const mphToMh = { expected: 1609.34, numDigits: 2 }
const mphToMs = { expected: 0.44704, numDigits: 5 }
const mphToKph = { expected: 1.60934, numDigits: 2 }
const mphToMph = { expected: 1 }
const mphToFph = { expected: 5280, numDigits: 1 }
const mphToFps = { expected: 1.46667, numDigits: 4 }

const fphToMh = { expected: 0.3048, numDigits: 5 }
const fphToMs = { expected: 0.0000846667, numDigits: 5 }
const fphToKph = { expected: 0.0003048, numDigits: 5 }
const fphToMph = { expected: 0.000189394, numDigits: 5 }
const fphToFph = { expected: 1 }
const fphToFps = { expected: 0.000277778, numDigits: 5 }

const fpsToMh = { expected: 1097.28, numDigits: 2 }
const fpsToMs = { expected: 0.3048, numDigits: 5 }
const fpsToKph = { expected: 1.09728, numDigits: 2 }
const fpsToMph = { expected: 0.68, numDigits: 2 }
const fpsToFph = { expected: 3600, numDigits: 2 }
const fpsToFps = { expected: 1 }

describe('Speed class object creation', () => {
    it('should return a Speed object with the assigned MH value', () => {
        const mhString = '100;MH'
        const speedMh = Speed.fromJsonValue(mhString)

        expect(speedMh?.unit).toBe(SpeedUnit.MH)
        expect(speedMh?.value).toBe(100)
    })
    it('should return a Speed object with the assigned MS value', () => {
        const msString = '100;MS'
        const speedMs = Speed.fromJsonValue(msString)
        expect(speedMs?.unit).toBe(SpeedUnit.MS)
        expect(speedMs?.value).toBe(100)
    })
    it('should return a Speed object with the assigned KPH value', () => {
        const kphString = '100;KPH'
        const speedKph = Speed.fromJsonValue(kphString)
        expect(speedKph?.unit).toBe(SpeedUnit.KPH)
        expect(speedKph?.value).toBe(100)
    })
    it('should return a Speed object with the assigned MPH value', () => {
        const mphString = '100;MPH'
        const speedMph = Speed.fromJsonValue(mphString)
        expect(speedMph?.unit).toBe(SpeedUnit.MPH)
        expect(speedMph?.value).toBe(100)
    })
    it('should throw an exception when an invalid number is passed', () => {
        const speedString = 'INVALID;MH'
        expect(() => Speed.fromJsonValue(speedString)).toThrow('Invalid number: INVALID')
    })
    it('should update the speed value when passed a new value', () => {
        const mhString = '100;MH'
        const speedMh = Speed.fromJsonValue(mhString)
        speedMh.value = 200
        expect(speedMh?.value).toBe(200)
    })
})

describe('Speed class object transformation', () => {
    // MH
    it('should correctly transform one from MH to itself.', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly transform from MH to MS', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly transform from MH to KPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly transform from MH to MPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly transform from MH to FPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly transform from MH to FPS', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // MS
    it('should correctly transform one from MS to itself.', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly transform from MS to MH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly transform from MS to KPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly transform from MS to MPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly transform from MS to FPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly transform from MS to FPS', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // KPH
    it('should correctly transform one from KPH to itself.', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly transform from KPH to MH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly transform from KPH to MS', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly transform from KPH to MPH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly transform from KPH to FPH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly transform from KPH to FPS', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // MPH
    it('should correctly transform one from MPH to itself.', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly transform from MPH to MH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly transform from MPH to MS', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly transform from MPH to KPH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly transform from MPH to FPH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly transform from MPH to FPS', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // FPH
    it('should correctly transform one from FPH to itself.', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly transform from FPH to MH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly transform from FPH to MS', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly transform from FPH to KPH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly transform from FPH to MPH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly transform from FPH to FPS', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // FPS
    it('should correctly transform one from FPS to itself.', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })
    it('should correctly transform from FPS to MH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly transform from FPS to MS', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly transform from FPS to KPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly transform from FPS to MPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly transform from FPS to FPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
})

describe('Speed class object conversion', () => {
    // MH
    it('should correctly convert one from MH to itself.', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly convert from MH to MS', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly convert from MH to KPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly convert from MH to MPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly convert from MH to FPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly convert from MH to FPS', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mhToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // MS
    it('should correctly convert one from MS to itself.', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly convert from MS to MH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly convert from MS to KPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly convert from MS to MPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly convert from MS to FPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly convert from MS to FPS', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(msToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // KPH
    it('should correctly convert one from KPH to itself.', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly convert from KPH to MH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly convert from KPH to MS', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly convert from KPH to MPH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly convert from KPH to FPH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly convert from KPH to FPS', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(kphToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // MPH
    it('should correctly convert one from MPH to itself.', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly convert from MPH to MH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly convert from MPH to MS', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly convert from MPH to KPH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly convert from MPH to FPH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly convert from MPH to FPS', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(mphToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // FPH
    it('should correctly convert one from FPH to itself.', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
    it('should correctly convert from FPH to MH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly convert from FPH to MS', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly convert from FPH to KPH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly convert from FPH to MPH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly convert from FPH to FPS', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fphToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })

    // FPS
    it('should correctly convert one from FPS to itself.', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToFps) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPS)
    })
    it('should correctly convert from FPS to MH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToMh) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MH)
    })
    it('should correctly convert from FPS to MS', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MS)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToMs) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MS)
    })
    it('should correctly convert from FPS to KPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.KPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToKph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.KPH)
    })
    it('should correctly convert from FPS to MPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToMph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.MPH)
    })
    it('should correctly convert from FPS to FPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.FPH)
        expect(newSpeed.value).toBeCloseTo(...(Object.values(fpsToFph) as [number, number]))
        expect(newSpeed.unit).toBe(SpeedUnit.FPH)
    })
})

describe('tests the conversion function itself', () => {
    // MH
    it('should convert from MH to MH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MH)).toBe(...(Object.values(mhToMh) as [number]))
    })
    it('should convert from MH to MS', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MS)).toBeCloseTo(...(Object.values(mhToMs) as [number, number]))
    })
    it('should convert from MH to KPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.KPH)).toBeCloseTo(...(Object.values(mhToKph) as [number, number]))
    })
    it('should convert from MH to MPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MPH)).toBeCloseTo(...(Object.values(mhToMph) as [number, number]))
    })
    it('should convert from MH to FPH', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPH)).toBeCloseTo(...(Object.values(mhToFph) as [number, number]))
    })
    it('should convert from MH to FPS', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPS)).toBeCloseTo(...(Object.values(mhToFps) as [number, number]))
    })

    // MS
    it('should convert from MS to MS', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MS)).toBe(...(Object.values(msToMs) as [number]))
    })
    it('should convert from MS to MH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MH)).toBeCloseTo(...(Object.values(msToMh) as [number, number]))
    })
    it('should convert from MS to KPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.KPH)).toBeCloseTo(...(Object.values(msToKph) as [number, number]))
    })
    it('should convert from MS to MPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MPH)).toBeCloseTo(...(Object.values(msToMph) as [number, number]))
    })
    it('should convert from MS to FPH', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPH)).toBeCloseTo(...(Object.values(msToFph) as [number, number]))
    })
    it('should convert from MS to FPS', () => {
        const speedString = '1;MS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPS)).toBeCloseTo(...(Object.values(msToFps) as [number, number]))
    })

    // KPH
    it('should convert from KPH to KPH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.KPH)).toBe(...(Object.values(kphToKph) as [number]))
    })
    it('should convert from KPH to MH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MH)).toBeCloseTo(...(Object.values(kphToMh) as [number, number]))
    })
    it('should convert from KPH to MS', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MS)).toBeCloseTo(...(Object.values(kphToMs) as [number, number]))
    })
    it('should convert from KPH to MPH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MPH)).toBeCloseTo(...(Object.values(kphToMph) as [number, number]))
    })
    it('should convert from KPH to FPH', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPH)).toBeCloseTo(...(Object.values(kphToFph) as [number, number]))
    })
    it('should convert from KPH to FPS', () => {
        const speedString = '1;KPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPS)).toBeCloseTo(...(Object.values(kphToFps) as [number, number]))
    })

    // MPH
    it('should convert from MPH to MPH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MPH)).toBe(...(Object.values(mphToMph) as [number]))
    })
    it('should convert from MPH to MH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MH)).toBeCloseTo(...(Object.values(mphToMh) as [number, number]))
    })
    it('should convert from MPH to MS', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MS)).toBeCloseTo(...(Object.values(mphToMs) as [number, number]))
    })
    it('should convert from MPH to KPH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.KPH)).toBeCloseTo(...(Object.values(mphToKph) as [number, number]))
    })
    it('should convert from MPH to FPH', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPH)).toBeCloseTo(...(Object.values(mphToFph) as [number, number]))
    })
    it('should convert from MPH to FPS', () => {
        const speedString = '1;MPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPS)).toBeCloseTo(...(Object.values(mphToFps) as [number, number]))
    })

    // FPH
    it('should convert from FPH to FPH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPH)).toBe(...(Object.values(fphToFph) as [number]))
    })
    it('should convert from FPH to MH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MH)).toBeCloseTo(...(Object.values(fphToMh) as [number, number]))
    })
    it('should convert from FPH to MS', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MS)).toBeCloseTo(...(Object.values(fphToMs) as [number, number]))
    })
    it('should convert from FPH to KPH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.KPH)).toBeCloseTo(...(Object.values(fphToKph) as [number, number]))
    })
    it('should convert from FPH to MPH', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MPH)).toBeCloseTo(...(Object.values(fphToMph) as [number, number]))
    })
    it('should convert from FPH to FPS', () => {
        const speedString = '1;FPH'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPS)).toBeCloseTo(...(Object.values(fphToFps) as [number, number]))
    })

    // FPS
    it('should convert from FPS to FPS', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPS)).toBe(...(Object.values(fpsToFps) as [number]))
    })
    it('should convert from FPS to MH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MH)).toBeCloseTo(...(Object.values(fpsToMh) as [number, number]))
    })
    it('should convert from FPS to MS', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MS)).toBeCloseTo(...(Object.values(fpsToMs) as [number, number]))
    })
    it('should convert from FPS to KPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.KPH)).toBeCloseTo(...(Object.values(fpsToKph) as [number, number]))
    })
    it('should convert from FPS to MPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.MPH)).toBeCloseTo(...(Object.values(fpsToMph) as [number, number]))
    })
    it('should convert from FPS to FPH', () => {
        const speedString = '1;FPS'
        const speed = Speed.fromJsonValue(speedString)
        const convertToFunc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(speed), 'convertTo')?.value

        expect(convertToFunc.call(speed, SpeedUnit.FPH)).toBeCloseTo(...(Object.values(fpsToFph) as [number, number]))
    })
})

describe('tests the original value property', () => {
    it('should have the original JSON string as originalValue property', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        expect(speed.originalValue).toBe(speedString)
    })
    it('should keep the original value regardless of any changes made to the speed unit', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.convert(SpeedUnit.MS)
        expect(newSpeed.originalValue).toBe(speedString)
    })
    it('should keep the original value regardless of any changes made to the speed value', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        speed.value = 10
        expect(speed.originalValue).toBe(speedString)
    })
    it('should keep the original value even if its converted into a new object with different values.', () => {
        const speedString = '1;MH'
        const speed = Speed.fromJsonValue(speedString)
        const newSpeed = speed?.to(SpeedUnit.MS)
        expect(newSpeed.originalValue).toBe(speedString)
    })
})
