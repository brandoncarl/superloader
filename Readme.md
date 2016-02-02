# Superloader

A universal loader for webpack with hot module loading. Based on
[Motors](http://github.com/brandoncarl/motors) engine.


## Installation

```
$ npm install superloader
```

## Examples

```js

var Superloader = require("superloader");

// Add engines
Superloader.engines.addEngine("typescript");
Superloader.engines.addEngine("coffee-script");
Superloader.engines.addEngine("jbs", "jade>handlebars");

// Example webpack loader
{
  entry      : "entry.js",
  output     : {
    filename : "out.js"
  },
  module     : {
    loaders  : [ { test: /.+/, loader: "superloader" } ]
  },
  resolve    : { extensions: ["", ".js", ".ts", ".coffee"] }
}
```


## License
MIT
