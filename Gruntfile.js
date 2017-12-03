"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};