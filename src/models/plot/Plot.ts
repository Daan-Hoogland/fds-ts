import { Altitude } from '../altitude/Altitude'
import { Coordinate } from '../coordinates/Coordinate'
import { Distance } from '../distance/Distance'
import { Heading } from '../heading/Heading'
import { Speed } from '../speed/Speed'
import { Time } from '../time/Time'
import { Track } from '../track/Track'
import { PlotJson } from './PlotJson'

export class Plot {
    private _coordinates: Coordinate
    private _altitude: Altitude
    private _speed: Speed
    private _heading: Heading
    private _distance: Distance
    private _time: Time
    private _originalValue?: PlotJson | undefined
    private _track?: Track | undefined

    constructor(
        coordinates: Coordinate,
        altitude: Altitude,
        speed: Speed,
        heading: Heading,
        distance: Distance,
        time: Time,
        originalValue?: PlotJson,
        track?: Track
    ) {
        this._coordinates = coordinates
        this._altitude = altitude
        this._speed = speed
        this._heading = heading
        this._distance = distance
        this._time = time
        this._originalValue = originalValue
        this._track = track
    }

    public get coordinates(): Coordinate {
        return this._coordinates
    }

    public set coordinates(value: Coordinate) {
        this._coordinates = value
    }

    public get altitude(): Altitude {
        return this._altitude
    }

    public set altitude(value: Altitude) {
        this._altitude = value
    }

    public get speed(): Speed {
        return this._speed
    }

    public set speed(value: Speed) {
        this._speed = value
    }

    public get heading(): Heading {
        return this._heading
    }

    public set heading(value: Heading) {
        this._heading = value
    }

    public get distance(): Distance {
        return this._distance
    }

    public set distance(value: Distance) {
        this._distance = value
    }

    public get time(): Time {
        return this._time
    }

    public set time(value: Time) {
        this._time = value
    }

    public get originalValue(): PlotJson | undefined {
        return this._originalValue
    }

    public set originalValue(value: PlotJson | undefined) {
        this._originalValue = value
    }

    public get track(): Track | undefined {
        return this._track
    }

    public set track(value: Track | undefined) {
        this._track = value
    }

    static fromJson(json: PlotJson, parent: Track): Plot {
        throw new Error('Not implemented yet')
    }
}
