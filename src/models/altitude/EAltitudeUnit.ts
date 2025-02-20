export enum AltitudeUnit {
    METER = 'METER',
    FOOT = 'FOOT',
    UNKNOWN = 'UNKNOWN',
}

export const getAltitudeUnit = (unit: string) => {
    const disEnum = AltitudeUnit[unit as keyof typeof AltitudeUnit]
    return disEnum ? disEnum : AltitudeUnit.UNKNOWN
}
