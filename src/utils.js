export const mod = (x, y) => ((y % x) + x) % x

export const randomElement = (l) => l[Math.floor(Math.random() * l.length)]

export const range = (n) => [...Array(n).keys()]
