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
              'dest': ['js/bimserverapi.min.js', "js/bimserverapi.js"],
            },
          }
    });

    grunt.loadNpmTasks("grunt-github-releaser");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["concat", "uglify", "github_releaser"]);
};