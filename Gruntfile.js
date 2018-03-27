module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  sass: {
    dist: {
      files: {
        'src/stylesheets/main.css': 'src/stylesheets/main.scss'
      }
    }
  },
  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'src/stylesheets',
        src: ['main.css', '!*.min.css'],
        dest: 'src/stylesheets/',
        ext: '.min.css'
      }]
    }
  },
  uglify: {
    my_target: {
      options: {
        sourceMap: true,
        sourceMapName: 'src/js/main.map'
      },
      files: {
        'src/js/main.min.js': ['src/js/main.js']
      }
    }
  },
  watch: { // Compile everything into one task with Watch Plugin
    css: {
      files: 'src/stylesheets/*.scss',
      tasks: ['sass', 'cssmin']
    },
    js: {
      files: 'src/js/main.js',
      tasks: ['uglify']
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.loadNpmTasks('grunt-contrib-uglify-es');

grunt.loadNpmTasks('grunt-contrib-watch');

// Default task(s).
// Register Grunt tasks
grunt.registerTask('default', ['watch']);

};