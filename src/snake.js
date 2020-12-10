import{ pipe } from 'ramda'
import{ scan, merge, periodic, map, tap, runEffects } from '@most/core'
import{ createAdapter } from '@most/adapter'
import{ newDefaultScheduler } from '@most/scheduler'
import { initialState, step, up, left, down, right } from './core.js'

const [induce, events] = createAdapter()

export const start = (addInput, render, options = {}) => {
  const { cols = 30, rows = 15, speed = 100} = options

  addInput({
    left: () => induce(left),
    right: () => induce(right),
    up: () => induce(up),
    down: () => induce(down),
  })

  const effects = pipe(
    periodic,
    map(() => step(cols, rows)),
    merge(events),
    scan((x, f) => f(x), initialState),
    tap(render(cols, rows)),
  )

  runEffects(effects(speed), newDefaultScheduler())
}