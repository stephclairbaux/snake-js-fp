import { setupInput } from './input-keys.js'
import { render } from './output-cli.js'
import { start } from './snake.js'

const options = { cols: 30, rows: 15 }

start(setupInput, render, options)
