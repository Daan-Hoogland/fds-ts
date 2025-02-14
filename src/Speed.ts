import { getSpeedUnit, SpeedUnit } from './ESpeedUnit'
import { assertValidNumber } from './utils/Utils'

export class Speed {
    private _value: number
    private _unit: SpeedUnit

    private readonly _conversionRates: Record<SpeedUnit, number> = {
        [SpeedUnit.MH]: 1,
        [SpeedUnit.MS]: 3600,
        [SpeedUnit.KPH]: 1000,
        [SpeedUnit.MPH]: 1609.34,
        [SpeedUnit.FPH]: 0.3048,
        [SpeedUnit.FPS]: 1097.28,
        [SpeedUnit.UNKNOWN]: 1,
    }

    private readonly _precisionMap: Record<SpeedUnit, number> = {
        [SpeedUnit.MH]: 2,
        [SpeedUnit.MS]: 2,
        [SpeedUnit.KPH]: 2,
        [SpeedUnit.MPH]: 2,
        [SpeedUnit.FPH]: 2,
        [SpeedUnit.FPS]: 2,
        [SpeedUnit.UNKNOWN]: 0,
    }

    constructor(value: number, unit: string) {
        this._value = value
        this._unit = getSpeedUnit(unit)
    }

    public get value(): number {
        return this._value
    }
    public set value(value: number) {
        this._value = value
    }

    public get unit(): SpeedUnit {
        return this._unit
    }
    public set unit(value: SpeedUnit) {
        this._unit = value
    }

    convert(toUnit: SpeedUnit): Speed {
        if (toUnit == this.unit) {
            return this
        }

        this.value = this.convertTo(toUnit)
        this.unit = toUnit
        return this
    }

    to(toUnit: SpeedUnit): Speed {
        if (toUnit == this.unit) {
            return new Speed(this.value, this.unit)
        }

        return new Speed(this.convertTo(toUnit), toUnit)
    }

    convertTo(toUnit: SpeedUnit): number {
        const valueInMH = this.value * this._conversionRates[toUnit]
        const convertedValue = valueInMH / this._conversionRates[toUnit]
        const precision = this._precisionMap[toUnit] ?? 2 // default of 2.

        return parseFloat(convertedValue.toFixed(precision))
    }

    static fromJsonValue(value: string): Speed {
        const stringParts = value.split(';')
        assertValidNumber(stringParts[0])
        return new Speed(Number(stringParts[0]), stringParts[1])
    }
}
