import { DistanceUnit, getDistanceUnit } from './EDistanceUnit'
import { assertValidNumber } from './utils/Utils'

export class Distance {
    private _value: number
    private _unit: DistanceUnit
    private _originalValue?: string | undefined

    private readonly _conversionRates: Record<DistanceUnit, number> = {
        [DistanceUnit.METER]: 1,
        [DistanceUnit.FOOT]: 0.3048,
        [DistanceUnit.KM]: 1000,
        [DistanceUnit.NM]: 1852,
        [DistanceUnit.UNKNOWN]: 1,
    }

    private readonly _precisionMap: Record<DistanceUnit, number> = {
        [DistanceUnit.METER]: 3,
        [DistanceUnit.FOOT]: 3,
        [DistanceUnit.KM]: 5,
        [DistanceUnit.NM]: 5,
        [DistanceUnit.UNKNOWN]: 3,
    }

    constructor(value: number, unit: string, originalValue?: string) {
        this._value = value
        this._unit = getDistanceUnit(unit)
        this._originalValue = originalValue
    }

    public get value(): number {
        return this._value
    }

    public set value(value: number) {
        this._value = value
    }

    public get unit(): DistanceUnit {
        return this._unit
    }

    private set unit(value: DistanceUnit) {
        this._unit = value
    }

    public get originalValue(): string | undefined {
        return this._originalValue
    }

    private set originalValue(value: string | undefined) {
        this._originalValue = value
    }

    convert(toUnit: DistanceUnit): Distance {
        if (toUnit == this.unit) {
            return this
        }

        this.value = this.convertTo(toUnit)
        this.unit = toUnit

        return this
    }

    to(toUnit: DistanceUnit): Distance {
        if (toUnit == this.unit) {
            return new Distance(this.value, this.unit)
        }

        // NOTE: is this behavior wanted?
        // It would make sense to create a new originalValue based on the new values, or leave it empty.
        return new Distance(this.convertTo(toUnit), toUnit, this.originalValue)
    }

    private convertTo(toUnit: DistanceUnit): number {
        const valueInMeters = this.value * this._conversionRates[this.unit]
        const convertedValue = valueInMeters / this._conversionRates[toUnit]
        const precision = this._precisionMap[toUnit] ?? 3 // default of 3.

        return parseFloat(convertedValue.toFixed(precision))
    }

    static fromJsonValue(value: string): Distance {
        const stringParts = value.split(';')
        assertValidNumber(stringParts[0])
        return new Distance(Number(stringParts[0]), stringParts[1], value)
    }
}
