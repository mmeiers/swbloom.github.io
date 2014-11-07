module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      stylus: {

        compile: {
          files: {
            'dist/css/style.css': 'dev/style.styl', // 1:1 compile
               
          },
          options: {
             use: [require('autoprefixer-stylus')]
            }
        }

      }, 
      svginject: {
         all : {
           options: {},
           files: {
              'dist/js/SVGinject.js': ['dist/images/*.svg', 'dist/images/socialMedia/*.svg'],
           }
         }
       },

   
    watch: {
      css: {
        files: ['dev/*.styl'],
        tasks: ['stylus']
      }
       
    },
   
  });

  grunt.loadNpmTasks('grunt-svginject');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.loadNpmTasks('grunt-recess');

  grunt.registerTask('default', ['stylus','svginject', 'watch']);

};