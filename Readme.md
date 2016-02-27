# Superloader

A universal loader for webpack with hot module loading. Based on
[Pipemaker](http://github.com/brandoncarl/pipemaker) engine.


## Installation

```
$ npm install superloader
```

## Examples

```js

var Superloader = require("superloader");

// Add engines
Supertransform.pipelines.addPipeline("ts");
Supertransform.pipelines.addPipeline("coffee");
Supertransform.pipelines.addPipeline("jbs", "jade>handlebars");

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
