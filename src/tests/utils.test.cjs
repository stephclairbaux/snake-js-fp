const test = require('tape')

import('../utils.js').then(({ mod }) => {
  test('mod', (t) => {
    t.plan(2)
    t.equal(mod(7, 41), 6)
    t.equal(mod(7, -41), 1)
  })
})
