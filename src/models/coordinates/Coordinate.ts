import { assertValidNumber } from '../../utils/Utils'
import { CoordinateUnit, getCoordinateUnit } from './ECoordinateUnit'

export class Coordinate {
    private _x: number
    private _y: number
    private _unit: CoordinateUnit
    private _originalValueX?: string | undefined
    private _originalValueY?: string | undefined

    constructor(x: number, y: number, unit: string, originalValueX?: string, originalValueY?: string) {
        this._x = x
        this._y = y
        this._unit = getCoordinateUnit(unit)
        this._originalValueX = originalValueX
        this._originalValueY = originalValueY
    }

    public get x(): number {
        return this._x
    }

    private set x(value: number) {
        this._x = value
    }

    public get y(): number {
        return this._y
    }

    private set y(value: number) {
        this._y = value
    }
    public get unit(): CoordinateUnit {
        return this._unit
    }

    private set unit(value: CoordinateUnit) {
        this._unit = value
    }

    public get originalValueX(): string | undefined {
        return this._originalValueX
    }

    private set originalValueX(value: string | undefined) {
        this._originalValueX = value
    }

    public get originalValueY(): string | undefined {
        return this._originalValueY
    }

    private set originalValueY(value: string | undefined) {
        this._originalValueY = value
    }

    convert(toUnit: CoordinateUnit): Coordinate {
        if (toUnit == this.unit) {
            return this
        }

        // this.value = this.convertTo(toUnit)
        // this.unit = toUnit

        return this
    }

    // to(toUnit: CoordinateUnit): Coordinate {
    //     if (toUnit == this.unit) {
    //         return new Coordinate(this.value, this.unit)
    //     }

    //     return new Coordinate(this.convertTo(toUnit), toUnit, this.originalValue)
    // }

    private convertTo(toUnit: CoordinateUnit): number {
        return 0
    }

    static fromJsonValue(xString: string, yString: string): Coordinate {
        let xValue: string = xString,
            yValue: string = yString
        let coordinateUnit = 'WGS84'
        if (xString.includes(';')) {
            const stringParts = xString.split(';')
            assertValidNumber(stringParts[0])
            xValue = stringParts[0]
            coordinateUnit = stringParts[1]
        }
        if (yString.includes(';')) {
            const stringParts = yString.split(';')
            assertValidNumber(stringParts[0])
            yValue = stringParts[0]
            coordinateUnit = stringParts[1]
        }
        return new Coordinate(Number(xValue), Number(yValue), coordinateUnit, xString, yString)
    }
}
