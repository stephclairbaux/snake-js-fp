const { setupInput } = require('./input-keys')
const { render } = require('./output-cli')
const { start } = require('./snake')

const options = { cols: 30, rows: 15 }

start(setupInput, render, options)