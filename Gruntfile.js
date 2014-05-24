module.exports = function(grunt) {
  "use strict";
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'exec:component',
    'exec:open'
  ]);
  grunt.registerTask('build', [
    'exec:component',
    'nodewebkit'
  ]);
  grunt.registerTask('open', [
    'exec:open'
  ]);

  grunt.initConfig({
    nodewebkit: {
      options: {
        build_dir: './build',
        mac: true,
        win: false,
        linux32: false,
        linux64: false
      },
      src: ['./index.*', './build/build.*', './node_modules/**', './package.json']
    },
    exec: {
      component: {
        cmd: 'component build'
      },
      open: {
        cmd: './build/cache/mac/0.9.2/node-webkit.app/Contents/MacOS/node-webkit .'
      }
    }
  });
}
