import proj4 from 'proj4'
import { assertValidNumber } from '../../utils/Utils'
import { CoordinateUnit, getCoordinateUnit } from './ECoordinateUnit'

// Define projections
proj4.defs([
    [
        'EPSG:28992',
        '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +datum=WGS84 +units=m +no_defs',
    ], // RD (Amersfoort)
    [
        'EPSG:3857',
        '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs',
    ], // Web Mercator
    ['EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs'], // WGS84
])

export class Coordinate {
    private _x: number | string
    private _y: number | string
    private _unit: CoordinateUnit
    private _originalValueX?: string | undefined
    private _originalValueY?: string | undefined

    constructor(
        x: number | string,
        y: number | string,
        unit: string,
        originalValueX?: string,
        originalValueY?: string
    ) {
        this._x = x
        this._y = y
        this._unit = getCoordinateUnit(unit)
        this._originalValueX = originalValueX
        this._originalValueY = originalValueY
    }

    public get x(): number | string {
        return this._x
    }

    private set x(value: number | string) {
        this._x = value
    }

    public get y(): number | string {
        return this._y
    }

    private set y(value: number | string) {
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

        const newCoords = this.convertTo(toUnit)
        this.x = newCoords.x
        this.y = newCoords.y
        this.unit = toUnit

        return this
    }

    // to(toUnit: CoordinateUnit): Coordinate {
    //     if (toUnit == this.unit) {
    //         return new Coordinate(this.value, this.unit)
    //     }

    //     return new Coordinate(this.convertTo(toUnit), toUnit, this.originalValue)
    // }

    private convertTo(toUnit: CoordinateUnit): { x: number | string; y: number | string } {
        let wgs84X: number, wgs84Y: number

        switch (this._unit) {
            case CoordinateUnit.WGS84:
                wgs84X = Number(this._x)
                wgs84Y = Number(this._y)
                break

            case CoordinateUnit.WGS84_MINUTES:
                wgs84X = Number(this._x) / 60
                wgs84Y = Number(this._y) / 60
                break

            case CoordinateUnit.WGS84_SECONDS:
                wgs84X = Number(this._x) / 3600
                wgs84Y = Number(this._y) / 3600
                break

            case CoordinateUnit.RD:
                // Convert RD to WGS84 using proj4js
                const rdToWgs84 = proj4('EPSG:28992', 'EPSG:4326')
                const wgs84Coords = rdToWgs84.forward([Number(this._x), Number(this._y)]) // Ensure order: easting, northing
                console.log(wgs84Coords)

                wgs84X = wgs84Coords[1]
                wgs84Y = wgs84Coords[0]
                break

            case CoordinateUnit.WEB_MERCATOR:
            case CoordinateUnit.EPSG3857:
                // Convert Web Mercator to WGS84 using proj4js
                const webMercatorToWgs84 = proj4('EPSG:3857', 'EPSG:4326')
                const wgs84CoordsWeb = webMercatorToWgs84.forward([Number(this._x), Number(this._y)])
                wgs84X = wgs84CoordsWeb[1]
                wgs84Y = wgs84CoordsWeb[0]
                break

            default:
                throw new Error(`Unsupported source unit: ${this._unit}`)
        }

        // Convert WGS84 to the target unit
        switch (toUnit) {
            case CoordinateUnit.WGS84:
                return { x: wgs84X, y: wgs84Y }

            case CoordinateUnit.WGS84_MINUTES:
                // Format as 52°17.799'
                return {
                    x: this.formatDegreesMinutes(wgs84X),
                    y: this.formatDegreesMinutes(wgs84Y),
                }

            case CoordinateUnit.WGS84_SECONDS:
                return {
                    x: this.formatDegreesSeconds(wgs84X),
                    y: this.formatDegreesSeconds(wgs84Y),
                }

            case CoordinateUnit.RD:
                // Convert WGS84 to RD using proj4js
                const wgs84ToRd = proj4('EPSG:4326', 'EPSG:28992')
                console.log('test', wgs84X, wgs84Y)
                const rdCoords = wgs84ToRd.forward([wgs84X, wgs84Y])
                return { x: rdCoords[0], y: rdCoords[1] }

            case CoordinateUnit.WEB_MERCATOR:
            case CoordinateUnit.EPSG3857:
                // Convert WGS84 to Web Mercator using proj4js
                const wgs84ToWebMercator = proj4('EPSG:4326', 'EPSG:3857')
                const webMercatorCoords = wgs84ToWebMercator.forward([wgs84X, wgs84Y])
                return { x: webMercatorCoords[0], y: webMercatorCoords[1] }

            default:
                throw new Error(`Unsupported target unit: ${toUnit}`)
        }
    }

    private formatDegreesMinutes(decimalDegrees: number): string {
        const degrees = Math.floor(decimalDegrees) // Get degrees (integer part)
        const minutes = (decimalDegrees - degrees) * 60 // Get decimal minutes
        return `${degrees}°${minutes.toFixed(3)}'` // Format as 52°17.799'
    }

    private formatDegreesSeconds(decimalDegrees: number): string {
        const degrees = Math.floor(decimalDegrees) // Get degrees (integer part)
        const decimalMinutes = (decimalDegrees - degrees) * 60 // Convert remaining to minutes
        const minutes = Math.floor(decimalMinutes) // Get minutes (integer part)
        const seconds = (decimalMinutes - minutes) * 60 // Convert remaining to seconds

        return `${degrees}°${minutes}'${seconds.toFixed(3)}"` // Format as 52°17'47.926"
    }

    static fromJsonValue(xString: string, yString: string): Coordinate {
        let xValue: string | number = xString,
            yValue: string | number = yString,
            includesUnit: boolean = false
        let coordinateUnit = 'WGS84_DEG'
        if (xString.includes(';')) {
            includesUnit = true
            const stringParts = xString.split(';')
            if (
                stringParts[1] === CoordinateUnit.WGS84_MINUTES.valueOf() ||
                stringParts[1] === CoordinateUnit.WGS84_SECONDS.valueOf()
            ) {
                xValue = stringParts[0]
            } else {
                assertValidNumber(stringParts[0])
                xValue = Number(stringParts[0])
            }

            coordinateUnit = stringParts[1]
        }
        if (yString.includes(';')) {
            includesUnit = true
            const stringParts = yString.split(';')
            if (
                stringParts[1] === CoordinateUnit.WGS84_MINUTES.valueOf() ||
                stringParts[1] === CoordinateUnit.WGS84_SECONDS.valueOf()
            ) {
                yValue = stringParts[0]
            } else {
                assertValidNumber(stringParts[0])
                yValue = Number(stringParts[0])
            }
            coordinateUnit = stringParts[1]
        }
        return new Coordinate(
            includesUnit ? xValue : Number(xValue),
            includesUnit ? yValue : Number(yValue),
            coordinateUnit,
            xString,
            yString
        )
    }
}
