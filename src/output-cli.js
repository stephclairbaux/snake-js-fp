import R from 'ramda'
import chalk from 'chalk'
import { createMatrix } from './matrix.js'

const hr = (n) => Array(n).fill('\u2500').join('')
const top = (n) => '\u250C' + hr(n) + '\u2510'
const bottom = (n) => '\u2514' + hr(n) + '\u2518'
const cellToStr = (c) => c === 2 ? chalk.green('\u2588') : c === 1 ? chalk.red('\u2588') : ' '
const lineToStr = (l) => ['\u2502', ...l.map(cellToStr), '\u2502'].join('')

const matrixToStr = (matrix) => {
  const cols = matrix[0].length
  return [top(cols), ...matrix.map(lineToStr), bottom(cols)].join('\r\n')
}

export const render = R.curry((rows, cols, state) => {
  const matrix = createMatrix(rows, cols, state)
  const str = matrixToStr(matrix)
  console.clear()
  console.log(`Score: ${state.score}`)
  console.log(str)
})
