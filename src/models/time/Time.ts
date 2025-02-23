export class Time {
    private _value: number
    private _originalValue?: string | undefined

    constructor(value: number, originalValue?: string) {
        this._value = value
        this._originalValue = originalValue
    }

    public get value(): number {
        return this._value
    }

    public set value(value: number) {
        this._value = value
    }

    public get date(): Date {
        return new Date(this.value)
    }

    public get originalValue(): string | undefined {
        return this._originalValue
    }

    public set originalValue(value: string | undefined) {
        this._originalValue = value
    }

    // Accept either number from epoch, or a string.
    static fromJson(value: number | string, referenceValue?: number): Time {
        throw new Error('Not yet implemented.')
    }
}
