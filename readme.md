# is-animatable [![Build Status](https://travis-ci.org/hemanth/is-animatable.svg?branch=master)](https://travis-ci.org/hemanth/is-animatable)

> Checks if a given CSS property is animatable or not.


## Install

```
$ npm install --save is-animatable
```


## Usage

```js
const isAnimatable = require('is-animatable');

isAnimatable('transform'); // true
isAnimatable('-webkit-transform'); // true
isAnimatable('-xmeow-transform'); // false
```

## License

MIT © [](https://h3manth.com)
