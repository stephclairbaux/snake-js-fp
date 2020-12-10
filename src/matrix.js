import R from 'ramda'

const update = R.curry((str, point) =>
  R.adjust(
    point.y,
    R.adjust(point.x, () => str)
  )
)

const addApple = state => update(1)(state.apple)

const addSnake = state => R.pipe(...R.map(update(2), state.snake))

export const createMatrix = (rows, cols, state) => {
  const matrix = R.map(
    R.thunkify(R.repeat(0))(rows),
    R.repeat(0)(cols),
  )

  return R.pipe(
    addSnake(state),
    addApple(state),
  )(matrix)
}
