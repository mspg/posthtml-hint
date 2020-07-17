import msg from '../../lib/msg.js'

const longMsg = 'lorem ipsum dolor sit amet.'

export default [
  {
    info: 'should transform msgs',
    fn: t => msg('test'),
    expect: '\u001b[34mtest\u001b[39m',
  },
  {
    info: 'should split long msgs',
    fn: msg([longMsg, longMsg, longMsg, longMsg].join(' ')),
    expect:
      '\u001b[34mlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\u001b[39m\n\u001b[34mlorem ipsum dolor sit amet.\u001b[39m',
  },

  {
    info: 'should split longer msgs',
    fn: msg(
      [
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
        longMsg,
      ].join(' '),
    ),
    expect:
      '\u001b[34mlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\u001b[39m\n\u001b[34mlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\u001b[39m\n\u001b[34mlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\u001b[39m',
  },
]
