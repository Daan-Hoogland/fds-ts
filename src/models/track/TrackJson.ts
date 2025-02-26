import { Distance } from '../distance/Distance'
import { DistanceUnit } from '../distance/EDistanceUnit'
import { PlotJson } from '../plot/PlotJson'

export type TrackJson = {
    id: number
    path: string
    entityType: string
    coveredDistance: Distance
    'fromtrackdatetime.unit': string
    'spatial-reference': string
    'z.unit': DistanceUnit
    plots: PlotJson[]
}
