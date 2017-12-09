"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['**/*.html', '**/*.css'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};