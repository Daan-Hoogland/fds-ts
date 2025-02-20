import { AltitudeUnit, getAltitudeUnit } from './EAltitudeUnit'
import { assertValidNumber } from './utils/Utils'

export class Altitude {
    private _value: number
    private _unit: AltitudeUnit
    private _originalValue?: string

    private readonly _conversionRates: Record<AltitudeUnit, number> = {
        [AltitudeUnit.METER]: 1,
        [AltitudeUnit.FOOT]: 0.3048,
        [AltitudeUnit.UNKNOWN]: 1,
    }

    private readonly _precisionMap: Record<AltitudeUnit, number> = {
        [AltitudeUnit.METER]: 3,
        [AltitudeUnit.FOOT]: 3,
        [AltitudeUnit.UNKNOWN]: 3,
    }

    constructor(value: number, unit: string, originalValue?: string) {
        this._value = value
        this._unit = getAltitudeUnit(unit)
        this._originalValue = originalValue
    }

    public get value(): number {
        return this._value
    }

    public set value(value: number) {
        this._value = value
    }

    public get unit(): AltitudeUnit {
        return this._unit
    }

    private set unit(value: AltitudeUnit) {
        this._unit = value
    }

    public get originalValue(): string | undefined {
        return this._originalValue
    }

    private set originalValue(value: string | undefined) {
        this._originalValue = value
    }

    convert(toUnit: AltitudeUnit): Altitude {
        if (toUnit == this.unit) {
            return this
        }

        this.value = this.convertTo(toUnit)
        this.unit = toUnit

        return this
    }

    to(toUnit: AltitudeUnit): Altitude {
        if (toUnit == this.unit) {
            return new Altitude(this.value, this.unit)
        }

        return new Altitude(this.convertTo(toUnit), toUnit, this.originalValue)
    }

    private convertTo(toUnit: AltitudeUnit): number {
        const valueInMeters = this.value * this._conversionRates[this.unit]
        const convertedValue = valueInMeters / this._conversionRates[toUnit]
        const precision = this._precisionMap[toUnit] ?? 3 // default of 3.

        return parseFloat(convertedValue.toFixed(precision))
    }

    static fromJsonValue(value: string): Altitude {
        const stringParts = value.split(';')
        assertValidNumber(stringParts[0])
        return new Altitude(Number(stringParts[0]), stringParts[1], value)
    }
}
