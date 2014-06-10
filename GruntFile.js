module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	    banner: '/*!\n' +
              ' * Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
              ' */\n',
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	csslint: {
	  options: {
		csslintrc: '.csslintrc'
	  },
	  strict: {
		options: {
		  import: 2
		},
		src: ['css/*.css']
	  },
	  lax: {
		options: {
		  import: false
		},
		src: ['css/*.css']
	  }
	},
	usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            'dist/css/main.css'
            
          ]
        }
      }
    },
	less: {
		development: {
			options: {
				paths: ["css"]
			},
			files: {
				"dist/css/main.css": "less/main.less"
			}
		},
		production: {
			options: {
				paths: ["css"],
				cleancss: true
			},
			files: {
				"dist/css/main.min.css": "less/main.less"
			}
		}
	}
  });
  
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-banner');
	
  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['csslint', 'usebanner', 'less']);

};