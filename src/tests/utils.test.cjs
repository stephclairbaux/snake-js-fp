const test = require('tape')

import('../utils.js').then(({ mod, rand }) => {
  test('mod', (t) => {
    t.plan(2)
    t.equal(mod(7, 41), 6)
    t.equal(mod(7, -41), 1)
  })

  test('rand', (t) => {
    t.plan(10)
    Array(10).fill().forEach(() => {
      const r = rand(2, 3)
      t.ok(r > 1 || r < 5)
    })
  })
})
