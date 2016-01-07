module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		concat : {
			js : {
				files : {
					"output/bimserverapi-%VERSION%.js" : [ "js/*.js" ]
				},
			}
		},
		uglify : {
			dist : {
				files : {
					"output/bimserverapi-%VERSION%.min.js" : [ "output/bimserverapi-%VERSION%.js" ]
				}
			}
		},
		zip: {
			"output/bimserverapi-source-%VERSION%.zip": ["js/*.js"]
		},
		"github-release" : {
			options : {
				repository : "opensourceBIM/BIMserver-JavaScript-API",
				auth : {
					user : "%USERNAME%",
					password : "%PASSWORD%"
				},
				release : {
					tag_name : "%VERSION%",
					name : "BIMServer JavaScript API %VERSION%",
					body : "Testing...",
					draft : false,
					prerelease : true
				}
			},
			files : {
				src : [ "output/bimserverapi-%VERSION%.min.js", "output/bimserverapi-%VERSION%.js", "output/bimserverapi-source-%VERSION%.zip" ]
			}
		}
	});

	grunt.loadNpmTasks("grunt-github-releaser");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", [ "concat", "uglify", "zip", "github-release" ]);
};