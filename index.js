
/*

  Superloader

*/

var path   = require("path"),
    Motors = require("motors"),
    loader;


module.exports = loader = function SuperLoader(content) {

  var ext  = path.parse(this.resourcePath).ext.replace(/^\./, ""),
      next = this.async();

  // The motors engine will compile based on file extension (we remove the leading ".")
  loader.engines.compile(ext, content, {}, next);

}


// Expose motors object. This allows additional/removal of motors, as well as querying
// current configuration.
loader.engines = new Motors();
