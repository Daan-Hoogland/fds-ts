import { DistanceUnit, getDistanceUnit } from './EDistanceUnit'
import { assertValidNumber } from './utils/Utils'

export class Distance {
    private _value: number
    private _unit: DistanceUnit
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

    constructor(value: number, unit: string) {
        this._value = value
        this._unit = getDistanceUnit(unit)
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
    public set unit(value: DistanceUnit) {
        this._unit = value
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
        return new Distance(this.convertTo(toUnit), toUnit)
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
        return new Distance(Number(stringParts[0]), stringParts[1])
    }
}
