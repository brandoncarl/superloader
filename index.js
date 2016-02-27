/**

  superloader
  Copyright 2016 Brandon Carl
  MIT Licensed

*/

var path         = require("path"),
    Pipemaker    = require("pipemaker"),
    Superloader;


/**

  Universal loader for webpack.

  @param {String} content Content to progress.

**/

Superloader = module.exports = function Superloader(content) {

  var ext  = path.parse(this.resourcePath).ext.replace(/^\./, ""),
      next = this.async();

  // Add pipeline if necessary
  if (!Superloader.pipelines.hasPipeline(ext))
    Superloader.pipelines.addPipeline(ext);

  // The pipemaker pipeline will compile based on file extension (we remove the leading ".")
  Superloader.pipelines.compile(ext, content, {}, next);

};


// Expose pipemaker object. This allows additional/removal of pipemaker, as well as querying
// current configuration.
Superloader.pipelines = new Pipemaker();
