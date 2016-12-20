// @flow

import {
    zeroPadding,
} from './lib/awesome.js'

// ok
console.log(zeroPadding(8, 2))

// ng
console.log(zeroPadding(732, -4))
