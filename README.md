# Hint Plugin <img align="right" width="200" height="220" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

## Install

```bash
npm i -D posthtml-hint
```

## Usage

#### Options

**Rules [String|Object]**

**[Rules Reference](https://github.com/yaniswang/HTMLHint/wiki/Rules)**

```js
import hinter from 'posthtml-hint'
const hint = hinter('./path/to/.htmlhintrc')
```

## Example

```js
import { readFileSync } from 'fs'

import posthtml from 'posthtml'

import hinter from 'posthtml-hint')
const hint = hinter(/* options */)

const html = readFileSync('./index.html', 'utf8')

posthtml([ hint ])
  .process(html)
  .then(result => console.log(result.html))
```

#### Console

```bash
PostHTML HINT
-------------

✖ error [10:12]
Special characters must be escaped : [ > ].

✖ error [12:3]
Special characters must be escaped : [ < ].

✖ error [12:21]
Special characters must be escaped : [ < ].

✖ error [12:30]
Special characters must be escaped : [ > ].

✖ error [15:17]
Tag must be paired, no start tag: [ </h1> ]

⚠  5 Errors
```
