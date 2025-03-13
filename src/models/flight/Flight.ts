import { Airport } from '../airport/Airport'
import { OrganizationValue } from '../organization/OrganizationValue'
import { Runway } from '../runway/Runway'
import { Track } from '../track/Track'
import { FlightJson } from './FlightJson'

export class Flight {
    private _id: number
    private _gufi: string
    private _flightId: string
    private _callSign: OrganizationValue
    private _airport: Airport
    private _runway: Runway
    private _area: string
    private _start: Date
    private _ssrModeA: string
    private _registration: string
    private _aircraft: OrganizationValue
    private _type: string
    private _qnh: number
    private _company: string
    private _flightPlan: string
    private _tracks: Track | undefined
    private _originalValue?: FlightJson | undefined

    constructor(
        id: number,
        gufi: string,
        flightId: string,
        callSign: OrganizationValue,
        airport: Airport,
        runway: Runway,
        area: string,
        start: Date,
        ssrModeA: string,
        registration: string,
        aircraft: OrganizationValue,
        type: string,
        qnh: number,
        company: string,
        flightPlan: string,
        tracks?: Track,
        originalValue?: FlightJson
    ) {
        this._id = id
        this._gufi = gufi
        this._flightId = flightId
        this._callSign = callSign
        this._airport = airport
        this._runway = runway
        this._area = area
        this._start = start
        this._ssrModeA = ssrModeA
        this._registration = registration
        this._aircraft = aircraft
        this._type = type
        this._qnh = qnh
        this._company = company
        this._flightPlan = flightPlan
        this._tracks = tracks
        this._originalValue = originalValue
    }

    public get id(): number {
        return this._id
    }

    public set id(value: number) {
        this._id = value
    }

    public get gufi(): string {
        return this._gufi
    }

    public set gufi(value: string) {
        this._gufi = value
    }

    public get flightId(): string {
        return this._flightId
    }

    public set flightId(value: string) {
        this._flightId = value
    }

    public get callSign(): OrganizationValue {
        return this._callSign
    }

    public set callSign(value: OrganizationValue) {
        this._callSign = value
    }

    public get airport(): Airport {
        return this._airport
    }

    public set airport(value: Airport) {
        this._airport = value
    }

    public get runway(): Runway {
        return this._runway
    }

    public set runway(value: Runway) {
        this._runway = value
    }

    public get area(): string {
        return this._area
    }

    public set area(value: string) {
        this._area = value
    }

    public get start(): Date {
        return this._start
    }

    public set start(value: Date) {
        this._start = value
    }

    public get ssrModeA(): string {
        return this._ssrModeA
    }

    public set ssrModeA(value: string) {
        this._ssrModeA = value
    }

    public get registration(): string {
        return this._registration
    }

    public set registration(value: string) {
        this._registration = value
    }

    public get aircraft(): OrganizationValue {
        return this._aircraft
    }

    public set aircraft(value: OrganizationValue) {
        this._aircraft = value
    }

    public get type(): string {
        return this._type
    }

    public set type(value: string) {
        this._type = value
    }

    public get qnh(): number {
        return this._qnh
    }

    public set qnh(value: number) {
        this._qnh = value
    }

    public get company(): string {
        return this._company
    }

    public set company(value: string) {
        this._company = value
    }

    public get flightPlan(): string {
        return this._flightPlan
    }

    public set flightPlan(value: string) {
        this._flightPlan = value
    }

    public get tracks(): Track | undefined {
        return this._tracks
    }

    public set tracks(value: Track | undefined) {
        this._tracks = value
    }

    public get originalValue(): FlightJson | undefined {
        return this._originalValue
    }

    public set originalValue(value: FlightJson | undefined) {
        this._originalValue = value
    }

    static fromJson(json: FlightJson) {
        throw new Error('Not yet implemented')
    }
}
