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
				cmd: 'npm start',
				stdout:  true,
				stderror: true
			}
		},
		watch: {
			files: [ '**/*.jade', '**/*.js' ],
      tasks: [ 'exec:express' ]
    }
	});
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', [ 'jshint', 'watch' ]);
};