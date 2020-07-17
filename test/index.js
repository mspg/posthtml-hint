import { fs, is } from '@magic/test'

import posthtml from 'posthtml'
import path from 'path'
import plugin from '../index.js'

const read = async path => await fs.readFile(path, 'utf8')

const __dirname = path.dirname(new URL(import.meta.url).pathname)

async function run() {
  try {
    const contents = await read(path.join(__dirname, '.fixtures', 'index.html'))
    const result = await posthtml([plugin()]).process(contents)

    return result
  } catch (e) {
    return e
  }
}

export default [
  {
    fn: run,
    expect: async t => {
      const tt = await run(await read(path.join(__dirname, '.expect', 'index.html')))

      return is.deep.eq(t.tree.source, tt.tree.source)
    },
    info: 'should lint HTML and error as expected',
  },
]
