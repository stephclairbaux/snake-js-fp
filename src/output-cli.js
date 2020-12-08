const R = require('ramda')
const { createMatrix } = require('./matrix')

const hr = (n) => Array(n).fill('\u2500').join('')
const top = (n) => '\u250C' + hr(n) + '\u2510'
const bottom = (n) => '\u2514' + hr(n) + '\u2518'
const cellToStr = (c) => c === 2 ? '\u2588' : c === 1 ? '\u25EF' : ' '
const lineToStr = (l) => ['\u2502', ...l.map(cellToStr), '\u2502'].join('')

const matrixToStr = (matrix) => {
  const cols = matrix[0].length
  return [top(cols), ...matrix.map(lineToStr), bottom(cols)].join('\r\n')
}

const render = R.curry((rows, cols, state) => {
  const matrix = createMatrix(rows, cols, state)
  const str = matrixToStr(matrix)
  console.clear()
  console.log(str)
})

module.exports = { render }