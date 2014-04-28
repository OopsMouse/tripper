'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: [
        'Gruntfile.js',
        'routes/**/*.js',
        'package.json',
        'test/**/*.js',
        '*.js',
        '.jshintrc'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    exec: {
      express: {
        cmd: 'node dev.js',
        stdout:  true,
        stderror: true
      }
    },
    watch: {
      options: {
        livereload: true
      },
      jade: {
        files: [
          'views/*.jade'
        ]
      },
      scripts: {
        files: [
          '*.js',
          'routes/*.js'
        ]
      },
    },
    open: {
      server: {
        path: 'http://localhost:3000'
      }
    }
  });
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('development', [ 'watch' ]);
};