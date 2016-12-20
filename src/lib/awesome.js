// @flow

import assert from 'assert'

export function concat(...s: Array<any>): string {
    return s.join('')
}

export function sum(...n: Array<number>): number {
    return n.reduce((previous, current) => previous + current, 0)
}

export function zeroPadding(n: number, digit: number = 8) {
    assert(1 < digit)
    const zeros = Array(digit - 1).fill('0').join('')
    return `${zeros}${n.toString()}`.slice(-digit)
}
