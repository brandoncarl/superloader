/**

  superloader
  Copyright 2016 Brandon Carl
  MIT Licensed

*/

var path         = require("path"),
    Motors       = require("motors"),
    Superloader;


/**

  Universal loader for webpack.

  @param {String} content Content to progress.

**/

Superloader = module.exports = function Superloader(content) {

  var ext  = path.parse(this.resourcePath).ext.replace(/^\./, ""),
      next = this.async();

  // Add engine if necessary
  if (!Superloader.engines.hasEngine(ext))
    this.engines.addEngine(ext);

  // The motors engine will compile based on file extension (we remove the leading ".")
  Superloader.engines.compile(ext, content, {}, next);

};


// Expose motors object. This allows additional/removal of motors, as well as querying
// current configuration.
Superloader.engines = new Motors();
