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
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-css");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("default", ["concat", "uglify"]);
};