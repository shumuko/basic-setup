module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

// JSHINT //////////////////////////////////////////////////////////////////////
    jshint: {
      jshintrc: '.jshintrc',
      gruntfile: 'Gruntfile.js',
      main: 'assets/js/*.js'
    },

// COMPASS /////////////////////////////////////////////////////////////////////
    compass: {
      dev: {
        options: {
          environment:  'development'
        }
      },
      prod: {
        options: {
          environment:  'production'
        }
      }
    },

// WATCH ///////////////////////////////////////////////////////////////////////
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
        options: {
          nocase: true
        }
      },
      js: {
        files: ['assets/js/*.js'],
        tasks: ['jshint:main'],
        options: {
          nospawn: true
        }
      },
      sass: {
        files: ['assets/sass/*.scss'],
        tasks: ['compass:dev'],
        options: {
          nospawn: true
        }
      }
    }

  });

// LOAD TASKS //////////////////////////////////////////////////////////////////
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

// REGISTER TASKS //////////////////////////////////////////////////////////////
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', [
    'jshint',
    'compass:dev',
    'watch'
  ]);
};
