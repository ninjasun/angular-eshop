
module.exports = function(grunt) {
/// Project configuration.

    grunt.initConfig({
        auto_install: {
            local: {},
            subdir: {
                options: {
                    cwd: '',
                    stdout: true,
                    stderr: true,
                    failOnError: true
                }
            }
        },
        pkg: grunt.file.readJSON('package.json'),
     connect: {
        shopcart:{
            port:8000,
            index:'/app/index.html'
            }
        }
    });
    grunt.loadNpmTasks('grunt-auto-install');
    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('default', 'connect:shopcart');


};