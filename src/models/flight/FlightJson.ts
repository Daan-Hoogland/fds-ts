import { TrackJson } from '../track/TrackJson'

export type FlightJson = {
    id: number
    path: string
    entityType: string
    'callsign-IATA': string
    flightident: string
    nrOfTracks: number
    gufi: string
    areaident: string
    timeStart: Date
    ssrmodea: string
    callsign: string
    'callsign-ICAO': string
    'ac-registration': string
    'aircrafttype-ICAO': string
    'originairport-ICAO': string
    'destairport-ICAO': string
    track: TrackJson
}
