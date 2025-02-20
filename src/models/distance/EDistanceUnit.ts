export enum DistanceUnit {
    METER = 'METER',
    FOOT = 'FOOT',
    KM = 'KM',
    NM = 'NM',
    UNKNOWN = 'UNKNOWN',
}

export const getDistanceUnit = (unit: string) => {
    unit = unit.toUpperCase()
    const disEnum = DistanceUnit[unit as keyof typeof DistanceUnit]
    return disEnum ? disEnum : DistanceUnit.UNKNOWN
}
