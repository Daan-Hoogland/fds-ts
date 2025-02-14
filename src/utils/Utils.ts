export const assertValidNumber = (value: string) => {
    if (!/^-?\d+(\.\d+)?$/.test(value)) {
        throw new Error(`Invalid number: ${value}`)
    }
}
