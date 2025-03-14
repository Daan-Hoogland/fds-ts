import { addMilliseconds } from 'date-fns/addMilliseconds'

export {}

declare global {
    interface DateConstructor {
        /**
         * Creates a date, from a potential relative value. If no second date is supplied, it is assumed the date is not relative.
         * @param value - The timestamp (in milliseconds) or the relative offset.
         *                If `date` is provided and `value` is less than 750000000000,
         *                it's treated as a relative offset in milliseconds.  Otherwise,
         *                it's treated as an absolute timestamp.
         * @param date - (Optional) The base Date object to which the relative offset
         *               should be applied. If omitted, `value` is treated as an
         *               absolute timestamp.
         * @returns A new date object based on either the passed absolute value as a date, or a date with an offset if both are passed.
         * @example
         * // Absolute timestamp
         * const absoluteDate = Date.fromPotentialRelative(1678886400000); // March 15, 2023
         *
         * @example
         * // Relative offset (1 second from now)
         * const now = new Date();
         * const relativeDate = Date.fromPotentialRelative(1000, now);
         */
        fromPotentialRelative(value: number, date?: Date): Date
    }
}

Date.fromPotentialRelative = function (value: number, date?: Date): Date {
    let time: Date = new Date(value)
    if (date && value < 750000000000) {
        time = addMilliseconds(date, value)
    }
    return time
}
