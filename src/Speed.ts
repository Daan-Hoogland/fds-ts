import { getSpeedUnit, SpeedUnit } from './ESpeedUnit'
import { assertValidNumber } from './utils/Utils'

export class Speed {
    private _value: number
    private _unit: SpeedUnit
    private _originalValue?: string | undefined

    private readonly _conversionRates: Record<SpeedUnit, number> = {
        [SpeedUnit.MH]: 1, // Base unit
        [SpeedUnit.MS]: 1 / 3600, // 1 meter per second = 3600 meters per hour
        [SpeedUnit.KPH]: 1 / 1000, // 1 kilometer per hour = 1000 meters per hour
        [SpeedUnit.MPH]: 1 / 1609.34, // 1 mile per hour = 1609.34 meters per hour
        [SpeedUnit.FPH]: 1 / 0.3048, // 1 foot per hour = 0.3048 meters per hour
        [SpeedUnit.FPS]: 1 / 1097.28, // 1 foot per second = 1097.28 meters per hour
        [SpeedUnit.UNKNOWN]: 1,
    }

    private readonly _precisionMap: Record<SpeedUnit, number> = {
        [SpeedUnit.MH]: 5,
        [SpeedUnit.MS]: 5,
        [SpeedUnit.KPH]: 5,
        [SpeedUnit.MPH]: 5,
        [SpeedUnit.FPH]: 5,
        [SpeedUnit.FPS]: 5,
        [SpeedUnit.UNKNOWN]: 0,
    }

    constructor(value: number, unit: string, originalValue?: string) {
        this._value = value
        this._unit = getSpeedUnit(unit)
        this._originalValue = originalValue
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

    private set unit(value: SpeedUnit) {
        this._unit = value
    }

    public get originalValue(): string | undefined {
        return this._originalValue
    }

    public set originalValue(value: string | undefined) {
        this._originalValue = value
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

        return new Speed(this.convertTo(toUnit), toUnit, this._originalValue)
    }

    private convertTo(toUnit: SpeedUnit): number {
        const valueInBase = this.value * (1 / this._conversionRates[this.unit])
        const convertedValue = valueInBase * this._conversionRates[toUnit]
        const precision = this._precisionMap[toUnit] ?? 2 // default of 2.

        return parseFloat(convertedValue.toFixed(precision))
    }

    static fromJsonValue(value: string): Speed {
        const stringParts = value.split(';')
        assertValidNumber(stringParts[0])
        return new Speed(Number(stringParts[0]), stringParts[1], value)
    }
}
