'use strict'

import chalk from 'chalk'
import log from 'log-symbols'

export default type => chalk.red(`${log.error + ' ' + type}`)
