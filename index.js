// ------------------------------------
// #POSTHTML - HINT
// ------------------------------------

'use strict'

import fs from 'fs'
import path from 'path'

import chalk from 'chalk'
import tab from 'text-table'
import log from 'log-symbols'

import render from 'posthtml-render'
import hint from 'htmlhint'

import title from './lib/title.js'
import type from './lib/type.js'
import line from './lib/line.js'
import message from './lib/msg.js'

const { HTMLHint } = hint

export default options => {
  options = options || {}

  if (typeof options === 'string') {
    options = fs.readFileSync(path.resolve(options), 'utf8')
  }

  return tree => {
    let messages = HTMLHint.verify(render(tree), options)

    title('\nPostHTML HINT')

    const table = tab(
      messages.map(msg => [
        `\n${type(msg.type)} ${line(msg.line, msg.col)}`,
        `\n${message(msg.message)}`,
      ]),
      { align: 'l', hsep: '' },
    )

    console.log(table)

    const result = messages.length

    if (result === 0) {
      console.log(chalk.green(`${log.success}  ${result} Errors`))
    } else {
      console.log(chalk.red(`\n${log.warning}  ${result} Errors`))
    }

    return tree
  }
}
