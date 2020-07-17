import types from '../../lib/type.js'

export default [
  {
    info: 'should log errors in red',
    fn: types('test'),
    expect: '\x1B[31m\x1B[31m✖\x1B[39m\x1B[31m test\x1B[39m',
  },
]
