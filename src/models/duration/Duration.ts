import { DurationUnit, getDurationUnit } from './EDurationUnit'
import { assertValidNumber } from '../../utils/Utils'

export class Duration {
    private _value: number
    private _unit: DurationUnit
    private _originalValue?: string

    // Conversion rates to milliseconds (base unit)
    private readonly _conversionRates: Record<DurationUnit, number> = {
        [DurationUnit.MILLIS]: 1,
        [DurationUnit.SECONDS]: 1000,
        [DurationUnit.HOURS]: 3600000, // 1000 * 60 * 60
        [DurationUnit.DAYS]: 86400000, // 1000 * 60 * 60 * 24
        [DurationUnit.UNKNOWN]: 1,
    }

    // Precision for each unit
    private readonly _precisionMap: Record<DurationUnit, number> = {
        [DurationUnit.MILLIS]: 0,
        [DurationUnit.SECONDS]: 0,
        [DurationUnit.HOURS]: 4,
        [DurationUnit.DAYS]: 5,
        [DurationUnit.UNKNOWN]: 3,
    }

    constructor(value: number, unit: string, originalValue?: string) {
        this._value = value
        this._unit = getDurationUnit(unit)
        this._originalValue = originalValue
    }

    public get value(): number {
        return this._value
    }

    public set value(value: number) {
        this._value = value
    }

    public get unit(): DurationUnit {
        return this._unit
    }

    private set unit(value: DurationUnit) {
        this._unit = value
    }

    public get originalValue(): string | undefined {
        return this._originalValue
    }

    private set originalValue(value: string | undefined) {
        this._originalValue = value
    }

    /**
     * Converts the duration to the specified unit and updates the current instance.
     * @param toUnit - The target unit to convert to.
     * @returns The current instance after conversion.
     */
    convert(toUnit: DurationUnit): Duration {
        if (toUnit === this.unit) {
            return this
        }

        this.value = this.convertTo(toUnit)
        this.unit = toUnit

        return this
    }

    /**
     * Creates a new Duration instance with the value converted to the specified unit.
     * @param toUnit - The target unit to convert to.
     * @returns A new Duration instance with the converted value.
     */
    to(toUnit: DurationUnit): Duration {
        if (toUnit === this.unit) {
            return new Duration(this.value, this.unit)
        }

        // Optionally, you can set the originalValue to undefined or create a new one.
        return new Duration(this.convertTo(toUnit), toUnit, this.originalValue)
    }

    /**
     * Converts the current value to the specified unit.
     * @param toUnit - The target unit to convert to.
     * @returns The converted value.
     */
    private convertTo(toUnit: DurationUnit): number {
        const valueInMillis = this.value * this._conversionRates[this.unit]
        const convertedValue = valueInMillis / this._conversionRates[toUnit]
        const precision = this._precisionMap[toUnit] ?? 3 // Default precision of 3.

        return parseFloat(convertedValue.toFixed(precision))
    }

    /**
     * Creates a Duration instance from a JSON value.
     * @param value - The JSON value in the format "value;unit".
     * @returns A new Duration instance.
     */
    static fromJsonValue(value: string): Duration {
        const stringParts = value.split(';')
        assertValidNumber(stringParts[0])
        return new Duration(Number(stringParts[0]), stringParts[1], value)
    }
}
