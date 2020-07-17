'use strict'

import chalk from 'chalk'

export default (line = 0, col = 0) => chalk.white(`[${line}:${col}]`)
