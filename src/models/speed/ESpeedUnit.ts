export enum SpeedUnit {
    MH = 'MH',
    MS = 'MS',
    KPH = 'KPH',
    MPH = 'MPH',
    FPH = 'FPH',
    FPS = 'FPS',
    UNKNOWN = 'UNKNOWN',
}

export const getSpeedUnit = (unit: string) => {
    unit = unit.toUpperCase()
    const disEnum = SpeedUnit[unit as keyof typeof SpeedUnit]
    return disEnum ? disEnum : SpeedUnit.UNKNOWN
}
