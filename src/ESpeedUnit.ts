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
    const disEnum = SpeedUnit[unit as keyof typeof SpeedUnit]
    return disEnum ? disEnum : SpeedUnit.UNKNOWN
}
