import line from '../../lib/line.js'

export default [
  {
    info: 'line and column default to zero',
    fn: line(),
    expect: '\u001b[37m[0:0]\u001b[39m',
  },
]
