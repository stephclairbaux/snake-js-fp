const R = require('ramda')

const update = R.curry((str, point) =>
  R.adjust(
    point.y,
    R.adjust(point.x, () => str)
  )
)

const addApple = state => update(1)(state.apple)

const addSnake = state => R.pipe(...R.map(update(2), state.snake))

const repeatDot = R.repeat(0)

const createMatrix = (rows, cols, state) => {
  const matrix = R.map(
    R.thunkify(repeatDot)(rows),
    repeatDot(cols),
  )

  return R.pipe(
    addSnake(state),
    addApple(state),
  )(matrix)
}

module.exports = { createMatrix }