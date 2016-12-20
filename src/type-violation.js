// @flow

import {
    concat,
    sum,
} from './lib/awesome.js'

// ok
console.log(concat(1, 2, 3, 4, 'five'))

// ng
console.log(sum(1, 2, 3, 4, 'five'))
