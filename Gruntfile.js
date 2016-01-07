module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            js: {
                files: {
                    "js/bimserverapi.js": ["js/*.js"]
                },
            }
        },
        uglify: {
            dist: {
                files: {
                    "js/bimserverapi.min.js": ["js/bimserverapi.js"]
                }
            }
        },
        github_releaser: {
            options: {
              repository: 'opensourceBIM/BIMserver-JavaScript-API',
              auth: {
                user: '$USERNAME$',
                password: '$PASSWORD$'
              },
              release: {
                tag_name: 'version1',
                name: 'jelly-bean',
                body: 'Description of the release',
                draft: false, 
                prerelease: true
              }
            },
            files: {
              'dest': ['release.zip'],
            },
          }
    });

    grunt.loadNpmTasks("grunt-github-releaser");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-css");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("default", ["concat", "uglify"]);
};