'use strict'

import chalk from 'chalk'

export const transform = title => chalk.white.bold.underline(title)

export const title = title => console.log(transform(title))

title.transform = transform

export default title
