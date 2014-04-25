module.exports = function(grunt) {
	grunt.initConfig({
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
	grunt.registerTask('default', [ 'watch']);
};