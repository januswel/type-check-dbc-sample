// @flow

import assert from 'assert'
import {
    concat,
    sum,
    zeroPadding,
} from '../../src/lib/awesome.js'

describe('awesome', () => {
    describe('sum', () => {
        it('calculates a sum of numbers', () => {
            assert(15 === sum(1, 2, 3, 4, 5))
        })

        // silly test: this case should be detected by type check
        xit('does not calculate a sum of numbers and strings', () => {
            assert.throws(() => sum(1, 2, 3, 4, 'five'))
        })
    })

    describe('concat', () => {
        it('concatenates strings of arguments', () => {
            assert('1234five' === concat(1, 2, 3, 4, 'five'))
        })
    })

    describe('zeroPadding', () => {
        it('pads zeros with specified digit', () => {
            assert('08' === zeroPadding(8, 2))
        })

        // test for Design by Contract
        it('throws an assertion exception with minus digit', () => {
            assert.throws(() => zeroPadding(732, -4))
        })
    })
})
