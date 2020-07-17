import { transform } from '../../lib/title.js'

export default [
  {
    info: 'should transform titles',
    fn: transform('test'),
    expect: '\u001b[37m\u001b[1m\u001b[4mtest\u001b[24m\u001b[22m\u001b[39m',
  },
]
