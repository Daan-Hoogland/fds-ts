export enum CoordinateUnit {
    RD = 'RD',
    WGS84 = 'WGS84',
    WGS84_MINUTES = 'WGS84_MINUTES',
    WGS84_SECONDS = 'WGS84_SECONDS',
    WEB_MERCATOR = 'WEB_MERCATOR',
    EPSG3857 = 'EPSG3857',
    UNKNOWN = 'UNKNOWN',
}

export const getCoordinateUnit = (unit: string) => {
    const disEnum = CoordinateUnit[unit as keyof typeof CoordinateUnit]
    return disEnum ? disEnum : CoordinateUnit.UNKNOWN
}
