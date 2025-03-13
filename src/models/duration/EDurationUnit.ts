export enum DurationUnit {
    MILLIS = 'MILLIS',
    SECONDS = 'SECONDS',
    HOURS = 'HOURS',
    DAYS = 'DAYS',
    UNKNOWN = 'UNKNOWN',
}

export const getDurationUnit = (unit: string) => {
    unit = unit.toUpperCase()
    const durEnum = DurationUnit[unit as keyof typeof DurationUnit]
    return durEnum ? durEnum : DurationUnit.UNKNOWN
}
