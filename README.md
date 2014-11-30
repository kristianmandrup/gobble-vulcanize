#  [![Build Status](https://secure.travis-ci.org/kristianmandrup/gobble-vulcanize.png?branch=master)](http://travis-ci.org/kristianmandrup/gobble-vulcanize)

> Vulcanize for gobble


[Vulcanize](https://github.com/polymer/vulcanize) is used to produce production ready Polymer apps, by resolving all html-imports and saving/packaging the Polymer components as part of the app. This is done to avoid excessive network requests to retrieve components as the app loads.

## Getting Started

Install the module with: `npm install gobble-vulcanize`

```js
var gobble-vulcanize = require('gobble-vulcanize');
gobble-vulcanize.awesome(); // "awesome"
```

Install with cli command

```sh
$ npm install -g gobble-vulcanize
$ gobble-vulcanize --help
$ gobble-vulcanize --version
```

## Inspiration

Based on the following projects:

- [gobble-concat](https://github.com/gobblejs/gobble-concat/blob/master/index.js)
- [gulp-vulcanize](https://github.com/sindresorhus/gulp-vulcanize)

## Options

- [vulcanize options](https://github.com/Polymer/grunt-vulcanize#options)

`options.dest` - The destination directory.

## Status

Very prototype. Please let me know who it works for you and file any bugs ;)

## Documentation

_(Coming soon)_


## Examples

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).


## License

Copyright (c) 2014 Kristian Mandrup  
Licensed under the MIT license.
