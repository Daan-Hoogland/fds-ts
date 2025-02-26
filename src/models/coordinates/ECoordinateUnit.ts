export enum CoordinateUnit {
    RD = 'RD',
    WGS84 = 'WGS84_DEG',
    WGS84_MINUTES = 'WGS84_MINUTES',
    WGS84_SECONDS = 'WGS84_SECONDS',
    WEB_MERCATOR = 'WEB_MERCATOR',
    EPSG3857 = 'EPSG3857',
    UNKNOWN = 'UNKNOWN',
}

export const getCoordinateUnit = (unit: string) => {
    unit = unit.toUpperCase()
    let coordEnum = CoordinateUnit[unit as keyof typeof CoordinateUnit]
    if (!coordEnum) coordEnum = Object.values(CoordinateUnit).find((u) => u === unit) as CoordinateUnit
    return coordEnum ? coordEnum : CoordinateUnit.UNKNOWN
}
