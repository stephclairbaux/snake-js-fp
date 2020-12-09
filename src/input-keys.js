import readline from 'readline'

export const addInput = (callbacks) => {
  readline.emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)
  const handleKeypress = (str, key) => {
    if (key.ctrl && key.name === 'c') process.exit()
    callbacks[key.name]?.()
  }
  process.stdin.on('keypress', handleKeypress)

  return () => {
    process.stdin.off('keypress', handleKeypress)
    process.stdin.setRawMode(false)
  }
}
