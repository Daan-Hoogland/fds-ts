import { getHeadingUnit, HeadingUnit } from './EHeadingUnit'
import { assertValidNumber } from './utils/Utils'

export class Heading {
    private _value: number
    private _unit: HeadingUnit
    private _originalValue?: string | undefined

    private readonly _conversionRates: Record<HeadingUnit, number> = {
        [HeadingUnit.DEGREE]: 1, // Base unit
        [HeadingUnit.HEADING_TRUE]: 1, // 1 degree = 1 heading_true
        [HeadingUnit.RADIAN]: 180 / Math.PI, // 1 radian = 180 / π degrees
        [HeadingUnit.UNKNOWN]: 1,
    }

    private readonly _precisionMap: Record<HeadingUnit, number> = {
        [HeadingUnit.DEGREE]: 5,
        [HeadingUnit.HEADING_TRUE]: 5,
        [HeadingUnit.RADIAN]: 5,
        [HeadingUnit.UNKNOWN]: 1,
    }

    constructor(value: number, unit: string, originalValue?: string) {
        this._value = value
        this._unit = getHeadingUnit(unit)
        this._originalValue = originalValue
    }

    public get value(): number {
        return this._value
    }

    public set value(value: number) {
        this._value = value
    }

    public get unit(): HeadingUnit {
        return this._unit
    }

    private set unit(value: HeadingUnit) {
        this._unit = value
    }

    public get originalValue(): string | undefined {
        return this._originalValue
    }

    public set originalValue(value: string | undefined) {
        this._originalValue = value
    }

    convert(toUnit: HeadingUnit): Heading {
        if (toUnit == this.unit) {
            return this
        }

        this.value = this.convertTo(toUnit)
        this.unit = toUnit
        return this
    }

    to(toUnit: HeadingUnit): Heading {
        if (toUnit == this.unit) {
            return new Heading(this.value, this.unit)
        }

        return new Heading(this.convertTo(toUnit), toUnit, this._originalValue)
    }

    private convertTo(toUnit: HeadingUnit): number {
        const valueInBase = this.value * (1 / this._conversionRates[this.unit])
        const convertedValue = valueInBase * this._conversionRates[toUnit]
        const precision = this._precisionMap[toUnit] ?? 2 // default of 2.

        return parseFloat(convertedValue.toFixed(precision))
    }

    static fromJsonValue(value: string): Heading {
        const stringParts = value.split(';')
        assertValidNumber(stringParts[0])
        return new Heading(Number(stringParts[0]), stringParts[1], value)
    }
}
