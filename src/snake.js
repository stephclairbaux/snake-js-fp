const { initialState, step, up, left, down, right } = require('./core')

const start = (setupInput, render, options = {}) => {
  const { cols = 30, rows = 15, speed = 100} = options

  let state = initialState

  setupInput({
    up: () => state = up(state),
    left: () => state = left(state),
    down: () => state = down(state),
    right: () => state = right(state),
  })

  const renderState = render(cols, rows)
  const nextState = step(cols, rows)

  setInterval(() => {
    renderState(state)
    state = nextState(state)
  }, speed)
}

module.exports = { start }