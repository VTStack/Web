# color-stringify [![Build Status](https://travis-ci.org/dfcreative/color-stringify.svg?branch=master)](https://travis-ci.org/dfcreative/color-stringify) [![Code Climate](https://codeclimate.com/github/dfcreative/color-stringify/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/color-stringify)

Stringify passed values into a color string.

`$ npm install color-stringify`

```js
var stringify = require('color-stringify');

stringify([120,100,100,.4], 'hsl'); //hsla(120, 100%, 100%, .4)
```

## API

### `stringify(<values>, <type>?)`

`<values>` is an array or an object from [`css-parse`](https://npmjs.com/color-parse)

`<type>` is an optional string:

* [x] `'hex'` — `#RRGGBB` or `#RGB` if possible.
* [x] `'keyword'` — `red`, see [the list of supported names](http://npmjs.org/package/color-name).
* [x] `'percent'` — `rgb(10%, 20%, 30%, 0.1)`.
* [x] `'adobe1'` — `R:0, G:0, B:0`.
* [x] `'adobe2'` — `(R0 / G0 / B0)`.
* [ ] `'websafe'` — [request feature](https://github.com/dfcreative/color-stringify/issues/new/?title=Websafe%20type).
* [ ] `'pantone'` — [request feature](https://github.com/dfcreative/color-stringify/issues/new/?title=pantone%20type).
* [x] `undefined` — `rgba(10, 20, 30, 0.2)`.
* [x] Any other string — `<type>(<value1>, <value2>, <value3>, ...)`.


[![NPM](https://nodei.co/npm/color-stringify.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/color-stringify/)
