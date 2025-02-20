import { getHeadingUnit, HeadingUnit } from './EHeadingUnit'
import { assertValidNumber } from '../../utils/Utils'

export class Heading {
    private _value: number
    private _unit: HeadingUnit
    private _originalValue?: string | undefined

    private readonly _conversionRates: Record<HeadingUnit, number> = {
        [HeadingUnit.DEGREE]: 1,
        [HeadingUnit.HEADING_TRUE]: 1,
        [HeadingUnit.RADIAN]: Math.PI / 180,
        [HeadingUnit.UNKNOWN]: 1,
    }

    private readonly _precisionMap: Record<HeadingUnit, number> = {
        [HeadingUnit.DEGREE]: 5,
        [HeadingUnit.HEADING_TRUE]: 5,
        [HeadingUnit.RADIAN]: 5,
        [HeadingUnit.UNKNOWN]: 1,
    }

    constructor(value: number, unit: string, originalValue?: string) {
        this._unit = getHeadingUnit(unit)
        this._value = this.normalizeValue(value, this.unit)
        this._originalValue = originalValue
    }

    public get value(): number {
        return this._value
    }

    public set value(value: number) {
        this._value = this.normalizeValue(value, this.unit)
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

        // save new value in variable to avoid issues with normalizeValue.
        const newValue = this.convertTo(toUnit)
        this.unit = toUnit
        this.value = newValue

        return this
    }

    to(toUnit: HeadingUnit): Heading {
        if (toUnit == this.unit) {
            return new Heading(this.value, this.unit)
        }

        return new Heading(this.convertTo(toUnit), toUnit, this._originalValue)
    }

    private convertTo(toUnit: HeadingUnit): number {
        let valueInBase: number
        let convertedValue: number
        if (this.unit === HeadingUnit.RADIAN) {
            valueInBase = this.value * (180 / Math.PI)
            convertedValue = valueInBase * this._conversionRates[toUnit]
        } else if (toUnit === HeadingUnit.RADIAN) {
            valueInBase = this.value * this._conversionRates[this.unit]
            convertedValue = valueInBase * (Math.PI / 180)
        } else {
            valueInBase = this.value * this._conversionRates[this.unit]
            convertedValue = valueInBase / this._conversionRates[toUnit]
        }
        const precision = this._precisionMap[toUnit] ?? 2 // default of 2.

        return parseFloat(convertedValue.toFixed(precision))
    }

    private normalizeValue(value: number, unit: HeadingUnit): number {
        switch (unit) {
            case HeadingUnit.DEGREE:
            case HeadingUnit.HEADING_TRUE:
                return ((value % 360) + 360) % 360
            case HeadingUnit.RADIAN:
                return ((value % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
            default:
                throw new Error(`Unsupported unit: ${unit}`)
        }
    }

    static fromJsonValue(value: string): Heading {
        const stringParts = value.split(';')
        assertValidNumber(stringParts[0])
        return new Heading(Number(stringParts[0]), stringParts[1], value)
    }
}
