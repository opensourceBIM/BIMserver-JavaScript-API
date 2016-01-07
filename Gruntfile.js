module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		concat : {
			js : {
				files : {
					"output/bimserverapi.js" : [ "js/*.js" ]
				},
			}
		},
		uglify : {
			dist : {
				files : {
					"output/bimserverapi.min.js" : [ "output/bimserverapi.js" ]
				}
			}
		},
		"github-release" : {
			options : {
				repository : "opensourceBIM/BIMserver-JavaScript-API",
				auth : {
					user : "%USERNAME%",
					password : "%PASSWORD%"
				},
				release : {
					tag_name : "0.0.%VERSION%",
					name : "BIMServer JavaScript API",
					body : "Testing...",
					draft : false,
					prerelease : true
				}
			},
			files : {
				src : [ "output/bimserverapi.min.js", "output/bimserverapi.js" ]
			}
		}
	});

	grunt.loadNpmTasks("grunt-github-releaser");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", [ "concat", "uglify", "github-release" ]);
};