
/*

  Superloader

*/

var path   = require("path"),
    motors = require("motors"),
    loader;


module.exports = loader = function SuperLoader(content) {

  var ext  = path.parse(this.resourcePath).ext,
      next = this.async();

  // The motors engine will compile based on file extension (we remove the leading ".")
  loader.motors.compile(ext.replace(/^\./, ""), content, {}, next);

}


// Expose motors object. This allows additional/removal of motors, as
// well as querying current configuration.
loader.motors = new Motors();
