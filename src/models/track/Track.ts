import { CoordinateUnit } from '../coordinates/ECoordinateUnit'
import { Distance } from '../distance/Distance'
import { Flight } from '../flight/Flight'
import { Plot } from '../plot/Plot'
import { TrackJson } from './TrackJson'

export class Track {
    private _id: number
    private _coveredDistance: Distance
    private _coordinateUnit: CoordinateUnit
    private _start: Date
    private _plots: Plot[] = []
    private _originalValue?: TrackJson | undefined
    private _flight: Flight

    constructor(
        id: number,
        coveredDistance: Distance,
        coordUnit: CoordinateUnit,
        start: Date,
        plots: Plot[],
        flight: Flight,
        originalValue?: TrackJson
    ) {
        this._id = id
        this._coveredDistance = coveredDistance
        this._coordinateUnit = coordUnit
        this._start = start
        this._plots = plots
        this._originalValue = originalValue
        this._flight = flight
    }

    public get id(): number {
        return this._id
    }

    public set id(value: number) {
        this._id = value
    }

    public get coveredDistance(): Distance {
        return this._coveredDistance
    }

    public set coveredDistance(value: Distance) {
        this._coveredDistance = value
    }

    public get coordinateUnit(): CoordinateUnit {
        return this._coordinateUnit
    }

    public set coordinateUnit(value: CoordinateUnit) {
        this._coordinateUnit = value
    }

    public get start(): Date {
        return this._start
    }

    public set start(value: Date) {
        this._start = value
    }

    public get plots(): Plot[] {
        return this._plots
    }

    public set plots(value: Plot[]) {
        this._plots = value
    }

    public get originalValue(): TrackJson | undefined {
        return this._originalValue
    }

    public set originalValue(value: TrackJson | undefined) {
        this._originalValue = value
    }

    public get flight(): Flight {
        return this._flight
    }

    public set flight(value: Flight) {
        this._flight = value
    }

    static fromJson(json: TrackJson, flight: Flight) {
        throw new Error('Not implemented yet')
    }
}
