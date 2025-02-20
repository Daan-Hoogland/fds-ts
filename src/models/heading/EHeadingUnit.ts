export enum HeadingUnit {
    HEADING_TRUE = 'HEADING_TRUE',
    DEGREE = 'DEGREE',
    RADIAN = 'RADIAN',
    UNKNOWN = 'UNKNOWN',
}

export const getHeadingUnit = (unit: string) => {
    unit = unit.toUpperCase()
    const disEnum = HeadingUnit[unit as keyof typeof HeadingUnit]
    return disEnum ? disEnum : HeadingUnit.UNKNOWN
}
