process.on('uncaughtException', function(err) {
  console.error(err, err.stack);
});

window.node = window.require;

module.exports = (function(){
  require('boot');
}());
